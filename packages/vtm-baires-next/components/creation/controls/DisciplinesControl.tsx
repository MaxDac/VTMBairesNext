import type {ReactElement} from "react";
import React from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import type {Option} from "vtm-baires-next-utils";
import {useCustomLazyLoadQuery} from "vtm-baires-next-utils";
import type {
    CharacterFragments_characterConcealedInfo$data
} from "vtm-baires-next-services/graphql-queries/queries/character/__generated__/CharacterFragments_characterConcealedInfo.graphql";
import {clanDisciplinesQuery} from "vtm-baires-next-services/graphql-queries/queries/info/ClanDisciplinesQuery";
import {
    ClanDisciplinesQuery
} from "vtm-baires-next-services/graphql-queries/queries/info/__generated__/ClanDisciplinesQuery.graphql";
import {characterHasDisciplines} from "../../character/character-utils";
import Link from "next/link";
import {GuideRoutes} from "../../../base/routes";

type Props = {
    characterInfo: CharacterFragments_characterConcealedInfo$data;
    onFirstDisciplineChange?: (event: Option<Event>) => void;
    onSecondDisciplineChange?: (event: Option<Event>) => void;
    onDisciplinePowersChange?: (event: Option<Event>) => void;
    firstDiscipline: string;
    secondDiscipline: string;
    disciplinePowers: string;
    firstError?: boolean;
    secondError?: boolean;
    disciplinePowersErrors?: boolean;
};

const DisciplinesControl = (props: Props): ReactElement => {
    if (props.characterInfo.clan?.id != null) {
        return (
            <DisciplinesControlInternal clanId={props.characterInfo.clan?.id} {...props} />
        );
    }

    return (<></>);
};

const DisciplinesControlInternal = ({
    clanId,
    characterInfo,
    classes,
    onFirstDisciplineChange,
    onSecondDisciplineChange,
    onDisciplinePowersChange,
    firstDiscipline,
    secondDiscipline,
    disciplinePowers,
    firstError,
    secondError,
    disciplinePowersErrors
}: any) => {
    const { clanDisciplines } =
        useCustomLazyLoadQuery<ClanDisciplinesQuery>(clanDisciplinesQuery, { clanId: clanId });

    const showDisciplines = () => {
        const options = [<MenuItem key="None" value=" ">None</MenuItem>];

        if (clanDisciplines && clanDisciplines.length > 0) {
            return [...options, ...clanDisciplines.map(d => <MenuItem key={d?.id} value={d?.id}>{d?.name}</MenuItem>)];
        }

        return options;
    }

    const disciplineSelector = () => {
        if (characterHasDisciplines(characterInfo)) {
            return (
                <>
                    <Grid item xs={12}>
                        <Typography paragraph className={classes.defaultParagraph}>
                            Siccome hai scelto un personaggio vampiro, dovrai ora impostare la disposizione delle
                            Discipline del tuo personaggio. In creazione, hai a disposizione tre differenti poteri,
                            due poteri di una Disciplina e uno di una seconda Disciplina di clan.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} style={{textAlign: "center"}}>
                        <FormControl className={classes.formControl}>
                            <InputLabel id="first-discipline-label">Prima Disciplina</InputLabel>
                            <Select labelId="first-discipline-label"
                                    id="discipline1"
                                    name="discipline1"
                                    label="Prima Disciplina"
                                    value={firstDiscipline}
                                    onChange={onFirstDisciplineChange}
                                    error={firstError}
                                    style={{width: "200px"}}>
                                {showDisciplines()}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6} style={{textAlign: "center"}}>
                        <FormControl className={classes.formControl}>
                            <InputLabel id="second-discipline-label">Seconda Disciplina</InputLabel>
                            <Select labelId="second-discipline-label"
                                    id="discipline2"
                                    name="discipline2"
                                    value={secondDiscipline}
                                    label="Seconda Disciplina"
                                    onChange={onSecondDisciplineChange}
                                    error={secondError}
                                    style={{width: "200px"}}>
                                {showDisciplines()}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography paragraph sx={{marginTop: "1.5rem"}}>
                            Di seguito dovrai specificare quali poteri hai intenzione di associare al tuo personaggio
                            nelle Note. Puoi trovare l'elenco completo delle Discipline nella sezione apposita
                            nella <Link href={GuideRoutes.attributes}><a target="_blank"
                                                                         rel="noreferrer">Guida</a></Link>, e la spiegazione di come riempire questa sezione
                            nella <Link href={GuideRoutes.creation}><a target="_blank"
                                                                       rel="noreferrer">Guida di creazione</a></Link>. Ricorda che hai diritto a <b>due</b>
                            poteri della prima Disciplina che hai scelto, e <b>uno</b> per la seconda.
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            label="Poteri selezionati"
                            type="text"
                            id="disciplinePowers"
                            name="disciplinePowers"
                            multiline={true}
                            rows={5}
                            value={disciplinePowers}
                            onChange={onDisciplinePowersChange}
                            error={disciplinePowersErrors}
                            helperText={disciplinePowersErrors} />
                    </Grid>
                </>);
        }

        return <></>;
    }

    return disciplineSelector();
};

export default DisciplinesControl;
