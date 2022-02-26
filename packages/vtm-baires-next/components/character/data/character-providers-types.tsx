import type {Option} from "vtm-baires-next-utils";
import useCharacterSession from "../../../session/hooks/useCharacterSession";

export type CharacterProviderBaseProps = {
    characterId?: Option<string>;
}

export const useCharacterProviderId = (characterId: Option<string>): Option<string> => {
    const [character,] = useCharacterSession()

    if (characterId != null) {
        return characterId;
    }

    if (character?.id != null) {
        return character.id;
    }

    return null;
}
