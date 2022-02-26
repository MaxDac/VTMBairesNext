import type {Option} from "vtm-baires-next-utils";
import type {StorageKey} from "../../types";
import {tryGetStorage} from "../../utils";

export type LocalStorageHookProps<T> = {
    getStoredValue: () => Option<T>;
    setStoredValue: (value: Option<T>) => void;
}

const useLocalStorage = <T>(key: StorageKey): LocalStorageHookProps<T> => {
    const getStoredValue = () => {
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

    const setStoredValue = (value: Option<T>) => {
        const storage = tryGetStorage();

        if (storage == null) {
            return;
        }

        storage.removeItem(key);
        storage.setItem(key, JSON.stringify(value));
    };

    return {
        getStoredValue,
        setStoredValue
    };
}

export default useLocalStorage;