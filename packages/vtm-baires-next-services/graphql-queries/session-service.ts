import {checkMaster} from "./login-service";

/**
 * Determines whether the user is a master or not.
 * @return {Promise<bool>|Promise<bool|boolean>|*} True if the user is a master, False otherwise.
 */
export const isMaster = (): Promise<boolean> =>
    checkMaster()
        .then((_: any) => true)
        .catch((_: any) => false);
