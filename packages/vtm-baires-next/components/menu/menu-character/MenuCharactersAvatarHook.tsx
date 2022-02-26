import {useCharactersChatAvatar} from "vtm-baires-next-services/graphql-queries/queries/character/GetCharactersChatAvatarQuery";
import type {Option} from "vtm-baires-next-utils";
import {uniques} from "vtm-baires-next-utils/src/utils";

export type MenuCharacter = {
    readonly id: string;
    chatAvatar?: Option<string>;
}

export const useMenuCharactersAvatar = <T extends MenuCharacter>(characters: Array<T>): Array<T> => {
    const characterIds = uniques(characters?.map(e => e?.id))
        .filter(x => x != null && x !== "")
        .map(x => x as string);

    const avatars = useCharactersChatAvatar(characterIds);

    return characters
        ?.map(c => {
            if (c != null) {
                return ({
                    ...c,
                    chatAvatar: avatars?.get(c?.id ?? "")
                });
            }

            return c;
        });
};
