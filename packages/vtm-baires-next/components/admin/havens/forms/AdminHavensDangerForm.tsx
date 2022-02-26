import React, {ForwardedRef} from "react";
import {number, object} from "yup";
import type {Haven} from "vtm-baires-next-services/graphql-queries/queries/haven/GetHavensQuery";
import type {ReactElement} from "react";
import {useFormik} from "formik";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import {FormSelectField} from "vtm-baires-next-components";
import {rangeArray} from "vtm-baires-next-utils/src/utils";

const AdminHavensDangerFormSchema = object().shape({
    danger: number().required(),
    range: number().required()
});

export type DangerFormSubmitProps = {
    danger: number;
    range: number;
};

type AdminHavensDangerFormInternalProps = {
    haven: Haven;
    onSubmit: (props: DangerFormSubmitProps) => void;
};

const AdminHavensDangerForm =
    React.forwardRef(({haven, onSubmit}: AdminHavensDangerFormInternalProps, ref: ForwardedRef<any>): ReactElement => {
        const dangerValues = rangeArray(0, 10).map(x => [String(x), String(x)]) as [string, string][];
        const rangeValues = rangeArray(1, 5).map(x => [String(x), String(x)]) as [string, string][];

        const formik = useFormik({
            initialValues: {
                danger: 1,
                range: 1
            },
            validationSchema: AdminHavensDangerFormSchema,
            onSubmit
        });

        return (
            <form noValidate onSubmit={formik.handleSubmit}>
                <Grid container sx={{
                    paddingTop: "1rem",
                    width: "100%",
                    textAlign: "center"
                }}>
                    <Grid item xs={6}>
                        <FormSelectField formik={formik}
                                         fieldName="danger"
                                         label="Livello di Pericolo"
                                         values={dangerValues} />
                    </Grid>
                    <Grid item xs={6}>
                        <FormSelectField formik={formik}
                                         fieldName="range"
                                         label="Estensione"
                                         values={rangeValues} />
                    </Grid>
                    <Button ref={ref}
                            type="submit"
                            sx={{display: "none"}} />
                </Grid>
            </form>
        );
    });

export default AdminHavensDangerForm;
