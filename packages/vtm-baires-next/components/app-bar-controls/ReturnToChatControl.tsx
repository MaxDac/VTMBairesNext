import React, {ReactElement} from "react";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import RoomIcon from '@mui/icons-material/Room';
import {menuIconStyle} from "../menu/menu-base-utils";
import {useRouter} from "next/router";
import useLocationSession from "../../session/hooks/useLocationSession";
import {Routes} from "../../base/routes";

const ReturnToChatControl = (): ReactElement => {
    const router = useRouter();
    const [location,] = useLocationSession()

    const tryGoToChat = (locationId: string) =>
        (_: any) => {
            if (locationId != null) {
                router.push(Routes.chat(locationId));
            }
        }

    const title = () => {
        const common = "Torna all'ultima Chat";

        if (location?.name != null) {
            return `${common} (${location.name})`;
        }

        return common;
    }

    if (location?.id != null) {
        return (
            <Tooltip title={title()}>
                <IconButton aria-label="Chat"
                            size="large"
                            onClick={tryGoToChat(location.id)}>
                    <RoomIcon sx={menuIconStyle} />
                </IconButton>
            </Tooltip>
        );
    }

    return (<></>);
}

export default ReturnToChatControl;
