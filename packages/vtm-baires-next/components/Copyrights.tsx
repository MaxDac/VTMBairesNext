import React from "react";
import Typography from '@mui/material/Typography';

const Copyright = (): JSX.Element => {
    return (
        <>
            <Typography paragraph variant="body2" color="textSecondary" align="center">
                Le immagini usate nel login e all'interno del sito sono state prese dall'account di DeviantArt di <b>ichabod1799</b>, che
                ringraziamo e di cui poniamo il link di seguito:&nbsp;
                <a href="https://www.deviantart.com/ichabod1799" target="_blank" rel="noreferrer">ichabod1799</a>.
            </Typography>
            <Typography paragraph variant="body2" color="textSecondary" align="center">
                Il codice e il cotenuto del sito sono stati interamente sviluppati e scritti dai gestori di Vampire the Masquerade: Buenos Aires by Night.
            </Typography>
            <Typography paragraph variant="body2" color="textSecondary" align="center">
                Il sito si ispira al Mondo di Tenebra, in particolare al contenuto dei manuali di Vampiri: la Masquerade, edito da White Wolf.
            </Typography>
            <Typography paragraph sx={{textAlign: "center"}}>
                <a href="https://www.worldofdarkness.com/"
                   target="_blank"
                   rel="noreferrer">
                    © Paradox Interactive. Trademarks belong to their respective owners. All rights reserved.
                </a>
            </Typography>
        </>
    );
};

export default Copyright;
