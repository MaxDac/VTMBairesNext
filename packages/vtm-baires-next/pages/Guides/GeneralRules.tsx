import React, {ReactElement} from "react";
import Typography from "@mui/material/Typography";
import { guideStyle, liStyle, titleStyle } from "../../components/guides/GuidesStyles";
import GuideLayout from "../../components/layouts/GuideLayout";
import Faq from "./Faq";

const GeneralRules = (): ReactElement => {
    return (
        <>
            <Typography paragraph sx={guideStyle}>
                <h1 style={titleStyle}>
                    Regole generali
                </h1>
            </Typography>

            <Typography paragraph sx={guideStyle}>
                In questa sezione del regolamento esporremo le regole di condotta generale in gioco e fuori dal gioco.
                Si intende per "in gioco" l'interazione di finzione tra personaggi, mentre per "fuori gioco" l'interazione
                tra utenti.
            </Typography>

            <Typography paragraph sx={guideStyle}>
                <ol>
                    <li style={liStyle}>
                        Non sar&agrave; estesa <b>nessuna</b> tolleranza per mancanza di rispetto, offesa, minacce o altro
                        genere di cattivo o irrispettoso comportamento tra diversi utenti nella comunit&agrave;. Qualsiasi
                        mancanza di rispetto verr&agrave; gravemente giudicata e punita nel peggiore dei casi col ban
                        dell'utente, e la cancellazione del suo personaggio.
                    </li>
                    <li style={liStyle}>
                        Diversa sar&agrave; ovviamente la nostra posizione rispetto al comportamento in gioco dei personaggi.
                        Data la natura dell'ambientazione, &egrave; addirittura per certi versi
                        incoraggiato il comportamento scorretto in gioco. Ci aspettiamo dagli utenti della comunit&agrave;
                        la capacit&agrave; di "digerire" le dinamiche delle giocate, e di saper tenere assolutamente
                        separata l'interpretazione dei personaggi dalle relazioni di mutuo rispetto che devono essere tenute
                        tra utenti.<br />
                        Per questo motivo, data la potenziale fonte di misinterpretazioni che potrebbero sorgere, 
                        sono da ritenersi <b>scoraggiate</b> giocate a sfondo sessuale
                        pi&ugrave; o meno spinte, a meno che non siano pienamente ed evidentemente giustificate
                        dalla natura della giocata.
                    </li>
                </ol>
            </Typography>

            <Typography component="h3" paragraph>
                <h2 style={titleStyle}>Interazione fuori dal gioco</h2>
            </Typography>

            <Typography paragraph sx={guideStyle}>
                All'interno del sito &egrave; possibile comunicare fuori dal contesto del gioco sia attraverso il forum,
                sia attraverso il sistema di messaggistica, che distingue rigorosamente il contesto fuori e dentro il gioco.
                Fuori dal contesto del sito, esiste anche una comunit&grave; su Discord chiamata VTM Baires, alla quale
                vi invitiamo ed incoraggiamo a partecipare, iscrivendovi.<br />
                Per interazioni fuori dal gioco, invitiamo gli utenti ad utilizzare il Discord, o in casi eccezioniali il forum, 
                lasciando ai messaggi la loro funzione in gioco di scambio di missive tra personaggi.<br />
                <br />
                <b>Roadmap</b>: il Forum &egrave; in versione beta, &egrave; fortemente consigliato usare il canale Discord.
            </Typography>

            <Typography component="h3" paragraph>
                <h2 style={titleStyle}>Interazione in gioco</h2>
            </Typography>

            <Typography paragraph sx={guideStyle}>
                L'interazione in gioco sar&agrave; possibile in tre diversi canali: il forum, i messaggi, ma soprattutto
                la <b>chat</b>, vero cuore pulsante del gioco di Buenos Aires by Night. Proprio nel gioco via chat
                forniamo le seguenti linee guida interpretative.

                <ul>
                    <li style={liStyle}>
                        Consigliamo, e stimoliamo, soprattutto in giocate in presenza di master, la capacit&agrave; di 
                        <b><u>sunto</u></b>. Le frasi in chat dovranno essere per quanto possibile stringate, veloci, 
                        asciutte, rapide, in modo da garantire il fluire della narrazione. Il limite massimo consentito 
                        in chat &egrave; di 1200 caratteri, ma mediamente, una frase di chat si dovrebbe aggirare attorno 
                        ai 500-700 caratteri, ed impiegare pi&ugrave; di cinque-sei minuti di tempo per scrivere l'equivalente 
                        di un turno &egrave; scoraggiato.<br />
                        Le regole nelle giocate libere possono considerarsi pi&ugrave; rilassate, e i giocatori potranno
                        impiegare anche pi&ugrave; caratteri per descrivere le proprie azioni.
                    </li>

                    <li style={liStyle}>
                        &Egrave; assolutamente <b>vietato</b> arricchire le frasi in gioco con i <b>pensieri</b> dei
                        personaggi. Le frasi in gioco dovranno descrivere ci&ograve; che tutti hanno la possibilit&agrave;
                        di vedere in scena. Frasi come le seguenti sono ritenute non adeguate, non verranno premiate
                        con punti esperienza e vi verr&agrave; chiesto di cancellarle e ripetere l'azione:
                        <ul>
                            <li style={liStyle}>
                                <i>I suoi passi si avvicendavano leggeri sul marciapiede, e ripens&ograve; a quando, nella sua vita
                                mortale, passeggiava per quelle strade in compagnia della sua amata, oramai perduta per sempre.</i>
                            </li>
                            <li style={liStyle}>
                                <i>Il suo volto, il suo sguardo, non tradivano nessuna emozione, ma dentro di lui ribollivano rabbia
                                e ribrezzo in egual misura, nei confronti del cavernicolo con cui si vedeva costretto a parlare.</i>
                            </li>
                        </ul>
                        
                        Soprattutto la seconda frase tradisce sentimenti in gioco che dovrebbero essere celati, o peggio corrono
                        il rischio di riflettere un'opinione pericolosamente fuori dal gioco, od ancora di connotare e forzare
                        l'interpretazione in gioco dei personaggi altrui. Per questi motivi, &egrave; ritenuto strettamente necessario
                        attenersi a due regole fondamentali: <b>sunto</b> e <b>azioni prive di pensieri</b>.<br />
                        Un'ultima nota: la serie di brevi racconti che verranno proposti dei documenti di questa guida <b>non sono 
                        da prendere in considerazione</b>. Vanno considerati semplicemente come un arricchimento
                        ai concetti descritti nell'ambientazione, il tentativo di dare una nota di colore in una altrimenti 
                        troppo schematica esposizione.
                    </li>

                    <li style={liStyle}>
                        &Egrave; vietato interpretare il personaggio in base alle informazioni note fuori dal gioco.
                        In altre parole, verr&agrave; sanzionato come infrazione quello che viene chiamato <i>metaplay</i>.
                        Un master avr&agrave; sempre l'ultima parola sul sospetto di metaplay, e potr&agrave; essere loro chiesto
                        di analizzare una giocata svoltasi ad una determinata ora.<br />
                        L'ammenda per metaply &egrave; la perdita di una quantit&agrave; variabile di punti esperienza, in base
                        alla gravit&agrave; dell'azione. Si pu&ograve; andare dalla non assegnazione di punti esperienza durante
                        una giocata, alla sottrazione al massimo di <b>5 punti esperienza</b>.
                    </li>

                    <li style={liStyle}>
                        Sar&agrave; possibile spedire giocate prive di narrazione ai master per l'acquisizione di punti 
                        esperienza. Sar&agrave; necessario comunicare data e ora della giocata.
                    </li>
                    
                    <li style={liStyle}>
                        Vampiri: la Masquerade &egrave; un gioco profondamente <i>horror</i>. Le sue tematiche possono
                        essere estremamente forti, in fondo i vampiri rappresentano quanto di peggio la natura umana
                        ha da offrire. In gioco, saranno concesse azioni anche nefande, che possono urtare l'altrui
                        sensibilit&agrave;.
                        <ul>
                            <li style={liStyle}>
                                A tutti, ricordiamo che le cupe e terrificanti tematiche espresse dai
                                personaggi <b>non sono</b> e <b>non devono essere</b> le stesse dei giocatori. L'orrore,
                                la tragedia e la nefandezza delle giocate deve servire ad <b>esorcizzare</b> queste 
                                tematiche, non ad indulgervi. Giocare, per un giocatore, dev'essere come assistere
                                ad un film: si deve esercitare estremo distacco.<br />
                                Per questo motivo, la Morte Ultima del personaggio &egrave; considerata un
                                avvenimento abbastanza normale, e sar&agrave; per questa ragione possibile
                                "spostare" i punti esperienza gudagnati con un personaggio, a quello successivo.
                                Non affezionatevi ai vostri personaggi!
                            </li>
                            <li style={liStyle}>
                                Da un lato, consigliamo i giocatori ad avvisare prontamente un narratore
                                e gli altri giocatori se i temi delineati dalla giocata risultano disturbanti, ingestibili,
                                indigeribili o addirittura traumatici: sappiate che fuori dal gioco non ci sar&agrave; nessun
                                giudizio, ma vi avvisiamo che il personaggio, in caso di giocate non finite, sar&agrave;
                                interpretato da un narratore per il resto della scena.
                            </li>
                            <li style={liStyle}>
                                Dall'altro lato, consigliamo i giocatori di misurare le loro intenzioni, e la loro giocata,
                                in base anche agli altri giocatori che partecipano. &Egrave; vero che le tematiche
                                affrontate sono oscure per usare un eufemismo, ma &egrave; anche vero che il senso
                                ultimo di un gioco &egrave; quello di divertirsi insieme, e questo &egrave; possibile
                                solo se si chiariscono regole e limiti.
                            </li>
                        </ul>
                    </li>
                </ul>
            </Typography>
        </>
    );
}

GeneralRules.getLayout = (page: ReactElement) => (
    <GuideLayout>
        {page}
    </GuideLayout>
)

export default GeneralRules;
