import React, {ReactElement} from "react";
import Typography from "@mui/material/Typography";
import {guideStyle, liStyle, titleStyle} from "../../components/guides/GuidesStyles";
import GuideLayout from "../../components/layouts/GuideLayout";
import Places from "./Places";

const Roles = (): ReactElement => {
    return (
        <>
            <Typography paragraph sx={guideStyle}>
                <h1 style={titleStyle}>
                    Ruoli
                </h1>
            </Typography>

            <Typography paragraph sx={guideStyle}>
                Nel sito, a supporto dei giocatori, ci saranno differenti figure a supporto del gioco. Per aiutarvi
                a capire meglio come interfacciarvi con queste, si ritiene utile elencare le regole alle quali si
                dovranno attenere, e come sar&agrave; possibile esprimere reclami.
            </Typography>

            <Typography paragraph sx={guideStyle}>
                <h2 style={titleStyle}>
                    Gestore
                </h2>
            </Typography>

            <Typography paragraph sx={guideStyle}>
                La figura del gestore avr&agrave; le seguenti mansioni:

                <ul>
                    <li style={liStyle}>
                        Implementazione bug fix, aggiornamenti del codice, e nuove funzionalit&agrave;.
                    </li>
                    <li style={liStyle}>
                        Gestione ed orchestrazione a livello generale degli avvenimenti nella citt&agrave; di Buenos
                        Aires, e nel mondo, sia della societ&agrave; Cainita sia di quella umana.
                    </li>
                    <li style={liStyle}>
                        Tutte le mansioni proprie dei Narratori, all'occorrenza.
                    </li>
                </ul>
            </Typography>

            <Typography paragraph sx={guideStyle}>
                <h2 style={titleStyle}>
                    Narratore
                </h2>
            </Typography>

            <Typography paragraph sx={guideStyle}>
                La figura del narratore avr&agrave; le seguenti mansioni:

                <ul>
                    <li style={liStyle}>
                        Narrazione di giocate singole, o di trame a medio / lungo respiro.
                    </li>
                    <li style={liStyle}>
                        Accettazione di personaggi.
                    </li>
                </ul>
            </Typography>

            <Typography paragraph sx={guideStyle}>
                <h2 style={titleStyle}>
                    Giocatore
                </h2>
            </Typography>

            <Typography paragraph sx={guideStyle}>
                Il giocatore &egrave; il reale e unico protagonista del sito e della narrazione, i Narratori potranno
                interpretare solo comparse, o personaggi che dovranno essere ritenuti come marginali rispetto alla
                trama. Questo vuol dire che le uniche mansioni che noi chiediamo a voi giocatori di assumere, saranno
                queste:

                <ul>
                    <li style={liStyle}>
                        Interpretare al meglio il vostro personaggio, seguendo le linee indicate dalla biografia,
                        dal clan, dalle cariche e dalle convinzioni che avete scritto in scheda.
                    </li>
                    <li style={liStyle}>
                        Assunzione dell'iniziativa, politica e sociale, nel mondo di finzione inscenato.
                    </li>
                    <li style={liStyle}>
                        <b>Divertirsi</b>.
                    </li>
                </ul>

                Vi invitiamo, soprattutto, ad avere <b>iniziativa</b>, perch&eacute; solo i personaggi saranno in grado
                di incidere e cambiare la politica dei Cainiti, o anche quella umana, la gestione, in assenza di azioni
                dei personaggi, si occuper&agrave; solo di mantenere il teso equilibrio politico tra le varie fazioni
                gi&agrave; presenti nel Dominio.
            </Typography>

            <Typography paragraph sx={guideStyle}>
                L'iniziativa pu&ograve; essere di diversi tipi, dipendendo dal tipo di personaggio. Di seguito, ci
                permettiamo di fornire una serie di esempi:

                <ul>
                    <li style={liStyle}>
                        Il personaggio &egrave; un Brujah, o un Gangrel, a cui la Camarilla comincia a stare stretta, e
                        tenta di accordarsi con gli Anarchici per sovvertire l'ordine della citt&agrave;, facendo in modo
                        che il potere e le migliori zone di caccia passino all'Anarchia.
                    </li>

                    <li style={liStyle}>
                        Il personaggio &egrave; un Toreador, o un Ventrue, ansioso di esprimere la propria presenza nel
                        Dominio attraverso l'assunzione di cariche, per influenzare la politica Cainita approfittando
                        dell'assenza di Anziani.
                    </li>
                </ul>

                Qualsiasi sia l'obiettivo del personaggio, sia chiara una cosa: <b>ogni personaggio avr&agrave; il
                potere di cambiare la situazione politica del Dominio a pi&ugrave; livelli, dato che la gestione non ha
                nessuna imposizione narrativa, se non quella del realismo, per quanto possibile e sensato.</b>
            </Typography>

            <Typography paragraph sx={guideStyle}>
                <h2 style={titleStyle}>
                    Gestione dei reclami
                </h2>
            </Typography>

            <Typography paragraph sx={guideStyle}>
                I reclami potranno essere mandati al Gestore (utente <b>Storyteller</b> nel sito) se si reputa che un
                Narratore non ottemperi al suo ruolo, o stia manifestando uno o pi&ugrave; comportamenti elencati di 
                seguito:

                <ul>
                    <li style={liStyle}>
                        Preferenze ad uno o pi&ugrave; personaggi, in gioco e nei premi in punti esperienza a seguito
                        di ogni giocata.
                    </li>
                    <li style={liStyle}>
                        Comportamento chiaramente scorretto, aggressivo o intimidatorio fuori dal gioco.
                    </li>
                </ul>

                Dato che i reclami saranno presi sul serio, e comporteranno un'indagine approfondita, vi preghiamo di
                farli solo in casi eclatanti, e soprattutto di fornire prove, siano esse chat in gioco,
                conversazioni <b>strettamente</b> riguardanti solo e soltanto il gioco su altri mezzi di comunicazione.
            </Typography>

            <Typography paragraph sx={guideStyle}>
                Se il reclamo sar&agrave; considerato fondato, il Narratore potr&agrave; essere destituito dalla carica,
                o addirittura bannato. In casi di infrazione lieve, comunque, anche considerando il fatto che i
                Narratori stanno comunque tentando di accomodare i desideri di molti giocatori, e senza remunerazione,
                verr&agrave; solo notificato l'errore, e non verranno prese altre misure nei loro confronti.
            </Typography>
        </>
    );
}

Roles.getLayout = (page: ReactElement) => (
    <GuideLayout>
        {page}
    </GuideLayout>
)

export default Roles;
