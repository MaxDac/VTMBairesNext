import {selector} from "recoil";
import {isUserMaster} from "vtm-baires-next-services/graphql-queries/data-utils";
import {sessionStateAtom} from "../atoms/recoil-atoms";

export const isUserMasterSelector = selector<boolean>({
    key: 'isAdminSession',
    get: ({get}) => {
        const user = get(sessionStateAtom)

        console.debug("user in selector", user)
        console.debug("user in selector: property", user?.id)

        if (user == null) {
            return false
        }

        return isUserMaster(user)
    }
})
