import React, {useState} from "react";
import type {Character} from "vtm-baires-next-services/graphql-queries/queries/character/GetCharacterCompleteQuery";
import {useRelayEnvironment} from "react-relay";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import {UseAttributeSelectOptions} from "./hooks";
import SpendCharacterExperienceMutation from "vtm-baires-next-services/graphql-queries/mutations/admin/SpendCharacterExperienceMutation";
import type {ReactElement} from "react";
import {useDialog, useCustomSnackbar} from "vtm-baires-next-components";
import {handleMutation} from "vtm-baires-next-utils";
import type {Option} from "vtm-baires-next-utils";
import {SelectChangeEvent} from "@mui/material";
import {rangeArray, AlertType} from "vtm-baires-next-utils";

type Props = {
    character: Character;
    onUpdate: () => void;
}

const SpendCharacterExperienceForm = ({character, onUpdate}: Props): ReactElement => {
    const {enqueueSnackbar} = useCustomSnackbar()
    const {showDialog} = useDialog()
    const environment = useRelayEnvironment();
    const [attributes, attributeSelectOptions] = UseAttributeSelectOptions(true);

    const [attributeId, setAttributeId] = useState<Option<string>>(null);
    const [customCost, setCustomCost] = useState(0);

    const attributeSelected = ({target: {value}}: SelectChangeEvent<string>) =>
        setAttributeId((_: any) => value);

    const onExperienceCostChanged = ({target: {value}}: SelectChangeEvent<string>) =>
        setCustomCost((_: any) => Number(value));

    const possibleValuesOptions = () => {
        const options = [];

        for (let i of rangeArray(0, 5)) {
            options.push(<MenuItem key={i} value={i}>{i}</MenuItem>);
        }

        return options;
    };

    const changeCharacterAttribute = (_: any) => {
        if (attributeId == null && customCost === 0) {
            enqueueSnackbar({
                type: AlertType.Warning,
                message: "Devi selezionare l'attributo da aumentare o il numero di punti esperienza da spendere."
            });
            return;
        }

        const customCostLabel =
            customCost > 0
                ? customCost === 1 ? ` ${customCost} punto esperienza` : ` ${customCost} punti esperienza`
                : " punti esperienza";

        const [{name: attributeLabel = null} = {},] = attributes?.filter(x => x.id === attributeId) ?? [];

        const attributeDialogLabel =
            attributeLabel != null
                ? ` per acquistare un punto di ${attributeLabel}`
                : "";

        showDialog(
            `Spesa di punti esperienza per ${character.name ?? ""}`,
            `Sei sicuro di voler spendere ${customCostLabel} di ${character.name ?? ""}${attributeDialogLabel}?`,
            () => {
                const promise = SpendCharacterExperienceMutation(environment, {
                    characterId: character.id,
                    attributeId: attributeId,
                    customExperienceExpenditure: customCost
                });

                handleMutation(() => promise, enqueueSnackbar, {
                    successMessage: "Il personaggio è stato modificato correttamente. Per visualizzare le nuove modifiche, è necessario aggiornare la pagina (F5)",
                    errorMessage: "C'è stato un errore durante la modifica del personaggio, contatta l'admin per maggiori informazioni.",
                    onCompleted: onUpdate
                });
            }
        );
    };

    const controlContainerStyle = {
        textAlign: "center"
    };

    return (
        <Grid item xs={12}>
            <Grid container>
                <Grid item xs={12} sm={3} sx={controlContainerStyle}>
                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel htmlFor="attribute-select">Attributo</InputLabel>
                        <Select defaultValue=""
                                id="attribute-select"
                                label="Attributo"
                                onChange={attributeSelected}>
                            {attributeSelectOptions()}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={3} sx={{textAlign: "center"}}>
                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel htmlFor="experience">Esperienza</InputLabel>
                        <Select defaultValue="0"
                                id="experience"
                                label="Esperienza"
                                onChange={onExperienceCostChanged}>
                            {possibleValuesOptions()}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} sx={{paddingTop: "20px", textAlign: "center"}}>
                    <Button variant="outlined"
                            onClick={changeCharacterAttribute}>
                        Spendi Esperienza
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default SpendCharacterExperienceForm;
