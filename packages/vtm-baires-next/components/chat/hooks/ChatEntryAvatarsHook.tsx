import type {ChatEntry} from "vtm-baires-next-services/graphql-queries/data-utils";
import {uniques} from "vtm-baires-next-utils/src/utils";
import {
    useCharactersChatAvatar
} from "vtm-baires-next-services/graphql-queries/queries/character/GetCharactersChatAvatarQuery";

/**
 * From the entries, tries to fetch the avatars for the chat avatar and map them into the entries,
 * returning them in the end
 * @param entries The avatar-less entries.
 * @return {ChatEntry[]} The entries with the avatar.
 */
export const useChatEntryAvatarQuery = (entries: Array<ChatEntry>): Array<ChatEntry> => {
    const entriesToConsider = entries
        ?.filter(e => e?.offGame === false && e?.master === false);

    const characterIds = uniques(entriesToConsider?.map(e => e?.character?.id));
    const avatars = useCharactersChatAvatar(characterIds);

    return entries
        ?.map(entry => {
            if (entry != null) {
                return ({
                    ...entry,
                    character: {
                        ...entry?.character,
                        chatAvatar: avatars?.get(entry?.character?.id)
                    }
                });
            }

            return entry;
        })
};
