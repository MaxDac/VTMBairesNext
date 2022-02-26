import React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import type {Character} from "vtm-baires-next-services/graphql-queries/queries/character/GetCharacterCompleteQuery";
import {useRelayEnvironment} from "react-relay";
import ResetHuntMutation from "vtm-baires-next-services/graphql-queries/mutations/admin/ResetHuntMutation";
import type {ReactElement} from "react";
import {useDialog, useCustomSnackbar} from "vtm-baires-next-components";
import {handleMutation} from "vtm-baires-next-utils";

type Props = {
    character: Character;
    onUpdate: () => void;
}

const ResetHuntForm = ({character, onUpdate}: Props): ReactElement => {
    const environment = useRelayEnvironment();
    const {enqueueSnackbar} = useCustomSnackbar()
    const {showDialog} = useDialog()

    const resetCharacterHunt = () =>
        showDialog(
            "Resetta esito caccia",
            `Sei sicuro di voler resettare l'esito della caccia di ${character?.name ?? ""}?`,
            () => {
                handleMutation(
                    () => ResetHuntMutation(environment, character?.id),
                    enqueueSnackbar, {
                        successMessage: "L'esito della caccia è stato correttamente resettato.",
                        onCompleted: onUpdate
                    });
            }
        );

    return (
        <Grid item xs={12} sx={{
            margin: "20px",
            textAlign: "center"
        }}>
            <Button variant="contained"
                    onClick={resetCharacterHunt}>
                Resetta l'esito della Caccia
            </Button>
        </Grid>
    );
}

export default ResetHuntForm;
