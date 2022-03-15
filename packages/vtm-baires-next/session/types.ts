import {DefaultValue} from "recoil";

export type StorageKey = string;

export const storageUserInfoKey = "vtm-baires-session-info";
export const storageCharacterInfoKey = "vtm-baires-character-info";
export const storageLocationInfoKey = "vtm-baires-location-info";

type EffectParams<T> = {
    setSelf: (param:
                  | T
                  | DefaultValue
                  | Promise<T | DefaultValue>
                  | ((param: T | DefaultValue) => T | DefaultValue),
    ) => void,
    onSet: (
        param: (newValue: T, oldValue: T | DefaultValue, isReset: boolean) => void,
    ) => void,
    trigger: 'set' | 'get'
}
