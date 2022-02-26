import React from "react";
import type {CharacterProviderBaseProps} from "./character-providers-types";
import {useCharacterProviderId} from "./character-providers-types";
import RemoteCharacterProvider from "./RemoteCharacterProvider";
import type {ReactElement} from "react";
import {randomFetchKey} from "vtm-baires-next-utils/src/utils";
import {useCustomLazyLoadQuery} from "vtm-baires-next-utils";
import {getCharacterQuery} from "vtm-baires-next-services/graphql-queries/queries/character/GetCharacterQuery";
import {
    GetCharacterQuery
} from "vtm-baires-next-services/graphql-queries/queries/character/__generated__/GetCharacterQuery.graphql";

type Props = CharacterProviderBaseProps & {
    showWarningWhenNoCharacterSelected: boolean;
    children: (character: any) => any;
    reload?: boolean;
    fetchKey?: number;
};

const CharacterFragmentProvider = (props: Props): ReactElement => {
    const characterId = useCharacterProviderId(props.characterId);

    if (characterId != null) {
        return (
            <CharacterFragmentProviderQuery characterId={characterId}
                                            reload={props.reload}
                                            fetchKey={props.fetchKey}>
                {props.children}
            </CharacterFragmentProviderQuery>
        );
    }

    return (
        <RemoteCharacterProvider showWarningWhenNoCharacterSelected={props.showWarningWhenNoCharacterSelected}>
            { characterId =>
                <CharacterFragmentProviderQuery characterId={characterId}
                                                reload={props.reload}
                                                fetchKey={props.fetchKey}>
                    {props.children}
                </CharacterFragmentProviderQuery>
            }
        </RemoteCharacterProvider>
    );
}

const CharacterFragmentProviderQuery = ({characterId, children, reload, fetchKey}: any) => {
    const parsedFetchKey: number = fetchKey ?? (reload ? randomFetchKey() : 0);

    const character =
        useCustomLazyLoadQuery<GetCharacterQuery>(getCharacterQuery, { id: characterId }, {
            fetchPolicy: reload ? "store-and-network" : "store-or-network",
            fetchKey: parsedFetchKey
        })?.getCharacter;

    if (character?.id != null) {
        return children(character);
    }

    return (
        <></>
    );
};

export default CharacterFragmentProvider;
