import type {ReactElement} from "react";
import React from "react";
import ShowCharactersComponent from "../../../components/character/ShowCharactersComponent";
import {toNotNullArray} from "vtm-baires-next-utils/src/utils";
import {
    allUnapprovedCharactersQuery
} from "vtm-baires-next-services/graphql-queries/queries/character/AllUnapprovedCharactersQuery";
import {useCustomLazyLoadQuery} from "vtm-baires-next-utils";
import type {
    AllUnapprovedCharactersQuery
} from "vtm-baires-next-services/graphql-queries/queries/character/__generated__/AllUnapprovedCharactersQuery.graphql";

const Unapproved = (): ReactElement => {
    const unapprovedCharacters = toNotNullArray(
        useCustomLazyLoadQuery<AllUnapprovedCharactersQuery>(allUnapprovedCharactersQuery, {}, {
            fetchPolicy: "network-only"
        })?.unapprovedCharactersList);

    return (
        <ShowCharactersComponent characters={unapprovedCharacters} />
    );
}

export default Unapproved;
