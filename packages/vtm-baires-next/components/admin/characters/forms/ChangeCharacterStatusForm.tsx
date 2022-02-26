import React, {useState} from "react";
import type {Character} from "vtm-baires-next-services/graphql-queries/queries/character/GetCharacterCompleteQuery";
import {useRelayEnvironment} from "react-relay";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import SetCharacterStatusMutation from "vtm-baires-next-services/graphql-queries/mutations/admin/SetCharacterStatusMutation";
import type {ReactElement} from "react";
import {useDialog, useCustomSnackbar, baseMenuItems} from "vtm-baires-next-components";
import {handleMutation} from "vtm-baires-next-utils";
import {SelectChangeEvent} from "@mui/material";

type Props = {
    character: Character;
    onUpdate?: () => void;
}

const ChangeCharacterStatusForm = ({character, onUpdate}: Props): ReactElement => {
    const {enqueueSnackbar} = useCustomSnackbar()
    const {showDialog} = useDialog()
    const environment = useRelayEnvironment();

    const [hunger, setHunger] = useState(character?.hunger);
    const [damage, setDamage] = useState(character?.damage);
    const [aggravatedDamage, setAggravatedDamage] = useState(character?.aggravatedDamage);
    const [willpowerDamage, setWillpowerDamage] = useState(character?.willpowerDamage);
    const [stains, setStains] = useState(character?.stains);

    const changeCharacterOtherStats = (_: any) => {
        showDialog(
            `Cambio di status per ${character.name ?? ""}`,
            `Sei sicuro di voler cambiare i valori di status del personaggio?`,
            () => {
                handleMutation(() => SetCharacterStatusMutation(environment, character.id, {
                    hunger: hunger,
                    damage: damage,
                    aggravatedDamage: aggravatedDamage,
                    willpowerDamage: willpowerDamage,
                    stains: stains
                }), enqueueSnackbar, {
                    successMessage: "Il personaggio è stato modificato correttamente. Per visualizzare le nuove modifiche, è necessario aggiornare la pagina (F5)",
                    errorMessage: "C'è stato un errore durante la modifica del personaggio, contatta l'admin per maggiori informazioni.",
                    onCompleted: onUpdate
                });
            }
        );
    };

    const menuItems = (max: number) => baseMenuItems(0, max);

    const stainsItems = () => baseMenuItems(0, 10 - (character?.humanity ?? 0));

    const onHungerChanged = ({target: {value}}: SelectChangeEvent<string>) => {
        setHunger((_: any) => Number(value));
    };

    const onDamageChanged = ({target: {value}}: SelectChangeEvent<string>) => {
        setDamage((_: any) => Number(value));
    };

    const onAggravatedDamageChanged = ({target: {value}}: SelectChangeEvent<string>) => {
        setAggravatedDamage((_: any) => Number(value));
    };

    const onWillpowerDamageChanged = ({target: {value}}: SelectChangeEvent<string>) => {
        setWillpowerDamage((_: any) => Number(value));
    };

    const onStainsChanged = ({target: {value}}: SelectChangeEvent<string>) => {
        setStains((_: any) => Number(value));
    };

    const containerStyle = {
        textAlign: "center",
        padding: "10px"
    };

    return (
        <Grid item xs={12} sx={{margin: "20px"}}>
            <Grid container>
                <Grid item xs={12} md={3} sx={containerStyle}>
                    <FormControl sx={{width: "150px"}}>
                        <InputLabel id="hunger-label">Fame</InputLabel>
                        <Select labelId="hunger-label"
                                id="hunger"
                                value={String(hunger)}
                                label="Fame"
                                onChange={onHungerChanged}>
                            {menuItems(5)}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} md={3} sx={containerStyle}>
                    <FormControl sx={{width: "150px"}}>
                        <InputLabel id="damage-label">Danni superficiali</InputLabel>
                        <Select labelId="damage-label"
                                id="damage"
                                value={String(damage)}
                                label="Danni Superficiali"
                                onChange={onDamageChanged}>
                            {baseMenuItems(0, character?.health ?? 0)}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} md={3} sx={containerStyle}>
                    <FormControl sx={{width: "150px"}}>
                        <InputLabel id="aggravated-damage-label">Danni Aggravati</InputLabel>
                        <Select labelId="aggravated-damage-label"
                                id="aggravated-damage"
                                value={String(aggravatedDamage)}
                                label="Danni Aggravati"
                                onChange={onAggravatedDamageChanged}>
                            {baseMenuItems(0, character?.health ?? 0)}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={3} sx={containerStyle}>
                    <Button variant="outlined"
                            onClick={changeCharacterOtherStats}>Aggiorna</Button>
                </Grid>
                <Grid item xs={12} md={3} sx={containerStyle}>
                    <FormControl sx={{width: "150px"}}>
                        <InputLabel id="stains-label">Macchie</InputLabel>
                        <Select labelId="stains-label"
                                id="stains"
                                value={String(stains)}
                                label="Macchie"
                                onChange={onStainsChanged}>
                            {stainsItems()}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} md={3} sx={containerStyle}>
                    <FormControl sx={{width: "150px"}}>
                        <InputLabel id="willpower-damage-label">FdV Spesa</InputLabel>
                        <Select labelId="willpower-damage-label"
                                id="willpower-damage"
                                value={String(willpowerDamage)}
                                label="FdV Spesa"
                                onChange={onWillpowerDamageChanged}>
                            {menuItems(character?.willpower ?? 0)}
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default ChangeCharacterStatusForm;
