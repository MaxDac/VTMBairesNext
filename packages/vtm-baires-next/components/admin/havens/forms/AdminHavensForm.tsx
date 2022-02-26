import React, {ForwardedRef} from "react";
import {number, object, string} from "yup";
import type {Haven} from "vtm-baires-next-services/graphql-queries/queries/haven/GetHavensQuery";
import {useFormik} from "formik";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import {rangeArray} from "vtm-baires-next-utils/src/utils";
import type {Option} from "vtm-baires-next-utils";
import CharactersSelectControl from "../../../CharactersSelectControl";
import {FormSelectField} from "vtm-baires-next-components";

const AdminHavensFormSchema = object().shape({
    havenCharacterId: string().nullable().notRequired(),
    resonance: string().nullable().notRequired(),
    danger: number().required(),
    difficulty: number().required(),
    groundControl: number().required(),
    ownerDifficulty: number().required(),
    resourcesLevel: number().required(),
});

export type FormSubmitProps = {
    havenCharacterId: string,
    resonance: string;
    danger: Option<number>,
    difficulty: Option<number>,
    groundControl: Option<number>,
    ownerDifficulty: Option<number>,
    resourcesLevel: Option<number>,
};

type AdminHavensFormInternalProps = {
    resonances: Array<[string, string]>;
    haven: Haven;
    havenCharacterId?: string;
    onSubmit: (props: FormSubmitProps) => void;
};

const AdminHavensForm =
    React.forwardRef(({resonances, haven, havenCharacterId, onSubmit}: AdminHavensFormInternalProps, ref: ForwardedRef<any>) => {
        const generateValues: [string, string][] = rangeArray(-2, 10).map(x => [String(x), String(x)]);

        const formik = useFormik({
            initialValues: {
                havenCharacterId: havenCharacterId ?? "",
                resonance: haven.resonance ?? "",
                danger: haven.danger,
                difficulty: haven.difficulty,
                groundControl: haven.groundControl,
                ownerDifficulty: haven.ownerDifficulty,
                resourcesLevel: haven.resourcesLevel
            },
            validationSchema: AdminHavensFormSchema,
            onSubmit
        });

        return (
            <form noValidate onSubmit={formik.handleSubmit}>
                <Grid container sx={{
                    paddingTop: "1rem",
                    width: "100%",
                    textAlign: "center"
                }}>
                    <Grid item xs={12}>
                        <CharactersSelectControl label="Personaggio"
                                                 fieldName="havenCharacterId"
                                                 formik={formik} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <FormSelectField formik={formik}
                                         fieldName="difficulty"
                                         label="Difficoltà"
                                         values={generateValues} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <FormSelectField formik={formik}
                                         fieldName="ownerDifficulty"
                                         label="Difficoltà proprietario"
                                         values={generateValues} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <FormSelectField formik={formik}
                                         fieldName="groundControl"
                                         label="Controllo"
                                         values={generateValues} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <FormSelectField formik={formik}
                                         fieldName="resourcesLevel"
                                         label="Risorse"
                                         values={generateValues} />
                    </Grid>
                    <Grid item xs={12}>
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

export default AdminHavensForm;
