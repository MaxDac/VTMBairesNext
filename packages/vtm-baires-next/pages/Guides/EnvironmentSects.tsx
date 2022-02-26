import React, {ReactElement} from "react";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import {GuideRoutes} from "../../base/routes";
import { guideStyle, liStyle, storyStyle, titleStyle } from "../../components/guides/GuidesStyles";
import GuideLayout from "../../components/layouts/GuideLayout";
import EnvironmentBaires from "./EnvironmentBaires";

const EnvironmentSects = (): ReactElement => {
    return (
        <>
            <Typography paragraph>
                <h1 style={titleStyle}>
                    Antagonisti, Clan e altre Sette
                </h1>
            </Typography>

            <Typography paragraph sx={storyStyle}>
                La musica del locale era forse troppo alta, considerando che avevano da poco
                aperto e le persone stavano ancora ordinando apertivi. Ma a lui piaceva cos&igrave;.
                Gli altri del branco lo sapevano, e non fiatavano.<br />
                L'impazienza era evidentemente dettata dal fatto che la <b>Serpe</b> era in ritardo.<br />
                Nessuno aveva idea di come chiamarli. <b>Setiti</b>, <b>Seguaci di Set</b>, <b>Ministri</b>. 
                A nessuno era importato poi molto, non erano mai stati in lizza per entrare a far parte del
                club.
            </Typography>

            <Typography paragraph sx={storyStyle}>
                Il gruppo si rianim&ograve; quando all'ingresso vennero fermati dai buttafuori
                tre individui. La radiolina sul tavolo gracchi&ograve;.
            </Typography>

            <Typography paragraph sx={storyStyle}>
                "Sono tre, uno sembra uscito da un film, pelato e tatuato."
            </Typography>

            <Typography paragraph sx={storyStyle}>
                <b>Roc&iacute;o</b> prese la radio "Sono loro."
            </Typography>

            <Typography paragraph sx={storyStyle}>
                La descrizione non gli rese giustizia, pens&ograve; il Ravnos. Opinione condivisa,
                a guardare le facce, dagli altri tre del branco. Nessuno si mosse, tutti 
                obbedivano ad una scena, ad una rappresentazione, dettagliatamente studiata
                dal <b>Rodrigo</b> per mostrare sicurezza dove non ce n'era alcuna.<br />
                I tre ospiti salirono le scale che conducevano al piano rialzato del locale
                illuminati dalle luci al neon della sala. Fu una volta illuminati dalle luci
                poste ad intervalli regolari, installate sul soffitto, che si mostrarono in 
                tutta la loro straneit&agrave;.
            </Typography>

            <Typography paragraph sx={storyStyle}>
                "Voi dovete essere il grande <b>Rodrigo Manoukian</b>. Ho sentito parlare di
                voi quando ancora il Sabbat esisteva. Un peccato non avervi mai incrociato."
            </Typography>

            <Typography paragraph sx={storyStyle}>
                "Siediti." La voce, ferma, non tradiva inquietudine, irritazione, nulla. Solo
                un leggero eco di fastidio. Il glabro ospite sedette in una delle sedie 
                di fronte al tavolino. Sul volto aveva stampato un sorriso troppo ampio,
                troppo accondiscendente per essere vero.
            </Typography>

            <Typography paragraph sx={storyStyle}>
                Fu il Ravnos a prendere parola ancora, i suoi del pack dietro di lui, una
                cortina protettiva sufficientemente minacciosa da allertare la Camarilla.
                "Sappiamo entrambi che non &egrave; stato per caso che non vi ho mai
                incrociati. Il fatto &egrave; che <i>no los banco, a vos y a los otros
                hijos de puta de tus compañeros.</i>" sibil&ograve;, con voce appena 
                accentuata, come se stesse parlando dei coktail che non sarebbero arrivati.
            </Typography>

            <Typography paragraph sx={storyStyle}>
                "Il problema" continu&ograve; "&egrave; che non abbiano scelta. Lo so io.
                E lo sapete anche voi. Questa &egrave; una pura formalit&agrave; per 
                dettare le rispettive condizioni, e vedere come funziona nei prossimi
                mesi." Il sorriso spar&igrave; dalle labbra del Ministro, lentamente.
                Fece per parlare, ma il Ravnos fu lesto ad alzare la mano per bloccarlo.
                "Prima di cominciare, so che sapete cos'&egrave; la Vaulderie. Vorrei 
                sapeste che Roc&iacute;o, <i>aqui</i>" indic&ograve; la pallida donna 
                di bassa statura i cui occhi rossi riuscivano a risaltare persino sulla 
                folta chioma corvina, leonina, incolta. "Continua a somministrarcela, 
                quindi di legami di sangue non ne potete fare."
            </Typography>

            <Typography paragraph sx={storyStyle}>
                Il Ministro si sporse dalla sedia, appena, riprendendo una parvenza di 
                sorriso mellifluo.
            </Typography>

            <Typography paragraph sx={storyStyle}>
                Si era aspettato di peggio.
            </Typography>

            <Typography paragraph sx={guideStyle}>
                In Buenos Aires by Night, sar&agrave; possibile creare solamente personaggi affiliati alla Camarilla;
                in questo modo, il corpo master sar&agrave; in grado di gestire efficacemente il gioco e l'organizzazione
                di una singola setta, senza rischiare di disperdere e spezzettare le trame per le differenti fazioni.
                L'unica eccezione saranno ovviamente i Sangue Debole, il cui gioco comunque verr&agrave; considerato
                principalmente in funzione del loro status (cacciati a vista o meno) dalla Torre d'Avorio.
            </Typography>

            <Typography paragraph>
                <h2 style={titleStyle}>
                    Clans
                </h2>
            </Typography>

            <Typography paragraph sx={guideStyle}>
                Le Ultime Notti hanno trasformato i Clan, le loro sorti e le loro stesse caratteristiche. In seguito
                potrete trovare una rapida lista dei clan e di come sono cambiati nella versione 5:
                
                <ul>
                    <li style={liStyle}><b>Banu Haqim (ex Assamiti)</b>: hanno di recente formalmente richiesto ed ottenuto
                    di entrare a far parte della Camarilla.</li>
                    <li style={liStyle}><b>Brujah</b>: una delle cause che ha convinto la Camarilla ad accogliere i Banu Haqim
                    tra le sue fila &egrave; stata la defezione di massa di questo clan, dopo il tradimento
                    di Theo Bell al Conclave di Praga. Non tutti i Brujah hanno deciso di seguirlo, ed &egrave; considerato
                    perfettamente lecito creare un personaggio Brujah affiliato alla Camarilla.</li>
                    <li style={liStyle}><b>Gangrel</b>: il clan Gangrel &egrave; ufficialmente indipendente dalla defezione di Xaviar.
                        Anche alcuni Gangrel, come nel caso dei Brujah, hanno per&ograve; deciso di rimanere nella Camarilla,
                        quindi &egrave; lecito creare personaggi Gangrel affiliati alla Setta.
                    </li>
                    <li style={liStyle}><b>Hecata (ex Giovanni)</b>: ex clan Giovanni. i Giovanni continuano a formare la maggioranza del clan,
                    che adesso ospita anche gli elementi del clan dei Cappadoci nelle loro diverse emanazioni,
                    quasi del tutto spazzato via dopo la Diablerie sull'Antidiluviano operata da Augustus Giovanni.</li>
                    <li style={liStyle}><b>Lasombra</b>: dietro impulso degli <i>Amici Noctis</i>, anche i Lasombra hanno ufficialmente
                    richiesto ed ottenuto di entrare a far parte della Camarilla, con un accordo molto meno
                    vantaggioso rispetto a quello strappato dai Banu Haqim: ogni nuovo Abbraccio dovr&agrave;
                    essere pagato con l'uccisione di un membro Anziano del loro stesso clan.</li>
                    <li style={liStyle}><b>Malkavian</b>: nell'ambientazione si considera che i Malkavian hanno subito pi&ugrave;
                        perdite in termini di non-vite rispetto agli altri clan, dato che la loro maledizione
                        ha a che fare con forme pi&ugrave; o meno accentuate di follia. Nonostante questo, 
                        il clan non subir&agrave; nessuna restrizione in fase di creazione.
                    </li>
                    <li style={liStyle}><b>Ministry (ex Seguaci di Set) (*)</b>: (ancora da definire)</li>
                    <li style={liStyle}><b>Ravnos</b>: la Settimana degli Incubi, in cui l'Antidiluviano del clan si &egrave;
                        risvegliato a cavallo tra il Ventesimo e il Ventunesimo secolo, &egrave; avvenuta. Durante questo periodo,
                        inonando le menti dei componenti del clan di incubi ed incitandoli a frenesie incontrollate, l'Antidiluviano 
                        ha di fatto decimato gran parte del clan dopo una settimana.
                    </li>
                    <li style={liStyle}><b>Toreador</b>: il clan Toreador fa ancora parte della Camarilla, ed &egrave; stato quello
                        meno interessato dalla violenza della Seconda Inquisizione. In altre parole, poco &egrave; cambiato 
                        rispetto alla Terza Edizione.
                    </li>
                    <li style={liStyle}><b>Tremere</b>: a seguito dell'attacco della Seconda Inquisizione alla Haus de Hexe, la Chantry
                    principale Tremere a Vienna, molti dei legami di sangue che tenevano saldamente legati i membri del clan sono stati
                    spezzati, il Concilio dei Sette &egrave; disperso. Come conseguenza, i Tremere, una volta potenti e uniti, hanno perso 
                    la loro rigida organizzazione gerarchica piramidale. Il clan si &egrave; spaccato in quattro differenti "sette", 
                    ma la maggior parte di loro continua a far parte della Camarilla.</li>
                    <li style={liStyle}><b>Tzimisce (*)</b>: la maggior parte degli Tzimisce &egrave; partita coi contingenti Sabbat
                    alla volta del Medio Oriente per combattere la Guerra di Gehenna, e al contrario dei Lasombra non ha tradito la causa.</li>
                    <li style={liStyle}><b>Ventrue</b>: il clan Ventrue &egrave; fondamento della Camarilla, ed si &egrave; ovviamente trovato 
                    a dover risolvere la maggior parte dei problemi dovuti al disfacimento della Camarilla. Non sar&agrave; impedita la creazione
                    di personaggi Ventrue affiliati alla Camarilla.</li>
                </ul>
            </Typography>

            <Typography paragraph sx={guideStyle}>
                In seguito, saranno esposte le situazioni attuali di Sette e Congreghe alternative, se non antagoniste,
                alla <Link href={GuideRoutes.camarilla}>Camarilla</Link>.
            </Typography>

            <Typography paragraph>
                <h2 style={titleStyle}>
                    Anarchici
                </h2>
            </Typography>

            <Typography paragraph sx={guideStyle}>
                L'abbandono da parte del Sabbat dei territori, e la successiva partenza
                verso il Medio Oriente, non ha lasciato spazio solamente alla Camarilla. <b>Rodrigo Manoukian</b>, 
                un Ravnos Anticlan, ha rifiutato di asservirsi
                alla Guerra della Gehenna imposta dal suo clan, e col suo branco ha raggiunto
                un accordo di mutua protezione con i Ministri per la protezione dei territori
                della Provincia dalla morsa della Camarilla, che ha rifiutato proprio 
                i Ministri dall'entrare a far parte della Setta.
            </Typography>

            <Typography paragraph sx={guideStyle}>
                In seguito a questo pubblico rifiuto di affiliazione alla Camarilla, e
                alla pretesa di territorio contro la Setta, altri delusi dall'esperienza
                fallita del Dominio di Montevideo hanno deciso di aderire e dare corpo
                al movimento Anarchico a Buenos Aires.<br />
                N&eacute; Manoukian n&eacute; nessuno dei Ministri ha finora avanzato
                la pretesa di assumere la carica di Barone, anche se il Ravnos sta
                svolgendo, grazie anche al suo locale / rifugio e allo status che gli
                garantisce, un ruolo di guida molto simile.
            </Typography>

            <Typography paragraph>
                <h2 style={titleStyle}>
                    Hecata
                </h2>
            </Typography>

            <Typography paragraph sx={guideStyle}>
                I Giovanni sono arrivati negli anni 80 del secolo passato con la Camarilla,
                ufficialmente per dare supporto logistico alla Setta per il suo insediamento,
                sfruttando le loro connessioni tra gli immigranti umani italiani di 
                lungo corso.<br />
                La setta, prima della Constituci&oacute;n del 1994 e le prime vittorie e anche
                dopo, ha continuato ad accusare i Giovanni di doppiogiochismo con il Sabbat,
                sia per nascondere i suoi fallimenti agli occhi degli Anziani in Europa,
                sia perch&eacute; era <b>vero</b>.
            </Typography>

            <Typography paragraph sx={guideStyle}>
                Per questo motivo, nonostante dopo il 1994 il loro supporto &egrave; stato
                fondalmentale per l'insediamento del Dominio di Montevideo, la Camarilla
                non ha nemmeno offerto il suo aiuto quando, in seguito all'attacco finanziario 
                della Seconda Inquisizione a tutto ci&ograve; che era anche solo remotamente
                collegato alle famiglie Giovanni e Dunsirn, il clan Giovanni fu sull'orlo del
                fallimento. Gli allora Seguaci di Set ne approfittarono, e cercarono di 
                estirpare la presenza dei Giovanni da Buenos Aires.
            </Typography>

            <Typography paragraph sx={guideStyle}>
                Ci sarebbero riusciti, se non ci fosse stata una iniezione di Fratelli
                della famiglia Pisanob, guidati da <b>Mercedes Pisanob</b>, approdati a 
                Buenos Aires per sfuggire alla persecuzione
                degli Araldi, Cappadoci sfuggiti alla mattanza operata dal loro stesso
                Antidiluviano. Grazie all'iniezione di nuove energie, ed alle loro
                capacit&agrave; necromantiche, riuscirono a ritagliarsi uno spazio 
                nella citt&agrave; di Buenos Aires assieme ai Giovanni. Anche a Buenos Aires,
                nacque il clan <b>Hecata</b>.
            </Typography>

            <Typography paragraph>
                <h2 style={titleStyle}>
                    Seconda Inqusizione
                </h2>
            </Typography>

            <Typography paragraph sx={guideStyle}>
                La Seconda Inquisizione &egrave;, da almeno una decina di anni, la vera spina
                nel fianco della Camarilla, e in generale dei Cainiti, in quasi tutto il 
                mondo occidentale. Incalcolabili sono le perdite di potere, possedimento, 
                ma prestigio ed in termini di non-vite che la società dei Fratelli ha
                dovuto pagare prima di raggiungere una sorta di equilibrio.
            </Typography>

            <Typography paragraph sx={guideStyle}>
                Le organizzazioni segrete che la compongono per&ograve; non sembrano 
                aver dato problemi nel Dominio di Buenos Aires ai <i>Blank Bodies</i>,
                come vengono chiamati da queste organizzazioni di cacciatori i Cainiti.
                Il motivo &egrave; del tutto fortuito: il governo filo-<i>peronista</i> attualmente
                in carica, come molti altri governi di sinistra del continente 
                sudamericano, osteggia attivamente la presenza di agenzie segrete 
                straniere in territorio nazionale, inclusa l'<b>Entit&agrave;</b> e
                la <b>Societ&agrave; di San Leopoldo</b>.
            </Typography>

            <Typography paragraph sx={guideStyle}>
                I Cainiti del Dominio sono coscienti del fatto che non conviene 
                comunque rilassare troppo l'attenzione sul rispetto delle Tradizioni,
                perch&egrave; le cose potrebbero radicalmente cambiare nel giro di
                mesi, ma le pesanti restrizioni sulla tecnologia imposte dai pochi 
                Anziani che hanno resistito al <i>Beckoning</i> non sono osservate
                alla lettera a Buenos Aires.
            </Typography>
        </>
    );
}

EnvironmentSects.getLayout = (page: ReactElement) => (
    <GuideLayout>
        {page}
    </GuideLayout>
)

export default EnvironmentSects;
