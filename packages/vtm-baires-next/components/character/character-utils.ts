import type {Option} from "vtm-baires-next-utils";
import type {Character} from "vtm-baires-next-services/graphql-queries/queries/character/GetCharacterCompleteQuery";
import type {
    CharacterFragments_characterConcealedInfo$data
} from "vtm-baires-next-services/graphql-queries/queries/character/__generated__/CharacterFragments_characterConcealedInfo.graphql";
import type {SessionCharacter} from "vtm-baires-next-services";
import type {
    CharacterFragments_characterStats$data
} from "vtm-baires-next-services/graphql-queries/queries/character/__generated__/CharacterFragments_characterStats.graphql";

type CharacterInput =
    | Option<CharacterFragments_characterConcealedInfo$data>
    | Option<Character>
    | Option<CharacterFragments_characterStats$data>
    | Option<SessionCharacter>

/**
 * Determines whether the caracter is a vampire or not based on the clan.
 * @param character The character.
 * @return True if the character is a vampire, False otherwise
 */
// TODO - move it as a selector in the atom?
export const characterIsVampire = (character: CharacterInput): boolean => {
    return character?.clan?.name !== "Umano";
}

/**
 * Determines whehter the character has disciplines or not based on its clan.
 * Only humans and thin-bloods will not have disciplines on creation.
 * @param character The character.
 * @return True if the character has disciplines, False otherwise.
 */
// TODO - move it as a selector in the atom?
export const characterHasDisciplines = (character: Option<CharacterFragments_characterConcealedInfo$data>): boolean => {
    const clanName = character?.clan?.name;
    return !(clanName === "Umano" || clanName === "Sangue Debole");
}
