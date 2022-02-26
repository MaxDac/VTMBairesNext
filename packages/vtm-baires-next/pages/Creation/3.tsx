import React, {useState} from "react";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import JackOfAllTradesSkillForm from "../../components/creation/strategies/JackOfAllTradesSkillForm";
import BalancedSkillForm from "../../components/creation/strategies/BalancedSkillForm";
import SpecialistSkillForm from "../../components/creation/strategies/SpecialistSkillForm";
import type {ReactElement} from "react";
import Box from "@mui/material/Box";
import Link from "next/link";
import {useTheme} from "@mui/material/styles";
import {GuideRoutes} from "../../base/routes";

const Creation3 = (): ReactElement => {
    const theme = useTheme();
    const [characterType, setCharacterType] = useState(1);

    const changeCharacterType = ({ target: { value } }: any) => setCharacterType(value);

    const getForm = () => {
        if (characterType === 1) {
            return (
                <JackOfAllTradesSkillForm />
            )
        }
        if (characterType === 2) {
            return (
                <BalancedSkillForm />
            )
        }

        return (
            <SpecialistSkillForm />
        )
    }

    return (
        <Box sx={{
            paddingTop: theme.spacing(4),
            paddingBottom: theme.spacing(4),
            margin: '0 auto',
            maxWidth: '90%',
            minWidth: '55%'
        }}>
            <Typography paragraph>
                In questa sezione della creazione del personaggio, dovrai scegliere le sue&nbsp;
                <Link href={GuideRoutes.attributes}>
                    <a target="_blank" rel="noreferrer">
                        Abilit&agrave;
                    </a>
                </Link>.
            </Typography>
            <Typography paragraph>
                Seguendo le nuove regole imposte dai manuali v5 di Vampiri: la Masquerade&trade;, la selezione delle
                Abilit&agrave; segue lo stesso spirito della selezione degli Attributi: i valori possibili sono
                preimpostati, e sar&agrave; necessario semplicemente selezionare quale attributo associare ai livelli
                proposti. In questo caso, per&ograve;, contrariamente agli Attributi, avrai la possibilit&agrave; di
                scegliere quale tipo di personaggio vuoi interpretare, e di conseguenza tra quali livelli predeterminati
                potrai scegliere di associare le Abilit&agrave;. Puoi scegliere tra le seguenti opzioni:
            </Typography>
            <Typography paragraph>
                <ul>
                    <li>
                        <b>Specialista</b>: lo specialista si &egrave; concentrato nell'avanzamento di poche abilit&agrave; ad alto livello.
                        &Egrave; l'unico tipo di personaggio in cui &egrave; possibile definire una abilit&agrave; a livello 4.
                    </li>
                    <li>
                        <b>Bilanciato</b>: un personaggio bilanciato, come suggerisce la parola, &egrave; una commistione dei due tipi di personaggio.
                    </li>
                    <li>
                        <b>Tuttofare</b>: il personaggio tuttofare ha un grande ventaglio di abilit&agrave;, ma poche ad un livello eccellente.
                    </li>
                </ul>
            </Typography>
            <div style={{
                padding: "20px",
                textAlign: "center"
            }}>
                <FormControl variant="outlined" sx={{
                    margin: theme.spacing(1),
                    minWidth: 150,
                }}>
                    <InputLabel id="select-label">Tipo di Personaggio</InputLabel>
                    <Select labelId="select-label"
                            id="character-type"
                            name="character-type"
                            label="Tipo di Personaggio"
                            fullWidth
                            sx={{width: "200px"}}
                            value={characterType}
                            onChange={changeCharacterType}>
                        <MenuItem value={1}>Tuttofare</MenuItem>
                        <MenuItem value={2}>Bilanciato</MenuItem>
                        <MenuItem value={3}>Specialista</MenuItem>
                    </Select>
                </FormControl>
            </div>
            {getForm()}
        </Box>
    )
}

export default Creation3;
