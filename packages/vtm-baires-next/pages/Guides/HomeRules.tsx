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
import { guideStyle, liStyle, titleStyle } from "../../components/guides/GuidesStyles";
import Link from "next/link";
import {GuideRoutes} from "../../base/routes";
import GuideLayout from "../../components/layouts/GuideLayout";
import Index from "./index";

const percentageCellStyle = {
    textAlign: "center"
};

const HomeRules = (): ReactElement => {
    return (
        <>
            <Typography paragraph>
                <h1 style={titleStyle}>
                    Adattamenti e Differenze
                </h1>
            </Typography>

            <Typography paragraph sx={guideStyle}>
                Lo scopo di questa sezione &egrave; quello di definire le cos&igrave; dette <b>Home Rules</b>,
                ovvero gli adattamenti e gli scostamenti alle regole indicate nei Manuli di riferimento, volte principalmente
                ad aiutare e rendere possibile lo svolgimento del gioco <b>Play by Chat</b>, che per sua natura
                segue logiche e dinamiche molto diverse dal gioco cartaceo, il vero <i>target</i> delle case editrici.
            </Typography>

            <Typography paragraph sx={guideStyle}>
                Accanto alle <b>Home Rules</b>, saranno elencate anche le principali differenze tra la Versione 5 dei manuali 
                e le vecchie versioni/regolamenti. La commistione &egrave; dovuta al fatto che molte delle Home Rules
                sono volte a limare proprio alcune nuove caratteristiche di regolamento che si discostano dalla V20.
            </Typography>

            <Typography paragraph sx={guideStyle}>
                <b>Nota</b>: alcune <i>Home Rules</i> che riguardano il regolamento sono state esposte nella sezione
                apposita della <Link href={GuideRoutes.mechanics}>guida</Link>.
            </Typography>

            <Typography paragraph>
                <h3 style={titleStyle}>
                    Tiro di dado
                </h3>
            </Typography>

            <Typography paragraph>
                Il calcolo dei successi e la determinazione della Difficolt&agrave; sono stati ripensati nella versione 5 del 
                manuale in modo del tutto differente rispetto alle versioni precedenti. Chi ha giocato alle versioni 
                precedenti pu&ograve; trovare la guida completa al nuovo regolamento 
                nella <Link href={GuideRoutes.mechanics}>sezione apposita</Link>.
            </Typography>

            <Typography paragraph id="hunger">
                <h3 style={titleStyle}>
                    Fame
                </h3>
            </Typography>

            <Typography paragraph sx={guideStyle}>
                Senza alcun dubbio, la gestione della <b>Fame</b> &egrave; la caratteristica pi&ugrave; importante introdotta
                nei nuovi manuali V5. La Fame rappresenta la tensione naturale del vampiro verso ci&ograve; che per lui
                &egrave; assieme una dipendenza, l'unica fonte di nutrimento e ci&ograve; che pi&ugrave; si avvicina
                all'amplesso per un non-morto: il Sangue. Il pensiero fisso di un Cainita per tutta la sua non-vita &egrave;
                quello di nutrirsi, ancora ed ancora, ed &egrave;, in profondit&agrave;, dietro le briciole di umanit&agrave;
                che gli sono rimaste dopo l'Abbraccio, l'unica cosa cosa che realmente importa al Cainita.
            </Typography>

            <Typography paragraph>
                <h5 style={titleStyle}>
                    Cambiamenti rispetto alle versioni precedenti
                </h5>
            </Typography>

            <Typography paragraph sx={guideStyle}>
                Il concetto di Fame ha preso il posto dei punti sangue nei regolamenti precedenti. La principale differenza
                &egrave; che, invece di calibrare la Difficolt&agrave; dei tiri per resistere alla Frenesia quando i 
                Punti Sangue erano vicini allo 0, la Fame &egrave; &egrave; un concetto pervasivo, si manifesta
                in ogni singolo tiro di dado, oltre che dettare l'interpretazione del personaggio riguardo la sua 
                Bestia.
            </Typography>

            <Typography paragraph sx={guideStyle}>
                L'impressione che se ne ha leggendo i Manuali &egrave; che gli autori abbiano modificato il regolamento
                per meglio trasmettere la loro idea della Bestia e dello stato di coscienza del vampiro, dopo aver
                raccolto sufficienti <i>feedback</i> dalla comunit&agrave; e dal tipo di gioco che veniva messo in scena,
                quindi, nello spirito della nuova manualistica, la Fame sar&agrave; trasposta quasi integralmente nel 
                regolamento di chat.
            </Typography>

            <Typography paragraph>
                <h4 style={titleStyle}>
                    Sistema
                </h4>
            </Typography>
            
            <Typography paragraph sx={guideStyle}>
                Ogni Cainita ha a disposizione 5 punti di <b>Fame</b>. La situazione normale di un Cainita &egrave; quella
                di avere 1 punto di Fame, poich&eacute; l'unico modo per saziarsi completamente &egrave; quella di drenare
                tutto il sangue di un mortale, uccidendolo (e lasciando una potenziale infrazione alla <b>Masquerade</b>).
                Ogni volta che un Cainita vorr&agrave; usare una Disciplina che richiede il Sangue, vorr&agrave; curarsi o
                guarire ferite superficiali, dovr&agrave; verificare se la spesa aumenta la fame o meno. 
            </Typography>

            <Typography paragraph sx={guideStyle}>
                Il sistema &egrave; attualmente automatico: potrete comunicare al sistema che il vostro personaggio intende
                spendere Sangue dagli appositi controlli in chat. &Egrave; anche possibile tirare i dadi comunicando che 
                il personaggio ha intenzione di spendere sangue per aumentare gli Attributi. L'unica cosa che dovrete tener
                presente &egrave; che la probabilit&agrave; di aumentare la Fame del personaggio a fronte della spesa di 
                Sangue dipende dalla <b>Potenza del Sangue</b>: a Potenza del Sangue da 1 in poi, la probabilit&agrave; 
                &egrave; dimezzata. L'aumento di Attributi per un tiro invece ha una probabilit&agrave; del 50%, 
                per qualunque valore di Potenza del Sangue.
            </Typography>

            <Typography paragraph>
                <h3 style={titleStyle}>
                    Probabilit&agrave; di aumentare la Fame (Home Rule)
                </h3>
            </Typography>

            <Typography paragraph sx={guideStyle}>
                <Box sx={{padding: "10px"}}>
                    <TableContainer component={Paper} sx={{
                        width: "100%", 
                        margin: "0 auto" 
                    }}>
                        <Table aria-label="Difficoltà">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>Potenza di Sangue</StyledTableCell>
                                    <StyledTableCell sx={percentageCellStyle}>Curare ferite superficiali</StyledTableCell>
                                    <StyledTableCell sx={percentageCellStyle}>Uso di Discipline</StyledTableCell>
                                    <StyledTableCell sx={percentageCellStyle}>Aumento Attributo</StyledTableCell>
                                    <StyledTableCell sx={percentageCellStyle}>Altre spese (parvenza di umanit&agrave;, ecc.)</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <StyledTableRow>
                                    <StyledTableCell component="th" scope="row">
                                        0 (Sangue Debole)
                                    </StyledTableCell>
                                    <StyledTableCell sx={percentageCellStyle}>
                                        50%
                                    </StyledTableCell>
                                    <StyledTableCell sx={percentageCellStyle}>
                                        50%
                                    </StyledTableCell>
                                    <StyledTableCell sx={percentageCellStyle}>
                                        50%
                                    </StyledTableCell>
                                    <StyledTableCell sx={percentageCellStyle}>
                                        50%
                                    </StyledTableCell>
                                </StyledTableRow>

                                <StyledTableRow>
                                    <StyledTableCell component="th" scope="row">
                                        1 (Neonato)
                                    </StyledTableCell>
                                    <StyledTableCell sx={percentageCellStyle}>
                                        25%
                                    </StyledTableCell>
                                    <StyledTableCell sx={percentageCellStyle}>
                                        25%
                                    </StyledTableCell>
                                    <StyledTableCell sx={percentageCellStyle}>
                                        50%
                                    </StyledTableCell>
                                    <StyledTableCell sx={percentageCellStyle}>
                                        25%
                                    </StyledTableCell>
                                </StyledTableRow>

                                <StyledTableRow>
                                    <StyledTableCell component="th" scope="row">
                                        2 (Ancillae)
                                    </StyledTableCell>
                                    <StyledTableCell sx={percentageCellStyle}>
                                        25%
                                    </StyledTableCell>
                                    <StyledTableCell sx={percentageCellStyle}>
                                        25%
                                    </StyledTableCell>
                                    <StyledTableCell sx={percentageCellStyle}>
                                        50%
                                    </StyledTableCell>
                                    <StyledTableCell sx={percentageCellStyle}>
                                        25%
                                    </StyledTableCell>
                                </StyledTableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </Typography>

            <Typography paragraph sx={guideStyle}>
                La Fame, poi, influenza qualsiasi tiro di dado. Anche in questo caso, in chat potrete trovare i controlli
                per tirare, che prenderanno automaticamente in considerazione il livello di Fame del personaggio,
                simuleranno il tiro di ogni singolo dado, e forniranno l'esito, secondo quanto descritto nei manuali. 
                L'esito di ogni tiro andr&agrave; interpretato in funzione del rapporto che il Cainita ha con la Bestia: 
                alti livelli di Autocontrollo o Risolutezza possono mantenere il Cainita perfettamente controllato anche con 
                livelli di  Fame elevati; in caso contrario, il Cainita potrebbe apparire ansioso, come un tossicodipendente 
                in crisi d'astinenza (quest'ultimo esempio, forse, &egrave; il pi&ugrave; calzante di tutti, per dare un'idea di 
                cos'&egrave; la Fame).
            </Typography>

            <Typography paragraph id="blood-potency">
                <h3 style={titleStyle}>
                    Potenza del Sangue
                </h3>
            </Typography>

            <Typography paragraph sx={guideStyle}>
                La Potenza del Sangue &egrave; un'altra caratteristica introdotta nel regolamento a partire dalla Versione 5.
                Questo Attributo indica la Forza che la Vitae del Cainita ha nel sostenere il personaggio, l'efficacia nel
                curare le ferite, aumentare gli Attributi ed usare le Discipline. La Potenza del Sangue &egrave; un Attributo
                che aumenta di pari passo con il tempo di attivit&agrave; del personaggio. In generale, da regolamento si 
                considera che un personaggio aumenta di un punto la sua Potenza di Sangue ogni 100 anni di attivit&agrave;. 
                Nell'ambientazione sar&agrave; possibile acquistare un punto di Potenza del Sangue con la spesa naturale di 10
                punti esperienza, fino ad arrivare ad un massimo di 2 punti. Di contro, un personaggio perde un punto di 
                Potenza del Sangue ogni 50 anni passati in torpore. 
            </Typography>

            <Typography paragraph sx={guideStyle}>
                La Potenza del Sangue, per certi versi, sostituisce l'importanza che ha la <b>Generazione</b> di un personaggio:
                in altre parole, con i nuovi manuali, alcune caratteristiche del Sangue, come la quantit&agrave; di ferite
                che il personaggio potr&agrave; guarire per turno, e il numero di punti Attributo che potr&agrave; aumentare
                sempre per turno dipenderanno ora dalla Potenza del Sangue. La Generazione continuer&agrave; comunque ad essere
                importante, in quanto determina il massimo livello di Potenza del Sangue raggiungibile da un personaggio,
                e rimane indispensabile per contrastare gli effetti della Disciplina di <b>Dominazione</b>.
            </Typography>

            <Typography paragraph sx={guideStyle}>
                Un'altra caratteristica della Potenza del Sangue &egrave; anche l'aggravarsi della difficolt&agrave; nel cacciare,
                e la gravit&agrave; del Difetto di Clan, cos&igrave; come della sua Compulsione. Vi invitiamo a rileggere, se 
                non l'avete ancora fatto, la lista dei clan di Vampiri: la Masquerade&trade; 
                nella <Link href={GuideRoutes.clans}>sezione della guida</Link>.<br />
                I vampiri che non presentano nessuna caratteristica non solo di clan, ma addirittura vampirica, i <b>Sangue Debole</b>,
                non avranno Potenza del Sangue, e non potranno acquistarne. Il lato positivo di questo &egrave; che non soffriranno
                nemmeno delle maledizioni dei Cainiti normali: la luce solare infligger&agrave; danni superficiali, cos&igrave; come il 
                Fuoco, ma subiranno i danni come normali esseri umani, non avendo la resistenza dei Cainiti.
            </Typography>

            <Typography paragraph sx={guideStyle}>
                Ogni personaggio Cainita partir&agrave; da un valore di Potenza di Sangue a 1, mentre i Sangue Debole partiranno dal 
                valore 0. Nella tabella di seguito, saranno esposte le caratteristiche dei vari livelli di Potenza del Sangue.

                <Box sx={{padding: "10px"}}>
                    <TableContainer component={Paper} sx={{
                        width: "100%", 
                        margin: "0 auto" 
                    }}>
                        <Table aria-label="Difficoltà">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>Potenza di Sangue</StyledTableCell>
                                    <StyledTableCell sx={percentageCellStyle}>Aumento di Attributo per turno</StyledTableCell>
                                    <StyledTableCell sx={percentageCellStyle}>Danni superficiali curabili per turno</StyledTableCell>
                                    <StyledTableCell sx={percentageCellStyle}>Dadi aggiuntivi per Disciplina</StyledTableCell>
                                    <StyledTableCell sx={percentageCellStyle}>Severit&agrave; della Maledizione</StyledTableCell>
                                    <StyledTableCell sx={percentageCellStyle}>Penalit&agrave; della Caccia</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <StyledTableRow>
                                    <StyledTableCell component="th" scope="row">
                                        0 (Sangue Debole)
                                    </StyledTableCell>
                                    <StyledTableCell sx={percentageCellStyle}>
                                        Impossibile
                                    </StyledTableCell>
                                    <StyledTableCell sx={percentageCellStyle}>
                                        1
                                    </StyledTableCell>
                                    <StyledTableCell sx={percentageCellStyle}>
                                        0
                                    </StyledTableCell>
                                    <StyledTableCell sx={percentageCellStyle}>
                                        0
                                    </StyledTableCell>
                                    <StyledTableCell sx={percentageCellStyle}>
                                        Nessuna
                                    </StyledTableCell>
                                </StyledTableRow>

                                <StyledTableRow>
                                    <StyledTableCell component="th" scope="row">
                                        1 (Neonato)
                                    </StyledTableCell>
                                    <StyledTableCell sx={percentageCellStyle}>
                                        1
                                    </StyledTableCell>
                                    <StyledTableCell sx={percentageCellStyle}>
                                        1
                                    </StyledTableCell>
                                    <StyledTableCell sx={percentageCellStyle}>
                                        0
                                    </StyledTableCell>
                                    <StyledTableCell sx={percentageCellStyle}>
                                        1
                                    </StyledTableCell>
                                    <StyledTableCell sx={percentageCellStyle}>
                                        Nessuna
                                    </StyledTableCell>
                                </StyledTableRow>

                                <StyledTableRow>
                                    <StyledTableCell component="th" scope="row">
                                        2 (Ancillae)
                                    </StyledTableCell>
                                    <StyledTableCell sx={percentageCellStyle}>
                                        1
                                    </StyledTableCell>
                                    <StyledTableCell sx={percentageCellStyle}>
                                        2
                                    </StyledTableCell>
                                    <StyledTableCell sx={percentageCellStyle}>
                                        1
                                    </StyledTableCell>
                                    <StyledTableCell sx={percentageCellStyle}>
                                        1
                                    </StyledTableCell>
                                    <StyledTableCell sx={percentageCellStyle}>
                                        Animali e sacche di sangue soddisfano per la met&agrave;
                                    </StyledTableCell>
                                </StyledTableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </Typography>

            <Typography paragraph>
                <h3 style={titleStyle}>
                    Risonanza
                </h3>
            </Typography>

            <Typography paragraph sx={guideStyle}>
                Altra aggiunta della Versione 5 rispetto alle edizioni precedenti, la <b>Risonanza</b> &egrave; una caratteristica
                emotiva del Sangue di cui il vampiro si nutre. Il principio &egrave; semplice: in base alle emozioni della preda,
                il Sangue di cui il vampiro si nutre avr&agrave; una "risonanza" particolare. La risonanza emotiva della vittima
                avr&agrave; anche un'intensit&agrave; particolare, e potr&agrave; influenzare, a livelli alti, anche l'umore
                del Cainita per la Notte.
            </Typography>

            <Typography paragraph sx={guideStyle}>
                Una delle caratteristiche pi&ugrave; importanti della Caccia &egrave; che pu&ograve; influenzare anche l'efficacia
                delle Discipline. A discrezione del Narratore, una particolare Disciplina potr&agrave; avere una Difficolt&agrave; 
                minore, o potranno essere aggiunti dadi all'ammontare. &Egrave; anche vero il contrario: una particolare risonanza
                potr&agrave;, sempre a discrezione del Narratore, svantaggiare l'utilizzo di altre Discipline.<br />
                Questo tipo di valutazioni saranno appannaggio del Narratore e <b>in situazioni di gioco libero non sar&agrave; 
                possibile attribuire diminuzioni di Difficolt&agrave; o all'ammontare</b>. Potr&agrave; essere comunque interpretato 
                l'umore assorbito col Sangue.
            </Typography>

            <Typography paragraph>
                <h4 style={titleStyle}>
                    Sistema (Home Rule)
                </h4>
            </Typography>

            <Typography paragraph sx={guideStyle}>
                La Caccia &egrave; un sistema automatico integrato nel sito, disponibile tra le opzioni nel menu a sinistra. Sar&agrave;
                possibile far cacciare il proprio personaggio una volta al giorno. La <b>Risonanza</b> e la sua intensit&agrave; saranno
                determinate automaticamente, e compariranno come notifica sulla chat e sulla scheda, nella sezione <b>Stats</b>.<br />
                Le intensit&agrave; possibili saranno le seguenti:

                <ul>
                    <li style={liStyle}>Trascurabile</li>
                    <li style={liStyle}>Fugace</li>
                    <li style={liStyle}>Intensa</li>
                    <li style={liStyle}>Acuta (Discrasia)</li>
                </ul>

                La tabella di seguito presenta i vari effetti delle varie Risonanze, e la loro influenza sulle Discipline.
            </Typography>

            <Typography paragraph>
                <h5 style={titleStyle}>
                    Tipi di Risonanze e Discipline influenzate
                </h5>
            </Typography>

            <Typography paragraph sx={guideStyle}>
                <Box sx={{padding: "10px"}}>
                    <TableContainer component={Paper} sx={{
                        width: "60%", 
                        margin: "0 auto" 
                    }}>
                        <Table aria-label="Difficoltà">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>Risonanza</StyledTableCell>
                                    <StyledTableCell>Discipline</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <StyledTableRow>
                                    <StyledTableCell component="th" scope="row">
                                        Collerica
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        Potenza, Velocit&agrave;
                                    </StyledTableCell>
                                </StyledTableRow>

                                <StyledTableRow>
                                    <StyledTableCell component="th" scope="row">
                                        Malinconica
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        Oscurazione, Robustezza
                                    </StyledTableCell>
                                </StyledTableRow>

                                <StyledTableRow>
                                    <StyledTableCell component="th" scope="row">
                                        Distaccata
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        Auspex, Dominazione, Oblivion
                                    </StyledTableCell>
                                </StyledTableRow>

                                <StyledTableRow>
                                    <StyledTableCell component="th" scope="row">
                                        Sanguigna
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        Ascendente, Stregoneria del Sangue
                                    </StyledTableCell>
                                </StyledTableRow>

                                <StyledTableRow>
                                    <StyledTableCell component="th" scope="row">
                                        Sangue Animale
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        Animalit&agrave;, Proteide
                                    </StyledTableCell>
                                </StyledTableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </Typography>

            <Typography paragraph>
                <h3 style={titleStyle}>
                    Frenesia
                </h3>
            </Typography>

            <Typography paragraph sx={guideStyle} id="frenzy-types">
                La Frenesia &egrave; l'espressione della Bestia, che prende il controllo del corpo del
                Cainita finch&eacute; la causa scatenante non svanisce. La Frenesia pu&ograve; essere
                di tre tipi: 
                
                <ul>
                    <li>
                        la Frenesia di <b>Furia</b> scaturisce dalla rabbia per una umiliazione
                        o per l'uccisione di una persona cara, di un amico
                    </li>
                    <li>
                        la Frenesia di <b>Fame</b>, quando la Fame raggiunge livelli di guardia e il 
                        Cainita percepisce Sangue nelle vicinanze
                    </li>
                    <li>
                        la Frenesia di <b>Terrore</b>, o <b>R&ouml;tschreck</b> invece, &egrave; la 
                        risposta della Bestia ad un pericolo immediato di Morte, come il Fuoco o la 
                        luce del Sole. Pu&ograve; anche essere causata da troppe ferite subite.
                    </li>
                </ul>
            </Typography>

            <Typography paragraph sx={guideStyle}>
                Un vampiro pu&ograve; resistere alla Frenesia: in questo caso, dovr&agrave; tirare 
                un ammontare pari a <b>Forza di Volont&agrave; pi&ugrave; un terzo dell'Umanit&agrave;
                arrotondato per difetto</b>, ad una Difficolt&agrave; determinata dal Narratore.<br />
                C'&egrave; anche la possibilit&agrave; di "cavalcare" la Bestia, lasciando che 
                prenda il sopravvento, mantenendo un barlume di lucidit&agrave; tale da poterla 
                direzionare dove pi&ugrave; appropriato. In questo caso non sar&agrave; necessario
                nessun tiro.
            </Typography>

            <Typography paragraph sx={guideStyle}>
                Di seguito, potrete trovare alcuni esempi di Difficolt&agrave;

                <Box sx={{padding: "10px"}}>
                    <TableContainer component={Paper} sx={{
                        width: "60%", 
                        margin: "0 auto" 
                    }}>
                        <Table aria-label="Difficoltà Frenesia">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>Causa</StyledTableCell>
                                    <StyledTableCell>Tipo di Frenesia</StyledTableCell>
                                    <StyledTableCell>Difficolt&agrave;</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <StyledTableRow>
                                    <StyledTableCell component="th" scope="row">
                                        Umiliazione pubblica
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        Furia
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        2
                                    </StyledTableCell>
                                </StyledTableRow>

                                <StyledTableRow>
                                    <StyledTableCell component="th" scope="row">
                                        Insultato da un inferiore
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        Furia
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        2
                                    </StyledTableCell>
                                </StyledTableRow>

                                <StyledTableRow>
                                    <StyledTableCell component="th" scope="row">
                                        Uccisione di un amico
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        Furia
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        2
                                    </StyledTableCell>
                                </StyledTableRow>

                                <StyledTableRow>
                                    <StyledTableCell component="th" scope="row">
                                        Danno ad un personaggio amato
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        Furia
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        3
                                    </StyledTableCell>
                                </StyledTableRow>

                                <StyledTableRow>
                                    <StyledTableCell component="th" scope="row">
                                        Uccisione di un personaggio amato
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        Furia
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        4
                                    </StyledTableCell>
                                </StyledTableRow>

                                <StyledTableRow>
                                    <StyledTableCell component="th" scope="row">
                                        Piccola ferita aperta, o odore di Sangue<br />
                                        con Fame a 4 o 5
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        Fame
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        2
                                    </StyledTableCell>
                                </StyledTableRow>

                                <StyledTableRow>
                                    <StyledTableCell component="th" scope="row">
                                        Assaggio di Sangue con Fame 4 o 5
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        Fame
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        3
                                    </StyledTableCell>
                                </StyledTableRow>

                                <StyledTableRow>
                                    <StyledTableCell component="th" scope="row">
                                        Fallimento del <i>Prova di Risveglio</i> <br />
                                        con Fame 4 o 5
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        Fame
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        4
                                    </StyledTableCell>
                                </StyledTableRow>

                                <StyledTableRow>
                                    <StyledTableCell component="th" scope="row">
                                        Fal&ograve;
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        R&ouml;tschreck
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        2
                                    </StyledTableCell>
                                </StyledTableRow>

                                <StyledTableRow>
                                    <StyledTableCell component="th" scope="row">
                                        Venire bruciato
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        R&ouml;tschreck
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        2
                                    </StyledTableCell>
                                </StyledTableRow>

                                <StyledTableRow>
                                    <StyledTableCell component="th" scope="row">
                                        Essere dentro un edificio in fiamme
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        R&ouml;tschreck
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        3
                                    </StyledTableCell>
                                </StyledTableRow>

                                <StyledTableRow>
                                    <StyledTableCell component="th" scope="row">
                                        Luce del Sole oscurata
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        R&ouml;tschreck
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        3
                                    </StyledTableCell>
                                </StyledTableRow>

                                <StyledTableRow>
                                    <StyledTableCell component="th" scope="row">
                                        Diretta esposizione alla luce solare
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        R&ouml;tschreck
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        4
                                    </StyledTableCell>
                                </StyledTableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </Typography>

            <Typography paragraph>
                <h3 style={titleStyle}>
                    Umanit&agrave; e Macchie
                </h3>
            </Typography>

            <Typography paragraph sx={guideStyle}>
                La discesa nell'Oscurit&agrave; tra le grinfie della Bestia &egrave; un percorso che 
                ogni Cainita percorre, indipendentemente dal fatto che lo voglia o meno. Col passare della
                non-vita, la parvenza di umanit&agrave; che conservava dall'Abbraccio si incrina, si 
                macchia sempre di pi&ugrave; di peccati ispirati dalla <b>Fame</b> e dalla <b>Bestia</b>.<br />
                Non &egrave; un problema di <b>se</b>, ma di <b>quando</b> il Cainita perder&agrave; il
                controllo, e far&agrave; qualcusa di cui, alla fine della Notte, non riuscir&agrave; 
                pi&ugrave; a pentirsi.
            </Typography>

            <Typography paragraph sx={guideStyle}>
                La gestione dell'Umanit&agrave; &egrave; un'altra delle cose che i nuovi manuali
                affrontano in modo differente dai precedenti. Non ci sar&agrave; pi&ugrave; la possibilit&agrave;
                di intraprendere Sentieri differenti dall'Umanit&agrave;, ma sar&agrave; possibile 
                definire una gerarchia di <Link href={GuideRoutes.creation}><a id="convictions">Convinzioni</a></Link> del personaggio.
                Se il personaggio contravverr&agrave; ad una di queste Convinzioni durante una 
                giocata, acquisir&agrave; una macchia a discrezione del Narratore. Alla fine della giocata,
                il personaggio dovr&agrave; tirare con un ammontare pary a <b>10 - Umanit&agrave; - Macchie</b>, 
                per un minimo di 1. Se, per esempio, il personaggio ha Umanit&agrave; 6 e ha ricevuto 
                due Macchie durante la giocata, avr&agrave; a disposizione 2 dadi.
            </Typography>

            <Typography paragraph sx={guideStyle}>
                Se il tiro ha successo, il personaggio sentir&agrave; rimorso, e potr&agrave; mantenere
                il suo punteggio di Umanit&agrave;. In caso contrario, perder&agrave; un punto di 
                Umanit&agrave;.
            </Typography>

            <Typography paragraph sx={guideStyle}>
                Nel caso in cui, durante una giocata, il personaggio "riempir&agrave;" tutte le caselle
                vuote di Umanit&agrave; (3 Macchie ad Umanit&agrave; 7, 4 a Umanit&agrave; 6 e cos&igrave;
                via), ogni azione che and&agrave; contro le Convinzioni del personaggio comporter&agrave;
                un tiro di Frenesia a Difficolt&agrave; 4 prima di essere effettuata, e se riuscir&agrave;
                comporter&agrave; la perdita di un punto, o danno, alla Forza di Volont&agrave;.
            </Typography>

            <Typography paragraph>
                <h4 style={titleStyle}>
                    Risveglio
                </h4>
            </Typography>

            <Typography paragraph sx={guideStyle}>
                Un vampiro di giorno entra in torpore: il suo sangue diventa gelido, il suo corpo assume
                le fattezze, la temperatura e tutte le caratteristiche di un cadavere fresco. Risvegliarsi
                per un vampiro &egrave; estremamente difficile, e dipende fortemente dal punteggio di 
                Umanit&agrave; del Cainita. Per svegliarsi, il Cainita dovr&agrave; infatti effettuare
                un tiro con un'ammontare pari al suo livello di Umanit&agrave;, ad una Difficolt&agrave;
                variabile in base al tipo di stimolo: una questione di vita o di morte (incendio) avr&agrave;
                una Difficolt&agrave; di 3, la ricezione di un messaggio particolarmente importante 
                avr&agrave; una Difficolt&agrave; pari a 4, un'inezia 5. Un successo garantir&agrave;
                al vampiro di rimanere sveglio per una scena, un successo critico per tutto il giorno.
            </Typography>

            <Typography paragraph>
                <h4 style={titleStyle}>
                    Effetti dell'Umanit&agrave;
                </h4>
            </Typography>

            <Typography paragraph sx={guideStyle}>
                L'Umanit&agrave; determina anche altre condizioni del vampiro, quali i bonus per resistere
                alla Frenesia (l'Umanit&agrave; &egrave; tutto ci&ograve; che si frappone tra il vampiro e
                la sua coscienza, e la Bestia che ruggisce dentro di lui) e la lunghezza del Torpore. Tutti
                questi valori sono riassunti di seguito:

                <Box sx={{padding: "10px"}}>
                    <TableContainer component={Paper} sx={{
                        width: "60%", 
                        margin: "0 auto" 
                    }}>
                        <Table aria-label="Effetti dell'Umanità">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>Livello di Umanit&agrave;</StyledTableCell>
                                    <StyledTableCell>
                                        Dadi da aggiungere al tiro <br />
                                        per resistere alla Frenesia
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        Lunghezza del Torpore<br />
                                        <b>Home Rule</b>
                                    </StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <StyledTableRow>
                                    <StyledTableCell component="th" scope="row">
                                        Umanit&agrave; 9
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        3
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        1 giorno
                                    </StyledTableCell>
                                </StyledTableRow>

                                <StyledTableRow>
                                    <StyledTableCell component="th" scope="row">
                                        Umanit&agrave; 8
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        2
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        3 giorni
                                    </StyledTableCell>
                                </StyledTableRow>

                                <StyledTableRow>
                                    <StyledTableCell component="th" scope="row">
                                        Umanit&agrave; 7
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        2
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        1 settimana
                                    </StyledTableCell>
                                </StyledTableRow>

                                <StyledTableRow>
                                    <StyledTableCell component="th" scope="row">
                                        Umanit&agrave; 6
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        2
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        2 settimane
                                    </StyledTableCell>
                                </StyledTableRow>

                                <StyledTableRow>
                                    <StyledTableCell component="th" scope="row">
                                        Umanit&agrave; 5
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        1
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        3 settimane
                                    </StyledTableCell>
                                </StyledTableRow>

                                <StyledTableRow>
                                    <StyledTableCell component="th" scope="row">
                                        Umanit&agrave; 4
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        1
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        1 mese
                                    </StyledTableCell>
                                </StyledTableRow>

                                <StyledTableRow>
                                    <StyledTableCell component="th" scope="row">
                                        Umanit&agrave; 3
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        1
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        1 anno
                                    </StyledTableCell>
                                </StyledTableRow>

                                <StyledTableRow>
                                    <StyledTableCell component="th" scope="row">
                                        Umanit&agrave; 2
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        0
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        1 secolo
                                    </StyledTableCell>
                                </StyledTableRow>

                                <StyledTableRow>
                                    <StyledTableCell component="th" scope="row">
                                        Umanit&agrave; 1
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        0
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        5 secoli
                                    </StyledTableCell>
                                </StyledTableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </Typography>

            <Typography paragraph>
                <h3 style={titleStyle}>
                    Legame di Sangue
                </h3>
            </Typography>

            <Typography paragraph sx={guideStyle}>
                Il Sangue dei Cainiti ha anche il potere di ispirare emozioni di forte lealt&agrave; e infatuazione
                a mortali e altri Cainiti. Ogni sorso di Sangue aumenta il sentimento per il Cainita, a patto che 
                il Sangue sia assunto in notti differenti. Il sentimento ispirato dal Sangue non &egrave; per&ograve;
                un sentimento sano, umano, ma un legame inficiato dall'ossessione, oscuro, pervasivo ma negativo.
                Gelosia, possessione sono attributi di questo sentimento, anche se l'Asservito si impegner&agrave;
                con tutto s&eacute; stesso per servire come pu&ograve; il Sire.
            </Typography>

            <Typography paragraph sx={guideStyle}>
                Un Cainita pu&ograve; legare col Sangue un numero di Cainiti pari al suo livello di Potenza del 
                Sangue; se lega col Sangue un Cainita supplementare, il legame pi&ugrave; vecchio svanir&agrave; nel
                giro di una settimana. Inoltre, per legare col Sangue un altro Cainita, il Sangue deve sgorgare 
                direttamente dalle vene del Sire, e non devono passare che secondi da quando la Vitae esce dalle
                vene, altrimenti il Sangue perde il suo potere. Un umano, invece, pu&ograve; essere legato
                anche con sangue conservato in contenitori a tenuta stagna, tenuto lontano dalla luce solare, e 
                non c'&egrave; limite al numero di mortali che il Cainita pu&ograve; legare col Sangue.
            </Typography>

            <Typography paragraph sx={guideStyle}>
                L'effetto del Legame di Sangue ha tre livelli differenti, a seconda di quante notti l'Asservito
                beve il sangue del Sire: la prima notte, il sentimento &egrave; intenso ma ancora ragionevole, 
                l'Asservito potr&agrave; odiare o ammirare il Sire, ma non gli sar&agrave; indifferente.<br />
                Al secondo sorso, l'Asservito comincia a sperimentare gelosia, possessione, infatuazione e
                ossessione per il Sire.<br />
                Al terzo sorso, il legame &egrave; totale: a questo livello, la parola del Sire &egrave; un 
                ordine, e per resistere l'Asservito dovr&agrave; avere successo in un tiro 
                di <b>Fermezza + Intelligenza con Difficolt&agrave; pari al livello del legame di Sangue</b>.
            </Typography>

            <Typography paragraph sx={guideStyle}>
                Il Legame di Sangue perde un livello di forza dopo un anno di distanza dell'Asservito dal Sire.
                Nel caso dei mortali, questo pu&ograve; essere pericoloso: il Legame ferma il processo di 
                invecchiamento, riportando anzi il Mortale ad un'et&agrave; addirittura inferiore rispetto
                a quella in cui il Legame &egrave; stato formato, ma non appena l'assunzione di Vitae cessa,
                il processo di invecchiamento recupera il tempo perso, possibilmente riducendo l'Asservito
                a cenere nel giro di minuti.
            </Typography>
        </>
    );
}

HomeRules.getLayout = (page: ReactElement) => (
    <GuideLayout>
        {page}
    </GuideLayout>
)

export default HomeRules;
