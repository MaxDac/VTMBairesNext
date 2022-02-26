import React from "react";
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import Typography from "@mui/material/Typography";
import type {ReactElement} from "react";

const HtmlTooltip = styled(({ className, ...props }: any) => (
    <Tooltip {...props} classes={{ popper: className }}>
        {props.children}
    </Tooltip>
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        // backgroundColor: '#191919',
        // color: 'rgba(0, 0, 0, 0.87)',
        maxWidth: 300
    },
}));

const textStyle = {
    fontSize: "0.8rem"
};

const ChatInputHelpText = () => (
    <>
        <Typography color="inherit" paragraph sx={{fontSize: "1rem"}}>
            Help chat
        </Typography>
        <Typography paragraph sx={textStyle}>
            Per inserire una frase off, anteponete un <b>+</b> davanti alla frase.
        </Typography>
        <Typography paragraph sx={textStyle}>
            Per inserire il parlato, circondate la frase tra asterischi, ad esempio *"Frase"*, facendo attenzione a non
            lasciare uno spazio tra l'asterisco e il carattere successivo o precedente (*" ... "* ok, * " ... "*
            o *" ..." * no).
        </Typography>
        <Typography paragraph sx={textStyle}>
            Per dare enfasi ad una parola o ad una frase in particolare, circondala con due asterischi (esempio:
            **enfasi** o **frase a cui dare enfasi**). L'enfasi funziona anche all'interno del parlato.
        </Typography>
        <Typography paragraph sx={textStyle}>
            Cliccando col tasto destro del mouse su una frase, poi, si potr&agrave; accedere al menu contestuale,
            potendo poi copiare la frase o visualizzare la descrizione del personaggio.
        </Typography>
    </>
);

const ChatInputHelp = (): ReactElement => {
    return (
        <HtmlTooltip title={<ChatInputHelpText />}>
            <IconButton size="small">
                {/* @ts-ignore */}
                <InfoIcon size="small" />
            </IconButton>
        </HtmlTooltip>
    );
}

export default ChatInputHelp;
