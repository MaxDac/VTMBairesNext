import React from "react";
import type {CharacterProviderBaseProps} from "./character-providers-types";
import {useCharacterProviderId} from "./character-providers-types";
import RemoteCharacterProvider from "./RemoteCharacterProvider";
import type {ReactElement} from "react";
import type {Character} from "vtm-baires-next-services/graphql-queries/queries/character/GetCharacterCompleteQuery";
import type {Option} from "vtm-baires-next-utils";
import {
    useCharacterCompleteQuery
} from "vtm-baires-next-services/graphql-queries/queries/character/GetCharacterCompleteQuery";

type Props = CharacterProviderBaseProps & {
    showWarningWhenNoCharacterSelected: boolean,
    children: (character: Option<Character>) => any,
}

const CharacterProvider = (props: Props): ReactElement => {
    const characterId = useCharacterProviderId(props.characterId);

    if (characterId != null) {
        return (
            <CharacterProviderQuery characterId={characterId}>
                {props.children}
            </CharacterProviderQuery>
        );
    }

    return (
        <RemoteCharacterProvider showWarningWhenNoCharacterSelected={props.showWarningWhenNoCharacterSelected}>
            { characterId =>
                <CharacterProviderQuery characterId={characterId} children={props.children} />
            }
        </RemoteCharacterProvider>
    );
}

const CharacterProviderQuery = ({characterId, children}: any) => {
    const character = useCharacterCompleteQuery(characterId);

    if (character?.id != null) {
        return children(character);
    }

    return <></>;
}

export default CharacterProvider;
