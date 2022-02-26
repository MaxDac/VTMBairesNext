import type {ReactElement} from "react";
import React from "react";
import {object, ref, string} from 'yup';
import {useFormik} from "formik";
import {useRelayEnvironment} from "react-relay";
import Button from "@mui/material/Button";
import {useTheme} from "@mui/material/styles";
import {FormTextField, useCustomSnackbar, useWait} from "vtm-baires-next-components";
import ChangeUserPasswordMutation
    from "vtm-baires-next-services/graphql-queries/mutations/sessions/ChangeUserPasswordMutation";
import type {Option} from "vtm-baires-next-utils";
import {AlertType} from "vtm-baires-next-utils";

const SignUpSchema = object().shape({
    oldPassword: string().required("Required"),
    newPassword: string()
        .min(8, "The password should be at least 8 characters long")
        .max(20, "The password should be no more than 20 characters long")
        .required("Required"),
    repeatPassword: string()
        .min(8, "The password should be at least 8 characters long")
        .max(20, "The password should be no more than 20 characters long")
        .oneOf([ref("newPassword"), null], "The two password don't match.")
        .required("Required")
});

const SetNewPassword = (): ReactElement => {
    const theme = useTheme();
    const environment = useRelayEnvironment();

    const {enqueueSnackbar} = useCustomSnackbar();
    const {startWait, stopWait} = useWait();

    const formik = useFormik({
        initialValues: {
            oldPassword: "",
            newPassword: "",
            repeatPassword: ""
        },
        validationSchema: SignUpSchema,
        onSubmit: v => onSubmit(v)
    });

    const onSubmit = ({
                          oldPassword,
                          newPassword,
                          repeatPassword
                      }: any) => {
        startWait();

        ChangeUserPasswordMutation(environment,
            oldPassword,
            newPassword,
            repeatPassword)
            .then((response: Option<boolean>) => {
                if (response === true) {
                    enqueueSnackbar({
                        type: AlertType.Success,
                        message: "La tua password è stata correttamente resettata."
                    });
                }
                else {
                    enqueueSnackbar({
                        type: AlertType.Warning,
                        message: "Il cambio di password non è andato a buon fine, contatta un master per aiuto."
                    });
                }
            })
            .catch(errors => {
                enqueueSnackbar({
                    type: AlertType.Error,
                    graphqlErrors: errors,
                    message: "Username or password invalid."
                });
            })
            .finally(() => stopWait());
    };

    return (
        <>
            <form style={{
                width: '100%', // Fix IE 11 issue.
                marginTop: "10px",
            }} noValidate onSubmit={formik.handleSubmit}>
                <FormTextField formik={formik} fieldName="oldPassword" label="Vecchia Password" type="password" />
                <FormTextField formik={formik} fieldName="newPassword" label="Nuova Password" type="password" />
                <FormTextField formik={formik} fieldName="repeatPassword" label="Ripeti Password" type="password" />
                <Button type="submit"
                        fullWidth
                        variant="outlined"
                        sx={{
                            margin: theme.spacing(3, 0, 2),
                        }}>
                    Cambia password
                </Button>
            </form>
        </>
    );
}

export default SetNewPassword;
