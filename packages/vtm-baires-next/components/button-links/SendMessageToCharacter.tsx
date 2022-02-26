import React from "react";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import EmailIcon from '@mui/icons-material/Email';
import {menuIconStyle} from "../menu/menu-base-utils";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import {iconButtonSize} from "./constants";
import type {ReactElement} from "react";
import type {Option} from "vtm-baires-next-utils";
import {useRouter} from "next/router";
import {Routes} from "../../base/routes";

type Props = {
    characterId: Option<string>;
    onSelected?: () => void;
    asMenuItem?: boolean;
}

const SendMessageToCharacter = ({characterId, onSelected, asMenuItem}: Props): ReactElement => {
    const router = useRouter();

    const trySendMessageToCharacter = (_: any) => {
        if (characterId != null) {
            router.push(Routes.newMessageToCharacter(characterId));
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
            <MenuItem onClick={trySendMessageToCharacter}>
                <ListItemIcon>
                    <EmailIcon />
                </ListItemIcon>
                Inva messaggio al personaggio
            </MenuItem>
        );
    }

    return (
        <Tooltip title="Invia messaggio al personaggio">
            <IconButton aria-label="Messaggio"
                        size={iconButtonSize}
                        onClick={trySendMessageToCharacter}>
                <EmailIcon sx={menuIconStyle} />
            </IconButton>
        </Tooltip>
    );
}

export default SendMessageToCharacter;
