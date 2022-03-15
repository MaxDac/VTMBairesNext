import useRecoilStateWithLocalStorage from "./base/useRecoilStateWithLocalStorage";
import {storageUserInfoKey} from "../types";
import type {Session} from "vtm-baires-next-services";
import {sessionStateAtom} from "../atoms/recoil-atoms";

const useSession = () =>
    useRecoilStateWithLocalStorage<Session>(storageUserInfoKey, sessionStateAtom)

export default useSession;
