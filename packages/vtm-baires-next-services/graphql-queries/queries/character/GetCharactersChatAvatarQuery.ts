import {graphql, GraphQLTaggedNode} from "relay-runtime";
import type {Option} from "vtm-baires-next-utils/index";
import {useCustomLazyLoadQuery} from "vtm-baires-next-utils";
import {GetCharactersChatAvatarQuery} from "./__generated__/GetCharactersChatAvatarQuery.graphql";
import {toMap} from "vtm-baires-next-utils/index";

export const getCharactersChatAvatarQuery: GraphQLTaggedNode = graphql`
    query GetCharactersChatAvatarQuery($characterIds: [ID!]) {
        getCharactersChatAvatar(characterIds: $characterIds) {
            character {
                id
            }
            chatAvatar {
                id
                chatAvatar
            }
        }
    }
`;

type CharacterId = string;

type Avatar = string;

/**
 * This hook fetches the character avatar from an array of character ids.
 * @param characterIds The character ids.
 * @return {?Map<string, string>} A map with the character ids as keys and the chat avatar as value.
 */
export const useCharactersChatAvatar = (characterIds: Array<string>): Option<Map<CharacterId, Avatar>> => {
    const queryAvatars = useCustomLazyLoadQuery<GetCharactersChatAvatarQuery>(getCharactersChatAvatarQuery, {
        characterIds
    }, {
        fetchPolicy: "store-or-network"
    })?.getCharactersChatAvatar;
    
    const parsedAvatars: Array<Option<[string, string]>> = queryAvatars
        ?.map(a => {
            if (a?.character?.id != null && a?.chatAvatar?.chatAvatar != null) {
                return [a.character.id, a.chatAvatar.chatAvatar];
            }

            return null;
        }) ?? [];

    return toMap(parsedAvatars);
};
