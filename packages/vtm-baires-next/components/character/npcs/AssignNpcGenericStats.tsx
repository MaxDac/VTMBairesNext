import React from "react";
import {number, object, string} from "yup";
import {useFormik} from "formik";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import {useTheme} from "@mui/material/styles";
import {useRelayEnvironment} from "react-relay";
import type {ReactElement} from "react";
import {FormTextField, useCustomSnackbar} from "vtm-baires-next-components";
import {
    useCharacterStatsQuery
} from "vtm-baires-next-services/graphql-queries/queries/character/GetCharacterStatsQuery";
import {
    useCharacterCompleteQuery
} from "vtm-baires-next-services/graphql-queries/queries/character/GetCharacterCompleteQuery";
import {usePredatorTypes} from "vtm-baires-next-services/graphql-queries/queries/info/PredatorTypesQuery";
import {handleMutation, rangeArray} from "vtm-baires-next-utils";
import DefineNpcStatsMutation from "vtm-baires-next-services/graphql-queries/mutations/npcs/DefineNpcStatsMutation";
import {
    NpcStatsRequest
} from "vtm-baires-next-services/graphql-queries/mutations/npcs/__generated__/DefineNpcStatsMutation.graphql";
import {FormSelectField} from "vtm-baires-next-components";

type Props = {
    characterId: string
}

const DefineNpcFormValidationSchema = object().shape({
    notes: string(),
    advantages: string().required("Required"),
    humanity: number().required("Required"),
    willpower: number().required("Required"),
    bloodPotency: number().required("Required"),
    generation: number().required("Required"),
    predatorTypeId: string().required("Required")
});

const AssignNpcGenericStats = ({characterId}: Props): ReactElement => {
    const environment = useRelayEnvironment();
    const {enqueueSnackbar} = useCustomSnackbar()
    const character = useCharacterCompleteQuery(characterId);
    const characterStats = useCharacterStatsQuery(characterId);
    const predatorTypes = usePredatorTypes()?.predatorTypes;
    const theme = useTheme();

    const onSubmit = (values: NpcStatsRequest) =>
        handleMutation(
            () => DefineNpcStatsMutation(environment, characterId, values),
            enqueueSnackbar,
            {});

    const formik = useFormik({
        initialValues: {
            notes: character?.notes,
            advantages: character?.advantages ?? "",
            humanity: 7,
            willpower: 5,
            bloodPotency: 1,
            generation: 13,
            predatorTypeId: characterStats?.predatorType?.id ?? ""
        },
        validationSchema: DefineNpcFormValidationSchema,
        onSubmit
    });

    const tenthValues = (): [string, string][] => {
        const values: [string, string][] = [];

        for (const v of rangeArray(1, 10)) {
            values.push([String(v), String(v)]);
        }

        return values;
    }

    const bloodPotencyValues = (): [number, string][] => [
        [0, "0"],
        [1, "1"],
        [2, "2"],
        [3, "3"]
    ];

    const generationValues = (): [number, string][] => [
        [13, "13"],
        [12, "12"],
        [11, "11"],
        [10, "10"],
        [9, "9"],
    ];

    const predatorTypesCasted = (): [string, string][] =>
        predatorTypes?.map(p => [p?.id ?? "", p?.name ?? ""] as [string, string]) ?? [];

    const predatorTypeDropdownValues = (): [string, string][] =>
        ([["", ""]] as [string, string][]).concat(predatorTypesCasted());

    const dropdownStyle = ({
        textAlign: "center"
    });

    return (
        <form noValidate onSubmit={formik.handleSubmit}>
            <Grid container>
                <Grid item xs={12}>
                    <FormTextField formik={formik}
                                   fieldName="notes"
                                   rows={4}
                                   label="Note"
                                   fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <FormTextField formik={formik}
                                   fieldName="advantages"
                                   rows={4}
                                   label="Vantaggi"
                                   fullWidth />
                </Grid>
                <Grid item xs={12} sm={6} lg={2} sx={dropdownStyle}>
                    <FormSelectField formik={formik}
                                     fieldName="humanity"
                                     label="Umanità"
                                     values={tenthValues()} />
                </Grid>
                <Grid item xs={12} sm={6} lg={2} sx={dropdownStyle}>
                    <FormSelectField formik={formik}
                                     fieldName="willpower"
                                     label="Forza di Volontà"
                                     values={tenthValues()} />
                </Grid>
                <Grid item xs={12} sm={6} lg={2} sx={dropdownStyle}>
                    <FormSelectField formik={formik}
                                     fieldName="generation"
                                     label="Generazione"
                                     values={generationValues()} />
                </Grid>
                <Grid item xs={12} sm={6} lg={2} sx={dropdownStyle}>
                    <FormSelectField formik={formik}
                                     fieldName="bloodPotency"
                                     label="Potenza del Sangue"
                                     values={bloodPotencyValues()} />
                </Grid>
                <Grid item xs={12} sm={6} lg={4} sx={dropdownStyle}>
                    <FormSelectField formik={formik}
                                     fieldName="predatorTypeId"
                                     label="Predatore"
                                     sx={{width: theme.spacing(35)}}
                                     values={predatorTypeDropdownValues()} />
                </Grid>
                <Grid item xs={12} sx={{
                    textAlign: "center",
                    padding: theme.spacing(3)
                }}>
                    <Button type="submit"
                        variant="outlined"
                        color="primary">
                        Salva
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
}

export default AssignNpcGenericStats;
