import useLocalStorage from "./useLocalStorage";
import type {StorageKey} from "../../types";
import type {RecoilState} from "recoil";
import type {Option} from "vtm-baires-next-utils";
import {useRecoilState} from "recoil";
import {useEffect} from "react";

const useRecoilStateWithLocalStorage = <T>(key: StorageKey, atom: RecoilState<Option<T>>): [Option<T>, (value: Option<T>) => void] => {
    const storage = useLocalStorage<T>(key)
    const [value, setValue] = useRecoilState<Option<T>>(atom)

    useEffect(() => {
        if (value == null && storage.getStoredValue() != null) {
            setValue((_: any) => storage.getStoredValue())
        }
    }, [storage, value, setValue])

    const setValueWithLocalStorage = (value: Option<T>) => {
        storage.setStoredValue(value)
        setValue((_: any) => value)
    }

    return [value, setValueWithLocalStorage]
}

export default useRecoilStateWithLocalStorage;
