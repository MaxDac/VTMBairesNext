import React from "react";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import RoomIcon from "@mui/icons-material/Room";
import {menuIconStyle} from "../menu/menu-base-utils";
import {goToChatAndUpdateSession} from "../chat/chat-helpers";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import {iconButtonSize} from "./constants";
import type {ReactElement} from "react";
import type {Option} from "vtm-baires-next-utils";
import {useRouter} from "next/router";
import useLocationSession from "../../session/hooks/useLocationSession";

type Props = {
    location: Option<{
        readonly id: string;
        readonly name?: Option<string>;
    }>;
    onSelected?: () => void;
    asMenuItem?: boolean;
}

const GoToMapLocation = ({location, onSelected, asMenuItem}: Props): ReactElement => {
    const router = useRouter();
    const [,setLocation] = useLocationSession();

    const tryGoToLocation = (location: Option<{readonly id: string, readonly name?: Option<string>}>) =>
        (_: any) => {
            if (location?.id != null) {
                goToChatAndUpdateSession(setLocation, router, location.id, location?.name);
            }

            if (onSelected != null) {
                onSelected();
            }
        };

    if (location?.id != null) {
        if (asMenuItem === true) {
            return (
                <MenuItem onClick={tryGoToLocation(location)}>
                    <ListItemIcon>
                        <RoomIcon />
                    </ListItemIcon>
                    Vai alla chat
                </MenuItem>
            );
        }

        return (
            <Tooltip title="Vai alla chat">
                <IconButton edge="end"
                            aria-label="Chat"
                            size={iconButtonSize}
                            onClick={tryGoToLocation(location)}>
                    <RoomIcon sx={menuIconStyle}/>
                </IconButton>
            </Tooltip>
        );
    }

    return (<></>);
}

export default GoToMapLocation;
