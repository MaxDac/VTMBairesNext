import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import DisciplinesControl from "../../components/creation/controls/DisciplinesControl";
import PredatorTypeControl from "../../components/creation/controls/PredatorTypeControl";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import {useFragment, useRelayEnvironment} from "react-relay";
import CharacterFragmentProvider from "../../components/character/data/CharacterFragmentProvider";
import {object, string} from "yup";
import {useFormik} from "formik";
import type {ReactElement} from "react";
import type {
    CharacterFragments_characterConcealedInfo$data,
    CharacterFragments_characterConcealedInfo$key
} from "vtm-baires-next-services/graphql-queries/queries/character/__generated__/CharacterFragments_characterConcealedInfo.graphql";
import {
    characterConcealedInfoFragment
} from "vtm-baires-next-services/graphql-queries/queries/character/CharacterFragments";
import {useCustomSnackbar} from "vtm-baires-next-components";
import {useRouter} from "next/router";
import {characterHasDisciplines, characterIsVampire} from "../../components/character/character-utils";
import AddAdvantagesMutation from "vtm-baires-next-services/graphql-queries/mutations/characters/AddAdvantagesMutation";
import {GuideRoutes, Routes} from "../../base/routes";
import {AlertType} from "vtm-baires-next-utils";
import Link from "next/link";
import {useTheme} from "@mui/material/styles";

type InternalElementProps = {
    character: CharacterFragments_characterConcealedInfo$key;
    children: (info: CharacterFragments_characterConcealedInfo$data) => ReactElement;
};

const InternalElement = ({character, children}: InternalElementProps): ReactElement => {
    const infoFragment = useFragment<CharacterFragments_characterConcealedInfo$key>(
        characterConcealedInfoFragment,
        character);

    return (
        <>
            {children(infoFragment)}
        </>
    );
};

const Creation4ValidationSchema = (isVampire: boolean, hasDisciplines: boolean) => {
    let shape: any = {
        specialties: string().required("Devi aggiungere le specialità del personaggio"),
        advantages: string().required("Devi aggiungere almeno 5 punti di Vantaggi per il tuo personaggio"),
        notes: string().nullable().notRequired(),
        firstConviction: string().required("Devi aggiungere tutte e tre le Convinzioni del tuo personaggio"),
        secondConviction: string().required("Devi aggiungere tutte e tre le Convinzioni del tuo personaggio"),
        thirdConviction: string().required("Devi aggiungere tutte e tre le Convinzioni del tuo personaggio")
    };

    if (isVampire) {
        shape = {
            ...shape,
            predatorType: string().required("Il tuo personaggio deve essere di un tipo di predatore particolare")
        };
    }

    if (hasDisciplines) {
        shape = {
            ...shape,
            disciplinePowers: string().required("Devi specificare i poteri di Disciplina del tuo personaggio"),
            discipline1: string().required("Devi specificare il primo potere di Disciplina del tuo personaggio"),
            discipline2: string().required("Devi specificare il secondo potere di Disciplina del tuo personaggio")
        }
    }

    return object().shape(shape);
}

const Creation4EmptyObject = (isVampire: boolean, hasDisciplines: boolean) => {
    let initialValue: any = {
        specialties: "",
        advantages: "",
        notes: "",
        firstConviction: "",
        secondConviction: "",
        thirdConviction: ""
    };

    if (isVampire) {
        initialValue = {
            ...initialValue,
            predatorType: ""
        };
    }

    console.debug("hasDisciplines", hasDisciplines);

    if (hasDisciplines) {
        initialValue = {
            ...initialValue,
            disciplinePowers: "",
            discipline1: "",
            discipline2: ""
        }
    }

    return initialValue;
};

const capitalizeFirst = (s: string): string => `${s.charAt(0).toUpperCase()}${s.slice(1)}`;

const buildConvictions = (first: string, second: string, third: string): string => 
    `- ${capitalizeFirst(first)}\n- ${capitalizeFirst(second)}\n- ${capitalizeFirst(third)}`;

