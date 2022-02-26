import React from "react";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import DashboardIcon from '@mui/icons-material/Dashboard';
import {menuIconStyle} from "../menu/menu-base-utils";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import {iconButtonSize} from "./constants";
import type {ReactElement} from "react";
import type {Option} from "vtm-baires-next-utils";
import {useRouter} from "next/router";
import {Routes} from "../../base/routes";
import {useRecoilValue} from "recoil";
import {isUserMasterSelector} from "../../session/selectors/recoil-selectors";

type Props = {
    characterId: Option<string>;
    onSelected?: () => void;
    asMenuItem?: boolean;
}

const ShowCharacterDashboard = ({characterId, onSelected, asMenuItem}: Props): ReactElement => {
    const isMaster = useRecoilValue<boolean>(isUserMasterSelector);
    const router = useRouter();

    const tryVisualizeCharacterDashboard = (characterId: string) =>
        (_: any) => {
            router.push(Routes.characterDashboard(characterId));

            if (onSelected != null) {
                onSelected();
            }
        }

    if (isMaster && characterId != null) {
        if (asMenuItem === true) {
            return (
                <MenuItem onClick={tryVisualizeCharacterDashboard(characterId)}>
                    <ListItemIcon>
                        <DashboardIcon />
                    </ListItemIcon>
                    Dashboard personaggio
                </MenuItem>
            );
        }

        return (
            <Tooltip title="Visualizza Dashboard personaggio">
                <IconButton aria-label="Messaggio"
                            size={iconButtonSize}
                            onClick={tryVisualizeCharacterDashboard(characterId)}>
                    <DashboardIcon sx={menuIconStyle} />
                </IconButton>
            </Tooltip>
        );
    }

    return (<></>);
};

export default ShowCharacterDashboard;
