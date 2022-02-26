import React from "react";
import {object, string} from "yup";
import {useTheme} from "@mui/material/styles";
import {useFormik} from "formik";
import Button from "@mui/material/Button";
import ContactMailIcon from '@mui/icons-material/ContactMail';
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import {useRouter} from "next/router";
import {FormTextField, menuIconStyle, useWait} from "vtm-baires-next-components";
import {useCustomSnackbar} from "../../../vtm-baires-next-components/src/components/notifications";
import {requestNewPassword} from "vtm-baires-next-services/graphql-queries/login-service";
import type {Option} from "vtm-baires-next-utils";
import {GuideRoutes, LoginRoutes} from "../../base/routes";
import LoginLayout from "../../components/layouts/LoginLayout";
import {AlertType} from "vtm-baires-next-utils";

const RecoverPasswordSchema = object().shape({
    email: string()
        .email("Email invalida")
        .required("Required")
});

type RecoverPasswordFormProps = {
    email: Option<string>;
}

const RecoverPassword = (): JSX.Element => {
    const router = useRouter();
    const theme = useTheme();
    const {startWait, stopWait} = useWait()
    const {enqueueSnackbar} = useCustomSnackbar()

    const formik = useFormik({
        initialValues: {
            email: ""
        },
        validationSchema: RecoverPasswordSchema,
        onSubmit: v => onSubmit(v)
    });

    const onSubmit = ({email}: RecoverPasswordFormProps) => {
        startWait()
        
        if (email == null) {
            enqueueSnackbar({
                type: AlertType.Error,
                message: "L'email è vuota"
            });
            
            return;
        }

        requestNewPassword(email)
            .then(_r => {
                enqueueSnackbar({
                    type: AlertType.Success,
                    message: "Password ristabilita, controlla la tua mail!"
                });
                router.push(LoginRoutes.login);
            })
            .catch(e => {
                console.error("error while retrieving the password", e);

                enqueueSnackbar({
                    type: AlertType.Error,
                    message: "Non è stato possibile resettare la password, sei sicuro di aver usato questo indirizzo di posta?"
                })
            })
            .finally(stopWait);
    }

    return (
        <>
            <form style={{
                width: '100%', // Fix IE 11 issue.
                marginTop: "10px",
            }} noValidate onSubmit={formik.handleSubmit}>
                <FormTextField formik={formik}
                               fieldName="email"
                               label="Email"
                               type="email" />
                <Button type="submit"
                        fullWidth
                        variant="outlined"
                        sx={{
                            margin: theme.spacing(3, 0, 2),
                        }}>
                    Recupera la tua password!
                </Button>
            </form>
            <Box component="div" sx={{textAlign: "center"}}>
                <ButtonGroup variant="outlined" aria-label="recover password links">
                    <Button onClick={(_: any) => router.push(LoginRoutes.login)}>Torna al Login</Button>
                    <Button onClick={(_: any) => router.push(GuideRoutes.home)}>Guida</Button>
                    <Button onClick={(_: any) => router.push(LoginRoutes.register)}>Registrazione</Button>
                </ButtonGroup>
            </Box>
        </>
    );
}

RecoverPassword.getLayout = (page: any) => (
    <LoginLayout title="Recupera la tua password" icon={<ContactMailIcon sx={menuIconStyle} />}>
        {page}
    </LoginLayout>
)

export default RecoverPassword;
