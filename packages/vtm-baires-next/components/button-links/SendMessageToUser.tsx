import React from "react";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import MessageIcon from "@mui/icons-material/Message";
import {menuIconStyle} from "../menu/menu-base-utils";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import {iconButtonSize} from "./constants";
import type {ReactElement} from "react";
import type {Option} from "vtm-baires-next-utils";
import {useRouter} from "next/router";
import {Routes} from "../../base/routes";

type Props = {
    userId: Option<string>;
    onSelected?: () => void;
    asMenuItem?: boolean;
}

const SendMessageToUser = ({userId, onSelected, asMenuItem}: Props): ReactElement => {
    const router = useRouter();

    const trySendMessageToUser = (_: any) => {
        if (userId != null) {
            router.push(Routes.newMessageTo(userId));
        }
        else {
            router.push(Routes.newMessage());
        }

        if (onSelected != null) {
            onSelected();
        }
    };

    if (asMenuItem === true) {
        return (
            <MenuItem onClick={trySendMessageToUser}>
                <ListItemIcon>
                    <MessageIcon />
                </ListItemIcon>
                Inva messaggio all'utente
            </MenuItem>
        );
    }

    return (
        <Tooltip title="Invia messaggio all'utente">
            <IconButton aria-label="Messaggio"
                        size={iconButtonSize}
                        onClick={trySendMessageToUser}>
                <MessageIcon sx={menuIconStyle} />
            </IconButton>
        </Tooltip>
    );
}

export default SendMessageToUser;
