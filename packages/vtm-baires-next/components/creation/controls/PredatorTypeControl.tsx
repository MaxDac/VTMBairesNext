import React from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import type {ReactElement} from "react";
import type {
    CharacterFragments_characterConcealedInfo$data
} from "vtm-baires-next-services/graphql-queries/queries/character/__generated__/CharacterFragments_characterConcealedInfo.graphql";
import {useCustomLazyLoadQuery} from "vtm-baires-next-utils";
import {predatorTypesQuery} from "vtm-baires-next-services/graphql-queries/queries/info/PredatorTypesQuery";
import {
    PredatorTypesQuery
} from "vtm-baires-next-services/graphql-queries/queries/info/__generated__/PredatorTypesQuery.graphql";
import {characterIsVampire} from "../../character/character-utils";
import Link from "next/link";
import {GuideRoutes} from "../../../base/routes";
import {useTheme} from "@mui/material/styles";

type Props = {
    characterInfo: CharacterFragments_characterConcealedInfo$data;
    formik: any;
}

const PredatorTypeControl = ({characterInfo, formik}: Props): ReactElement => {
    const theme = useTheme();
    const {predatorTypes} = useCustomLazyLoadQuery<PredatorTypesQuery>(predatorTypesQuery, {});

    const showPredatorTypes = () => {
        const options = [<MenuItem key="None" value="">None</MenuItem>];

        if (predatorTypes && predatorTypes.length > 0) {
            return [...options, ...predatorTypes.map(d => <MenuItem key={d?.id} value={d?.id}>{d?.name}</MenuItem>)];
        }

        return options;
    }

    const predatorTypeSelector = () => {
        if (characterIsVampire(characterInfo)) {
            return (
                <>
                    <Grid item xs={12}>
                        <Typography paragraph sx={{marginTop: "1.5rem", marginBottom: "1.5rem"}}>
                            Il Tipo di Predatore &egrave; una nuova caratteristica
                            del personaggio che interessa il modo in cui caccia il Sangue dei mortali (o dei Cainiti).
                            Puoi trovare pi&ugrave; informazioni riguardo il significato e i vari tipi tra i quali
                            puoi scegliere nella <Link href={GuideRoutes.creation}><a target="_blank"
                                                                                      rel="noreferrer">Guida</a></Link>.<br />
                            Scegli il tipo di predatore che il tuo personaggio dovr&agrave; interpretare.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} style={{textAlign: "center", marginBottom: "1rem"}}>
                        <FormControl sx={{
                            margin: theme.spacing(1),
                            minWidth: 150,
                        }}>
                            <InputLabel id="predator-type-label">Tipo di Predatore</InputLabel>
                            <Select labelId="predator-type-label"
                                    id="predatorType"
                                    name="predatorType"
                                    value={formik.values["predatorType"]}
                                    label="Tipo di Predatore"
                                    onChange={formik.handleChange}
                                    error={formik.touched["predatorType"] && Boolean(formik.errors["predatorType"])}
                                    style={{width: "200px"}}>
                                {showPredatorTypes()}
                            </Select>
                        </FormControl>
                    </Grid>
                </>
            )
        }

        return <></>;
    }

    return predatorTypeSelector();
}

export default PredatorTypeControl;
