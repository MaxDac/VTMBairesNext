import type {ReactElement} from "react";
import React from "react";
import MenuCharacterSectionForUser from "./MenuCharacterSectionForUser";
import MenuCharacterSelectionForMasterNoUserAllowed from "./MenuCharacterSelectionForMasterNoUserAllowed";
import useSession from "../../../session/hooks/useSession";
import {isUserMaster} from "vtm-baires-next-services/graphql-queries/data-utils";

type Props = {
    pushHistory: (href: string) => void;
    reloadCount: number;
    onUpdate: () => void;
}

const MenuCharacterSection = ({pushHistory, reloadCount, onUpdate}: Props): ReactElement => {
    const [user,] = useSession();

    if (isUserMaster(user)) {
        return (<MenuCharacterSelectionForMasterNoUserAllowed pushHistory={pushHistory} />);
    }

    return (<MenuCharacterSectionForUser pushHistory={pushHistory}
                                         reloadCount={reloadCount}
                                         onUpdate={onUpdate} />);
}

export default MenuCharacterSection;
