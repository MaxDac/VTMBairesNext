import React from "react";
import type {ReactElement} from "react";
import {useCustomLazyLoadQuery} from "vtm-baires-next-utils";
import {
    getCharacterPublicQuery
} from "vtm-baires-next-services/graphql-queries/queries/character/GetCharacterPublicQuery";
import {
    GetCharacterPublicQuery
} from "vtm-baires-next-services/graphql-queries/queries/character/__generated__/GetCharacterPublicQuery.graphql";

type Props = {
    id: string;
    children: (character: any) => any;
    reload?: boolean;
    fetchKey?: number;
}

const CharacterFragmentPublicProviderQuery = ({id, children, reload, fetchKey}: Props): ReactElement => {
    const character =
        useCustomLazyLoadQuery<GetCharacterPublicQuery>(getCharacterPublicQuery, { id: id }, {
            fetchPolicy: reload ? "store-and-network" : "store-or-network",
            fetchKey: fetchKey ?? 0
        })
            ?.getCharacterPublicInfo;

    if (character?.id != null) {
        return children(character);
    }

    return (
        <></>
    );
};

export default CharacterFragmentPublicProviderQuery;
