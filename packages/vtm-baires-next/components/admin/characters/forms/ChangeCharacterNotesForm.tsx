import React, {ChangeEvent, useState} from "react";
import type {Character} from "vtm-baires-next-services/graphql-queries/queries/character/GetCharacterCompleteQuery";
import {useRelayEnvironment} from "react-relay";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ChangeCharacterNotesMutation from "vtm-baires-next-services/graphql-queries/mutations/admin/ChangeCharacterNotesMutation";
import type {ReactElement} from "react";
import {useDialog, useCustomSnackbar} from "vtm-baires-next-components";
import {handleMutation} from "vtm-baires-next-utils";

type Props = {
    character: Character;
    onUpdate: () => void;
};

const ChangeCharacterNotesForm = ({character, onUpdate}: Props): ReactElement => {
    const {enqueueSnackbar} = useCustomSnackbar()
    const {showDialog} = useDialog()
    const environment = useRelayEnvironment();

    const [advantages, setAdvantages] = useState(character?.advantages ?? "");
    const [notes, setNotes] = useState(character?.notes ?? "");
    const [disciplinePowers, setDisciplinePowers] = useState(character?.disciplinePowers ?? "");
    const [specialties, setSpecialties] = useState(character?.specialties ?? "");
    const [convictions, setConvictions] = useState(character?.convictions ?? "");

    const onAdvantagesChanged = ({target: {value}}: ChangeEvent<HTMLInputElement>) => {
        setAdvantages((_: any) => value);
    };

    const onNotesChanged = ({target: {value}}: ChangeEvent<HTMLInputElement>) => {
        setNotes((_: any) => value);
    };

    const onDisciplinePowersChanged = ({target: {value}}: ChangeEvent<HTMLInputElement>) => {
        setDisciplinePowers((_: any) => value);
    };

    const onSpecialtiesChanged = ({target: {value}}: ChangeEvent<HTMLInputElement>) => {
        setSpecialties((_: any) => value);
    }

    const onConvictionsChanged = ({target: {value}}: ChangeEvent<HTMLInputElement>) => {
        setConvictions((_: any) => value);
    };

    const changeCharacterNotes = (_: any) => {
        showDialog(
            `Cambio di status per ${character.name ?? ""}`,
            `Sei sicuro di voler cambiare le note del personaggio?`,
            () => {
                handleMutation(() => ChangeCharacterNotesMutation(environment, {
                    characterId: character.id,
                    advantages,
                    notes,
                    disciplinePowers,
                    specialties,
                    convictions
                }), enqueueSnackbar, {
                    successMessage: "Il personaggio è stato modificato correttamente. Per visualizzare le nuove modifiche, è necessario aggiornare la pagina (F5)",
                    errorMessage: "C'è stato un errore durante la modifica del personaggio, contatta l'admin per maggiori informazioni.",
                    onCompleted: onUpdate
                });
            }
        );
    };

    return (
        <Grid item xs={12}>
            <Grid container>
                <Grid item xs={12} sx={{margin: "10px"}}>
                    <TextField id="advantages"
                               label="Vantaggi"
                               fullWidth
                               multiline
                               rows={3}
                               defaultValue={advantages}
                               onChange={onAdvantagesChanged}
                               variant="filled" />
                </Grid>
                <Grid item xs={12} sx={{margin: "10px"}}>
                    <TextField id="notes"
                               label="Note del Personaggio"
                               fullWidth
                               multiline
                               rows={3}
                               defaultValue={notes}
                               onChange={onNotesChanged}
                               variant="filled" />
                </Grid>
                <Grid item xs={12} sx={{margin: "10px"}}>
                    <TextField id="disciplinePowers"
                               label="Poteri di Disciplina"
                               fullWidth
                               multiline
                               rows={3}
                               defaultValue={disciplinePowers}
                               onChange={onDisciplinePowersChanged}
                               variant="filled" />
                </Grid>
                <Grid item xs={12} sx={{margin: "10px"}}>
                    <TextField id="specialties"
                               label="Specialità"
                               fullWidth
                               multiline
                               rows={3}
                               defaultValue={specialties}
                               onChange={onSpecialtiesChanged}
                               variant="filled" />
                </Grid>
                <Grid item xs={12} sx={{margin: "10px"}}>
                    <TextField id="convictions"
                               label="Convinzioni"
                               fullWidth
                               multiline
                               rows={3}
                               defaultValue={convictions}
                               onChange={onConvictionsChanged}
                               variant="filled" />
                </Grid>
                <Grid item xs={12} sx={{
                    padding: "10px",
                    textAlign: "center"
                }}>
                    <Button variant="outlined"
                            onClick={changeCharacterNotes}>Aggiorna</Button>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default ChangeCharacterNotesForm;
