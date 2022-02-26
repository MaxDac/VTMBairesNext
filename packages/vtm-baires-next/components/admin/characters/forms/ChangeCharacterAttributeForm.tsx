import type {ReactElement} from "react";
import React, {useState} from "react";
import type {Character} from "vtm-baires-next-services/graphql-queries/queries/character/GetCharacterCompleteQuery";
import Grid from "@mui/material/Grid";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from "@mui/material/Button";
import {useRelayEnvironment} from "react-relay";
import ChangeCharacterAttributeMutation
    from "vtm-baires-next-services/graphql-queries/mutations/admin/ChangeCharacterAttributeMutation";
import {UseAttributeSelectOptions} from "./hooks";
import type {Option} from "vtm-baires-next-utils";
import {AlertType, handleMutation, rangeArray} from "vtm-baires-next-utils";
import {useCustomSnackbar, useDialog} from "vtm-baires-next-components";
import {SelectChangeEvent} from "@mui/material";

type Props = {
    character: Character;
    onUpdate: () => void;
}

const ChangeCharacterAttributeForm = ({character, onUpdate}: Props): ReactElement => {
    const {enqueueSnackbar} = useCustomSnackbar()
    const {showDialog} = useDialog()
    const environment = useRelayEnvironment();
    const [attributes, attributeSelectOptions] = UseAttributeSelectOptions();

    const [attributeId, setAttributeId] = useState<Option<string>>(null);
    const [newValue, setNewValue] = useState(0);

    const changeCharacterAttribute = (_: any) => {
        if (attributeId == null) {
            enqueueSnackbar({
                type: AlertType.Error,
                message: "Devi selezionare un attributo"
            });
            return;
        }

        const attributeName = attributes?.filter(x => x?.id === attributeId)[0]?.name;

        showDialog(
            `Cambio di attributo per ${character.name ?? ""}`,
            `Sei sicuro di voler cambiare il valore di ${attributeName ?? ""} a ${newValue}?`,
            () => {
                handleMutation(() => ChangeCharacterAttributeMutation(environment, {
                    characterId: character.id,
                    attributeId: attributeId,
                    newValue: newValue
                }), enqueueSnackbar, {
                    successMessage: "Il personaggio è stato modificato correttamente. Per visualizzare le nuove modifiche, è necessario aggiornare la pagina (F5)",
                    errorMessage: "C'è stato un errore durante la modifica del personaggio, contatta l'admin per maggiori informazioni.",
                    onCompleted: onUpdate
                });
            }
        );
    }

    const possibleValuesOptions = () => {
        const options = [];

        for (let i of rangeArray(0, 5)) {
            options.push(<MenuItem key={i} value={i}>{i}</MenuItem>);
        }

        return options;
    };

    const controlContainerStyle = {
        textAlign: "center"
    };

    const attributeSelected = ({target: {value}}: SelectChangeEvent<string>) => setAttributeId((_: any) => value);

    const valueSelected = ({target: {value}}: SelectChangeEvent<string>) => setNewValue((_: any) => Number(value));

    return (
        <Grid item xs={12}>
            <Grid container sx={{margin: "20px"}}>
                <Grid item xs={12} sm={4} sx={controlContainerStyle}>
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
                <Grid item xs={12} sm={4} sx={controlContainerStyle}>
                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel htmlFor="value-select">Nuovo Valore</InputLabel>
                        <Select defaultValue="0"
                                id="value-select"
                                label="Nuovo valore"
                                onChange={valueSelected}>
                            {possibleValuesOptions()}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={4} sx={{paddingTop: "20px"}}>
                    <Button variant="outlined"
                            onClick={changeCharacterAttribute}>Aggiorna attributo</Button>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default ChangeCharacterAttributeForm;
