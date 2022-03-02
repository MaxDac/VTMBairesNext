import type {ReactElement} from "react";
import React from "react";
import Grid from "@mui/material/Grid";
import AssignNpcAttributes from "../../../../../components/character/npcs/AssignNpcAttributes";
import AssignNpcGenericStats from "../../../../../components/character/npcs/AssignNpcGenericStats";
import Button from "@mui/material/Button";
import {useRelayEnvironment} from "react-relay";
import Typography from "@mui/material/Typography";
import {useRouter} from "next/router";
import {useCustomSnackbar, useDialog} from "vtm-baires-next-components";
import {handleMutation} from "vtm-baires-next-utils";
import ConfirmPngMutation from "vtm-baires-next-services/graphql-queries/mutations/characters/ConfirmPngMutation";
import {Routes} from "../../../../../base/routes";
import MainLayout from "../../../../../components/layouts/MainLayout";
import Index from "../../../../Main";

type Props = {
    characterId: string;
}

const Define = ({characterId}: Props): ReactElement => {
    const router = useRouter();
    const environment = useRelayEnvironment();
    const {showDialog} = useDialog();
    const {enqueueSnackbar} = useCustomSnackbar();

    const confirmPng = () => {
        showDialog(
            "Conferma personaggio",
            "Sei sicuro di voler confermare il personaggio? Potrai comunque continuare ad editarlo successivamente.",
            () => {
                handleMutation(() => ConfirmPngMutation(environment, characterId), enqueueSnackbar, {
                    onCompleted: () => router.push(Routes.characterDashboard(characterId))
                });
            });
    }

    return (
        <Grid container>
            <Grid item xs={12}>
                <Typography>
                    In questa schermata puoi assegnare le informazioni generali, gli Attributi e le Abilit&agrave; del personaggio.
                </Typography>
                <Typography>
                    Ricorda che sar&agrave; sempre possibile cambiare gli attributi della scheda, associare Discipline e Vantaggi direttamente nella schermata di modifica successiva.
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <AssignNpcGenericStats characterId={characterId} />
            </Grid>
            <Grid item xs={12}>
                <AssignNpcAttributes characterId={characterId} />
            </Grid>
            <Grid item xs={12} sx={{
                margin: "10px",
                padding: "10px"
            }}>
                <Button type="submit"
                        variant="outlined"
                        fullWidth
                        color="primary"
                        onClick={(_: any) => confirmPng()}>
                    Conferma Personaggio non Giocante
                </Button>
            </Grid>
        </Grid>
    );
}

Define.getLayout = (page: ReactElement) => (
    <MainLayout>
        {page}
    </MainLayout>
)

export default Define;
