import type {ReactElement} from "react";
import React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SendIcon from "@mui/icons-material/Send";
import {useMediaQuery, useTheme} from '@mui/material';
import {menuIconStyle} from "../menu/menu-base-utils";
import {goToChatAndUpdateSession} from "../chat/chat-helpers";
import {useRouter} from "next/router";
import useLocationSession from "../../session/hooks/useLocationSession";
import {Routes} from "../../base/routes";
import {orderAlphabetically} from "vtm-baires-next-utils";
import SubMapResponsive from "./SubMapResponsive";
import SubMapWide from "./SubMapWide";
import type {
    MainMapsQuery$data
} from "vtm-baires-next-services/graphql-queries/queries/map/__generated__/MainMapsQuery.graphql";
import type {
    SectionMapsQuery$data
} from "vtm-baires-next-services/graphql-queries/queries/map/__generated__/SectionMapsQuery.graphql";

type SubMapProps = {
    maps: MainMapsQuery$data["mainMaps"] | SectionMapsQuery$data["sectionMaps"],
    imageUrl: string
};

const SubMap = ({maps, imageUrl}: SubMapProps): ReactElement => {
    const router = useRouter();
    const theme = useTheme();
    const [,setLocation] = useLocationSession()
    const showAsResponsive = useMediaQuery(theme.breakpoints.down("md"));

    const subHeader = () =>
        <ListSubheader component="div" id="nested-list-subheader">
            Locations
        </ListSubheader>

    const openMap = (id: string, name: string, isChat: boolean) => (_: any) => {
        if (isChat) {
            goToChatAndUpdateSession(setLocation, router, id, name);
        }
        else {
            router.push(Routes.subMap(id));
        }
    }

    const mapLink = ({id, name, isChat}: any) =>
        <ListItem key={id} button onClick={openMap(id, name, isChat)}>
            <ListItemIcon>
                <SendIcon sx={menuIconStyle} />
            </ListItemIcon>
            <ListItemText primary={name} primaryTypographyProps={{
                fontFamily: "DefaultTypewriter"
            }} />
        </ListItem>;

    const mapLinks = () =>
        maps?.map(x => x)
            ?.sort((a, b) => orderAlphabetically(a?.id, b?.id))
            ?.map(mapLink) ?? [];

    if (showAsResponsive) {
        return (<SubMapResponsive imageUrl={imageUrl}
                                  subHeader={subHeader}
                                  mapLinks={mapLinks} />);
    }
    else {
        return (<SubMapWide imageUrl={imageUrl}
                            subHeader={subHeader}
                            mapLinks={mapLinks} />);
    }
};

export default SubMap;
