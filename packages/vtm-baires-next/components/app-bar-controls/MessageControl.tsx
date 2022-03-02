import React from "react";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import ForumIcon from "@mui/icons-material/Forum";
import Tooltip from '@mui/material/Tooltip';
import {menuIconStyle} from "../menu/menu-base-utils";
import type {ReactElement} from "react";
import {useRouter} from "next/router";
import {Routes} from "../../base/routes";
import {useMessageSubscription} from "../../base/_hooks/useMessageSubscription";

const MessageControl = (): ReactElement => {
    const router = useRouter();

    return (
        <Tooltip title="Messaggi" placement="bottom">
            <IconButton aria-label="messages" onClick={(_: any) => router.push(Routes.messages)}>
                <MessageControlInternal />
            </IconButton>
        </Tooltip>
    );
}

const MessageControlInternal = (): ReactElement => {
    // if (process.browser) {
    //     return (
    //         <MessageControlWithPopulatedBadge />
    //     )
    // }

    return (
        <MessageCOntrolWithoutPopulatedBadge />
    )
}

const MessageControlWithPopulatedBadge = (): ReactElement => {
    const numberOfMessages = useMessageSubscription();

    return (
        <Badge badgeContent={numberOfMessages} color="secondary">
            <ForumIcon sx={menuIconStyle} />
        </Badge>
    );
}

const MessageCOntrolWithoutPopulatedBadge = (): ReactElement => {
    return (
        <Badge badgeContent={0} color="secondary">
            <ForumIcon sx={menuIconStyle} />
        </Badge>
    );
}

export default MessageControl;
