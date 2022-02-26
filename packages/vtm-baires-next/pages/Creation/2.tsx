import type {ReactElement} from "react";
import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import CreationBase from "../../components/creation/strategies/CreationBase";
import TemplateSelectionControl from "../../components/creation/controls/TemplateSelectionControl";
import useCharacterSession from "../../session/hooks/useCharacterSession";
import Link from "next/link";
import {GuideRoutes} from "../../base/routes";
import {useTheme} from "@mui/material/styles";
import Box from "@mui/material/Box";

const Creation2Explanation = () => (
    <Grid item xs={12}>
        <Typography paragraph>
            In questa e nella prossima sezione, potrai scegliere <Link href={GuideRoutes.attributes}><a target="_blank"
                                                                                                        rel="noreferrer">Attributi e
            Abilit&agrave;</a></Link> del tuo personaggio.
            Se non sei sicuro di quali decisioni prendere, invece di sceglierle manualmente, puoi invece selezionare
            uno dei <i>templates</i>, delle schede con valori riempiti automaticamente, proposti in seguito. I Template
            offrono un'ottima opportunit&agrave; per qualsiasi giocatore, non solo i meno esperti, di concentrarsi
            su ci&ograve; che importa veramente nella creazione di un personaggio, la sua storia e il suo <i>concept</i>.
            Per questa ragione, consigliamo a tutti almeno di provare: noi stessi usiamo i template.<br />
            Per selezionare un template clicca il bottone "<b>Seleziona template</b>" per confermare la tua scelta.
        </Typography>
        <Typography paragraph>
            Ricorda che, sia selezionando manualmente Attributi e Abilit&agrave;, sia selezionanto uno dei <i>template</i>
            a disposizione, alla fine della creazione ti sar&agrave; data comunque la possibilit&agrave; di sistemare la
            scheda avendo a disposizione tutti i valori inseriti, sempre nel rispetto delle regole di creazione.
        </Typography>
        <Typography>
            Se vuoi selezionare un <i>template</i>, selezionalo nel controllo in basso, altrimenti ignoralo, inserisci gli Attributi
            e continua con la creazione del personaggio.
        </Typography>
    </Grid>
);

const Creation2 = (): ReactElement => {
    const theme = useTheme();
    const [character,] = useCharacterSession();

    const emptyAttributes = {
        attribute4: "",
        attribute31: "",
        attribute32: "",
        attribute33: "",
        attribute21: "",
        attribute22: "",
        attribute23: "",
        attribute24: "",
        attribute1: ""
    };

    const getAttributesToSave = (values: any, generateRequest: (id: string, value: number) => any) => [
        generateRequest(values.attribute4, 4),
        generateRequest(values.attribute31, 3),
        generateRequest(values.attribute32, 3),
        generateRequest(values.attribute33, 3),
        generateRequest(values.attribute21, 2),
        generateRequest(values.attribute22, 2),
        generateRequest(values.attribute23, 2),
        generateRequest(values.attribute24, 2),
        generateRequest(values.attribute1, 1)
    ];

    const form = (getAttributeSelector: (id: string, label: string) => ReactElement) =>
        <>
            <Grid item xs={12}>
                <Typography paragraph>
                    Seguendo il regolamento di Vampiri: la Masquerade&trade;, i livelli degli attributi sono fissi.
                    Questo vuol dire che si avranno a disposizione, senza eccezioni, un Attributo a livello 4,
                    tre attributi da selezionare per associare 3 livelli di Attributo, quattro di livello 2 e uno
                    di livello 1.
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography paragraph>
                    Scegli un attributo a cui assegnare 4 livelli di Attributo
                </Typography>
            </Grid>
            <Grid item xs={12}>
                {getAttributeSelector("attribute4", "Attributo a 4")}
            </Grid>
            <Grid item xs={12}>
                <Typography paragraph>
                    ... 3 al livello 3:
                </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
                {getAttributeSelector("attribute31", "Attributo a 3")}
            </Grid>
            <Grid item xs={12} md={4}>
                {getAttributeSelector("attribute32", "Attributo a 3")}
            </Grid>
            <Grid item xs={12} md={4}>
                {getAttributeSelector("attribute33", "Attributo a 3")}
            </Grid>
            <Grid item xs={12}>
                <Typography paragraph>
                    ... quattro a livello 2:
                </Typography>
            </Grid>
            <Grid item xs={12} md={3}>
                {getAttributeSelector("attribute21", "Attributo a 2")}
            </Grid>
            <Grid item xs={12} md={3}>
                {getAttributeSelector("attribute22", "Attributo a 2")}
            </Grid>
            <Grid item xs={12} md={3}>
                {getAttributeSelector("attribute23", "Attributo a 2")}
            </Grid>
            <Grid item xs={12} md={3}>
                {getAttributeSelector("attribute24", "Attributo a 2")}
            </Grid>
            <Grid item xs={12}>
                <Typography paragraph>
                    ... e infine, uno a livello 1:
                </Typography>
            </Grid>
            <Grid item xs={12}>
                {getAttributeSelector("attribute1", "Attributo a 1")}
            </Grid>
        </>;

    const getForm = () => {
        if (character?.id != null) {
            return (
                <Box sx={{
                    paddingTop: theme.spacing(4),
                    paddingBottom: theme.spacing(4),
                    margin: '0 auto',
                    maxWidth: '90%',
                    minWidth: '55%'
                }}>
                    <Grid container>
                        <Creation2Explanation />
                        <Grid item xs={12} sx={{
                            margin: "20px"
                        }}>
                            <TemplateSelectionControl characterId={character.id} />
                        </Grid>
                        <Grid item xs={12}>
                            <CreationBase characterId={character.id}
                                          currentStage={2}
                                          attributeTypeName="Attribute"
                                          emptyAttributes={emptyAttributes}
                                          getAttributesToSave={getAttributesToSave}>
                                {form}
                            </CreationBase>
                        </Grid>
                    </Grid>
                </Box>
            );
        }
        
        return <></>;
    }

    return getForm();
}

export default Creation2;