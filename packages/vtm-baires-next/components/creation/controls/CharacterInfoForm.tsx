import type {ReactElement} from "react";
import React, {useState} from "react";
import {object, string} from "yup";
import {useFormik} from "formik";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {avatarHeight, avatarWidth} from "../../character/sheet-sections/sections/CharacterSheetAvatarSection";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import {useTheme} from "@mui/material/styles";
import ListSubheader from "@mui/material/ListSubheader";
import {
    CharacterCreationRequest
} from "vtm-baires-next-services/graphql-queries/mutations/npcs/__generated__/CreateNewNpcMutation.graphql";
import {useCustomLazyLoadQuery} from "vtm-baires-next-utils";
import type {Option} from "vtm-baires-next-utils";
import {creationClansQuery} from "vtm-baires-next-services/graphql-queries/queries/info/CreationClansQuery";
import {
    CreationClansQuery
} from "vtm-baires-next-services/graphql-queries/queries/info/__generated__/CreationClansQuery.graphql";
import {getUrlValidationMatchString} from "vtm-baires-next-utils/src/utils";
import {FormFileDropField, FormTextField} from "vtm-baires-next-components";
import Link from "next/Link";
import {GuideRoutes} from "../../../base/routes";
import Box from "@mui/material/Box";

type Props = {
    onSubmit: (request: CharacterCreationRequest) => void;
}

const easyClanNames = ["Sangue Debole", "Vili"];

const normalClanNames = ["Brujah", "Toreador", "Gangrel"];

const notHardClanNames = easyClanNames.concat(normalClanNames);

type Clan = {
    readonly id: string;
    readonly name: string | null;
};

const ClanSelect = ({formik, clans}: any) => {
    const theme = useTheme();
    
    const easyClans = (cs: Clan[]) => cs.filter(c => easyClanNames.some(n => c?.name === n));

    const normalClans = (cs: Clan[]) => cs.filter(c => normalClanNames.some(n => c?.name === n));

    const expertClans = (cs: Clan[]) => cs.filter(c => notHardClanNames.every(n => c?.name !== n));

    const clanMapper = (c: Clan) => (<MenuItem key={c?.id ?? "is-null"} value={c?.id}>{c?.name}</MenuItem>);

    const items = (cs: Clan[]) => {
        const easy = easyClans(cs);
        const normal = normalClans(cs);
        const expert = expertClans(cs);

        return [<ListSubheader key={-1}>Accessibili</ListSubheader>]
            .concat(easy.map(clanMapper))
            .concat([<ListSubheader key={-1}>Moderati</ListSubheader>])
            .concat(normal.map(clanMapper))
            .concat([<ListSubheader key={-1}>Esperti</ListSubheader>])
            .concat(expert.map(clanMapper));
    }
    
    if (clans?.map != null) {
        return (
            <FormControl sx={{
                margin: theme.spacing(1),
                minWidth: 150,
            }}>
                <InputLabel id="select-label">Clan</InputLabel>
                <Select labelId="select-label"
                        id="clanId"
                        name="clanId"
                        fullWidth
                        sx={{minWidth: theme.spacing(10)}}
                        label="Clan"
                        value={formik.values["clanId"]}
                        onChange={formik.handleChange}
                        error={formik.touched["clanId"] && Boolean(formik.errors["clanId"])}>
                        {/*helperText={formik.touched["clanId"] && formik.errors["clanId"]}>*/}
                    {items(clans)}
                </Select>
            </FormControl>
        );
    }

    return (<></>);
}

const CharacterInfoFormValidationSchema = object().shape({
    clanId: string().required("Devi selezionare il clan del personaggio"),
    name: string().required("Devi selezionare il nome"),
    description: string().required("Devi inserire la descrizione").min(200, "La descrizione deve avere almeno 200 caratteri"),
    biography: string().required("Devi inserire la biografia").min(200, "La biografia deve avere almeno 200 caratteri"),
    avatar: string().nullable().notRequired().matches(getUrlValidationMatchString())
});

const CharacterInfoForm = ({onSubmit}: Props): ReactElement => {
    const theme = useTheme();
    const clans = useCustomLazyLoadQuery<CreationClansQuery>(creationClansQuery, {})?.creationClans;

    const [chatAvatar, setChatAvatar] = useState<Option<string>>(null);

    const [humanClan,] = clans?.filter(c => c?.name === "Umano") ?? [];

    const formik = useFormik({
        initialValues: {
            name: "",
            clanId: humanClan?.id ?? "",
            avatar: "",
            description: "",
            biography: ""
        },
        validationSchema: CharacterInfoFormValidationSchema,
        onSubmit: v => onSubmitInternal(v)
    });

    const avatarChanged = (_a: Option<string>, ca: Option<string>) => {
        setChatAvatar(ca);
    };

    const onSubmitInternal = (data: CharacterCreationRequest) => {
        onSubmit({
            ...data,
            chatAvatar,
        });
    }

    return (
        <Box sx={{
            paddingTop: theme.spacing(4),
            paddingBottom: theme.spacing(4),
            margin: '0 auto',
            maxWidth: '90%',
            minWidth: '55%'
        }}>
            <form noValidate onSubmit={formik.handleSubmit}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Typography paragraph>
                            In questa prima parte della registrazione di un nuovo personaggio, &egrave; necessario gi&agrave;
                            avere ben chiara la sua storia, il suo aspetto e la sua interpretazione. Ti invitiamo a
                            leggere la <Link href={GuideRoutes.creation}><a target="_blank" rel="noreferrer">Guida</a></Link> per ulterior informazioni.
                            Vampiri: la Masquerade &egrave; principalmente un gioco di interpretazione, quindi questa
                            prima schermata di creazione &egrave; la pi&ugrave; importante di tutte, servir&agrave; a darci
                            un'idea del personaggio che vuoi interpretare.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormTextField formik={formik}
                                       fieldName="name"
                                       label="Nome"
                                       autoComplete="Nome"
                                       fullWidth={false}
                                       className="form-control" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <ClanSelect formik={formik} clans={clans} />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography paragraph>
                            Di seguito, puoi caricare una immagine, possibilmente quadrata, per poter rappresentare il
                            tuo personaggio nelle chat e nei messaggi.
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <FormFileDropField fieldName="avatar"
                                           changed={avatarChanged}
                                           showChatPreviews={true}
                                           showLargePreview={false} />
                    </Grid>
                    <Grid item xs={12}>
                        <FormTextField formik={formik}
                                       fieldName="avatar"
                                       label={`URL Avatar Scheda (${avatarWidth} * ${avatarHeight})`}
                                       autoComplete="Avatar URL" />
                    </Grid>
                    <Grid item xs={12}>
                        <FormTextField formik={formik} fieldName="description" label="Descrizione" autoComplete="Descrizione" rows={5} />
                    </Grid>
                    <Grid item xs={12}>
                        <FormTextField formik={formik} fieldName="biography" label="Biografia" autoComplete="Biografia" rows={5} />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            type="submit"
                            fullWidth
                            variant="outlined"
                            color="primary">
                            Continua
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Box>
    )
}

export default CharacterInfoForm;
