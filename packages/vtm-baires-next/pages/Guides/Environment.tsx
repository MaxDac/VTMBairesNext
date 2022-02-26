import React, {ReactElement} from "react";
import Typography from "@mui/material/Typography";
import { guideStyle, liStyle, titleStyle } from "../../components/guides/GuidesStyles";
import GuideLayout from "../../components/layouts/GuideLayout";
import CurrentSituation from "./CurrentSituation";

const Environment = (): ReactElement => {
    return (
        <>
            <Typography paragraph>
                <h1 style={titleStyle}>
                    Ambientazione
                </h1>
            </Typography>

            <Typography paragraph sx={guideStyle}>
                Con questa sezione, comincia la parte di regolamento dedicata alle informazioni in gioco. Verr&agrave;
                spiegata la storia, e il suo intreccio con quella descritta nei manuali di Vampiri: la Masquerade&trade; v5,
                e verr&agrave; anche scritto quanto della pi&ugrave; aggioranta manualistica sar&agrave; considerato,
                e cosa no.
            </Typography>

            <Typography paragraph>
                <h2 style={titleStyle}>
                    Vampiri: la Masquerade&trade; - La storia
                </h2>
            </Typography>

            <Typography paragraph sx={guideStyle}>
                Prima di riassumere i cambiamenti che la versione 5 dei manuali ha introdotto, cercheremo di condensare
                in poche parole la conoscenza contenuta nei manuali precedenti, che considereremo conoscenza propedeutica
                se volete giocare un personaggio Cainita.
            </Typography>

            <Typography paragraph sx={guideStyle}>
                Il gioco &egrave; incentrato sulle vicende dei Cainiti, o Fratelli, una razza immortale generata, almeno stando
                alle loro leggende, dal <b>Peccato di Caino</b> (da qui la parola Cainiti), il primo omicida della storia. Da allora, 
                Caino &egrave; costretto a vagare per la Terra, di notte, dato che i raggi del Sole avrebbero bruciato le sue carni,
                n&eacute; vivo n&eacute; morto, cibandosi della sola cosa che lo pu&ograve; sostenere: il sangue degli esseri umani.<br />
                Sempre secondo la leggenda, nel suo vagabondare Caino incontr&ograve; <b>Lilith</b>, la prima moglie di Adamo, che lo 
                prese sotto la sua protezione e lo mise a conoscenza del suo sapere oscuro. Gli insegn&ograve; che il sangue di 
                cui si cibava acquisiva un'energia ed un potere oscuri, la sua fisiologia soprannaturale ne distillava la <i>vitae</i>, 
                che gli garantiva poteri fuori dalla portata degli umani. Possedeva forza e velocit&agrave; soprannaturale, la capacit&agrave;
                di comandare e di ammaliare con la sola forza del pensiero gli umani, ma soprattutto di perpetuare la sua specie tramite
                il rituale che sarebbe poi stato chiamato <b>Abbraccio</b>.
            </Typography>

            <Typography paragraph sx={guideStyle}>
                Caino fin&iacute; poi per allontanare Lilith e, preda della solitudine e della disperazione, commise il <b>secondo peccato</b>:
                Abbracci&ograve; tre umani, rendendoli Cainiti di Seconda Generazione. Partecip&ograve; anche alla costruzione di una citt&agrave;, 
                la pi&ugrave; grande, si dice, dell'antichit&agrave;, ancora oggetto di studi archeologici da parte di rispettati Cainiti, la 
                citt&agrave; di <b>Enoch</b>.<br />
                I suoi Infanti Abbracciarono altri tredici umani, la Terza Generazione. Questi, per&ograve;, diedero origine alla Jihad, alla guerra 
                che imperversa e flagella Cainiti, e i loro servi mortali, da tutta la storia registrata.<br />
                Sire contro Infante, clan contro clan, da quando la Terza Generazione uccise la Seconda per prenderne il potere, tutti i Cainiti
                sono vittime inconsapevole di questa grande guerra, in cui gli Anziani influenzano ed orchestrano dall'ombra le mosse dei Neonati,
                e i Neonati cercano di prendere il posto dei loro Sire, ed anche Cainiti di clan diversi si scontrano ed ordiscono l'uno 
                contro l'altro, mettendo in mezzo vittime mortali.<br />
                Il primo atto di questa Jihad fu il parricidio della Terza Generazione contro la Seconda, che venne consumata. La punizione 
                per questi atti nefandi fu il biblico <b>Diluvio</b>, che spazz&ograve; via la Prima Citt&agrave;, e Caino cap&igrave; che, assieme al suo sangue, aveva
                trasmesso anche il suo Peccato agli Infanti. Decise di abbandonarli al loro destino, mentre questi costruivano una <b>Seconda Citt&agrave;</b>&nbsp;
                sulle ceneri della prima ed a sua imitazione, ma che non ebbe destino migliore.
            </Typography>

            <Typography paragraph sx={guideStyle}>
                Caino spar&igrave; di fatto dalla storia registrata. I tredici Cainiti sopravvissuti a loro volta Abbracciarono Infanti, dando
                origine a tredici clan differenti, Cainiti con alcune caratteristiche (e maledizioni) in comune che li differenziavano dai Cainiti
                degli altri clan, e ne influenzavano il comportamento e il rapporto con gli umani.
                E cos&igrave;, ad esempio, i Cainiti del clan Nosferatu persero il loro aspetto umano, divenendo mostri orribili; i Lasombra videro
                la loro immagine in ogni specchio distorta, e cos&igrave; via. Assieme alla maledizione caratteristica del clan, grazie alla 
                condivisione della Vitae col proprio Sire, gli Infanti acquisivano anche la conoscenza delle Discipline di clan, i poteri
                soprannaturali dei Cainiti.
            </Typography>

            <Typography paragraph sx={guideStyle}>
                Da allora, la storia dei Cainiti s'&egrave; intessuta a quella mortale, sempre rimanendo nell'ombra ed orchestrando le politiche
                degli umani cos&igrave; come quelle dei vari clan. Numerose furono le guerre, le lotte intestine e i confronti tra fazioni differenti
                di Cainiti.<br />
                Le <b>guerre puniche</b>, ad esempio, furono guidate da Ventrue e Malkavian romani per rompere e debellare l'idillio dei filosofi Brujah con gli 
                umani, che a Cartagine riuscivano a vivere in armonia. Ci&ograve; che rimase del sogno dei Brujah fu cenere, e il sale che i
                Romani sparsero su Cartagine per non far nascere (o uscire) pi&ugrave; nulla da quella terra.
            </Typography>

            <Typography paragraph sx={guideStyle}>
                Dopo l'anno Mille, le trame degli Antidiluviani si ritorsero apparentemente contro i loro perpetratori: quattro dei tredici
                Antidiluviani, i mitici nipoti di Caino, furono vittime della Diablerie dei loro Infanti:

                <ul>
                    <li style={liStyle}>
                        Un mago mortale, leader di una setta ermetica, <b>Tremere</b>, dopo aver usato in vari modi la <i>vitae</i> di altri 
                        Cainiti, individu&ograve; il corpo indifeso dell'Antidiluviano del clan Salubri, <b>Saulot</b>, e riusc&igrave; a
                        commettere Diablerie su di lui, creando di fatto quello che fu da allora uno dei clan pi&ugrave; potenti ed organzzati:
                        il clan Tremere. Furono addirittura in grado di combattere Tzimisce e altri Cainiti su pi&ugrave; fronti, subito dopo la loro 
                        creazione.
                    </li>

                    <li style={liStyle}>
                        L'Antidiluviano del clan dei Cappadoci per&igrave; a sua volta sotto le zanne di uno dei suoi Infanti, <b>Augustus Giovanni</b>;
                        quest'ultimo cre&ograve; il clan <b>Giovanni</b>, che da allora riusc&igrave; a sopravvivere grazie 
                        alle sue ampie conoscenze Necromantiche.
                    </li>

                    <li style={liStyle}>
                        Due Diablerie di Antidiluviani scatenarono poi una serie di eventi che disegnarono la storia dei Cainiti fino ai
                        primi anni 2000: la diablerie, a distanza di pochi anni, dell'Antidiluviano <b>Tzimisce</b> e di quello <b>Lasombra</b>,
                        rispettivamente per mano di due Cainiti del clan, <b>Lugoj lo Spezza Sangue</b> e <b>Gratiano de Veronesi</b>. Gli Tzimisce 
                        che si ribellarono ai loro Anziani, puntarono poi alla Diablerie dell'Antidiluviano: riuscirono nel loro intento, dopo aver 
                        perfezionato un rituale in grado di spezzare i legami di sangue con i Sire, dando origine alla rivolta anarchica, che in seguito 
                        si sarebbe condensata nella setta del <b>Sabbat</b>.
                    </li>
                </ul>

                Per far fronte a questi avvenimenti, ed all'avanzata della Prima Inquisizione umana, che stava decimando la popolazione Cainita dal 1400, 
                gli altri clan, guidati dai Ventrue, crearono la <b>Camarilla</b>. Proposero un accordo di pace ad <b>Anarchici</b> ed <b>Assamiti</b>,
                le tre fazioni in guerra in quel periodo, durante la famosa <b>Convenzione di Thorns</b>, e cementarono un'organizzazione che resiste
                fino ai giorni nostri, alla quale i ribelli che rifiutarono di aderirvi opposero quella del Sabbat.
            </Typography>

            <Typography paragraph sx={guideStyle}>
                Sabbat e Camarilla si confrontarono su pi&ugrave; fronti da allora, la Camarilla cercando di stabilire <b>Domini</b> e il Sabbat 
                opponendo le sue <b>Diocesi</b>, almeno fino al volgere del nuovo Millennio, quando l'ordine durato per pi&ugrave; di cinque secoli
                venne irrimediabilmente sconvolto dagli eventi descritti nella...
            </Typography>

            <Typography paragraph>
                <h2 style={titleStyle}>
                    Versione 5
                </h2>
            </Typography>

            <Typography paragraph sx={guideStyle}>
                La nuova versione dei manuali di Vampiri: la Masquerade&trade; ha introdotto una serie di sostanziali cambiamenti
                sia all'ambientazione che alle regole del gioco. 
                In questa sezione ci limiteremo a riassumere quali di questi cambiamenti considereremo ed implementeremo nella nostra 
                ambientazione. Vi invitiamo comunque a leggere i manuali rilasciati dalla White Wolf&trade; per avere una idea
                pi&ugrave; chiara di cosa &egrave; cambiato, e di quali nuovi spunti di interpretazione si &egrave; arricchito il gioco.
                Nella sezione <b>Credits</b> troverete tutti i link relativi.

                <ul>
                    <li style={liStyle}>
                        Il <b>Beckoning</b>, il richiamo percepito degli Anziani di tutto il mondo a partecipare alla Guerra della
                        Gehenna iniziata dal Sabbat circa nella met&agrave; del primo decennio di questo secolo, &egrave;
                        avvenuto. Cainiti dalla nona generazione in gi&ugrave; hanno trovato impossibile resistervi, ed hanno dovuto 
                        abbandonare posizioni di potere costruite in secoli. Questo vuol dire che l'ambientazione per ora <b>non prevede 
                        l'introduzione del Sabbat</b>.<br />
                        Una delle conseguenze del <i>Beckoning</i> &egrave; che il gioco politico della Camarilla &egrave; reso 
                        molto pi&ugrave; interessante dal fatto che non ci sono pi&ugrave; Anziani arroccati in posizioni di potere 
                        prima inaccessibili.
                    </li>

                    <li style={liStyle}>
                        Come conseguenza, gli Anarchici hanno trovato maggiore spazio politico
                        all'interno della societ&agrave; Cainita. Sono loro, nelle Notti Moderne, i veri antagonisti
                        e la vera alternativa al potere della Camarilla, soprattutto dopo la defezione del clan Brujah.
                        I rapporti con la Camarilla, comunque, non soffrono della stessa natura antagonistica che la Setta
                        sperimentava col Sabbat nel ventesimo secolo, anche se conti aperti rimangono, come il tradimento
                        di <b>Theo Bell</b>, il famoso Brujah che ha ucciso <b>Hardestadt</b>, il <i>deus ex machina</i> dietro la
                        creazione della Camarilla, e probabilmente anche il suo infante, <b>Jan Pieterszoon</b>.
                    </li>

                    <li style={liStyle}>
                        La Seconda Inquisizione, miscuglio di servizi segreti vaticani, Societ&agrave; di Leopoldo,
                        ed altre organizzazioni governative statali e interstatali, ha colpito fortemente la societ&agrave;
                        Cainita e minato la sua sicurezza nella dominazione dei mortali. Dopo il colpo inferto al
                        clan Tremere con la distruzione della Chantry viennese, Londra &egrave; stata purgata della
                        presenza Cainita, Berlino e altre citt&agrave; europee stanno subendo la stessa sorte. Tra
                        questa minaccia e il <i>Beckoning</i>, la Camarilla &egrave; rimasta doppiamente sguarnita.
                    </li>

                    <li style={liStyle}>
                        La temporanea sparizione del Sabbat nella Societ&agrave; dei Fratelli, il <i>Beckoning</i> e la
                        persecuzione della Seconda Inquisizione hanno stravolto la geografia politica del potere Cainita.
                        Ad approfittarne sono stati Neonati ed Ancillae, un tempo meri esecutori della volont&agrave;
                        dei loro sire, che hanno dovuto assumere le responsabilit&agrave; del potere. Poi, gli
                        Anarchici, che un tempo faticavano a ritagliarsi uno spazio al di fuori dello Stato Libero
                        organizzato in California, ed ora possono addirittura puntare ad assumere il controllo dei
                        domini europei.
                    </li>

                    <li style={liStyle}>
                        Una delle caratteristiche pi&ugrave; significative descritte nei nuovi manuali riguarda
                        il sostanziale abbandono, da parte della gerarchia della Camarilla, di tutte le nuove
                        tecnologie, inclusi smartphone, ma anche personal computer, e in generale tutta l'apparecchiatura 
                        dotata di fotocamera o una connessione ad internet. Questo dettaglio verr&agrave;
                        ritenuto significativo, e nel corso delle giocate, l'utilizzo di apparecchiatura elettronica
                        verr&agrave; considerato come potenziale infrazione delle "raccomandazioni" della Camarilla.
                    </li>

                    <li style={liStyle}>
                        In questo contesto, si immerge l'ambientazione della citt&agrave; di Buenos Aires, descritta in
                        seguito.
                    </li>
                </ul>
            </Typography>
        </>
    );
}

Environment.getLayout = (page: ReactElement) => (
    <GuideLayout>
        {page}
    </GuideLayout>
)

export default Environment;
