import {Routes} from "../../base/routes";
import type {Option} from "vtm-baires-next-utils";
import type {SessionLocation} from "../../session/types";
import {ChatEntry} from "vtm-baires-next-services/graphql-queries/data-utils";
import {replaceAll} from "vtm-baires-next-utils";
import {defaultFormatDateAndTime} from "vtm-baires-next-utils";

/**
 * Sets the current location, updating the chat before the location change takes place. This is to avoid reloading
 * problems.
 * @param session The Session Info.
 * @param router The History.
 * @param chatId The chat id.
 * @param chatName The chat name.
 */
export const goToChatAndUpdateSession = (session: (location: Option<SessionLocation>) => void,
                                         router: any,
                                         chatId: string,
                                         chatName?: Option<string>) => {
    session({id: chatId, name: chatName});
    router.push(Routes.chat(chatId));
};

/**
 * Generates a file content from the chat entries.
 * @param entries The chat entries.
 * @return The chat entries
 */
export const getFileTextFromChatEntries = (entries: Array<ChatEntry>): string => {
    const parseText = (e: string) =>
        replaceAll(
            replaceAll(
                replaceAll(e, "![Image]", ""),
                "![Link]", ""),
            "*", "");

    const getFileTextFromChatEntry = ({text, result, master, character, insertedAt}: ChatEntry): string => {
        const formattedDate = defaultFormatDateAndTime(insertedAt) ?? "";

        const getMasterRow = () => `${formattedDate} - ${parseText(text)}`;

        const getNormalRow = () => `${formattedDate} - ${character?.name}: ${result != null && result !== "" ? parseText(result) : parseText(text)}`;

        if (master) {
            return getMasterRow();
        }

        return getNormalRow();
    };

    return entries
        .filter(c => c != null)
        .map(getFileTextFromChatEntry)
        .join("\r\n");
};
