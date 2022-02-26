import React from "react";
import Grid from "@mui/material/Grid";
import {object, ref, string} from "yup";
import {useFormik} from "formik";
import Button from "@mui/material/Button";
import {useTheme} from "@mui/material/styles";
import {Box} from "@mui/material";
import type {ReactElement} from "react";
import {FormSelectField} from "vtm-baires-next-components";

type Props = {
    firstAttributeLabel: string;
    secondAttributeLabel: string;
    characterId: string;
    values: [string, string][];
    onChangeSelected: (attributes: {
        characterId: string;
        firstAttribute: string;
        secondAttribute: string;
    }) => void;
}

const AttributeSwitchValidationSchema = object().shape({
    firstAttribute: string().required("Required"),
    secondAttribute: string()
        .required("Required")
        .notOneOf([ref("firstAttribute"), null], "Hai selezionato lo stesso attributo")
});

const AttributeSwitchControl = (props: Props): ReactElement => {
    const theme = useTheme();
    const formik = useFormik({
        initialValues: {
            firstAttribute: "",
            secondAttribute: ""
        },
        validationSchema: AttributeSwitchValidationSchema,
        onSubmit: v => props.onChangeSelected({
            characterId: props.characterId,
            ...v
        })
    });

    return (
        <Box sx={{padding: theme.spacing(2)}}>
            <form noValidate onSubmit={formik.handleSubmit}>
                <Grid container>
                    <Grid item xs={12} sm={6} md={4}>
                        <FormSelectField formik={formik}
                                         fieldName="firstAttribute"
                                         label={props.firstAttributeLabel}
                                         values={props.values} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <FormSelectField formik={formik}
                                         fieldName="secondAttribute"
                                         label={props.secondAttributeLabel}
                                         values={props.values} />
                    </Grid>
                    <Grid item xs={12} md={4} sx={{textAlign: "left", paddingTop: theme.spacing(2)}}>
                        <Button type="submit"
                                variant="outlined"
                                color="primary">
                            Cambia
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Box>
    );
}

export default AttributeSwitchControl;
