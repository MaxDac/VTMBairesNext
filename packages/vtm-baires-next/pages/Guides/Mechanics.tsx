import React, {ReactElement} from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import StyledTableRow from "../../components/guides/StyledTableRow";
import StyledTableCell from "../../components/guides/StyledTableCell";
import Link from "next/link";
import { guideStyle, liStyle, titleStyle } from "../../components/guides/GuidesStyles";
import {GuideRoutes} from "../../base/routes";
import GuideLayout from "../../components/layouts/GuideLayout";
import GuidesGlossary from "./Introduction";

const Mechanics = (): ReactElement => {
    return (
        <>
            <Typography paragraph>
                <h1 style={titleStyle}>
                    Meccaniche di Gioco V5
                </h1>
            </Typography>

            <Typography paragraph style={guideStyle}>
                Vampiri: la Masquerade&trade; &egrave; un gioco di ruolo horror, basato principalmente sull'interpretazione
                dei personaggi. Questo vuol dire che, in una giocata, il tiro del dado dovrebbe essere secondario rispetto
                allo svolgimento della storia narrata tra i personaggi. Specialmente nei confronti tra personaggi e nell'utilizzo 
                delle loro Discipline, per&ograve;, &egrave; necessario definire le regole di ingaggio, e chiarire come
                procedere per determinare ad esempio il successo o il fallimento di una Disciplina, o la quantit&agrave; di danni
                sofferta da un personaggio in un combattimento.<br />
                Questa guida sar&agrave; il pi&ugrave; sintetica possibile, una specie di <i>cheat-sheet</i> sul combattimento e
                su come considerare gli effetti che i personaggi possono sperimentare in gioco.
            </Typography>

            <Typography paragraph>
                <h3 style={titleStyle}>
                    Tiro di dado
                </h3>
            </Typography>

            <Typography paragraph style={guideStyle}>
                Un tiro di dado consiste nel tirare un numero di dadi a 10 facce (da qui in poi, <b>d10</b>),
                contare il numero di dadi il cui punteggio &egrave; uguale o supera il 6, per determinare i successi. Il tiro di dadi avr&agrave;
                una difficolt&agrave; definita dal regolamento, e il tiro si considera superato se il numero di successi &egrave; uguale o 
                maggiore della Difficolt&agrave;. L'ammontare, ovvero il numero di dadi da tirare, molto spesso corrisponde alla
                somma dei valori di un Attributo e di una Abilit&agrave;.<br />
                Per esempio, per determinare se un personaggio riesce a saltare un ostacolo, il Narratore potr&agrave; chiedere al 
                personaggio di tirare Forza + Atletica a Difficolt&agrave; 2. Se il personaggio ha Forza 2 e Atletica 3, tirer&agrave; 
                5 dadi. Supponendo che il risultato sia 1 6 7 2 4, il tiro ha totalizzato 2 success (6 e 7), quindi il tiro, essendo a
                Difficolt&agrave; 2, riesce.<br />
                Il tiro di dadi dovr&agrave; anche tenere conto del punteggio di Fame, ma questo aspetto &egrave; contemplato nel sistema
                di tiro automatico disponibile in chat, cliccando sul tasto con l'icona di dado.
            </Typography>

            <Typography paragraph>
                <h4 style={titleStyle}>
                    Difficolt&agrave;
                </h4>
            </Typography>

            <Typography paragraph>
                Ogni tiro di dado avr&agrave; una Difficolt&agrave;, che va da 1 a 7 o pi&ugrave;. Nella tabella di seguito, potrete trovare, per ogni
                livello di difficolt&agrave;, un suo equivalente nella vita reale.

                <Box sx={{padding: "10px"}}>
                    <TableContainer component={Paper} sx={{
                        width: "55%", 
                        margin: "0 auto" 
                    }}>
                        <Table aria-label="Difficoltà">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>Valore di Difficolt&agrave;</StyledTableCell>
                                    <StyledTableCell>Equivalente nella vita reale</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <StyledTableRow>
                                    <StyledTableCell component="th" scope="row">
                                        1
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        Routine (colpire un bersaglio immobile, convincere un amico fidato ad aiutarti)
                                    </StyledTableCell>
                                </StyledTableRow>

                                <StyledTableRow>
                                    <StyledTableCell component="th" scope="row">
                                        2
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        Semplice (sedurre qualcuno gi&agrave; predisposto, intimidire una persona debole)
                                    </StyledTableCell>
                                </StyledTableRow>

                                <StyledTableRow>
                                    <StyledTableCell component="th" scope="row">
                                        3
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        Moderata (sostituire l'autoradio di un'auto, percorrere una corda tesa rimanendo in equilirio)
                                    </StyledTableCell>
                                </StyledTableRow>

                                <StyledTableRow>
                                    <StyledTableCell component="th" scope="row">
                                        4
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        Impegnativa (percepire l'origine di un sussurro, creare una memorabile opera d'arte)
                                    </StyledTableCell>
                                </StyledTableRow>

                                <StyledTableRow>
                                    <StyledTableCell component="th" scope="row">
                                        5
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        Difficile (convincere un poliziotto che quella bustina di coca non &egrave; la tua, 
                                        rimontare un motore completamente devastato)
                                    </StyledTableCell>
                                </StyledTableRow>

                                <StyledTableRow>
                                    <StyledTableCell component="th" scope="row">
                                        6
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        Molto Difficile (correre su una corda tesa essendo sotto tiro, calmare una folla
                                        inferocita)
                                    </StyledTableCell>
                                </StyledTableRow>

                                <StyledTableRow>
                                    <StyledTableCell component="th" scope="row">
                                        7 o pi&ugrave;
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        Quasi impossibile (trovare un senza tetto in particolare a Los Angeles in una notte,
                                        recitare alla perfezione un testo in lingua straniera sconosciuta)
                                    </StyledTableCell>
                                </StyledTableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </Typography>

            <Typography paragraph>
                <h4 style={titleStyle}>
                    Esiti
                </h4>
            </Typography>

            <Typography paragraph style={guideStyle}>
                Nella versione 5, oltre a cambiare la meccanica del tiro di dado e la determinazione dei successi, anche i possibili esiti
                di un tiro sono cambiati, ed esprimono la complessit&agrave; dell'interazione col successo o l'insuccesso di un 
                vampiro che deve sempre confrontarsi con la sua Bestia. In particolare, la <Link href={GuideRoutes.homeRules}><a id="hunger">Fame</a></Link> ora
                ha un influsso potente sulle azioni del Cainita: pi&ugrave; aumenta, pi&ugrave; le azioni del vampiro rischieranno di
                essere dettate dalla Bestia. Quando un personaggio tira un dado, alcuni dadi appariranno in rosso: il numero di 
                questi dadi dipende dal livello di Fame del personaggio, e possono condurre a differenti esiti.
            </Typography>

            <Typography paragraph style={guideStyle} id="dice-results">
                Gli esiti dei dadi saranno calcolati automaticamente dal sistema di gioco, ma &egrave; necessario sapere quali sono 
                poich&eacute; il personaggio dovr&agrave; basare almeno parte della sua interpretazione su questi.

                <Box sx={{padding: "10px"}}>
                    <TableContainer component={Paper} sx={{
                        width: "100%", 
                        margin: "0 auto" 
                    }}>
                        <Table aria-label="Esiti">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>Tiro di dadi</StyledTableCell>
                                    <StyledTableCell>Esempio</StyledTableCell>
                                    <StyledTableCell>Esito</StyledTableCell>
                                    <StyledTableCell>Descrizione</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <StyledTableRow>
                                    <StyledTableCell component="th" scope="row">
                                        Sucessi maggiori o uguali della Difficolt&agrave;<br />
                                        o del tiro contrastato, con meno di 2 dadi a 10
                                    </StyledTableCell>
                                    <StyledTableCell component="th" scope="row">
                                        2 6 7 5 a Diff. 2
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        Successo
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        Il personaggio riesce nell'azione. A seconda del numero di successi,
                                        il Narratore potr&agrave; descrivere un'azione pi&ugrave; o meno 
                                        palesemente riuscita.
                                    </StyledTableCell>
                                </StyledTableRow>
                                <StyledTableRow>
                                    <StyledTableCell component="th" scope="row">
                                        Il tiro presenta successi, ma in numero inferiore<br />
                                        rispetto alla Difficolt&agrave; o al tiro contrastato
                                    </StyledTableCell>
                                    <StyledTableCell component="th" scope="row">
                                        2 6 4 5 a Diff. 2
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        Fallimento
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        Il personaggio fallisce l'azione, semplicemente.
                                    </StyledTableCell>
                                </StyledTableRow>
                                <StyledTableRow>
                                    <StyledTableCell component="th" scope="row">
                                        Nessun successo (tutti i dadi minori di 6)
                                    </StyledTableCell>
                                    <StyledTableCell component="th" scope="row">
                                        2 1 4 5
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        Fallimento totale
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        A discrezione del Narratore, pu&ograve; prendere il posto dell'insuccesso 
                                        critico nelle precedenti versioni dei manuali. Nelle giocate Free Play,
                                        &egrave; da considerarsi un totale fallimento di ci&ograve; che si sta
                                        tentando di fare.
                                    </StyledTableCell>
                                </StyledTableRow>
                                <StyledTableRow>
                                    <StyledTableCell component="th" scope="row">
                                        Due o pi&ugrave; dieci in un tiro
                                    </StyledTableCell>
                                    <StyledTableCell component="th" scope="row">
                                        10 10 5 6 a Diff. 2
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        Successo critico
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        Il successo critico rappresenta un'esecuzione perfetta di un'azione. Si 
                                        ottiene con almeno 2 dadi pari a 10. In questo caso, la coppia di 10 vale 
                                        doppio (4 successi). I 10 valgono doppi solo a coppie, quindi un tiro con
                                        3 dadi a 10 equivale a 5 successi, non 6.
                                    </StyledTableCell>
                                </StyledTableRow>
                                <StyledTableRow>
                                    <StyledTableCell component="th" scope="row">
                                        Numero insufficiente di successi <br />
                                        (minori della Difficolt&agrave; <br />
                                        minori del tiro contrastato)
                                    </StyledTableCell>
                                    <StyledTableCell component="th" scope="row">
                                        <span style={{color: "red"}}>2 1</span> 5 6 a Diff. 2
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        Fallimento bestiale
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        Il fallimento bestiale differisce dal fallimento normale nel fatto che,
                                        per un qualche motivo, la Bestia del personaggio si infuria per il 
                                        mancato successo, e si manifesta in modo subdolo. Gli effetti di un 
                                        Fallimento Bestiale portano molto spesso all'<b>insorgere della Compulsione
                                        di Clan</b> come un atteggiamento che il vampiro considerer&agrave; del tutto
                                        naturale e normale. In Giocate Libere si potr&agrave; interpretare la 
                                        Compulsione di Clan (per Vili e Sangue Debole, aumenter&agrave;
                                        di un livello la Fame), mentre gli effetti in una giocata gestita saranno 
                                        a discrezione del Narratore.
                                    </StyledTableCell>
                                </StyledTableRow>
                                <StyledTableRow>
                                    <StyledTableCell component="th" scope="row">
                                        Un gruppo di due dieci, di cui uno con un Dado Fame
                                    </StyledTableCell>
                                    <StyledTableCell component="th" scope="row">
                                        <span style={{color: "red"}}>10</span> 10 5 6 a Diff. 2
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        Successo caotico
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        Non solo nell'insuccesso, ma anche un successo troppo riuscito pu&ograve; 
                                        ispirare l'arroganza della Bestia. Un successo caotico &egrave; stato
                                        ottenuto anche grazie all'influsso sottile e inconscio della Bestia,
                                        che si manifesta rendendo l'azione <b>troppo</b> spettacolare. Le
                                        conseguenze di un Successo caotico possono essere perdita di Vantaggi,
                                        un'infrazione della Masquerade (il successo &egrave; ottenuto grazie
                                        alle capacit&agrave; soprannaturali del vampiro), o una <b>
                                            Macchia</b> all'Umanit&agrave;.
                                    </StyledTableCell>
                                </StyledTableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </Typography>

            <Typography paragraph>
                <h4 style={titleStyle}>
                    Tiro contrastato
                </h4>
            </Typography>

            <Typography paragraph style={guideStyle}>
                In un tiro contrastato, due personaggi tirano due ammontare diversi. Se un personaggio sta cercando di attaccare e l'altro
                sta cercando di difendersi, l'attacco ha successo se il numero di successi dell'attaccante &egrave; <b>maggiore</b> rispetto
                a quelli del difensore (non uguale, maggiore). Se invece si tratta di un confronto, un pareggio significa che i due personaggi
                hanno totalizzate un... pareggio, appunto.
            </Typography>

            <hr />

            <Typography paragraph>
                <h3 style={titleStyle}>
                    Combattimento
                </h3>
            </Typography>

            <Typography paragraph style={guideStyle}>
                Le regole del combattimento evolveranno in base alle esigenze del gioco via chat, che pu&ograve; anche dover avere luogo
                senza l'ausilio di un Narratore. Per questo motivo, le regole potrebbero differire da quanto espresso dal <b>Corebook</b>.
                Il combattimento si svolge in turni. Ogni turno, i giocatori dovranno dichiarare uno dopo l'altro cosa faranno, in ordine, 
                e poi in ordine inverso si dovranno <b>risolvere</b> le azioni, ovvero si dovranno tirare i dadi e determinare l'esito di 
                ogni azione. L'ordine di dichiarazione e risoluzione delle azioni viene determinato dalla <b>Iniziativa</b>.
            </Typography>

            <Typography paragraph id="initiative">
                <h4 style={titleStyle}>
                    Iniziativa
                </h4>
            </Typography>

            <Typography paragraph style={guideStyle}>
                L'iniziativa, come detto, determina l'ordine di dichiarazione delle azioni, e la risoluzione. Il punteggio di iniziativa
                si determina in questo modo:

                <ul>
                    <li>Combattimento con pi&ugrave; di due partecipanti: Autocontrollo + Allerta</li>
                    <li>Combattimento con due duellanti: (Autocontrollo o Destrezza, la pi&ugrave; alta) + Allerta</li>
                    <li>Combattimento formale tra due duellanti: Fermezza + Allerta</li>
                </ul>

                Nel caso in cui due o pi&ugrave; personaggi possiedano un punteggio uguale di iniziativa, dovranno tirare un dado: chi 
                avr&agrave; il dado pi&ugrave; alto avr&agrave; vinto l'iniziativa sull'altro.<br />
                Il <b>primo</b> a dichiarare sar&agrave; quello con punteggio di iniziativa pi&ugrave; <b>basso</b>, via via fino all'ultimo, 
                quello con punteggio di iniziativa pi&ugrave; alto. In seguito alla dichiarazione di tutti i personaggi, comincer&agrave;
                la risoluzione, e partir&agrave; in senso inverso rispetto alla dichiarazione, a partire dal personaggio con punteggio di
                iniziativa pi&ugrave; <b>alto</b>.<br />
                Il cambio di ordine ha questo senso: il personaggio con iniziativa pi&ugrave; alta potr&agrave; percepire ci&ograve; che gli 
                altri avranno intenzione di fare, ma agir&agrave; per primo, e quindi gli effetti della sua azione avranno luogo <b>prima</b>
                di quelli degli altri personaggi.
            </Typography>

            <Typography paragraph>
                <h4 style={titleStyle}>
                    Attacco a sorpresa
                </h4>
            </Typography>

            <Typography paragraph style={guideStyle}>
                Un attacco a sorpresa esula dal regolamento di Iniziativa, almeno al primo turno. Per poter effettuare un attacco a sorpresa,
                il personaggio attaccante dovr&agrave; totalizzare pi&ugrave; successi in un tiro di Destrezza + Furtivit&agrave; rispetto al tiro
                di Prontezza + Allerta del difensore.
            </Typography>

            <Typography paragraph>
                <h4 style={titleStyle}>
                    Manovre
                </h4>
            </Typography>

            <Typography paragraph style={guideStyle}>
                In combattimento, il confronto tra due personaggi potr&agrave; essere di diversi tipi:

                <Box sx={{padding: "10px"}}>
                    <TableContainer component={Paper} sx={{
                        width: "100%", 
                        margin: "0 auto" 
                    }}>
                        <Table aria-label="Tipi di copertura">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>Tipo</StyledTableCell>
                                    <StyledTableCell>Dadi dell'attaccante</StyledTableCell>
                                    <StyledTableCell>Dadi del difensore</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <StyledTableRow>
                                    <StyledTableCell component="th" scope="row">
                                        Confronto diretto
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        Forza + Rissa, Destrezza + Mischia (coltelli, armi leggere), Forza + Mischia (armi a due mani)
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        Forza + Rissa, Destrezza + Mischia (coltelli, armi leggere), Forza + Mischia (armi a due mani)
                                    </StyledTableCell>
                                </StyledTableRow>

                                <StyledTableRow>
                                    <StyledTableCell component="th" scope="row">
                                        Confronto contro Schivata
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        Forza + Rissa, Destrezza + Mischia (coltelli, armi leggere), Forza + Mischia (armi a due mani)
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        Destrezza + Atletica
                                    </StyledTableCell>
                                </StyledTableRow>

                                <StyledTableRow>
                                    <StyledTableCell component="th" scope="row">
                                        Confronto con armi da fuoco
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        Destrezza + Armi da fuoco (o Atletica per armi da lancio) + Modificatore di copertura
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        Destrezza + Armi da fuoco (o Atletica per armi da lancio) + Modificatore di copertura
                                    </StyledTableCell>
                                </StyledTableRow>

                                <StyledTableRow>
                                    <StyledTableCell component="th" scope="row">
                                        Arma a distanza contro Schivata
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        Destrezza + Armi da fuoco (o Atletica per armi da lancio) + Modificatore di copertura
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        Destrezza + Atletica + Modificatore di copertura
                                    </StyledTableCell>
                                </StyledTableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </Typography>

            <Typography paragraph id="multiple-foes">
                <h4 style={titleStyle}>
                    Avversari multipli
                </h4>
            </Typography>

            <Typography paragraph style={guideStyle}>
                In caso di avversari multipli, si seguiranno due regole differenti per la difesa e per l'attacco. Se il giocatore vuole difendersi
                da avversari multipli (con Destrezza + Atletica se vuole schivare, o Forza + Rissa se vuole parare), col primo attacco avr&agrave; 
                a disposizione il massimo dei dadi, col secondo avversario dovr&agrave; sottrarre un dado all'ammontare, 2 col col terzo e cos&igrave; via.
                Se invece il personaggio vuole attaccare, dovr&agrave; dividere il proprio ammontare di dadi. Se per esempio il personaggio ha a 
                disposizione 7 dadi, e vorr&agrave; attaccare 2 avversari, avr&agrave; 4 dadi a disposizione contro il primo avversario, e 3 dadi
                per il secondo.
            </Typography>

            <Typography paragraph>
                <h4 style={titleStyle}>
                    Modificatore di copertura
                </h4>
            </Typography>

            <Typography paragraph style={guideStyle}>
                Nel caso di confronto con armi da fuoco, la copertura &egrave; importante: se un personaggio ha un'ottima copertura, sar&agrave;
                in grado di limitare notevolmente i danni che pu&ograve; subire. I modificatori cambieranno l'ammontare, cio&egrave; il numero di
                dadi, che il personaggio pu&ograve; tirare.
            </Typography>

            <Typography paragraph>
                <TableContainer component={Paper} sx={{ width: 400, margin: "0 auto" }}>
                    <Table aria-label="Tipi di copertura">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Copertura</StyledTableCell>
                                <StyledTableCell>Modificatore dell'ammontare</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <StyledTableRow>
                                <StyledTableCell component="th" scope="row">
                                    Nessuna copertura
                                </StyledTableCell>
                                <StyledTableCell>-2</StyledTableCell>
                            </StyledTableRow>

                            <StyledTableRow>
                                <StyledTableCell component="th" scope="row">
                                    Solo occultamento (un cespuglio, o un piccolo albero contro cartucce di fucile)
                                </StyledTableCell>
                                <StyledTableCell>-1</StyledTableCell>
                            </StyledTableRow>

                            <StyledTableRow>
                                <StyledTableCell component="th" scope="row">
                                    Copertura robusta (angolo di un edificio di cemento, una macchina)
                                </StyledTableCell>
                                <StyledTableCell>0</StyledTableCell>
                            </StyledTableRow>

                            <StyledTableRow>
                                <StyledTableCell component="th" scope="row">
                                    Trincea (sacche di sabbia, bunker militare)
                                </StyledTableCell>
                                <StyledTableCell>+1</StyledTableCell>
                            </StyledTableRow>

                            <StyledTableRow>
                                <StyledTableCell component="th" scope="row">
                                    Feritoia protetta
                                </StyledTableCell>
                                <StyledTableCell>+2</StyledTableCell>
                            </StyledTableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Typography>

            <Typography paragraph>
                <h4 style={titleStyle}>
                    Calcolo dei danni
                </h4>
            </Typography>

            <Typography paragraph style={guideStyle}>
                Potr&agrave; provocare danni all'avversario solamente chi ha attaccato. Se qualcuno ha schivato, non potr&agrave;
                ovviamente provocare danni. Il numero dei danni &egrave; pari al numero di successi in pi&ugrave; che l'attaccante
                ha totalizzato contro il difensore. Se ad esempio l'attaccante ha ottenuto <b>6 successi</b> in un tiro di
                Rissa + Mischia contro <b>4 successi</b> di Destrezza + Schivare del difensore, i danni corrisponderanno a 2 
                superficiali.<br />
                In caso di confronto tra due combattenti, chi ha ottenuto pi&ugrave; successi infligge danni pari al numero di
                successi supplementari, e chi ha perso non infligge danni.
            </Typography>

            <Typography paragraph>
                <h5 style={titleStyle}>
                    Home Rule: Danni arma
                </h5>
            </Typography>

            <Typography paragraph style={guideStyle}>
                Se il personaggio avr&agrave; successo nel tiro contrastato, ai danni che gi&agrave; ha ottenuto sottraendo i
                successi dell'avversario potr&agrave; aggiungere i danni inferti con l'arma utilizzata. In assenza di un 
                regolamento per le armi ancora disponibile, i personaggi potranno considerare il loro valore di <b>Risorse</b> 
                per determinare il danno dell'arma che posseggono, secondo lo schema proposto di seguito.
            </Typography>

            <Typography paragraph>
                <TableContainer component={Paper} sx={{ width: "100%", margin: "0 auto" }}>
                    <Table aria-label="Tipi di copertura">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Risorse</StyledTableCell>
                                <StyledTableCell>Danno massimo armi da fuoco</StyledTableCell>
                                <StyledTableCell>Danno massimo armi da mischia</StyledTableCell>
                                <StyledTableCell>Danno massimo armi da rissa</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <StyledTableRow>
                                <StyledTableCell component="th" scope="row">
                                    0
                                </StyledTableCell>
                                <StyledTableCell>Nessuna arma</StyledTableCell>
                                <StyledTableCell>Nessuna arma</StyledTableCell>
                                <StyledTableCell>Nessuna arma</StyledTableCell>
                            </StyledTableRow>

                            <StyledTableRow>
                                <StyledTableCell component="th" scope="row">
                                    1
                                </StyledTableCell>
                                <StyledTableCell>1</StyledTableCell>
                                <StyledTableCell>1</StyledTableCell>
                                <StyledTableCell>1</StyledTableCell>
                            </StyledTableRow>

                            <StyledTableRow>
                                <StyledTableCell component="th" scope="row">
                                    2
                                </StyledTableCell>
                                <StyledTableCell>2</StyledTableCell>
                                <StyledTableCell>2</StyledTableCell>
                                <StyledTableCell>1</StyledTableCell>
                            </StyledTableRow>

                            <StyledTableRow>
                                <StyledTableCell component="th" scope="row">
                                    3
                                </StyledTableCell>
                                <StyledTableCell>3</StyledTableCell>
                                <StyledTableCell>3</StyledTableCell>
                                <StyledTableCell>2</StyledTableCell>
                            </StyledTableRow>

                            <StyledTableRow>
                                <StyledTableCell component="th" scope="row">
                                    4
                                </StyledTableCell>
                                <StyledTableCell>4</StyledTableCell>
                                <StyledTableCell>4</StyledTableCell>
                                <StyledTableCell>2</StyledTableCell>
                            </StyledTableRow>

                            <StyledTableRow>
                                <StyledTableCell component="th" scope="row">
                                    5
                                </StyledTableCell>
                                <StyledTableCell>5</StyledTableCell>
                                <StyledTableCell>5</StyledTableCell>
                                <StyledTableCell>3</StyledTableCell>
                            </StyledTableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Typography>

            <Typography paragraph>
                <h5 style={titleStyle}>
                    Home Rule: Nascondibilit&agrave;
                </h5>
            </Typography>

            <Typography paragraph style={guideStyle}>
                Ogni arma avr&agrave; anche una <b>Nascondibilit&agrave;</b>, direttamente dipendente dal massimo 
                danno dell'arma. La Nascondibilit&agrave; corrisponder&agrave; alla Difficolt&agrave; al tiro di
                Intelligenza + Investigazione o Allerta di un personaggio per capire se un altro ha l'arma 
                equipaggiata ma nascosta. Si seguiranno queste regole, per semplicit&agrave;:

                <ul>
                    <li style={liStyle}>
                        Ogni arma avr&agrave; un punteggio di Nascondibilit&agrave; da 0 (impossibile da nascondere),
                        a 4 (perfettamente nascondibile).
                    </li>

                    <li style={liStyle}>
                        Un'arma di danno 1 avr&agrave; sempre Nascondibilit&agrave; pari a Risorse + 1, fino al massimo
                        di 4.
                    </li>

                    <li style={liStyle}>
                        La Nascondibilit&agrave; dell'arma dipende anch'essa dalle Risorse: un personaggio potr&agrave;
                        possedere un'arma il cui Danno sommato alla Nascondibilit&agrave; sia al massimo uguale al
                        punteggio di Risorse.
                    </li>
                </ul>
            </Typography>

            <Typography paragraph style={guideStyle}>
                Di seguito, sono elencati alcuni esempi per chiarire meglio come calcolare la Nascondibilit&agrave;.
                Consigliamo comunque di discutere con un master quali armi avete intenzione di usare.

                <ul>
                    <li style={liStyle}>
                        <b>Esempio 1</b>: se un personaggio ha Risorse 1, potr&agrave; acquistare armi semplici di danno
                        1 e Nascondibilit&agrave; 3.
                    </li>

                    <li style={liStyle}>
                        <b>Esempio 2</b>: se un personaggio ha Risorse 2, potr&agrave; acquistare armi semplici di danno
                        1 e Nascondibilit&agrave; 2, oppure un'arma di danno 2, ma talmente grossolana che occuper&agrave;
                        troppo spazio per poterla nascondere efficacemente (Nascondibilit&agrave; 0).
                    </li>

                    <li style={liStyle}>
                        <b>Esempio 3</b>: se un personaggio ha Risorse 4, le sue possibilit&agrave; potranno consentirgli 
                        armi pi&ugrave; sofisticate (Danno 2 e Nascondibilit&agrave; 2 per esempio), oppure armi che 
                        provocano un danno superiore, ma troppo grosse per poterle nascondere (Danno 4, Nascondibilit&agrave; 0).
                    </li>
                </ul>
            </Typography>

            <Typography paragraph style={guideStyle}>
                Potrete descrivere liberamente la natura dell'arma, tenendo presente sia il Danno che la Nascondibilit&agrave;
                data dalle regole scritte precedentemente.
            </Typography>

            <Typography paragraph style={guideStyle}>
                Affinch&egrave; l'arma venga considerata, il personaggio all'inizio della giocata dovr&agrave; dichiarare
                di possederla nell'azione iniziale, altrimenti non gli sar&agrave; possibile utilizzarla nel corso del
                combattimento. Ricordiamo che non sar&agrave; possibile usare le Abilit&agrave; di Mischia e Armi da Fuoco
                senza possedere un'arma.<br />
                Se il personaggio acquisisce l'arma in gioco, un Narratore aggiorner&agrave; le note del personaggio, 
                aggiungendo l'arma che, da quel momento, potr&agrave; essere dichiarata normalmente all'inizio dell'azione.
            </Typography>

            <Typography paragraph>
                <h3 style={titleStyle}>
                    Tipi di Danno
                </h3>
            </Typography>

            <Typography paragraph style={guideStyle}>
                Possono essere arrecati due tipi di danni differenti:

                <ul>
                    <li>
                        <b>Danni superficiali</b>: gli umani e i Sangue Debole subiranno questi danni normalmente, mentre 
                        i vampiri li dimezzeranno arrotondando per difetto, prima di applicarli al loro totalizzatore di Salute.
                        Per i vampiri, armi da taglio o da fuoco provocano questo tipo di danno, mentre per gli umani sono
                        da considerarsi danni Aggravati.
                    </li>
                    <li>
                        <b>Danni aggravati</b>: umani (e Sangue Debole) e vampiri subiscono questi danni da fonti differenti.
                        Per gli umani, fuoco, danni da taglio o da arma da fuoco sono considerati aggravati, e metteranno in
                        serio pericolo la vita (o non-vita) dei personaggi. Per i vampiri, saranno considerati danni 
                        Aggravati solamente il fuoco, la luce solare, e armi soprannaturali, come le zanne di altri vampiri
                        o le propaggini generate con la Disciplina Proteide.<br />
                        Nemmeno i vampiri potranno dimezzare questo tipo di danno.
                    </li>
                </ul>
            </Typography>

            <Typography paragraph>
                <TableContainer component={Paper} sx={{ width: "100%", margin: "0 auto" }}>
                    <Table aria-label="Tabella dei Danni">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Fonte del danno</StyledTableCell>
                                <StyledTableCell>Umani</StyledTableCell>
                                <StyledTableCell>Sangue Debole</StyledTableCell>
                                <StyledTableCell>Vampiri</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <StyledTableRow>
                                <StyledTableCell component="th" scope="row">
                                    Pugni, bastoni, mazze
                                </StyledTableCell>
                                <StyledTableCell>Danni superficiali</StyledTableCell>
                                <StyledTableCell>Danni superficiali</StyledTableCell>
                                <StyledTableCell>Danni superficiali (dimezzati per difetto)</StyledTableCell>
                            </StyledTableRow>

                            <StyledTableRow>
                                <StyledTableCell component="th" scope="row">
                                    Coltelli, Spade, Frecce
                                </StyledTableCell>
                                <StyledTableCell>Danni aggravati</StyledTableCell>
                                <StyledTableCell>Danni aggravati</StyledTableCell>
                                <StyledTableCell>Danni superficiali (dimezzati per difetto)</StyledTableCell>
                            </StyledTableRow>

                            <StyledTableRow>
                                <StyledTableCell component="th" scope="row">
                                    Armi da fuoco
                                </StyledTableCell>
                                <StyledTableCell>Danni aggravati</StyledTableCell>
                                <StyledTableCell>Danni aggravati</StyledTableCell>
                                <StyledTableCell>Danni superficiali (dimezzati per difetto)</StyledTableCell>
                            </StyledTableRow>

                            <StyledTableRow>
                                <StyledTableCell component="th" scope="row">
                                    Armi da fuoco di grosso<br /> calibro mirate alla testa
                                </StyledTableCell>
                                <StyledTableCell>Danni aggravati</StyledTableCell>
                                <StyledTableCell>Danni aggravati</StyledTableCell>
                                <StyledTableCell>Danni aggravati</StyledTableCell>
                            </StyledTableRow>

                            <StyledTableRow>
                                <StyledTableCell component="th" scope="row">
                                    Fuoco
                                </StyledTableCell>
                                <StyledTableCell>Danni aggravati</StyledTableCell>
                                <StyledTableCell>Danni aggravati</StyledTableCell>
                                <StyledTableCell>Danni aggravati</StyledTableCell>
                            </StyledTableRow>

                            <StyledTableRow>
                                <StyledTableCell component="th" scope="row">
                                    Luce Solare
                                </StyledTableCell>
                                <StyledTableCell>Nessun danno</StyledTableCell>
                                <StyledTableCell>1 danno superficiale per turno,<br />ogni 3 turni se coperti o con cielo nuvoloso</StyledTableCell>
                                <StyledTableCell>Danni aggravati pari alla Severit&agrave;<br />
                                della Maledizione (vedi <Link href={GuideRoutes.homeRules}><a id="blood-potency">Potenza del sangue</a></Link>)<br />
                                per turno</StyledTableCell>
                            </StyledTableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Typography>

            <Typography paragraph style={guideStyle}>
                Se il personaggio ha riempito tutte le caselle di Salute con danni superficiali, i danni che subir&agrave;  
                successivamente dovranno essere considerati come <b>Aggravati</b>. Se ad esempio un personaggio ha Costituzione 3,
                e quindi possiede 6 caselle di Salute, dopo il sesto danno Superficiale, dovr&agrave; cominciare ad assegnare danni 
                Aggravati partendo da 1. Se il personaggio con Salute 6 subisce quindi un totale di 9 danni Superficiali, il suo 
                contatore di Salute segner&agrave; 3 danni di tipi Aggravato e 3 di tipo Superficiale. I danni aggravati si 
                aggiungeranno direttamente al conteggio degli Aggravati, quindi se, oltre ai 9 danni superficiali, subir&agrave; 
                anche 2 danni Aggravati, il suo totalizzatore segner&agrave; 5 danni Aggravati e 1 Superficiale.
            </Typography>

            <Typography paragraph style={guideStyle}>
                Se un vampiro riempir&agrave; tutte le caselle di Salute con danni Aggravati, entrer&agrave; automaticamente in
                torpore. Se subir&agrave; altri danni aggravati (non Superificiali) in questo stato, raggiunger&agrave; la 
                Morte Ultima.<br />
                Un essere umano che comincia a subire danni Aggravati, invece, dovr&agrave; essere curato immediatamente, o
                potrebbe morire in seguito alle ferite riportate. Se riempie le sue caselle con danni Aggravati, morir&agrave;.
            </Typography>

            <hr />

            <Typography paragraph>
                <h3 style={titleStyle}>
                    Sangue e Fame
                </h3>
            </Typography>

            <Typography paragraph style={guideStyle}>
                I Cainiti non avranno pi&ugrave; Punti Sangue a disposizione, ma un punteggio di <b>Fame</b>&nbsp;
                variabile da 1 a 5. Ogni volta che un Cainita vorr&agrave; spendere sangue, dovr&agrave;
                tirare un dado d10. Se otterr&agrave; pi&ugrave; di 6, non subir&agrave; nessuna penalit&agrave;.
                Un fallimento indicher&agrave; l'aumento della <b>Fame</b>. A livello 5, il Cainita sar&agrave;
                da considerare sulla soglia della Frenesia, e dovr&agrave; cibarsi immediatamente per non cadervi.<br />
                La <b>Fame</b> avr&agrave; un riscontro anche sul risultato dei dadi. Per maggior informazioni
                vi invitiamo a leggere il <b>Core Book</b> della versione 5. Comunque, i risultati dei dadi 
                nel sito considereranno gi&agrave; il punteggio di <b>Fame</b> e le sue conseguenze.
            </Typography>

            <Typography paragraph>
                <h3 style={titleStyle}>
                    Umanit&agrave; e Bestia
                </h3>
            </Typography>

            <Typography paragraph style={guideStyle}>
                Ogni Cainita, dal momento dell'Abbraccio, eredita, assieme ai poteri e alle maledizioni del Sangue,
                anche la <b>Bestia</b>. La Bestia &egrave; un'entit&agrave; di vita propria che si muove nei meandri
                della mente del Cainita, spingendolo sempre agli atti pi&ugrave; nefandi e orribili in nome di ci&ograve;
                che per i Cainiti &egrave; assieme nutrimento, droga e elisir di vita eterna: il <b>Sangue</b>.
                Oltre alla Fame, descritta precedentemente, la Bestia si adopera per distruggere i frammenti di 
                umanit&agrave; che il Cainita ancora segue nella non vita, costringendolo a contravvenire alle
                <b>Convinzioni</b>, da definire in fase di creazione del personaggio.
            </Typography>

            <Typography paragraph style={guideStyle}>
                La discesa nella spirale della Bestia &egrave; una parte estremamente importante di Vampiri: la Masquerade&trade;,
                in quanto rappresenta il centro dell'esistenza del Cainita: la resistenza alla Bestia per non cederle il
                potere e abdicarle il proprio libero arbitrio.<br />
                Ogni personaggi parte con un punteggio di Umanit&agrave; nella propria scheda. Il punteggio di umanit&agrave;
                determina quanto vicino il vampiro rimane alle sue convinzioni mortali. Ogni volta che il vampiro
                contravviene ad una di queste convinzioni, riceve una <b>Macchia</b> alla sua umanit&agrave;. Alla fine
                di una scena, il giocatore dovr&agrave; tirare un numero di dadi pari a 10 - Umanit&agrave; - Macchie, per un
                minimo di 1 dado. Ad esempio, se il personaggio ha umanit&agrave; 6, ed ha ricevuto 2 Macchine in una giocata,
                potr&agrave; tirare 2 dadi, mentre invece se il personaggio ha umanit&agrave; 8, e ha ricevuto 2 Macchie, potr&agrave; 
                comunque tirare un dado.<br />
                Se il personaggio totalizza almeno 1 successo (un dado con risultato maggiore o uguale a 6), riesce a pentirsi,
                a sentire rimorso per le sue azioni, e la sua Umanit&agrave; &egrave; salva. Al contrario, se non riesce a
                totalizzare nessun successo, considerer&agrave; le azioni fatte come giustificabili, per qualsasi ragione, e
                perder&agrave; immediatamente un punto di Umanit&agrave;.
            </Typography>

            <Typography paragraph style={guideStyle}>
                La completa perdita di Umanit&agrave;, cio&egrave; arrivare ad umanit&agrave; 0, significa che la Bestia prende
                completamente, totalmente e irrimediabilmente il controllo del Cainita, il personaggio non sar&agrave; pi&ugrave;
                giocaile e passer&agrave; ad essere interpretato dal Narratore.
            </Typography>
        </>
    );
}

Mechanics.getLayout = (page: ReactElement) => (
    <GuideLayout>
        {page}
    </GuideLayout>
)

export default Mechanics;
