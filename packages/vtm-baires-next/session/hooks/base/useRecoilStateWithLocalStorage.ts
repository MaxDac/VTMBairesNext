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
        const storedValue = storage.getStoredValue()
        console.debug("retrieved stored value:", storedValue)
        console.debug("previous saved value: ", value)

        const mustReplaceNullValue = value == null && storedValue != null
        const mustReplaceDifferentValue = value != null && storedValue != null && value != storedValue

        console.debug("mustReplaceNullValue", mustReplaceNullValue)
        console.debug("mustReplaceDifferentValue", mustReplaceDifferentValue)

        if (mustReplaceNullValue) { //} || mustReplaceDifferentValue) {
            setValue((_: any) => storedValue)
        }
    }, [storage, value, setValue])

    const setValueWithLocalStorage = (value: Option<T>) => {
        storage.setStoredValue(value)
        setValue((_: any) => value)
    }

    return [value, setValueWithLocalStorage]
}

export default useRecoilStateWithLocalStorage;
