import type {ReactElement} from "react";
import React, {useRef, useState} from "react";
import Button from '@mui/material/Button';
import Grid from "@mui/material/Grid";
import {object, string} from "yup";
import {useFragment, useRelayEnvironment} from "react-relay";
import {useFormik} from "formik";
import Typography from "@mui/material/Typography";
import {
    avatarHeight,
    avatarWidth
} from "../../../components/character/sheet-sections/sections/CharacterSheetAvatarSection";
import {useRouter} from "next/router";
import {getUrlValidationMatchString} from "vtm-baires-next-utils/src/utils";
import {FormFileDropField, FormTextField, mainFontFamily, useCustomSnackbar} from "vtm-baires-next-components";
import type {Option} from "vtm-baires-next-utils";
import {AlertType, useCustomLazyLoadQuery} from "vtm-baires-next-utils";
import {getCharacterQuery} from "vtm-baires-next-services/graphql-queries/queries/character/GetCharacterQuery";
import {useUserCharactersQuery} from "vtm-baires-next-services/graphql-queries/queries/accounts/UserCharactersQuery";
import {
    GetCharacterQuery
} from "vtm-baires-next-services/graphql-queries/queries/character/__generated__/GetCharacterQuery.graphql";
import {
    characterConcealedInfoFragment,
    characterOffFragment,
    characterSheetFragment
} from "vtm-baires-next-services/graphql-queries/queries/character/CharacterFragments";
import {
    CharacterFragments_characterSheet$key
} from "vtm-baires-next-services/graphql-queries/queries/character/__generated__/CharacterFragments_characterSheet.graphql";
import {
    CharacterFragments_characterConcealedInfo$key
} from "vtm-baires-next-services/graphql-queries/queries/character/__generated__/CharacterFragments_characterConcealedInfo.graphql";
import {
    CharacterFragments_characterOff$key
} from "vtm-baires-next-services/graphql-queries/queries/character/__generated__/CharacterFragments_characterOff.graphql";
import ChangeCharacterSheetInfoMutation
    from "vtm-baires-next-services/graphql-queries/mutations/characters/ChangeCharacterSheetInfoMutation";
import {Routes} from "../../../base/routes";
import {useRecoilValue} from "recoil";
import {isUserMasterSelector} from "../../../session/selectors/recoil-selectors";
import MainLayout from "../../../components/layouts/MainLayout";
import Index from "../../Main";

const urlNotMatchingErrorMessage = "L'URL che stai utilizzando è invalido";

const ModifyCharacterValidationSchema = object().shape({
    description: string().required(),
    avatar: string().nullable().matches(getUrlValidationMatchString(), urlNotMatchingErrorMessage).notRequired(),
    biography: string().required(),
    objects: string().nullable().notRequired(),
    soundtrack: string().nullable().matches(getUrlValidationMatchString(), urlNotMatchingErrorMessage).notRequired(),
    off: string().nullable().notRequired()
});

