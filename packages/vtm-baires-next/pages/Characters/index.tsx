import type {ReactElement} from "react";
import React from "react";
import ShowCharactersComponent from "../../components/character/ShowCharactersComponent";
import {allCharactersQuery} from "vtm-baires-next-services/graphql-queries/queries/character/AllCharactersQuery";
import {toNotNullArray} from "vtm-baires-next-utils/src/utils";
import {useCustomLazyLoadQuery} from "vtm-baires-next-utils";
import type {
    AllCharactersQuery
} from "vtm-baires-next-services/graphql-queries/queries/character/__generated__/AllCharactersQuery.graphql";

const Index = (): ReactElement => {
    const characters = toNotNullArray(
        useCustomLazyLoadQuery<AllCharactersQuery>(allCharactersQuery, {}, {
            fetchPolicy: "store-and-network"
        })?.charactersList);

    const showComponent = () => {
        if (characters != null) {
            return <ShowCharactersComponent characters={characters} />
        }

        return (<></>);
    }

    return showComponent();
}

export default Index;
