import type {Option} from "vtm-baires-next-utils";
import type {StorageKey} from "../../types";
import {tryGetStorage} from "../../utils";

export type LocalStorageHookProps<T> = {
    getStoredValue: () => Option<T>;
    setStoredValue: (value: Option<T>) => void;
}

export const getStoredValue = <T>(key: StorageKey) => {
    const storage = tryGetStorage();

    if (storage == null) {
        return null;
    }

    const serializedItem = storage.getItem(key);

    if (serializedItem == null || serializedItem === "") {
        return null;
    }

    return JSON.parse(serializedItem) as T;
}

export const setStoredValue = <T>(key: StorageKey, value: Option<T>) => {
    const storage = tryGetStorage();

    if (storage == null) {
        return;
    }

    storage.removeItem(key);
    storage.setItem(key, JSON.stringify(value));
};

const useLocalStorage = <T>(key: StorageKey): LocalStorageHookProps<T> => {
    return {
        getStoredValue: () => getStoredValue(key),
        setStoredValue: (value: Option<T>) => setStoredValue(key, value)
    };
}

export default useLocalStorage;
