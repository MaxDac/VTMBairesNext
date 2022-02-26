import React, {ReactElement} from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import {guideStyle, titleStyle} from "./GuidesStyles";
import Link from "next/link";
import {GuideRoutes} from "../../base/routes";

type Props = {
    showAttributes: (name: string, description: string) => any[];
}

const GuidesAttributesAttributes = ({showAttributes}: Props): ReactElement => {
    const showAttributeColumns = (name: string, title: string) => (
        <>
            <Grid item xs={12}>
                <Typography paragraph>
                    <h2 style={titleStyle}>
                        {title}
                    </h2>
                </Typography>
            </Grid>

            <Grid item xs={12} md={4}>
                <Typography paragraph sx={{ textAlign: "center" }}>
                    <h3 style={titleStyle}>
                        Fisici
                    </h3>
                </Typography>

                <Typography paragraph sx={guideStyle}>
                    <ul>
                        {showAttributes(name, "Physical")}
                    </ul>
                </Typography>
            </Grid>

            <Grid item xs={12} md={4}>
                <Typography paragraph sx={{ textAlign: "center" }}>
                    <h3 style={titleStyle}>
                        Sociali
                    </h3>
                </Typography>

                <Typography paragraph sx={guideStyle}>
                    <ul>
                        {showAttributes(name, "Social")}
                    </ul>
                </Typography>
            </Grid>

            <Grid item xs={12} md={4}>
                <Typography paragraph sx={{ textAlign: "center" }}>
                    <h3 style={titleStyle}>
                        Mentali
                    </h3>
                </Typography>

                <Typography paragraph sx={guideStyle}>
                    <ul>
                        {showAttributes(name, "Mental")}
                    </ul>
                </Typography>
            </Grid>
        </>
    );

    return (
        <>
            <Grid container>
                {showAttributeColumns("Attribute", "Attributi")}
                {showAttributeColumns("Ability", "Abilità")}

                <Grid item xs={12} id="specialties">
                    <Typography paragraph>
                        <h3 style={titleStyle}>
                            Specialit&agrave;
                        </h3>
                    </Typography>
                </Grid>

                <Grid item xs={12}>
                    <Typography paragraph style={guideStyle}>
                        Le <b>Specialit&agrave;</b> sono delle specializzazioni in una determinata Abilit&agrave; del personaggio,
                        delle particolari classi di sapienza o di addestramento in cui il personaggio eccelle. Ogni specialit&agrave;
                        costituir&agrave; <b>un particolare sottoinsieme di una Abilit&agrave;</b>: ad esempio, una possibile 
                        specialit&agrave; dell'Abilit&agrave; <b>Accademiche</b> potrebbe essere <b>Storia</b>, una 
                        di <b>Finanza</b> invece potrebbe essere <b>Criptomonete</b>, o <b>Mercato Azionario</b>. Non potr&agrave; 
                        invece essere considerata una Specialit&agrave; consentita una forma di arte marziale per <b>Rissa</b>: 
                        una particolare arte marziale si applica a tutte le manovre di attacco o difesa, non una in particolare.
                    </Typography>

                    <Typography paragraph style={guideStyle}>
                        Ogni specialit&agrave; garantir&agrave; un dado supplementare all'ammontare dei dadi applicato ai tiri 
                        per la specialit&agrave; del personaggio, e si potr&agrave; usare una sola specialit&agrave; per tiro.
                        Ogni personaggio ha diritto ad un numero variabile di Specialit&agrave; in fase di creazione. Per maggiori
                        informazioni, consultare la <Link href={GuideRoutes.creation}>guida di creazione</Link>. Si potranno
                        acquistare altre Specialit&agrave; per il personaggio con i punti esperienza, come descritto nella
                        relativa <Link href={GuideRoutes.experience}>guida per l'esperienza</Link>.
                    </Typography>
                </Grid>
            </Grid>
        </>
    );
};

export default GuidesAttributesAttributes;
