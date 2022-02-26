import React, {ReactElement} from "react";
import Typography from "@mui/material/Typography";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from "@mui/material/Box";
import StyledTableRow from "../../components/guides/StyledTableRow";
import StyledTableCell from "../../components/guides/StyledTableCell";
import {guideStyle, titleStyle} from "../../components/guides/GuidesStyles";
import GuideLayout from "../../components/layouts/GuideLayout";
import EnvironmentSects from "./EnvironmentSects";

const Experience = (): ReactElement => {
    return (
        <>
            <Typography paragraph>
                <h1 style={titleStyle}>
                    Gestione dell'Esperienza
                </h1>
            </Typography>

            <Typography paragraph style={guideStyle}>
                Ogni personaggio, partecipando ad una Scena (da intendersi come giocata) ha diritto ad una quantit&agrave;
                variabile di Punti Esperienza, in base all'interpretazione offerta durante la giocata, alle idee avute ed
                alla capacit&agrave; di influenzare la storia. La quantit&agrave; generalmente va da 1 a 3 Punti Esperienza
                per giocata.
            </Typography>

            <Typography paragraph style={guideStyle}>
                L'esperienza accumulata dal personaggio pu&ograve; essere "spesa" per acquistare Attributi, Abilit&agrave;, 
                Discipline ed altre caratteristiche della scheda. Ogni caratteristica ha un costo diverso, e dipende dal livello
                attuale della caratteristica stessa. Di seguito potrete trovare la lista completa di spesa per caratteristica.<br />
                Per spendere i punti esperienza, comunque, dovrete sempre rivolgervi ad un Narratore.
            </Typography>

            <Typography paragraph style={guideStyle}>
                <Box sx={{padding: "10px"}}>
                    <TableContainer component={Paper} sx={{
                        width: "100%", 
                        margin: "0 auto" 
                    }}>
                        <Table aria-label="Spesa punti esperienza">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>Caratteristica</StyledTableCell>
                                    <StyledTableCell>Costo in Punti Esperienza</StyledTableCell>
                                    <StyledTableCell>Note</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <StyledTableRow>
                                    <StyledTableCell component="th" scope="row">
                                        Attributo
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        Nuovo livello x 5
                                    </StyledTableCell>
                                    <StyledTableCell>
                                    </StyledTableCell>
                                </StyledTableRow>

                                <StyledTableRow>
                                    <StyledTableCell component="th" scope="row">
                                        Abilit&agrave;
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        Nuovo livello x 3
                                    </StyledTableCell>
                                    <StyledTableCell>
                                    </StyledTableCell>
                                </StyledTableRow>

                                <StyledTableRow>
                                    <StyledTableCell component="th" scope="row">
                                        Specialit&agrave;
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        3
                                    </StyledTableCell>
                                    <StyledTableCell>
                                    </StyledTableCell>
                                </StyledTableRow>

                                <StyledTableRow>
                                    <StyledTableCell component="th" scope="row">
                                        Disciplina di Clan
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        Nuovo livello x 5
                                    </StyledTableCell>
                                    <StyledTableCell>
                                    </StyledTableCell>
                                </StyledTableRow>

                                <StyledTableRow>
                                    <StyledTableCell component="th" scope="row">
                                        Disciplina non di Clan
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        Nuovo livello x 7
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        Per apprendere una Disciplina non di clan, il Cainita dovr&agrave;
                                        bere la Vitae di un Cainita che conosce la Disciplina (anche un Vile).<br />
                                        Questo vale solo per acquistare il primo livello.
                                    </StyledTableCell>
                                </StyledTableRow>

                                <StyledTableRow>
                                    <StyledTableCell component="th" scope="row">
                                        Disciplina per Vili
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        Nuovo livello x 6
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        Per apprendere una nuova Disciplina, il Cainita dovr&agrave;
                                        bere la Vitae di un Cainita che conosce la Disciplina (anche un Vile).<br />
                                        Questo vale solo per acquistare il primo livello.
                                    </StyledTableCell>
                                </StyledTableRow>

                                <StyledTableRow>
                                    <StyledTableCell component="th" scope="row">
                                        Nuovo livello di Alchimia dei Sangue Debole
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        Nuovo livello x 5
                                    </StyledTableCell>
                                    <StyledTableCell>
                                    </StyledTableCell>
                                </StyledTableRow>

                                <StyledTableRow>
                                    <StyledTableCell component="th" scope="row">
                                        Nuovo rituale di Stregoneria del Sangue
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        Nuovo livello x 3
                                    </StyledTableCell>
                                    <StyledTableCell>
                                    </StyledTableCell>
                                </StyledTableRow>

                                <StyledTableRow>
                                    <StyledTableCell component="th" scope="row">
                                        Nuova formula Alchimia dei Sangue Debole
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        Nuovo livello x 3
                                    </StyledTableCell>
                                    <StyledTableCell>
                                    </StyledTableCell>
                                </StyledTableRow>

                                <StyledTableRow>
                                    <StyledTableCell component="th" scope="row">
                                        Potenza del Sangue
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        Nuovo livello x 10
                                    </StyledTableCell>
                                    <StyledTableCell>
                                    </StyledTableCell>
                                </StyledTableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </Typography>
        </>
    );
}

Experience.getLayout = (page: ReactElement) => (
    <GuideLayout>
        {page}
    </GuideLayout>
)

export default Experience;
