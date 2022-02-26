import type {ReactElement} from "react";
import React from "react";
import MenuNpcSection from "./sections/MenuNpcSection";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import ListItemText from "@mui/material/ListItemText";
import MarkChatReadIcon from "@mui/icons-material/MarkChatRead";
import type {MenuProps} from "./menu-base-utils";
import {menuIconStyle, MenuSecondaryText} from "./menu-base-utils";
import MapsHomeWorkTwoToneIcon from '@mui/icons-material/MapsHomeWorkTwoTone';
import CameraIndoorTwoToneIcon from "@mui/icons-material/CameraIndoorTwoTone";
import {useRouter} from "next/router";
import {Routes} from "../../base/routes";

const SecondaryListItems = ({drawerDone, reloadCount, onUpdate}: MenuProps): ReactElement => {
    const router = useRouter();

    const pushHistory = (route: string) => {
        drawerDone();
        router.push(route);
    };

    return (
        <>
            <MenuNpcSection pushHistory={pushHistory}
                            reloadCount={reloadCount}
                            onUpdate={onUpdate} />
            <ListItem button onClick={(_: any) => pushHistory(Routes.unapprovedCharacters)}>
                <ListItemIcon>
                    <GroupAddIcon sx={menuIconStyle} />
                </ListItemIcon>
                <ListItemText secondary={<MenuSecondaryText text="Accettazione" />} />
            </ListItem>
            <ListItem button onClick={(_: any) => pushHistory(Routes.adminHavens)}>
                <ListItemIcon>
                    <MapsHomeWorkTwoToneIcon sx={menuIconStyle} />
                </ListItemIcon>
                <ListItemText secondary={<MenuSecondaryText text="Gestione Rifugi" />} />
            </ListItem>
            <ListItem button onClick={(_: any) => pushHistory(Routes.chatViewer)}>
                <ListItemIcon>
                    <MarkChatReadIcon sx={menuIconStyle} />
                </ListItemIcon>
                <ListItemText secondary={<MenuSecondaryText text="Chats" />} />
            </ListItem>
            <ListItem button onClick={(_: any) => pushHistory(Routes.adminHavenEvents)}>
                <ListItemIcon>
                    <CameraIndoorTwoToneIcon sx={menuIconStyle} />
                </ListItemIcon>
                <ListItemText secondary={<MenuSecondaryText text="Eventi Globali" />} />
            </ListItem>
        </>
    );
};

export default SecondaryListItems;
