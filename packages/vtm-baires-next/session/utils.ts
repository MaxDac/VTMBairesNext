import {cache, Option} from "vtm-baires-next-utils";
import type {IEnvironment} from "relay-runtime";
import ClearSessionMutation from "vtm-baires-next-services/graphql-queries/mutations/sessions/ClearSessionMutation";

export const tryGetStorage = (): Option<Storage> => {
    try {
        if (typeof window === "undefined") {
            return null;
        }

        return window.localStorage
    }
    catch {
        return null;
    }
}

export const tryClearLocalStorage = () => {
    const storage = tryGetStorage();

    if (storage != null) {
        storage.clear();
    }
}

export const clearRelaySession = () => {
    cache.clear();
}

export const destroySession = (environment: IEnvironment): Promise<boolean> => {
    tryClearLocalStorage();
    clearRelaySession();
    return ClearSessionMutation(environment);
}
