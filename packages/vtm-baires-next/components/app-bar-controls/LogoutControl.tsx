import React from "react";
import IconButton from "@mui/material/IconButton";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import Tooltip from '@mui/material/Tooltip';
import {menuIconStyle} from "../menu/menu-base-utils";
import type {ReactElement} from "react";
import {useRouter} from "next/router";
import {useDialog} from "vtm-baires-next-components";
import {performLogout} from "vtm-baires-next-services/graphql-queries/logout-service";
import {Routes} from "../../base/routes";

const LogoutControl = (): ReactElement => {
    const router = useRouter();
    const {showDialog} = useDialog();

    const logoutClick = (_: any) => {
        showDialog("Logout", "Vuoi uscire dal gioco?", () =>
            performLogout(() => router.push(Routes.logout)));
    }

    return (
        <Tooltip title="Logout" placement="bottom">
            <IconButton aria-label="logout" onClick={logoutClick}>
                <ExitToAppIcon sx={menuIconStyle} />
            </IconButton>
        </Tooltip>
    );
}

export default LogoutControl;
