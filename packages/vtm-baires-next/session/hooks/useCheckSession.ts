import {useRouter} from "next/router";
import useLocalStorage from "./base/useLocalStorage";
import type {Option} from "vtm-baires-next-utils";
import type {Session} from "../types";
import {storageUserInfoKey} from "../types";
import {useEffect} from "react";
import {useRecoilValue} from "recoil";
import {sessionStateAtom} from "../atoms/recoil-atoms";
import {LoginRoutes} from "../../base/routes";

const useCheckSession = () => {
    const router = useRouter()
    const value = useRecoilValue(sessionStateAtom)
    const storage = useLocalStorage<Session>(storageUserInfoKey)

    useEffect(() => {
        console.debug("value", value)
        console.debug("stored value", storage.getStoredValue())

        if (value == null && storage.getStoredValue() == null) {
            router.push(LoginRoutes.login)
        }
    }, [storage, value])
};

export default useCheckSession
