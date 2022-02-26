import React from "react";
import {useEffect, useRef} from "react";
import List from "@mui/material/List";
import ChatEntryRow from "./ChatEntryRow";
import {useChatEntriesForSubscriptions} from "../hooks/ChatEntryFromSubscriptionHook";
import {useMediaQuery} from "@mui/material";
import {useTheme} from "@mui/material/styles";
import {add, compareAsc} from "date-fns";
import type {ReactElement} from "react";
import type {Option} from "vtm-baires-next-utils";
import type {ChatEntry} from "vtm-baires-next-services/graphql-queries/data-utils";
import {parseUTC} from "vtm-baires-next-utils/src/date-utils";

type Props = {
    entries: Option<ChatEntry[]>;
    showCharacterDescription: (id: string, name: string) => void;
    canDelete: boolean;
    deletePhrase: (chatId: string) => void;
}

const ChatScreen = ({entries, showCharacterDescription, canDelete, deletePhrase}: Props): ReactElement => {
    const theme = useTheme();
    const chatContainer = useRef<any>();

    const additionalEntriesWithAvatar = useChatEntriesForSubscriptions(entries);

    const showMiniFont = useMediaQuery(theme.breakpoints.down('md'));
    const fontSize = showMiniFont ? "16px" : "18px";

    // This was previously used as a dependency for the following useEffect, but it seems that it doesn't update itself.
    // The operation performed inside the following useEffect is not asynchronous or difficult at all anyway
    // const chatContainerScrollHeight: number = (chatContainer.current: any)?.scrollHeight;

    useEffect(() => {
        const obj: any = chatContainer.current;
        // obj.scrollIntoView();
        obj.scrollTop = obj.scrollHeight;
    });

    const aggregatedEntries = () => {
        if (additionalEntriesWithAvatar != null) {
            return additionalEntriesWithAvatar;
        }

        return [];
    };

    const moreThanTenMinutesAgo = (date: Option<string>): boolean => {
        if (date == null) {
            return false;
        }
        else {
            const tenMinutesAgo = add(new Date(), {minutes: -10});
            const convertedDate = parseUTC(date);

            if (convertedDate != null) {
                return compareAsc(convertedDate, tenMinutesAgo) > -1;
            }

            return true;
        }
    }

    const entriesSet = (entries: Array<ChatEntry>) => {
        const filteredEntries = entries
            .filter(e => e?.offGame === false || moreThanTenMinutesAgo(e?.insertedAt));

        const map = new Map(filteredEntries.map(e => [e.id, e]));
        const set = new Set(filteredEntries.map(e => e.id));
        return [...set].map(id => map.get(id));
    }

    const showEntries = () => {
        const aggregate = aggregatedEntries();
        const ets = entriesSet(aggregate);

        if (ets && ets.map) {
            return ets?.map((e, index) => {
                if (e != null) {
                    return (
                        <ChatEntryRow entry={e}
                                      key={e.id}
                                      isLast={index === ets.length - 1}
                                      showCharacterDescription={showCharacterDescription}
                                      canDelete={canDelete}
                                      deletePhrase={deletePhrase}
                                      sx={{
                                                fontSize
                                            }} />
                    );
                }

                return (<></>);
            });
        }

        return [];
    };

    return (
        <List sx={{
            flex: "4 0",
            overflowY: "scroll"
        }} ref={chatContainer}>
            {showEntries()}
        </List>
    );
}

export default ChatScreen;
