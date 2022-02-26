import React, {ChangeEvent, useState} from "react";
import type {Character} from "vtm-baires-next-services/graphql-queries/queries/character/GetCharacterCompleteQuery";
import {useRelayEnvironment} from "react-relay";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import ChangeCharacterHuntDifficultyMutation
    from "vtm-baires-next-services/graphql-queries/mutations/admin/ChangeCharacterHuntDifficultyMutation";
import type {ReactElement} from "react";
import {useDialog, useCustomSnackbar} from "vtm-baires-next-components";
import {handleMutation} from "vtm-baires-next-utils";
import {SelectChangeEvent} from "@mui/material";
import {rangeArray} from "vtm-baires-next-utils";

type Props = {
    character: Character;
    onUpdate: () => void;
}

const SetHuntDifficultyForm = ({character, onUpdate}: Props): ReactElement => {
    const {enqueueSnackbar} = useCustomSnackbar()
    const {showDialog} = useDialog()
    const environment = useRelayEnvironment();

    const [huntDifficulty, setHuntDifficulty] = useState(character?.huntDifficulty);

    const onHuntDifficultyChanged = ({target: {value}}: SelectChangeEvent<string>) => {
        setHuntDifficulty((_: any) => Number(value));
    };

    const possibleValuesOptions = () => {
        const options = [];

        for (let i of rangeArray(0, 6)) {
            options.push(<MenuItem key={i} value={i}>{i}</MenuItem>);
        }

        return options;
    };

    const changeCharacterHuntDifficulty = (_: any) => {
        if (huntDifficulty != null) {
            showDialog(
                `Cambio della difficoltà di caccia`,
                `Sei sicuro di voler cambiare la difficoltà di caccia a ${huntDifficulty} per ${character.name ?? ""}?`,
                () => {
                    const promise = ChangeCharacterHuntDifficultyMutation(environment, {
                        characterId: character.id,
                        huntDifficulty
                    });

                    handleMutation(() => promise, enqueueSnackbar, {
                        successMessage: "Il personaggio è stato modificato correttamente. Per visualizzare le nuove modifiche, è necessario aggiornare la pagina (F5)",
                        errorMessage: "C'è stato un errore durante la modifica del personaggio, contatta l'admin per maggiori informazioni.",
                        onCompleted: onUpdate
                    });
                }
            );
        }
    };

    return (
        <Grid item xs={12}>
            <Grid container>
                <Grid item xs={12} sm={6} sx={{textAlign: "center"}}>
                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel htmlFor="experience">Difficolt&agrave; della caccia</InputLabel>
                        <Select defaultValue={String(character?.huntDifficulty)}
                                id="huntDifficulty"
                                label="Difficoltà della caccia"
                                onChange={onHuntDifficultyChanged}
                                sx={{minWidth: "150px"}}>
                            {possibleValuesOptions()}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} sx={{paddingTop: "20px", textAlign: "center"}}>
                    <Button variant="outlined"
                            onClick={changeCharacterHuntDifficulty}>
                        Cambia Difficolt&agrave; della Caccia
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default SetHuntDifficultyForm;
