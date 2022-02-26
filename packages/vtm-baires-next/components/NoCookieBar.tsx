import React, {useState} from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import {useMediaQuery} from "@mui/material";
import {useTheme} from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import {menuIconStyle} from "vtm-baires-next-components";

const CookieFreePolicy = (): JSX.Element => {
    return (
        <Typography variant="body2"
                    color="textSecondary">
            Questo sito fa uso unicamente di cookies chiamati <b>tecnici</b>, utilizzati per migliorare l'esperienza
            e l'usabilit&agrave; da parte dell'utente. Puoi controllare che il sito sia effettivamente <i>cookie-free</i>&nbsp;
            accedendo a questo&nbsp;
            <a href="https://nibirumail.com/cookies/policy/?url=vtmbaires.eu" target="_blank" rel="noreferrer">link</a>.
        </Typography>
    );
}

const NoCookieBar = (): JSX.Element => {
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down("md"));

    const [showCookiePolicy, setShowCookiePolicy] = useState(true);

    const cookieHeight = isSmall ? "100px" : "61px";

    const onCookieCloseClick = (_: any) => {
        setShowCookiePolicy(false);
    }

    if (showCookiePolicy) {
        return (
            <Box sx={{
                zIndex: "10",
                position: "fixed",
                left: "0px",
                top: "0px",
                width: "100%",
                height: cookieHeight,
                backgroundColor: "black",
                color: "white",
                opacity: "0.7"
            }}>
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        onClick={onCookieCloseClick}
                        aria-label="close">
                        <CloseIcon sx={menuIconStyle} />
                    </IconButton>
                    <CookieFreePolicy/>
                </Toolbar>
            </Box>
        );
    }

    return (<></>);
}

export default NoCookieBar;
