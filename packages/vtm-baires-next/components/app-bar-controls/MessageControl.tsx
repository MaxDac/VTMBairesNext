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
    const router = useRouter()
    const numberOfMessages = useMessageSubscription()

    return (
        <Tooltip title="Messaggi" placement="bottom">
            <IconButton aria-label="messages" onClick={(_: any) => router.push(Routes.messages)}>
                <Badge badgeContent={numberOfMessages} color="secondary">
                    <ForumIcon sx={menuIconStyle} />
                </Badge>
            </IconButton>
        </Tooltip>
    );
}

export default MessageControl;
