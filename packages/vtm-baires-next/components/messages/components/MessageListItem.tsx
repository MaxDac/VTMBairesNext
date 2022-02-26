import type {ReactElement} from "react";
import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import {menuIconStyle} from "../../menu/menu-base-utils";
import type {Option} from "vtm-baires-next-utils";
import {useRouter} from "next/router";
import {defaultFormatDateAndTime} from "vtm-baires-next-utils";
import {Routes} from "../../../base/routes";

type Props = {
    message: {
        id: string,
        subject: string;
        onGame: Option<boolean>;
        read: Option<boolean>;
        senderUser?: Option<{
            id: string;
            name: Option<string>;
        }>;
        senderCharacter?: Option<{
            id: string;
            name: Option<string>;
        }>;
        receiverUser?: Option<{
            id: string;
            name: Option<string>;
        }>;
        receiverCharacter?: Option<{
            id: string;
            name: Option<string>;
        }>;
        insertedAt: Option<string>;
        modifiedAt: Option<string>;
    }
}

const MessageListItem = ({message}: Props): ReactElement => {
    const router = useRouter();

    const readIcon = () =>
        message.read
            ? <RadioButtonUncheckedIcon sx={menuIconStyle} />
            : <RadioButtonCheckedIcon sx={menuIconStyle} />;

    const getName = (): string =>
        message.senderUser?.name
            ? message.senderCharacter?.name ?? message.senderUser?.name
            : message.receiverCharacter?.name ?? message.receiverUser?.name ?? "";

    const formatMessageTime = () => {
        const formattedDate = defaultFormatDateAndTime(message.insertedAt);
        
        if (formattedDate != null) {
            return ` (${formattedDate})`;
        }

        return "";
    }

    const getNameAndHour = () =>
        `${getName()}${formatMessageTime()}`

    const getSubject = () => message?.subject;

    return (
        <ListItem button
                  key={message.id}
                  alignItems="flex-start"
                  onClick={(_: any) => router.push(Routes.readMessage(message.id))}>
            <ListItemAvatar>
                {readIcon()}
            </ListItemAvatar>
            <ListItemText
                primary={getNameAndHour()}
                secondary={getSubject()}>
            </ListItemText>
        </ListItem>
    );
}

export default MessageListItem;
