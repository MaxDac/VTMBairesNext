import {checkMaster} from "./login-service";
import {getSessionCharacter} from "./queries/accounts/SessionCharacterQuery";
import type {
  Session,
  SessionCharacter,
  SessionLocation,
  User,
} from "vtm-baires-next-utils";
import type {IEnvironment} from "relay-runtime";
import {useContext, useEffect, useState} from "react";
import ClearSessionMutation from "./mutations/sessions/ClearSessionMutation";
import {cache} from "src";
import {updateSessionCharacter} from "./mutations/sessions/UpdateSessionCharacterMutation";
import type {Option} from "vtm-baires-next-utils";

const storageUserInfoKey = "vtm-baires-session-info";
const getStorage = (): Storage => localStorage;

export const storeSession = (response: Session) => {
    const newSession = JSON.stringify(response);
    getStorage().removeItem(storageUserInfoKey);
    getStorage().setItem(storageUserInfoKey, newSession);
};

export const checkCharacter = (environment: IEnvironment, session?: Session): Promise<Option<Session>> =>
    new Promise((resolve, _) => {
        if (session?.character != null) {
            resolve(session);
            return;
        }

        const oldSession = session != null ? session : getSessionSync();

        getSessionCharacter(environment)
            .then(response => {
                if (oldSession?.user != null) {
                    const character = response?.getSessionCharacter
                    const newSession: Session = {
                        ...oldSession,
                        character: {
                            ...character,
                            clan: {
                                id: character?.clan?.id,
                                name: character?.clan?.name
                            }
                        }
                    };

                    updateSession(newSession);
                    resolve(newSession);
                }
            })
            .catch(e => {
                console.error("Error while trying to fetch the session character", e);
                resolve(null);
            });
    });

/**
 * Retrieve the session from the browser storage.
 * This method doesn't try to retrieve the character from the remote session.
 * @return {Session} The session saved in the browser.
 */
export const getSessionSync = (): Option<Session> => {
    const inStorage = getStorage().getItem(storageUserInfoKey);

    if (inStorage && inStorage !== "") {
        return JSON.parse(inStorage);
    }

    return null;
};

/**
 * Gets the current login information. It tries to retrieve the character from the remote session
 * if it doesn't find it in the browser session.
 * @param environment: the Relay Environment, used for the query.
 * @return {?SessionCharacter} The user.
 */
export const getSession = (environment: IEnvironment): Promise<Option<Session>> => {
    const inStorage = getStorage().getItem(storageUserInfoKey);

    if (inStorage && inStorage !== "") {
        return checkCharacter(environment, JSON.parse(inStorage));
    }

    // TODO getting the user session
    return new Promise((resolve, _) => resolve(null));
};

/**
 * Determines whether the user is a master or not.
 * @return {Promise<bool>|Promise<bool|boolean>|*} True if the user is a master, False otherwise.
 */
export const isMaster = (): Promise<boolean> =>
    checkMaster()
        .then(_ => true)
        .catch(_ => false);

/**
 * Merges the current session info with the ones that are already stored.
 * @param info The session info.
 * @return {Session} The new session info.
 */
export const updateSession = (info: Session): Option<Session> => {
    const olderSession = getSessionSync();
    const newSession = {
        ...olderSession,
        ...info
    };

    storeSession(newSession);

    return getSessionSync();
};

export const updateCurrentCharacter = (environment: IEnvironment): ((sessionCharacter: Option<SessionCharacter>) => Promise<Option<Session>>) =>
    (character: Option<SessionCharacter>): Promise<Option<Session>> => new Promise((resolve, reject) => {
        if (character?.id != null) {
            const characterId = character.id;
            const currentSession = getSessionSync();

            if (currentSession) {
                updateSession({
                    ...currentSession,
                    character
                });
            }

            updateSessionCharacter(environment, characterId)
                .then(_ => getSession(environment))
                .then(s => resolve(s))
                .catch(e => reject(e));
        }

        getSession(environment)
            .then(s => resolve(s))
            .catch(e => reject(e));
    });

export const updateCurrentLocation = (location: SessionLocation): Option<Session> => {
    const currentSession = getSessionSync();

    if (currentSession) {
        return updateSession({
            ...currentSession,
            location
        });
    }
}

export const clearRelaySession = () => {
    cache.clear();
}

export const destroySession = (): Promise<boolean> => {
    getStorage().clear();
    clearRelaySession();
    return ClearSessionMutation();
}

export type SessionInfo = {
    getUser: () => Promise<Option<User>>;
    getCurrentCharacter: () => Promise<Option<SessionCharacter>>;
    setCurrentCharacter: (session: SessionCharacter) => Promise<Option<Session>>;
    getCurrentLocation: () => Promise<Option<SessionLocation>>;
    setCurrentLocation: (session: SessionLocation) => Option<Session>;
};

/**
 * This custom hook retrieves the session information.
 * @return {SessionInfo} The session info.
 */
export const getSessionHookValue = (environment: IEnvironment): SessionInfo => ({
    getUser: () => getSession(environment).then(x => x?.user),
    getCurrentCharacter: () => getSession(environment).then(x => x?.character),
    setCurrentCharacter: updateCurrentCharacter(environment),
    getCurrentLocation: () => new Promise((r, _) => r(getSessionSync()?.location)),
    setCurrentLocation: updateCurrentLocation
});

/**
 * This method gets the session (user and character) in a synchronous manner, i.e., without calling the
 * back end.
 * @return {[User, SessionCharacter, SessionLocation, Session]} The user and the character in the session.
 */
export const useSession = (): [Option<User>, Option<SessionCharacter>, Option<SessionLocation>, Option<Session>] => {
    const session = getSessionSync();
    return [session?.user, session?.character, session?.location, session];
};

/**
 * This method gets the session (user and character), checking whether the session exists in the client,
 * otherwise calling the back end.
 * @return {[User, SessionCharacter, SessionLocation, Session]} The user and the character in the session.
 */
// TODO - use Recoil?
// export const useSessionAsync = (): [Option<User>, Option<SessionCharacter>, Option<SessionLocation>, Option<Session>] => {
//     const sessionContext = useContext(SessionContext);
//     const [session,] = useState(getSessionSync());
//     const [sessionCharacter, setSessionCharacter] = useState<?SessionCharacter>(null);
//     const [sessionUser, setSessionUser] = useState<?User>(null);
//
//     useEffect(() => {
//         sessionContext.getCurrentCharacter()
//             .then(x => setSessionCharacter(_ => x));
//
//         sessionContext.getUser()
//             .then(x => setSessionUser(_ => x));
//     }, [sessionContext]);
//
//     return [sessionUser, sessionCharacter, getSessionSync()?.location, session];
// };
