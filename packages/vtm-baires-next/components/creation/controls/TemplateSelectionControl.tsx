import type {ReactElement} from "react";
import React, {useState} from "react";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import {useTheme} from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import {useRelayEnvironment} from "react-relay";
import {useRouter} from "next/router";
import type {Option} from "vtm-baires-next-utils";
import {useWait, useCustomSnackbar, useDialog} from "vtm-baires-next-components";
import {useCustomLazyLoadQuery} from "vtm-baires-next-utils/src/relay-utils";
import {
    getCreationTemplateQuery
} from "vtm-baires-next-services/graphql-queries/queries/character/GetCreationTemplateQuery";
import type {
    GetCreationTemplateQuery
} from "vtm-baires-next-services/graphql-queries/queries/character/__generated__/GetCreationTemplateQuery.graphql";
import {AlertType} from "vtm-baires-next-utils";
import ApplyTemplateToCharacterMutation
    from "vtm-baires-next-services/graphql-queries/mutations/characters/ApplyTemplateToCharacterMutation";
import {Routes} from "../../../base/routes";
import {SelectChangeEvent} from "@mui/material";

type Props = {
    characterId: string;
}

const TemplateSelectionControl = ({characterId}: Props): ReactElement => {
    const router = useRouter();
    const theme = useTheme();
    const {startWait, stopWait} = useWait()
    const {enqueueSnackbar} = useCustomSnackbar()
    const {showDialog} = useDialog()
    const environment = useRelayEnvironment();
    const templates = useCustomLazyLoadQuery<GetCreationTemplateQuery>(getCreationTemplateQuery)
        ?.getCreationTemplates ?? [];

    const [template, setTemplate] = useState<Option<string>>(null);

    const items = () =>
        [(<MenuItem key="0" value={undefined}>None</MenuItem>)]
            .concat(templates.map(t => (
                <MenuItem key={t?.id} value={t?.id}>{t?.name}</MenuItem>
            )));

    const onTemplateSelectionChange = ({target: {value}}: SelectChangeEvent<string>) => {
        setTemplate(value);
    };

    const selectTemplate = () => {
        if (template == null || template === "") {
            enqueueSnackbar({
                type: AlertType.Warning,
                message: "Devi prima selezionare un template."
            });
        }
        else {
            showDialog("Applicazione del template", "Sei sicuro di voler applicare il template la tuo personaggio?", () => {
                startWait();
                ApplyTemplateToCharacterMutation(environment, characterId, template)
                    .then(response => {
                        if (!response) {
                            enqueueSnackbar({
                                type: AlertType.Warning,
                                message: "C'è stato un problema nell'applicazione del template, prova ad aggiorare la pagina"
                            });
                        }
                        else {
                            router.push(Routes.creation4);
                        }
                    })
                    .catch(e => {
                        console.error("There was an error while saving the character", e);
                        enqueueSnackbar({
                            type: AlertType.Error,
                            message: "C'è stato un problema nell'applicazione del template, prova ad aggiorare la pagina"
                        });
                    })
                    .finally(() => stopWait());
            })
        }
    }

    return (
        <Grid container sx={{
            textAlign: "center"
        }}>
            <Grid item xs={12} sm={6}>
                <FormControl variant="outlined" sx={{
                    margin: theme.spacing(1),
                    minWidth: 150
                }}>
                    <InputLabel id="template-label">Templates</InputLabel>
                    <Select labelId="template-label"
                            label="Templates"
                            fullWidth
                            onChange={onTemplateSelectionChange}
                            sx={{
                                minWidth: theme.spacing(10)
                            }}>
                        {items()}
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} sx={{display: "inline-flex"}}>
                <Button variant="outlined"
                        onClick={selectTemplate}
                        sx={{marginTop: "auto", marginBottom: "auto"}}>
                    Seleziona template
                </Button>
            </Grid>
        </Grid>
    );
}

export default TemplateSelectionControl;
