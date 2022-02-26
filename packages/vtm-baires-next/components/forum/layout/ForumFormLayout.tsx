import React from "react";
import {mainFontFamily} from "vtm-baires-next-components";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";
import {menuIconStyle} from "../../menu/menu-base-utils";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import type {ReactElement} from "react";
import type {Option} from "vtm-baires-next-utils";
import {useRouter} from "next/router";
import {Routes} from "../../../base/routes";

type Props = {
    title: string;
    description?: Option<string>;
    goBack: () => void;
    children: any;
}

const ForumFormLayout = ({title, description, children}: Props): ReactElement => {
    const router = useRouter();
    const showDescription = () => {
        if (description != null && description !== "") {
            return (
                <Grid item xs={12}>
                    <Typography component="span">
                        {description}
                    </Typography>
                </Grid>
            );
        }

        return <></>;
    }

    const showControls = () => (
        <>
            <Tooltip title="Torna al Forum">
                <IconButton aria-label="Forum"
                            onClick={(_: any) => router.push(Routes.forumSections)}>
                    <HomeIcon sx={menuIconStyle} />
                </IconButton>
            </Tooltip>
            <Tooltip title="Torna alla sezione">
                <IconButton aria-label="Sezione"
                            onClick={(_: any) => router.back()}>
                    <ArrowBackIcon sx={menuIconStyle} />
                </IconButton>
            </Tooltip>
        </>
    )


    return (
        <Grid container>
            <Grid item xs={12}>
                <Stack direction="row" sx={{
                    padding: "10px",
                    paddingBottom: "20px"
                }}>
                    <Typography component="h1" style={{
                        ...mainFontFamily,
                        fontSize: "24px",
                        paddingTop: "5px"
                    }}>
                        {title}
                    </Typography>
                    <Box sx={{
                        display: "inline-flex",
                        paddingLeft: "1rem"
                    }}>
                        <Stack direction="row" sx={{marginTop: "auto", marginBottom: "auto"}}>
                            {showControls()}
                        </Stack>
                    </Box>
                </Stack>
            </Grid>
            {showDescription()}
            <Grid item xs={12}>
                {children}
            </Grid>
        </Grid>
    );
}

export default ForumFormLayout;
