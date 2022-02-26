import {sessionMapStateAtom} from "../atoms/recoil-atoms";
import {SessionLocation, storageLocationInfoKey} from "../types";
import useRecoilStateWithLocalStorage from "./base/useRecoilStateWithLocalStorage";

/**
 * Hook that exposes the utility functions to manage the character session.
 */
const useLocationSession = () =>
    useRecoilStateWithLocalStorage<SessionLocation>(storageLocationInfoKey, sessionMapStateAtom)

export default useLocationSession
