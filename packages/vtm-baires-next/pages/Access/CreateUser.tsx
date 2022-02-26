import React, {useRef} from "react";
import Button from "@mui/material/Button";
import {object, string, TestContext} from 'yup';
import {useFormik} from "formik";
import {useTheme} from "@mui/material/styles";
import {useRelayEnvironment} from "react-relay";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Checkbox from '@mui/material/Checkbox';
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import Link from "next/link";
import ButtonGroup from "@mui/material/ButtonGroup";
import {FormTextField, menuIconStyle, useWait} from "vtm-baires-next-components";
import type {TestFunction} from "yup/lib/util/createValidation";
import type {Option} from "vtm-baires-next-utils";
import {AlertType} from "vtm-baires-next-utils";
import {AnyObject} from "yup/es/types";
import {useRouter} from "next/router";
import {useCustomSnackbar} from "../../../vtm-baires-next-components/src/components/notifications";
import {userNameExists} from "vtm-baires-next-services/graphql-queries/queries/accounts/UserNameExistsQuery";
import {userEmailExists} from "vtm-baires-next-services/graphql-queries/queries/accounts/UserEmailExistsQuery";
import CreateUserMutation from "vtm-baires-next-services/graphql-queries/mutations/sessions/CreateUserMutation";
import LoginLayout from "../../components/layouts/LoginLayout";
import {GuideRoutes, LoginRoutes} from "../../base/routes";

const SignUpSchema = (nameChecker: TestFunction<Option<string>, AnyObject>, emailChecker: TestFunction<Option<string>, AnyObject>) =>
    object().shape({
        email: string()
            .email("Invalid name")
            .required("Required")
            .test({
                name: "checkEmailUnique",
                message: "Questo indirizzo email è già stato usato.",
                test: emailChecker
            }),
        name: string()
            .required("Required")
            .test({
                name: "checkUsernameUnique",
                message: "Questo nome è già stato usato.",
                test: nameChecker
            })
    });

type FormType = {
    email: Option<string>;
    name: Option<string>;
}

const CreateUserComponent = (): JSX.Element => {
    const router = useRouter();
    const theme = useTheme();
    const environment = useRelayEnvironment();
    const {enqueueSnackbar} = useCustomSnackbar();
    const {startWait, stopWait} = useWait();

    const checkBoxRef = useRef<any>();

    const checkUsername = (name: Option<string>, _ctx: TestContext<AnyObject>): Promise<boolean> => {
        return new Promise((res, rej) => {
            if (name != null && name !== "") {
                userNameExists(environment, name)
                    .then(r => res(!r))
                    .catch(e => rej(e));
            } else {
                res(false);
            }
        });
    }

    const checkEmail = (email: Option<string>, _ctx: TestContext<AnyObject>): Promise<boolean> =>
        new Promise((res, rej) => {
            if (email != null && email !== "") {
                userEmailExists(environment, email)
                    .then(r => res(!r))
                    .catch(e => rej(e));
            }
            else {
                res(false);
            }
        });

    const formik = useFormik({
        initialValues: {
            email: "",
            name: ""
        },
        validationSchema: SignUpSchema(checkUsername, checkEmail),
        // Validating on change would mean calling the back end every time the name changes.
        validateOnChange: false,
        validateOnBlur: true,
        onSubmit: v => onSubmit(v)
    });

    const onSubmit = ({
        email,
        name
    }: FormType) => {
        if (!checkBoxRef.current?.firstChild?.checked) {
            enqueueSnackbar({
                type: AlertType.Warning,
                message: "Devi dichiarare di aver letto il Disclaimer prima di accedere al sito."
            });
            return;
        }

        startWait();

        if (email == null || name == null) {
            return;
        }

        CreateUserMutation(environment, {
            email,
            name
        })
            .then((_: any) => {
                enqueueSnackbar({
                    type: AlertType.Success,
                    message: "L'utente è stato creato correttamente, controlla la mail (spam incluso) per avere la tua prima password."
                });
                setTimeout(() => router.push(LoginRoutes.login), 2000);
            })
            .catch(errors => {
                enqueueSnackbar({
                    type: AlertType.Error,
                    graphqlErrors: errors,
                    message: "C'è stato un errore durante la creazione del personaggio, contatta un master per informazioni."
                });
            })
            .finally(stopWait);
    }

    return (
        <>
            <form style={{
                width: '100%', // Fix IE 11 issue.
                marginTop: "10px",
            }} noValidate onSubmit={formik.handleSubmit}>
                <FormTextField formik={formik} fieldName="email" label="Email" type="email" />
                <FormTextField formik={formik} fieldName="name" label="Name" />
                <Box component="div" sx={{paddingTop: "10px"}}>
                    <FormControl component="div">
                        <Checkbox ref={checkBoxRef} />
                    </FormControl>
                    <Box component="div" sx={{height: "40px", display: "inline-flex"}}>
                        <Typography component="div" sx={{marginTop: "auto", marginBottom: "auto"}}>
                            Dichiaro di aver preso visione del <Link href={LoginRoutes.disclaimer}>
                                <a style={{color: "secondary.light"}}>
                                    Disclaimer
                                </a>
                            </Link>
                        </Typography>
                    </Box>
                </Box>
                <Button type="submit"
                        fullWidth
                        variant="outlined"
                        sx={{
                            margin: theme.spacing(3, 0, 2),
                        }}>
                    Register!
                </Button>
            </form>
            <Box component="div" sx={{textAlign: "center"}}>
                <ButtonGroup variant="outlined" aria-label="registration links">
                    <Button onClick={(_: any) => router.push(LoginRoutes.recoverPassword)}>Recupera Password</Button>
                    <Button onClick={(_: any) => router.push(GuideRoutes.home)}>Guida</Button>
                    <Button onClick={(_: any) => router.push(LoginRoutes.login)}>Torna al Login</Button>
                </ButtonGroup>
            </Box>
        </>
    );
};

CreateUserComponent.getLayout = (page: any) => (
    <LoginLayout title="Registrazione" icon={<AddCircleOutlineIcon sx={menuIconStyle} />}>
        {page}
    </LoginLayout>
)

export default CreateUserComponent;
