import React, {ForwardedRef} from "react";
import {number, object, string} from "yup";
import {useFormik} from "formik";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import type {Haven} from "vtm-baires-next-services/graphql-queries/queries/haven/GetHavensQuery";
import type {ReactElement} from "react";
import {rangeArray} from "vtm-baires-next-utils/src/utils";
import {FormSelectField} from "vtm-baires-next-components";

const AdminHavensResonanceFormSchema = object().shape({
    resonance: string().required("La risonanza è richiesta"),
    power: number().required(),
});

export type ResonancesFormSubmitProps = {
    resonance: string;
    power: number;
};

type AdminHavensResonanceFormInternalProps = {
    resonances: Array<[string, string]>;
    haven: Haven;
    onSubmit: (props: ResonancesFormSubmitProps) => void;
};

const AdminHavensResonanceForm =
    React.forwardRef(({resonances, haven, onSubmit}: AdminHavensResonanceFormInternalProps, ref: ForwardedRef<any>): ReactElement => {
        const generateValues: [string, string][] = rangeArray(1, 5).map(x => [String(x), String(x)]);

        const formik = useFormik({
            initialValues: {
                resonance: "",
                power: 1
            },
            validationSchema: AdminHavensResonanceFormSchema,
            onSubmit
        });

        return (
            <form noValidate onSubmit={formik.handleSubmit}>
                <Grid container sx={{
                    paddingTop: "1rem",
                    width: "100%",
                    textAlign: "center"
                }}>
                    <Grid item xs={12} md={6}>
                        <FormSelectField formik={formik}
                                         fieldName="power"
                                         label="Potere della Traccia"
                                         values={generateValues} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <FormSelectField formik={formik}
                                         fieldName="resonance"
                                         label="Risonanza"
                                         addNullValue
                                         values={resonances} />
                    </Grid>
                    <Button ref={ref}
                            type="submit"
                            sx={{display: "none"}} />
                </Grid>
            </form>
        );
    });

export default AdminHavensResonanceForm;
