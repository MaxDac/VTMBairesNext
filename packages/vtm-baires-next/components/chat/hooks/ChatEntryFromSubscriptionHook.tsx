import {useChatEntryAvatarQuery} from "./ChatEntryAvatarsHook";
import type {Option} from "vtm-baires-next-utils";
import type {ChatEntry} from "vtm-baires-next-services/graphql-queries/data-utils";

/**
 * From the existing chat entries, and enriches it with the character avatar, that instead will be taken from the cache
 * if not existent, using Relay configuration.
 * @param entries The chat entries
 * @return The chat entries.
 */
export const useChatEntriesForSubscriptions = (entries: Option<ChatEntry[]>): Array<ChatEntry> => {
    const nullOrEmptyEntries: ChatEntry[] = entries ?? [];
    return useChatEntryAvatarQuery(nullOrEmptyEntries);
};
