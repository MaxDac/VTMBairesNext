import type {ReactElement} from "react";
import React from "react";
import {useTheme} from "@mui/material/styles";
import {useFormik} from "formik";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import {bool, object, string} from "yup";
import type {SubmitProperties} from "../NewMessage";
import type {Option} from "vtm-baires-next-utils";
import CharactersSelectControl from "../../CharactersSelectControl";
import UsersSelectControl from "../../UsersSelectControl";
import {FormCheckboxField, FormTextField} from "vtm-baires-next-components";

const MessageSchema = object().shape({
    subject: string().required("Required"),
    text: string().required("Required"),
    onGame: bool().required("Required"),
    characterId: string().when("onGame", {
        is: true,
        then: string().required("Required")
    }),
    userId: string().when("onGame", {
        is: false,
        then: string().required("Required")
    }),
    // Not necessary, kept for future reference about how to represent a nullable value in the form using yup
    // replyToMessageId: string().nullable(true)
});

type Props = {
    submitted: (properties: SubmitProperties) => void;
    isReply: boolean;
    characterId?: string;
    userId?: string;
    onGame?: boolean;
    toUserId?: Option<string>;
    toCharacterId?: Option<string>;
    subject?: string;
};

const MessageTemplate = ({
                             submitted,
                             isReply,
                             characterId = "",
                             userId = "",
                             toUserId = null,
                             toCharacterId = null,
                             onGame = false,
                             subject = ""
}: Props): ReactElement => {
    const theme = useTheme();

    const cleanInput = (values: SubmitProperties) => {
        if (values.characterId != null && values.characterId !== "") {
            return {
                ...values,
                userId: null
            };
        }

        return values;
    }

    const onSubmit = (values: SubmitProperties) => {
        const cleanedInput = cleanInput(values);
        submitted(cleanedInput);
    };

    const inGameOrCharacterNotNull = toCharacterId != null ? true : onGame;

    const formik = useFormik({
        validationSchema: MessageSchema,
        initialValues: {
            subject: subject,
            text: "",
            onGame: inGameOrCharacterNotNull,
            userId: userId === "" ? (toUserId ?? "") : userId,
            characterId: characterId === "" ? (toCharacterId ?? "") : characterId
        },
        onSubmit
    });

    const isInGame = () => formik.values["onGame"];

    const receiverControl = () =>
        isInGame()
            ? (
                <Grid item xs={12} sm={6}>
                    <CharactersSelectControl label="Destinatario"
                                             formik={formik} />
                </Grid>
            )
            : (
                <Grid item xs={12} sm={6}>
                    <UsersSelectControl label="Destinatario"
                                        formik={formik} />
                </Grid>
            );

    const typeSelector = () =>
        isReply
            ? (<></>)
            : (
                <>
                    <Grid item xs={12} sm={6}>
                        <FormCheckboxField formik={formik}
                                           fieldName="onGame"
                                           label="Messaggio in Game?"/>
                    </Grid>
                    {receiverControl()}
                </>
            );

    return (
        <form onSubmit={formik.handleSubmit}>
            <Grid container>
                {typeSelector()}
                <Grid item xs={12}>
                    <FormTextField formik={formik}
                                   fieldName="subject"
                                   label="Titolo" />
                </Grid>
                <Grid item xs={12}>
                    <FormTextField formik={formik}
                                   fieldName="text"
                                   label="Testo del messaggio"
                                   multiline
                                   minRows={4} />
                </Grid>
                <Grid item xs={12}>
                    <Button fullWidth
                            variant="outlined"
                            color="primary"
                            sx={{
                                margin: theme.spacing(3, 0, 2),
                            }}>
                        Invia
                    </Button>
                </Grid>
            </Grid>
        </form>
    )
}

export default MessageTemplate;
