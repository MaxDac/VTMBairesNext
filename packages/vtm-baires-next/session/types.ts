import type {Option} from "vtm-baires-next-utils";
import {User} from "vtm-baires-next-services/graphql-queries/data-utils";
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

export type SessionCharacter = {
    id?: Option<string>;
    name?: Option<string>;
    approved?: Option<boolean>;
    clan?: Option<{
        id?: Option<string>;
        name?: Option<string>;
    }>;
};

export type SessionLocation = {
    id?: Option<string>;
    name?: Option<string>;
};

export type Session = User;