const Creation4 = (): ReactElement => {
    const router = useRouter();
    const environment = useRelayEnvironment();
    const {enqueueSnackbar} = useCustomSnackbar();

    const submit = (character: CharacterFragments_characterConcealedInfo$data) => ({
        disciplinePowers,
        discipline1,
        discipline2,
        predatorType,
        specialties,
        advantages,
        firstConviction,
        secondConviction,
        thirdConviction,
        notes
    }: any) => {
        const disciplinesOk = !characterHasDisciplines(character) ||
            (discipline1 &&
            discipline2);

        const predatorTypeOk = !characterIsVampire(character) || predatorType;

        if (disciplinesOk &&
            predatorTypeOk &&
            specialties &&
            advantages &&
            firstConviction &&
            secondConviction &&
            thirdConviction) {

                let request = {
                    newStage: 4,
                    characterId: String(character?.id),
                    request: {
                        predatorTypeId: predatorType,
                        specialties: specialties,
                        advantages: advantages,
                        notes: notes,
                        convictions: buildConvictions(firstConviction, secondConviction, thirdConviction)
                    }
                };

                if (characterHasDisciplines(character)) {
                    request = {
                        ...request,
                        request: {
                            ...request.request,
                            // @ts-ignore
                            disciplinePowers: disciplinePowers
                        },
                        attributes: [{
                            attributeId: discipline1,
                            characterId: String(character?.id),
                            value: 2
                        }, {
                            attributeId: discipline2,
                            characterId: String(character?.id),
                            value: 1
                        }]
                    };
                }

                if (characterIsVampire(character)) {
                    request = {
                        ...request,
                        request: {
                            ...request.request,
                            predatorTypeId: predatorType
                        }
                    };
                }

                AddAdvantagesMutation(environment, request)
                    .then((_: any) => router.push(Routes.creation5))
                    .catch(e => {
                        console.error("error!", e);
                        enqueueSnackbar({
                            type: AlertType.Error,
                            graphqlErrors: e,
                            message: "There was an error while saving the character"
                        })
                    });
        }
    }

    const InnerComponent = ({characterInfo}: any) => {
        const theme = useTheme();
        const [isVampire, hasDisciplines] = [characterIsVampire(characterInfo), characterHasDisciplines(characterInfo)];

        const formik = useFormik({
            initialValues: Creation4EmptyObject(
                isVampire,
                hasDisciplines
            ),
            validationSchema: Creation4ValidationSchema(
                isVampire,
                hasDisciplines),
            onSubmit: submit(characterInfo)
        });

        return (
            <form noValidate onSubmit={formik.handleSubmit} style={{
                paddingTop: theme.spacing(4),
                paddingBottom: theme.spacing(4),
                margin: '0 auto',
                maxWidth: '90%',
                minWidth: '55%'
            }}>
                <Grid container>
                    <Grid item xs={12}>
                        <Typography sx={{ padding: theme.spacing(1) }}>
                            In questa sezione puoi scegliere gli ultimi attributi della scheda del tuo personaggio, prima dei ritocchi finali.
                        </Typography>
                    </Grid>
                    <DisciplinesControl characterInfo={characterInfo}
                                        firstDiscipline={formik.values["discipline1"]}
                                        secondDiscipline={formik.values["discipline2"]}
                                        disciplinePowers={formik.values["disciplinePowers"]}
                                        firstError={formik.touched["discipline1"] && Boolean(formik.errors["discipline1"])}
                                        secondError={formik.touched["discipline2"] && Boolean(formik.errors["discipline2"])}
                                        disciplinePowersErrors={formik.touched["disciplinePowers"] && Boolean(formik.errors["disciplinePowers"])}
                                        onFirstDisciplineChange={formik.handleChange}
                                        onSecondDisciplineChange={formik.handleChange}
                                        onDisciplinePowersChange={formik.handleChange} />
                    <PredatorTypeControl characterInfo={characterInfo}
                                         formik={formik} />
                    <Grid item xs={12}>
                        <Typography sx={{ padding: theme.spacing(1) }}>
                            Di seguito, dovrai definire le specialit&agrave; del personaggio. Per maggior informazioni,
                            puoi consultare la <Link href={GuideRoutes.attributes}><a target="_blank"
                                                                                      rel="noreferrer">guida</a></Link>. In breve, dovrai indicare:
                            <ul>
                                <li>Una specialit&agrave; relazionata al <b>Tipo di Predatore</b> selezionato.</li>
                                <li>Una specialit&agrave; per una Abilit&agrave; a piacere.</li>
                                <li>Una specialit&agrave; relazionata alle seguenti Abilit&agrave; se si ha
                                    almeno un pallino in esse:
                                    <ul>
                                        <li>Accademiche</li>
                                        <li>Espressivit&agrave;</li>
                                        <li>Manualit&agrave;</li>
                                        <li>Scienze</li>
                                    </ul>
                                </li>
                            </ul>
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            label="Specialità"
                            type="text"
                            id="specialties"
                            name="specialties"
                            multiline={true}
                            rows={5}
                            value={formik.values["specialties"]}
                            onChange={formik.handleChange}
                            error={formik.touched["specialties"] && Boolean(formik.errors["specialties"])}
                            helperText={formik.touched["specialties"] && formik.errors["specialties"]} />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography sx={{ padding: theme.spacing(1) }}>
                            I vantaggi non possono essere selezionati automaticamente, poich&eacute; dovranno essere
                            vagliati dal master che controller&agrave; la tua scheda. I vantaggi sono la somma di
                            Background, Pregi e Difetti, di cui puoi trovare una lista completa
                            nella <Link href={GuideRoutes.attributes}><a target="_blank"
                                                                         rel="noreferrer">guida</a></Link>. Per la guida su come associare i Vantaggi
                            al tuo personaggio, consulta invece questa <Link href={GuideRoutes.creation}><a target="_blank"
                                                                                                            rel="noreferrer">sezione</a></Link>,
                            ricorda in breve che hai normalmente <b>cinque punti a disposizione</b> da assegnare.
                            Scrivi nel controllo di seguito tutti i vantaggi che vuoi assegnare al tuo personaggio, e
                            ricorda che se ti trovi in difficolt&agrave;, puoi sempre contattare un master via messaggio
                            o via Discord, tramite il link che puoi trovare nel menu a sinistra: la procedura di
                            iscrizione &egrave; comunque stata salvata fin qui!
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            label="Vantaggi"
                            type="text"
                            id="advantages"
                            name="advantages"
                            multiline={true}
                            rows={5}
                            value={formik.values["advantages"]}
                            onChange={formik.handleChange}
                            error={formik.touched["advantages"] && Boolean(formik.errors["advantages"])}
                            helperText={formik.touched["advantages"] && formik.errors["advantages"]} />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography sx={{ padding: theme.spacing(1) }}>
                            In questa sezione dovrai inserire le tre <b>Convinzioni</b> del tuo
                            personaggio. Puoi sceglierle tra quelle proposte nella&nbsp;
                            <Link href={GuideRoutes.creation}><a target="_blank"
                                                                 rel="noreferrer"
                                                                 style={{color: "#C92929"}}>guida</a></Link>.
                            Se hai delle richieste particolari per il tuo personaggio, aggiungile alla definizione
                            delle Convinzioni, saranno vagliate dal master che controller&agrave; la tua scheda.
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            label="Prima Convinzione"
                            type="text"
                            id="firstConviction"
                            name="firstConviction"
                            value={formik.values["firstConviction"]}
                            onChange={formik.handleChange}
                            error={formik.touched["firstConviction"] && Boolean(formik.errors["firstConviction"])}
                            helperText={formik.touched["firstConviction"] && formik.errors["firstConviction"]} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            label="Seconda Convinzione"
                            type="text"
                            id="secondConviction"
                            name="secondConviction"
                            value={formik.values["secondConviction"]}
                            onChange={formik.handleChange}
                            error={formik.touched["secondConviction"] && Boolean(formik.errors["secondConviction"])}
                            helperText={formik.touched["secondConviction"] && formik.errors["secondConviction"]} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            label="Terza Convinzione"
                            type="text"
                            id="secondConviction"
                            name="thirdConviction"
                            value={formik.values["thirdConviction"]}
                            onChange={formik.handleChange}
                            error={formik.touched["thirdConviction"] && Boolean(formik.errors["thirdConviction"])}
                            helperText={formik.touched["thirdConviction"] && formik.errors["thirdConviction"]} />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography sx={{ padding: theme.spacing(1) }}>
                            Infine, se hai delle richieste particolari per i master che dovranno visionare
                            la tua scheda, puoi inserirle in questa sezione.
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            label="Note"
                            type="text"
                            id="notes"
                            name="notes"
                            multiline={true}
                            rows={5}
                            value={formik.values["notes"]}
                            onChange={formik.handleChange}
                            error={formik.touched["notes"] && Boolean(formik.errors["notes"])}
                            helperText={formik.touched["notes"] && formik.errors["notes"]} />
                    </Grid>
                    <Grid item xs={12} sx={{margin: "1rem"}}>
                        <Button
                            type="submit"
                            fullWidth
                            variant="outlined"
                            color="primary"
                            onClick={submit(characterInfo)}>
                            Conferma
                        </Button>
                    </Grid>
                </Grid>
            </form>
        );
    }

    return (
        <CharacterFragmentProvider showWarningWhenNoCharacterSelected={true}>
            {characterQuery =>
                <InternalElement character={characterQuery}>
                    { character =>
                        <InnerComponent characterInfo={character} />
                    }
                </InternalElement>
            }
        </CharacterFragmentProvider>
    );
}

export default Creation4;
