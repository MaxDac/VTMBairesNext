import type {ReactElement} from "react";
import React, {useEffect} from "react";
import Typography from "@mui/material/Typography";
import {mainFontFamily} from "vtm-baires-next-components";
import {menuTextStyle} from "../menu/menu-base-utils";
import Box from "@mui/material/Box";
import {useRouter} from "next/router";
import {performLogout} from "vtm-baires-next-services/graphql-queries/logout-service";
import {LoginRoutes} from "../../base/routes";

type Props = {
    title: string;
};

const Logout = ({title}: Props): ReactElement => {
    const router = useRouter();

    useEffect(() => {
        // Invoking the logout service to delete all the cached information
        performLogout(() => {
            console.debug("cached information erased.");
        });
    }, []);

    return (
        <Box sx={{
            display: 'flex',
            background: "url('logout-logo.webp')",
            backgroundPosition: "left top",
            backgroundSize: "auto",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            backgroundBlendMode: "screen",
            backgroundColor: "#101010",
            height: "100vh",
            width: "100%",
            overflow: "auto"
        }}>
            <Box sx={{
                margin: "auto auto"
            }}>
                <Typography paragraph sx={{
                    ...mainFontFamily,
                    color: "secondary.light",
                    fontSize: "3rem"
                }}>
                    {title}
                </Typography>
                <Typography paragraph sx={{
                    ...menuTextStyle,
                    textAlign: "center",
                    cursor: "pointer"
                }} onClick={(_: any) => router.push(LoginRoutes.login)}>
                    Ritorna al login
                </Typography>
            </Box>
        </Box>
    );
}

export default Logout;
