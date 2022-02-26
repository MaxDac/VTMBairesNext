import type {ReactElement} from "react";
import React, {Suspense, useState} from "react";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import HomeIcon from "@mui/icons-material/Home";
import ListItemText from "@mui/material/ListItemText";
import MapIcon from "@mui/icons-material/Map";
import LockOpenTwoToneIcon from '@mui/icons-material/LockOpenTwoTone';
import MenuCharacterSection from "./menu-character/MenuCharacterSection";
import MenuHuntSection from "./sections/MenuHuntSection";
import AssignmentIcon from "@mui/icons-material/Assignment";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import CameraIndoorTwoToneIcon from '@mui/icons-material/CameraIndoorTwoTone';
import type {MenuProps} from "./menu-base-utils";
import {menuIconStyle, MenuSecondaryText} from "./menu-base-utils";
import useIsChatRoute from "../../base/_hooks/useIsChatRoute";
import MenuForumSection from "./sections/MenuForumSection";
import {useRouter} from "next/router";
import {GuideRoutes, Routes} from "../../base/routes";

const CharacterSheetModal = React.lazy(() => import('./dialog/SheetDialog'));

const MainListItems = ({drawerDone, reloadCount, onUpdate}: MenuProps): ReactElement => {
    const router = useRouter();
    const [popupOpen, setPopupOpen] = useState(false);
    const [requested, setRequested] = useState(false);
    const isChatRoute = useIsChatRoute();

    const pushHistory = (route: string) => {
        drawerDone();

        if (route.indexOf("sheet") !== -1 && isChatRoute) {
            pushComponentOnPopup();
        }
        else {
            router.push(route);
        }
    };

    const pushHistoryOnAnotherTab = (route: string) => {
        drawerDone();
        const newTab: any = window.open(`#${route}`, "_blank");
        newTab.focus();
    };

    const handlePopupOpen = () => setPopupOpen((_: any) => true);

    const handlePopupClose = () => setPopupOpen((_: any) => false);

    const pushComponentOnPopup = () => {
        setRequested((_: any) => true);
        handlePopupOpen();
    };

    const characterSheetModal = () =>
        // Performance - opening and rendering the popup only when needed
        isChatRoute && requested
            ? (<CharacterSheetModal open={popupOpen} handleClose={handlePopupClose} />)
            : (<></>);

    return (
        <>
            <ListItem button onClick={(_: any) => pushHistory(Routes.main)}>
                <ListItemIcon>
                    <HomeIcon sx={menuIconStyle} />
                </ListItemIcon>
                <ListItemText secondary={<MenuSecondaryText text="Home" />} />
            </ListItem>
            <ListItem button onClick={(_: any) => pushHistory(Routes.mainMap)}>
                <ListItemIcon>
                    <MapIcon sx={menuIconStyle} />
                </ListItemIcon>
                <ListItemText secondary={<MenuSecondaryText text="Mappa" />} />
            </ListItem>
            <ListItem button onClick={(_: any) => pushHistory(Routes.bookChat)}>
                <ListItemIcon>
                    <LockOpenTwoToneIcon sx={menuIconStyle} />
                </ListItemIcon>
                <ListItemText secondary={<MenuSecondaryText text="Prenota Chat Private" />} />
            </ListItem>
            <Suspense fallback={<></>}>
                {characterSheetModal()}
            </Suspense>
            <MenuCharacterSection pushHistory={pushHistory}
                                  reloadCount={reloadCount}
                                  onUpdate={onUpdate} />
            <MenuHuntSection />
            <ListItem button onClick={(_: any) => pushHistory(Routes.havenEvents)}>
                <ListItemIcon>
                    <CameraIndoorTwoToneIcon sx={menuIconStyle} />
                </ListItemIcon>
                <ListItemText secondary={<MenuSecondaryText text="Eventi Dominio" />} />
            </ListItem>
            <ListItem button onClick={(_: any) => pushHistoryOnAnotherTab(GuideRoutes.home)}>
                <ListItemIcon>
                    <AssignmentIcon sx={menuIconStyle} />
                </ListItemIcon>
                <ListItemText secondary={<MenuSecondaryText text="Guide" />} />
            </ListItem>
            <MenuForumSection pushHistory={pushHistory} />
            <ListItem button onClick={(_: any) => pushHistory(Routes.charactersList)}>
                <ListItemIcon>
                    <SupervisedUserCircleIcon sx={menuIconStyle} />
                </ListItemIcon>
                <ListItemText secondary={<MenuSecondaryText text="Lista personaggi" />} />
            </ListItem>
            <ListItem button onClick={(_: any) => pushHistory(Routes.settings)}>
                <ListItemIcon>
                    <SettingsIcon sx={menuIconStyle} />
                </ListItemIcon>
                <ListItemText secondary={<MenuSecondaryText text="Impostazioni" />} />
            </ListItem>
        </>
    );
};

export default MainListItems;
