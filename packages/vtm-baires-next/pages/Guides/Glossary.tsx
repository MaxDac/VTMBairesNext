import React, {ReactElement} from "react";
import Typography from "@mui/material/Typography";
import {guideStyle, liStyle, titleStyle} from "../../components/guides/GuidesStyles";
import Link from "next/link";
import {GuideRoutes} from "../../base/routes";
import GuideLayout from "../../components/layouts/GuideLayout";
import GeneralRules from "./GeneralRules";

const Glossary = (): ReactElement => {
    return (
        <>
            <Typography paragraph>
                <h1 style={titleStyle}>
                    Glossario
                </h1>
            </Typography>

            <Typography paragraph sx={guideStyle}>
                Proponiamo di seguito un breve glossario di termini che verranno utilizzati in questa e nella prossima
                sezione.
            </Typography>

            <Typography paragraph sx={guideStyle}>
                <b>Disclaimer</b>: i concetti di seguito sono espressi liberamente ed in modo il pi&ugrave;
                    stringato possibile, in modo da poterne fornire un'idea del tutto generale. Si rimanda ai manuali di
                    Vampiri: la Masquerade&trade; per approfondimenti.
            </Typography>

            <Typography paragraph sx={guideStyle}>
                <ul>
                    <li style={liStyle}>
                        <b>Abbraccio</b>: il rituale soprannaturale attraverso cui un vampiro pu&ograve; crearne un altro.
                        Consiste, molto succintamente, nel privare la vittima mortale di tutto il suo sangue, per poi
                        nutrirla con una quantit&agrave; di <i>vitae</i> del sire. La progenie avr&agrave; quindi
                        una generazione inferiore a quella del Sire, motivo per cui molti tra i vampiri di generazione
                        bassa non riescono a generare progenie, o generano vampiri dal Sangue Debole (vedi voce di glossario
                        relativa).
                    </li>
                    <li style={liStyle}>
                        <b>Anarchici</b>: una fazione politica di vampiri che rifiutano l'autorit&agrave; ritenuta
                        opprimente esercitata sia dalla Camarilla che dal Sabbat. Si affida a quella molto pi&ugrave;
                        "rilassata" (almeno a parole) dei <b>Baroni</b>, l'equivalente dei <b>Principi</b> della
                        Camarilla in termini strettamente gerarchici.
                    </li>
                    <li style={liStyle}>
                        <b>Antidiluviani</b>: col termine Antidiluviani si intendono i tredici Cainiti, nipoti di Caino, che
                        furono Abbracciati dai tre vampiri di seconda generazione prima del Diluvio biblico. Le loro figure 
                        appartengono ormai alla leggenda, ma risalgono a loro le caratteristiche che ancora oggi sono riconoscibili 
                        nei diversi clan.
                    </li>
                    <li style={liStyle}>
                        <b>Bestia</b>: la Bestia &egrave; un'entit&agrave; indipendente dal vampiro, che dimora nella sua mente, 
                        e che lo spinge costantemente ad atti nefandi per poter procacciare l'unica sostanza che pu&ograve; 
                        soddisfarlo: il Sangue. La Bestia &egrave; una costante minaccia, e tenter&agrave; sempre di prendere
                        il controllo del Cainita. Se il livello di <Link href={GuideRoutes.homeRules}><a id="hunger">Fame</a></Link> aumenta
                        fino a 5, di fronte a pesanti umiliazioni o se confrontato a grandi pericoli, il Cainita rischia
                        di perdere il controllo in favore della Bestia, uno stato che viene chiamato <b>Frenesia</b>.
                    </li>
                    <li style={liStyle}>
                        <b>Cainita</b>: il termine Cainita si riferisce ai vampiri. Trae la sua etimologia dall'origine
                        ormai del tutto accettata nei circoli che i vampiri siano una razza nata dal peccato di Caino, 
                        il Progenitore.
                    </li>
                    <li style={liStyle}>
                        <b>Camarilla</b>: l'organizzazione politica Cainita un tempo pi&ugrave; diffusa ed importante a livello
                        globale. Nacque nel periodo Rinascimentale per controbattere alla minaccia dell'Inquisizione
                        e delle prime Diablerie sofferte dai Cainiti di Terza Generazione, e per questa ragione
                        introdusse la Tradizione pi&ugrave; importante di tutte: la <b>Masquerade</b>.
                    </li>
                    <li style={liStyle}>
                        <b>Clan</b>: le diverse "famiglie", unite da vincoli di sangue, in cui si dividono i Cainiti.
                        Leggenda vuole che i tredici grandi clan siano originati da altrettanti matusalemme, Terza
                        Generazione (da intendere come progenie della progenie, "nipoti" di Caino). Durante la storia
                        i clan hanno cambiato consuetudini, facce, e a volte sono stati persino completamente trasformati
                        a seguito delle Diablerie sofferte dai membri della Terza Generazione. Per pi&ugrave; informazioni
                        riguardo ai clan, puoi consultare la relativa <Link href={GuideRoutes.clans}>Sezione della guida</Link>.
                    </li>
                    <li style={liStyle}>
                        <b>Diablerie</b>: chiamata anche <b>Amaranth</b> o <b>Amaranthus</b>, &egrave; l'equivalente del cannibalismo per gli umani,
                        solo che a venire consumata in questo caso &egrave; l'anima stessa della vittima. Consiste nel consumare completamente la Vitae
                        della vittima, quindi ingaggiare una battaglia spirituale con la stessa, finché la sua Volont&agrave; non cede, e la Diablerie
                        &egrave; completa.<br />
                        Tramite la Diablerie, il perpetratore imprigiona dentro di s&eacute; l'anima della vittima, e se questa era di Generazione
                        minore rispetto a quella del perpetratore, quest'ultimo la aumenter&agrave;, dipendendo dalla differenza tra i due valori.
                        La Diablerie &egrave; l'unico modo che un vampiro di Sangue Debole ha per diventare vampiro a tutti gli effetti: se infatti 
                        la commette su un vampiro anche solo di Tredicesima generazione, lui stesso diventer&agrave; di Tredicesima generazione.
                    </li>
                    <li style={liStyle}>
                        <b>Discipline</b>: i poteri dei Cainiti, esercitati "bruciando" o utilizzando una variabile
                        quantit&agrave; di <i>vitae</i> (vedi voce di glossario).
                    </li>
                    <li style={liStyle}>
                        <b>Fratelli</b>: altro termine utilizzato per riferirsi ai vampiri, il pi&ugrave; utilizzato,
                        almeno all'interno della Camarilla.
                    </li>
                    <li style={liStyle} id="frenzy">
                        <b>Frenesia</b>: la Frenesia &egrave; uno stato in cui le azioni del vampiro non sono sue
                        proprie, ma viene come posseduto dall'entit&agrave; soprannaturale che abita la sua mente 
                        dall'Abbraccio: la <b>Bestia</b>. Il vampiro, quando confrontato con il pericolo di essere
                        dominato dalla Bestia, ha di fronte a s&eacute; due opzioni: la prima &egrave; quella di
                        resistere, allontanandosi dalla fonte di pericolo, o sfamandosi autonomamente prima che lo 
                        faccia la Bestia per lui; l'altra opzione &egrave; quella di "cavalcare" la Bestia,
                        ovvero fare in modo che la Bestia prenda il sopravvento, ma mantenendo un'oncia di controllo
                        per direzionarla dove ritiene pi&ugrave; conveniente.
                    </li>
                    <li style={liStyle}>
                        <b>Generazione</b>: nella mitologia Cainita, i vampiri discendono da Caino attraverso il rituale
                        dell'Abbraccio, che perpetra la razza Cainita di generazione in generazione. Che sia vero o meno,
                        &egrave; un fatto dimostrato che pi&ugrave; ci si "allontana" dalla prima generazione, meno potere
                        il sangue ritiene. L'Infante avr&agrave; meno potere del Sire, e così via fino ai Sangue Debole,
                        il cui sangue &egrave;, appunto, cos&igrave; debole da non manifestare pi&ugrave; n&eacute; le 
                        caratteristiche del clan, e nemmeno dei Cainiti in generale.<br />
                        La generazione di un Cainita esprime quindi la sua lontananza dal progenitore: la tredicesima
                        generazione &egrave; ritenuta l'ultima generazione in cui il sangue ritiene ancora le caratteristiche
                        dei Cainiti.
                    </li>
                    <li style={liStyle}>
                        <b>Masquerade</b>: il nome di una delle sei Tradizioni, o regole fondamentali, della Camarilla.
                        La regola &egrave; molto semplice, nella sua applicazione diretta: nessun vampiro deve
                        manifestare la sua natura soprannaturale agli umani.
                    </li>
                    <li style={liStyle}>
                        <b>Sangue Debole</b>: sono i vampiri la cui generazione &egrave; troppo bassa per manifestare
                        appieno le caratteristiche tipiche del vampirismo, nel bene e nel male. Questo vuol dire che,
                        nonostante debbano incorrere in numerose difficolt&agrave; per poter anche solo simulare
                        i poteri dei Cainiti (la loro Alchimia del Sangue), non soffrono i raggi del Sole come i Fratelli
                        di generazione superiore. Sono stati, e sono tutt'ora, oggetto di scherno o di attiva
                        persecuzione da parte dei Cainiti, in quanto ritenuti segno della fine dei tempi della Gehenna.
                    </li>
                    <li style={liStyle}>
                        <b>Sabbat</b>: per secoli, sicuramente a partire dalla scoperta e successiva colonizzazione
                        del Nuovo Mondo, &egrave; stata la reale antagonista, nonch&eacute; spina nel fianco della
                        Camarilla. Basata su una serie di consuetudini volte a rafforzare (o depennare uccidendo)
                        i Cainiti che ne facevano parte, ha nel 2005 intrapreso la Guerra della Gehenna contro gli
                        Antidiluviani e i Matusalemme, per liberarsi dalle catene del sangue che li tenevano
                        a loro imprigionati.
                    </li>
                    <li style={liStyle}>
                        <b>Seconda Inquisizione</b>: a seguito di un piano molto ottimista della Camarilla fallito
                        miseramente (o riuscito troppo bene, dipendendo dal punto di vista), diverse organizzazioni
                        governative, ed alcuni servizi segreti, sono entrati a conoscenza dell'esistenza dei Cainiti.
                        L'attacco che ha scosso maggiormente la comunit&agrave; Cainita, e che l'ha costretta ad un
                        ritorno graduale a forme di comunicazione e di spostamento quasi medievali, &egrave; stato
                        quello mascherato da attentato terroristico al quartier generale a Vienna del clan Tremere,
                        che ha di fatto azzerato gli alti ranghi del clan, il Concilio dei Sette. &Egrave; correntemente
                        il pi&ugrave; grande pericolo per la non-vita Cainita.
                    </li>
                    <li style={liStyle}>
                        <b>Vitae</b>: sostanza soprannaturale sublimata a partire dal sangue dei mortali, dalla fisiologia
                        dei Cainiti. In parole povere, quando i vampiri suggono il sangue dei mortali per cibarsi,
                        trasformano il sangue in una sostanza soprannaturale in grado di sostenere i loro corpi non morti,
                        e di dare sostanza ai poteri che esercitano, le Discipline.
                    </li>
                </ul>
            </Typography>
        </>
    );
}

Glossary.getLayout = (page: ReactElement) => (
    <GuideLayout>
        {page}
    </GuideLayout>
)

export default Glossary;
