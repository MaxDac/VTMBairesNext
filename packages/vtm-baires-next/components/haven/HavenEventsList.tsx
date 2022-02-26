import React from "react";
import MeetingRoomTwoToneIcon from "@mui/icons-material/MeetingRoomTwoTone";
import {menuIconStyle} from "../menu/menu-base-utils";
import ReportProblemTwoToneIcon from "@mui/icons-material/ReportProblemTwoTone";
import Button from "@mui/material/Button";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Tooltip from "@mui/material/Tooltip";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import type {Option} from "vtm-baires-next-utils";
import {defaultFormatDate, sortByDate} from "vtm-baires-next-utils";
import {HavenEvent} from "vtm-baires-next-services/graphql-queries/queries/haven/HavenEventFragment";

type EventListItemProps = {
    isMaster: boolean;
    e: Option<HavenEvent>;
    resolveEvent: (id: string) => void;
}

const getTooltipFromEvent = (controlTriggered: boolean) =>
    controlTriggered
        ? "Intrusione"
        : "Attenzione richiamata";

const getTitleFromEvent = (isMaster: boolean, {controlTriggered, character, haven}: HavenEvent) =>
    isMaster
        ? (controlTriggered
            ? `${character?.name ?? ""} è entrato nel tuo dominio di ${haven?.character?.name ?? ""} per cacciare`
            : `${character?.name ?? ""} è stato intercettato nel Dominio di ${haven?.character?.name ?? ""}`)
        : (controlTriggered
            ? `${character?.name ?? "Qualcuno"} è entrato nel tuo dominio per cacciare`
            : `${character?.name ?? "Qualcuno"} è stato intercettato nel tuo Dominio`);

const actions = (id: string, onClick: (id: string) => void) => {
    return (
        <Button onClick={() => onClick(id)}>
            Ignora / Risolto
        </Button>);
};

const EventListItem = ({isMaster, e, resolveEvent}: EventListItemProps) => {
    const tooltipText = getTooltipFromEvent(e?.controlTriggered === true);
    const eventIcon = React.useMemo(() => (
        <Tooltip title={tooltipText}>
            {
                e?.controlTriggered === true
                    ? (<MeetingRoomTwoToneIcon sx={menuIconStyle}/>)
                    : (<ReportProblemTwoToneIcon sx={menuIconStyle}/>)
            }
        </Tooltip>
    ), [e, tooltipText]);

    if (e != null) {
        return (
            <>
                <ListItem disablePadding secondaryAction={actions(e.id, resolveEvent)}>
                    <ListItemButton>
                        <ListItemIcon>
                            {eventIcon}
                        </ListItemIcon>
                        <ListItemText primary={getTitleFromEvent(isMaster, e)}
                                      secondary={defaultFormatDate(e?.insertedAt)} />
                    </ListItemButton>
                </ListItem>
                <Divider/>
            </>
        );
    }

    return (<></>);
};

type Props = {
    isMaster: boolean;
    events: Option<ReadonlyArray<Option<HavenEvent>>>;
    resolveEvent: (event: string) => void;
}

const HavenEventsList = ({isMaster, events, resolveEvent}: Props): any => {
    const rows = () => {
        const es = events ?? [];

        if (es != null && es.length > 0) {
            return es
                .filter(es => es != null)
                .map(es => es as HavenEvent)
                .sort(({updatedAt: a}: HavenEvent, {updatedAt: b}: HavenEvent) => sortByDate(a ?? "", b ?? "", true))
                .map(e => (
                    <EventListItem key={e.id} isMaster={isMaster} e={e} resolveEvent={resolveEvent} />
                )) ?? [];
        }

        return (<></>);
    }

    return (
        <Box sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center"
        }}>
            <List sx={{
                width: {
                    sx: "100%",
                    md: "100%"
                },
                bgcolor: 'background.paper',
            }}>
                {rows()}
            </List>
        </Box>
    );
}

export default HavenEventsList;
