import {selector} from "recoil";
import {isUserMaster} from "vtm-baires-next-services/graphql-queries/data-utils";
import {sessionStateAtom} from "../atoms/recoil-atoms";

export const isUserMasterSelector = selector<boolean>({
    key: 'isAdminSession',
    get: ({get}) => {
        const user = get(sessionStateAtom)

        if (user == null) {
            return false
        }

        return isUserMaster(user)
    }
})
