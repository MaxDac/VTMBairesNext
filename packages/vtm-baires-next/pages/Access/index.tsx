import React from "react";
import Button from "@mui/material/Button";
import {object, string} from 'yup';
import {useFormik} from "formik";
import {useTheme} from "@mui/material/styles";
import ButtonGroup from "@mui/material/ButtonGroup";
import {useRouter} from "next/router";
import {useCustomSnackbar} from "../../../vtm-baires-next-components/src/components/notifications";
import {FormTextField, menuIconStyle, useWait} from "vtm-baires-next-components";
import type {Option} from "vtm-baires-next-utils";
import {AlertType} from "vtm-baires-next-utils";
import {login} from "vtm-baires-next-services/graphql-queries/login-service";
import LoginLayout from "../../components/layouts/LoginLayout";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import useSession from "../../session/hooks/useSession";
import {GuideRoutes, LoginRoutes, Routes} from "../../base/routes";
import Box from "@mui/material/Box";

const SignInSchema = object().shape({
    email: string()
        .email("Invalid name")
        .required("Required"),
    password: string()
        .required("Required"),
});

type LoginComponentFormProps = {
    email: Option<string>,
    password: Option<string>
};

const Index = (): JSX.Element => {
    const router = useRouter();
    const theme = useTheme();
    const [,setUserSession] = useSession();

    const {enqueueSnackbar} = useCustomSnackbar()
    const {startWait, stopWait} = useWait()
    
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            // remember: true
        },
        validationSchema: SignInSchema,
        onSubmit: v => onSubmit(v)
    });

    const onSubmit = ({
        email,
        password,
        // remember
    }: LoginComponentFormProps) => {
        startWait()

        const handleUnhandledExceptionAtLogin = (e: any) => {
            stopWait()
            console.error("Unhandled error", e);
            enqueueSnackbar({
                type: AlertType.Error,
                message: "Password o email invalidi."
            });
        };

        window.addEventListener("unhandledrejection", handleUnhandledExceptionAtLogin);

        if (email == null || password == null) {
            enqueueSnackbar({type: AlertType.Error, message: "Devi inserire una password o una email"});
            return;
        }

        login(email, password, true)
            .then(res => {
                console.debug("login call result: ", res);
                stopWait();
                setUserSession(res.data);
                setTimeout(() => {
                    router.push(Routes.main);
                }, 200);
                return res;
            })
            .catch((errors: any) => {
                console.error("error call result: ", errors);
                stopWait();
                enqueueSnackbar({
                    type: AlertType.Error,
                    graphqlErrors: errors,
                    message: "Username or password invalid."
                });
            })
            .finally(() => {
                window.removeEventListener("unhandledrejection", handleUnhandledExceptionAtLogin);
            });
    }

    return (
        <>
            <form style={{
                width: '100%', // Fix IE 11 issue.
                marginTop: "10px",
            }} noValidate onSubmit={formik.handleSubmit}>
                <FormTextField formik={formik} fieldName="email" label="Email" type="email" />
                <FormTextField formik={formik} fieldName="password" label="Password" type="password" />
                {/*<FormCheckboxField formik={formik} fieldName="remember" label="Ricorda" />*/}
                <Button type="submit"
                        fullWidth
                        variant="outlined"
                        color="primary"
                        sx={{
                            margin: theme.spacing(3, 0, 2),
                        }}>
                    Accedi
                </Button>
            </form>
            <Box component="div" sx={{textAlign: "center"}}>
                <ButtonGroup variant="outlined" aria-label="login links">
                    <Button onClick={(_: any) => router.push(LoginRoutes.recoverPassword)}>Recupera password</Button>
                    <Button onClick={(_: any) => router.push(GuideRoutes.home)}>Guida</Button>
                    <Button onClick={(_: any) => router.push(LoginRoutes.register)}>Registrazione</Button>
                </ButtonGroup>
            </Box>
        </>
    );
};

Index.getLayout = (page: any) => (
    <LoginLayout title="CharacterSheet" icon={<LockOutlinedIcon sx={menuIconStyle} />}>
        {page}
    </LoginLayout>
)

export default Index;