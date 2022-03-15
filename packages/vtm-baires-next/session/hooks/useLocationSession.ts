import {sessionMapStateAtom} from "../atoms/recoil-atoms";
import {storageLocationInfoKey} from "../types";
import type {SessionLocation} from "vtm-baires-next-services";
import useRecoilStateWithLocalStorage from "./base/useRecoilStateWithLocalStorage";

/**
 * Hook that exposes the utility functions to manage the character session.
 */
const useLocationSession = () =>
    useRecoilStateWithLocalStorage<SessionLocation>(storageLocationInfoKey, sessionMapStateAtom)

export default useLocationSession
