import {atom} from "recoil";
import type {Option} from "vtm-baires-next-utils";
import type {Session, SessionCharacter, SessionLocation} from "vtm-baires-next-services";

export const sessionStateAtom = atom<Option<Session>>({
    key: 'userSession',
    default: null
})

export const sessionCharacterStateAtom = atom<Option<SessionCharacter>>({
    key: 'characterSession',
    default: null
})

export const sessionMapStateAtom = atom<Option<SessionLocation>>({
    key: 'userLocation',
    default: null
})