const Id = (): ReactElement => {
    const router = useRouter();
    const {id} = router.query
    const {enqueueSnackbar} = useCustomSnackbar();
    const environment = useRelayEnvironment();
    const isUserMaster = useRecoilValue(isUserMasterSelector);

    const [chatAvatar, setChatAvatar] = useState<Option<string>>(null);

    const userCharacters = useUserCharactersQuery();
    const character = useCustomLazyLoadQuery<GetCharacterQuery>(getCharacterQuery, {
        id: id as string
    })?.getCharacter;

    const formRef = useRef();

    const sheet = useFragment<CharacterFragments_characterSheet$key>(
        characterSheetFragment,
        character);

    const concealedSheetInfo = useFragment<CharacterFragments_characterConcealedInfo$key>(
        characterConcealedInfoFragment,
        character);

    const offSheet = useFragment<CharacterFragments_characterOff$key>(
        characterOffFragment,
        character);

    const onSubmit = (values: any) => {
        const completeValues = chatAvatar != null
            ? {
                ...values,
                chatAvatar
            }
            : values;

        ChangeCharacterSheetInfoMutation(environment, id as string, completeValues)
            .then(c => {
                if (c != null) {
                    enqueueSnackbar({
                        type: AlertType.Success,
                        message: "Il personaggio è stato salvato correttamente"
                    });
                }
            })
            .catch(e => {
                console.error("Error while saving character info", e);
                enqueueSnackbar({
                    type: AlertType.Error,
                    message: "C'è stato un errore salvando il personaggio."
                });
            })
            .finally(() => {
                router.push(Routes.sheet(id as string, true));
                // setTimeout(() => document.location.reload(false), 200);
            });
    }

    const formik = useFormik({
        validationSchema: ModifyCharacterValidationSchema,
        initialValues: {
            description: sheet?.description ?? "",
            biography: concealedSheetInfo?.biography ?? "",
            objects: concealedSheetInfo?.objects ?? "",
            avatar: sheet?.avatar ?? "",
            soundtrack: offSheet?.soundtrack ?? "",
            off: offSheet?.off ?? ""
        },
        onSubmit
    });

    const avatarChanged = (largeImage: Option<string>, smallImage: Option<string>) => {
        setChatAvatar(smallImage);
    };

    const formSectionStyle = {
        margin: "10px"
    }

    if (!isUserMaster && userCharacters?.some(c => c.id === character?.id) === false) {
        router.push(Routes.sheet(id as string));
    }

    return (
        // @ts-ignore
        <form ref={formRef} noValidate onSubmit={formik.handleSubmit}>
            <Grid item xs={12} sx={formSectionStyle}>
                <Typography sx={{
                    ...mainFontFamily,
                    fontSize: "2rem",
                    margin: "20px"
                }}>
                    Modifica il tuo personaggio
                </Typography>
            </Grid>
            <Grid item xs={12} sx={formSectionStyle}>
                <Typography sx={{
                    ...mainFontFamily,
                    fontSize: "0.9rem",
                    color: "primary.light",
                    margin: "20px"
                }}>
                    Puoi specificare un'immagine per rappresentare il tuo personaggio in chat. L'immagine deve essere
                    quadrata, e sar&agrave; automaticamente ridimensionata ad una dimensione di 50x50.
                </Typography>
            </Grid>
            <Grid item xs={12} sx={formSectionStyle}>
                <FormFileDropField fieldName="avatar"
                                   changed={avatarChanged}
                                   showChatPreviews={true}
                                   showLargePreview={false} />
            </Grid>
            <Grid item xs={12}>
                <FormTextField formik={formik} fieldName="avatar" label={`URL Avatar Scheda (${avatarWidth} * ${avatarHeight})`} autoComplete="Avatar URL" />
            </Grid>
            <Grid item xs={12} sx={formSectionStyle}>
                <FormTextField formik={formik} fieldName="description" label="Descrizione" autoComplete="Descrizione" rows={5} />
            </Grid>
            <Grid item xs={12} sx={formSectionStyle}>
                <FormTextField formik={formik} fieldName="biography" label="Biografia" autoComplete="Biografia" rows={5} />
            </Grid>
            <Grid item xs={12} sx={formSectionStyle}>
                <FormTextField formik={formik} fieldName="objects" label="Oggetti" autoComplete="Oggetti" rows={5} />
            </Grid>
            <Grid item xs={12}>
                <FormTextField formik={formik} fieldName="soundtrack" label="Soundtrack" autoComplete="Soundtrack" />
            </Grid>
            <Grid item xs={12} sx={formSectionStyle}>
                <Typography paragraph>
                    Nella sezione Off potete mettere tutto ci&ograve; che volete condividere del vostro personaggio
                    col resto dei giocatori. Si consiglia di non condividere troppe informazioni del personaggio per
                    evitare <i>metaplay</i>.
                    Il testo, ad ogni modo, non è libero: potrete utilizzare i tag messi a disposizione dal markdown
                    concesso. Potete trovare la documentazione completa del markdown concessa al
                    seguente <a href="https://commonmark.org/help/"
                              target="_blank"
                              rel="noreferrer">link</a>, e un esempio al
                    seguente <a href="https://remarkjs.github.io/react-markdown/"
                             target="_blank"
                             rel="noreferrer">link</a>.
                </Typography>
            </Grid>
            <Grid item xs={12} sx={formSectionStyle}>
                <FormTextField formik={formik} fieldName="off" label="Testo Sezione Off" autoComplete="Testo Sezione Off" rows={15} />
            </Grid>
            <Grid item xs={12} sx={formSectionStyle}>
                <Button type="submit"
                        variant="outlined"
                        color="primary">
                    Salva
                </Button>
            </Grid>
        </form>
    );
}

Id.getLayout = (page: ReactElement) => (
    <MainLayout>
        {page}
    </MainLayout>
)

export default Id;
