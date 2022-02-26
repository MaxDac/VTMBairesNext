import {useChatEntryAvatarQuery} from "./ChatEntryAvatarsHook";
import type {ChatEntry} from "vtm-baires-next-services/graphql-queries/data-utils";
import {useCustomLazyLoadQuery} from "vtm-baires-next-utils";
import {chatEntriesQuery} from "vtm-baires-next-services/graphql-queries/queries/chat/GetChatEntriesQuery";
import {emptyArray} from "vtm-baires-next-utils/src/utils";
import type {
    GetChatEntriesQuery
} from "vtm-baires-next-services/graphql-queries/queries/chat/__generated__/GetChatEntriesQuery.graphql";

export const useChatEntriesQuery = (mapId: string): Array<ChatEntry> => {
    return useCustomLazyLoadQuery<GetChatEntriesQuery>(chatEntriesQuery, {mapId}, {
        fetchPolicy: "network-only"
    })?.mapChatEntries
        ?.map(e => ({
            id: e?.id ?? "",
            character: {
                id: e?.character?.id ?? "",
                name: e?.character?.name ?? ""
            },
            chatMap: {
                id: e?.chatMap?.id ?? ""
            },
            result: e?.result ?? "",
            text: e?.text ?? "",
            hide: e?.hide ?? false,
            command: e?.command ?? "INSERT",
            offGame: e?.offGame ?? false,
            insertedAt: e?.insertedAt ?? "",
            master: e?.master ?? false
        })) ?? emptyArray<ChatEntry>();
};

/**
 * Gets the chat entries, and enriches it with the character avatar, that instead will be taken from the cache
 * if not existent, using Relay configuration.
 * @param mapId The map id
 * @return The chat entries.
 */
export const useChatEntries = (mapId: string): Array<ChatEntry> => {
    const entries = useChatEntriesQuery(mapId);
    return useChatEntryAvatarQuery(entries);
};
