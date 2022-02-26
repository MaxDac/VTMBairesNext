import React from 'react';
import Container from '@mui/material/Container';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SendIcon from "@mui/icons-material/Send";
import useStyles from "../Main.Layout.Style";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import {useMediaQuery, useTheme} from '@mui/material';
import {menuIconStyle} from "../menu/menu-base-utils";
import {goToChatAndUpdateSession} from "../chat/chat-helpers";
import type {ReactElement} from "react";
import type {Map} from "vtm-baires-next-services/graphql-queries/data-utils";
import {useRouter} from "next/router";
import useLocationSession from "../../session/hooks/useLocationSession";
import {Routes} from "../../base/routes";
import {orderAlphabetically} from "vtm-baires-next-utils/src/utils";

type SubMapProps = {
    maps: Map[],
    imageUrl: string
};

const SubMap = ({maps, imageUrl}: SubMapProps): ReactElement => {
    const router = useRouter();
    const classes = useStyles();
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

    const mapLinks = () => {
        const mapLink = ({id, name, isChat}: any) =>
            <ListItem key={id} button onClick={openMap(id, name, isChat)}>
                <ListItemIcon>
                    <SendIcon sx={menuIconStyle} />
                </ListItemIcon>
                <ListItemText primary={name} primaryTypographyProps={{
                    fontFamily: "DefaultTypewriter"
                }} />
            </ListItem>;

        if (maps && maps.map != null) {
            return maps.sort((a, b) => orderAlphabetically(a.id, b.id)).map(mapLink);
        }

        return [];
    };

    if (showAsResponsive) {
        return (<SubMapResponsive classes={classes}
                                  imageUrl={imageUrl}
                                  subHeader={subHeader}
                                  mapLinks={mapLinks} />);
    }
    else {
        return (<SubMapWide classes={classes}
                            imageUrl={imageUrl}
                            subHeader={subHeader}
                            mapLinks={mapLinks} />);
    }
};

const SubMapResponsive = ({classes, imageUrl, subHeader, mapLinks}: any) => (
    <Container maxWidth="lg" className={classes.container}>
        <Grid container>
            <Grid item xs={12}>
                <Box sx={{
                    background: `url('${imageUrl}')`,
                    border: "1px white solid",
                    backgroundPosition: "center center"
                }}>
                    <List component="nav"
                        aria-labelledby="nested-list-subheader"
                        subheader={subHeader()}
                        className={classes.listRoot}
                        sx={{backgroundColor: "#19191980"}}>
                        {mapLinks()}
                    </List>
                </Box>
            </Grid>
        </Grid>
    </Container>
);

const SubMapWide = ({classes, imageUrl, subHeader, mapLinks}: any) => (
    <Container maxWidth="lg" className={classes.container}>
        <Grid container>
            <Grid item xs={12} sm={8} md={9}>
                <img src={imageUrl} style={{
                    maxWidth: "70vw"
                }} alt="map" />
            </Grid>
            <Grid item xs={12} sm={4} md={3}>
                <Paper elevation={0} variant="outlined">
                    <List component="nav"
                        aria-labelledby="nested-list-subheader"
                        subheader={subHeader()}
                        className={classes.listRoot}
                        sx={{backgroundColor: "#19191980"}}>
                        {mapLinks()}
                    </List>
                </Paper>
            </Grid>
        </Grid>
    </Container>
);

export default SubMap;
