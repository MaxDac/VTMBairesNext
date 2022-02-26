import React, {ChangeEvent, ReactElement, useState} from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import {useRouter} from "next/router";
import {useRelayEnvironment} from "react-relay";
import type {Character} from "vtm-baires-next-services/graphql-queries/queries/character/GetCharacterCompleteQuery";
import type {Option} from "vtm-baires-next-utils";
import ApproveCharacterMutation
    from "vtm-baires-next-services/graphql-queries/mutations/characters/ApproveCharacterMutation";
import {AlertType} from "vtm-baires-next-utils";
import {useDialog, useCustomSnackbar} from "vtm-baires-next-components";
import {handleMutation} from "vtm-baires-next-utils";
import {Routes} from "../../../base/routes";
import RejectCharacterMutation
    from "vtm-baires-next-services/graphql-queries/mutations/characters/RejectCharacterMutation";

type Props = {
    character: Character;
}

const ApproveCharacterForm = ({character}: Props): ReactElement => {
    const router = useRouter();
    const {enqueueSnackbar} = useCustomSnackbar()
    const {showDialog} = useDialog()
    const environment = useRelayEnvironment();
    const [reason, setReason] = useState<Option<string>>(null);

    const approveCharacter = (_: any) => {
        showDialog(`Accetta ${character.name ?? ""}`, "Sei sicuro di voler accettare questo personaggio?", () => {
            const promise: Promise<boolean> = ApproveCharacterMutation(environment, character.id, reason ?? "");
            handleMutation(() => promise, enqueueSnackbar, {
                successMessage: "Il personaggio è stato accettato.",
                errorMessage: "C'è stato un errore durante l'accettazione del personaggio, contatta l'admin per maggiori informazioni.",
                onCompleted: () => router.push(Routes.unapprovedCharacters)
            });
        });
    };

    const rejectCharacter = (_: any) => {
        if (reason != null && reason !== "") {
            showDialog(`Rifiuta ${character.name ?? ""}`, "Sei sicuro di voler rifiutare questo personaggio?", () => {
                const promise: Promise<boolean> = RejectCharacterMutation(environment, character.id, reason);
                handleMutation(() => promise, enqueueSnackbar, {
                    successMessage: "Il personaggio è stato correttamente rifiutato.",
                    errorMessage: "C'è stato un errore durante l'accettazione del personaggio, contatta l'admin per maggiori informazioni.",
                    onCompleted: () => router.push(Routes.unapprovedCharacters)
                });
            });
        }
        else {
            enqueueSnackbar({
                type: AlertType.Warning,
                message: "Non puoi rifiutare un personaggio senza dare una motivazione"
            })
        }
    };

    if (character?.approved !== true && character?.isComplete === true) {
        return (
            <Grid item xs={12}>
                <Paper variant="outlined" sx={{margin: "10px"}}>
                    <Grid item xs={12}>
                        <Box sx={{
                            margin: "20px",
                            textAlign: "center"
                        }}>
                            <Grid container>
                                <Grid item xs={6}>
                                    <Button variant="outlined"
                                            onClick={rejectCharacter}>Rifiuta personaggio</Button>
                                </Grid>
                                <Grid item xs={6}>
                                    <Button variant="outlined"
                                            onClick={approveCharacter}>Approva personaggio</Button>
                                </Grid>
                                <Grid item xs={12} sx={{
                                    paddingTop: "15px",
                                    paddingLeft: "10px", 
                                    paddingRight: "10px"
                                }}>
                                    <TextField id="filled-basic" 
                                            label="Ragione" 
                                            variant="filled" 
                                            onChange={({target: {value}}: ChangeEvent<HTMLInputElement>) => setReason((_: any) => value)}
                                            fullWidth />
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Paper>
            </Grid>
        );
    }

    return (<></>);
}

export default ApproveCharacterForm;
