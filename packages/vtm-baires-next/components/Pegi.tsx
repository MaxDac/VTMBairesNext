import React from "react";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import {Tooltip} from "@mui/material";

const Pegi = (): JSX.Element => {
    // return (<></>);

    return (
        <Stack direction="row">
            <Tooltip title="Solo maggiorenni">
                <Avatar src="/pegi-18.svg" />
            </Tooltip>
            <Tooltip title="Linguaggio scurrile in gioco">
                <Avatar src="/pegi-bad-language.svg" />
            </Tooltip>
            <Tooltip title="Violenza in gioco">
                <Avatar src="/pegi-violence.svg" />
            </Tooltip>
            <Tooltip title="Possibili scene erotiche in gioco">
                <Avatar src="/pegi-sex.svg" />
            </Tooltip>
            <Tooltip title="Giocate di terrore non adatte a impressionabili">
                <Avatar src="/pegi-fear.svg" />
            </Tooltip>
            <Tooltip title="Possibili giocate con sostanze stupefacenti">
                <Avatar src="/pegi-drugs.svg" />
            </Tooltip>
            <Tooltip title="Possibili discriminazioni in gioco">
                <Avatar src="/pegi-discrimination.svg" />
            </Tooltip>
        </Stack>
    );
}

export default Pegi;
