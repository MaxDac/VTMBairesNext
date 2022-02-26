import React from "react";
import type {ReactElement} from "react";
import {useUserCharactersQuery} from "vtm-baires-next-services/graphql-queries/queries/accounts/UserCharactersQuery";
import type {Option} from "vtm-baires-next-utils";
import {useRecoilValue} from "recoil";
import {isUserMasterSelector} from "../../../session/selectors/recoil-selectors";

type Props = {
    characterId: Option<string>;
    children: any;
}

const ConcealedCharacterInfo = ({characterId, children}: Props): ReactElement => {
    const isUserMaster = useRecoilValue(isUserMasterSelector);
    const userCharacters = useUserCharactersQuery();

    if (isUserMaster || userCharacters.some(c => c.id === characterId)) {
        return (
            <>
                {children}
            </>
        );
    }

    return (<></>);
}

export default ConcealedCharacterInfo;
