import React from "react";
import ListItem from "@mui/material/ListItem";
import Box from "@mui/material/Box";
import type {ReactElement} from "react";
import AppVersion from "../AppVersion";
import JoinUsOnDiscord from "../JoinUsOnDiscord";
import {SimpleImage} from "vtm-baires-next-components";

const CommonListItems = (): ReactElement => {
    const DOLogo = () => (
        <ListItem>
            <Box sx={{margin: "0 auto"}}>
                <a href="https://www.digitalocean.com/?refcode=26dfc8b090af&utm_campaign=Referral_Invite&utm_medium=Referral_Program&utm_source=badge">
                    <SimpleImage src="https://web-platforms.sfo2.cdn.digitaloceanspaces.com/WWW/Badge%201.svg"
                                 width="200px"
                                 height="65px"
                                 alt="DigitalOcean Referral Badge"
                                 rel="preconnect" />
                </a>
            </Box>
        </ListItem>
    );

    const appVersion = () => (
        <ListItem>
            <Box sx={{margin: "0 auto"}}>
                <AppVersion />
            </Box>
        </ListItem>
    );

    return (
        <>
            <Box sx={{marginTop: "15px"}}>
                <JoinUsOnDiscord />
            </Box>
            <Box sx={{marginTop: "15px"}}>
                {DOLogo()}
            </Box>
            {appVersion()}
        </>
    )
};

export default CommonListItems;
