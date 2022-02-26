import {getSessionCharacter} from "vtm-baires-next-services/graphql-queries/queries/accounts/SessionCharacterQuery";
import {
    updateSessionCharacter
} from "vtm-baires-next-services/graphql-queries/mutations/sessions/UpdateSessionCharacterMutation";
import {useRelayEnvironment} from "react-relay";
import {sessionCharacterStateAtom} from "../atoms/recoil-atoms";
import type {SessionCharacter} from "../types";
import {storageCharacterInfoKey} from "../types";
import useRecoilStateWithLocalStorage from "./base/useRecoilStateWithLocalStorage";
import {useEffect} from "react";
import type {Option} from "vtm-baires-next-utils";

/**
 * Hook that exposes the utility functions to manage the character session.
 */
const useCharacterSession = (): [Option<SessionCharacter>, (value: SessionCharacter) => Promise<void>] => {
    const environment = useRelayEnvironment()
    const [sessionCharacter, setSessionCharacter] =
        useRecoilStateWithLocalStorage<SessionCharacter>(storageCharacterInfoKey, sessionCharacterStateAtom)

    useEffect(() => {
        if (sessionCharacter?.id == null) {
            getSessionCharacter(environment)
                .then(session => {
                    // Checking the session
                    if (session?.getSessionCharacter?.id == null) {
                        throw new Error("The remote session was null. The session will be invalidated.")
                    }

                    // Setting the current session
                    return setSessionCharacter(session.getSessionCharacter)
                });
        }
    }, [environment, sessionCharacter, setSessionCharacter])

    const setSession = (newSession: SessionCharacter): Promise<void> => {
        if (newSession.id == null) {
            return Promise.reject("The new session does not have a correct character id");
        }

        return updateSessionCharacter(environment, newSession.id)
            .then(() => getSessionCharacter(environment))
            .then(ns => {
                if (ns?.getSessionCharacter?.id == null) {
                    setSessionCharacter(null);
                    throw new Error("It was impossible to update the remote session. The current session will be invalidated")
                }

                return setSessionCharacter(ns.getSessionCharacter);
            })
    }

    return [
        sessionCharacter,
        setSession
    ];
}

export default useCharacterSession;
