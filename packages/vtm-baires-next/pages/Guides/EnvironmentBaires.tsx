import React, {ReactElement} from "react";
import Typography from "@mui/material/Typography";
import {GuideRoutes} from "../../base/routes";
import Link from "next/link";
import {guideStyle, storyStyle, titleStyle} from "../../components/guides/GuidesStyles";
import GuideLayout from "../../components/layouts/GuideLayout";
import Environment from "./Environment";

const EnvironmentBaires = (): ReactElement => {
    return (
        <>
            <Typography paragraph>
                <h1 style={titleStyle}>
                    Buenos Aires by Night
                </h1>
            </Typography>

            <Typography paragraph sx={storyStyle}>
                Il luogo d'incontro che aveva scelto era un'antica sala in un
                appartamento nel quartiere di San Telmo, a poca distanza dalla Casa Rosada.
                Gli arredamenti, in legno, cos&igrave; come gli stucchi, la carta da parati, 
                sembravano appartenere ad un'altra epoca, e lo stato di manutenzione lasciava
                parecchio a desiderare. Ma nulla poteva sostituire l'odore di antico che
                poteva presentire, gonfiando quel tanto che bastava il petto, privo della 
                naturale pulsazione del cuore gi&agrave; da quasi un secolo.<br />
                La sua scorta sarebbe stata considerata inverosimilmente scarna fino a
                qualche settimana fa, ma gli eventi imponevano una gestione pi&ugrave; austera
                delle proprie risorse.<br />
                La futura Principe del Dominio lo stava ormai facendo aspettare da pi&ugrave; 
                di mezz'ora. Avrebbe considerato un'ora di tempo minimo. Stava giocando con le 
                ombre della stanza, e ne era gi&agrave; avvolto, quando percep&igrave; la vettura.
                Elettrica. I sue due asserviti non si erano ancora mossi.
            </Typography>

            <Typography paragraph sx={storyStyle}>
                Forse aveva scelto male di quali disfarsi.
            </Typography>

            <Typography paragraph sx={storyStyle}>
                Rimase immobile. Riusc&igrave; a sentire la porta del piano terra aprirsi, che i due
                si mossero. Avrebbe normalmente respirato profondamente, in segno di delusione; 
                non ne sarebbe valsa la pena.<br />
                Gli ospiti salirono le scale con passo cadenzato, lento. Poteva quasi vederli,
                controllare ogni piccola fessura della rampa di scale dell'edificio del primo 
                Novecento. Non aveva bisogno di nulla di tutto questo. Non gli avrebbe dato nemmeno 
                molta pena abbandonare i due ghoul che si era portato dietro.
            </Typography>

            <Typography paragraph sx={storyStyle}>
                Passata la fanfara delle presentazioni, l'obbligo burocratico, il pallido tentativo
                di affermare la propria superiorit&agrave; con vuoti titoli senza significato,
                si sedettero. Assist&eacute; a tutta la cerimonia con un lieve, enigmatico,
                rispettoso sorriso, com'era abituato a fare coi gerarchi, nella Seconda Guerra
                Mondiale. Non si sarebbe ricordato della met&agrave; dei titoli, ma gli diede tempo
                di pensare. Un ritardo di una sola mezz'ora significava che la situazione stava
                realmente precipitando.
            </Typography>

            <Typography paragraph sx={storyStyle}>
                Mezz'ora di discorsi politici per arrivare finalmente a ci&ograve; che, per il 
                modo di vedere il mondo di un Ventrue, forse, era un sacrilegio. &Aacute;vila doveva morire.
                Mentre la <b>Sforza</b> elencava le sue varie giustificazioni, la frase 
                faceva eco alle parole dei <i>Freunde der Nacht</i> che gli tornarono alla mente.
            </Typography>

            <Typography paragraph sx={storyStyle}>
                <i>&Aacute;vila doveva morire</i>.
            </Typography>

            <Typography paragraph sx={storyStyle}>
                Era pi&ugrave; importante una risposta politica ad una situazione contingente che una non-vita 
                di servit&ugrave;.<br/>
                La Via dei Fratelli.<br />
                Sent&igrave; un accenno di pena per il suo compagno di clan. Affond&ograve; nella sensazione,
                la lasci&ograve; espandersi, per quanto poteva. L'avrebbe aiutato a rendere pi&ugrave; 
                credibile la farsa di cui sarebbe stato protagonista; a fingere dubbio.
            </Typography>

            <Typography paragraph sx={storyStyle}>
                <b>"Avr&ograve; bisogno di tre diverse squadre di PFA. Una di ghoul."</b>
            </Typography>

            <Typography paragraph sx={storyStyle}>
                <b>"Accordato."</b>
            </Typography>

            <Typography paragraph sx={storyStyle}>
                <b>"Il nostro prezzo sar&agrave; la Primogenitura nel nuovo Dominio."</b>
            </Typography>

            <Typography paragraph sx={storyStyle}>
                <i>Silenzio</i>.
            </Typography>

            <Typography paragraph sx={storyStyle}>
                <b>"Accordato."</b>
            </Typography>

            <Typography paragraph sx={storyStyle}>
                Pur col suo statuario controllo, dovette impegnarsi a fondo per non lasciar
                trapelare la sorpresa per qualcosa che l'aveva colto completamente alla
                sprovvista. Una resa cos&igrave; incondizionata non poteva che dipendere
                da qualcosa di estremamente grave.
            </Typography>

            <Typography paragraph sx={storyStyle}>
                <b>Qualcosa che lui non sapeva.</b>
            </Typography>

            <Typography paragraph sx={guideStyle}>
                Nella cornice offerta dagli eventi descritti nella sezione Globale dell'ambientazione,
                si inserisce la nostra, incentrata sugli eventi di Buenos Aires. La citt&agrave; 
                porteña, una delle pi&ugrave; grandi dell'America Latina, luogo d'immigrazione 
                per le pi&ugrave; disparate popolazioni mondiali prima, durante e a seguito
                delle grandi guerre che hanno sconvolto l'Europa e l'Occidente, ha svolto un
                ruolo analogo anche nei tempi moderni per i Fratelli in fuga dai problemi sorti
                nei Domini pi&ugrave; tradizionali della Camarilla.
            </Typography>

            <Typography paragraph>
                <h2 style={titleStyle}>
                    Ventesimo Secolo
                </h2>
            </Typography>

            <Typography paragraph sx={guideStyle}>
                Prima degli eventi della versione 5 dei manuali di Vampiri: la Masquerade&trade;,
                descritti nella sezione <Link href={GuideRoutes.environment}>precedente</Link> della guida,
                gli Anziani della Camarilla hanno a pi&ugrave; riprese tentato di colonizzare parte delle
                citt&agrave; di Montevideo e Buenos Aires, nel disperato tentativo di attenuare la stretta
                morsa che il Sabbat manteneva nell'intero continente sudamericano.<br />
                Il dispendio fu enorme, e incluse anche una serie di accordi col clan Giovanni, secondo cui 
                questi ultimi si impegnava a gestire il trasporto di risorse e Cainiti dal Vecchio 
                Continente al Nuovo in tutta sicurezza, in cambio di maggiore influenza negli stabili 
                Domini europei.
            </Typography>

            <Typography paragraph>
                <h4 style={titleStyle}>
                    La Constitución de 1994
                </h4>
            </Typography>

            <Typography paragraph sx={guideStyle}>
                Fino al 1994, la Camarilla in congiunzione col clan Giovanni - accusato a pi&ugrave; 
                riprese, pi&ugrave; o meno velatamente, di doppiogiochismo col Sabbat - ottenne pochi 
                successi, largamente oscurati dalle ripetute sconfitte. Poi, grazie anche ad una intensa
                e dispendiosa opera di costruzione di influenze politiche, arriv&ograve; la Costituzione
                del 1994, che, tra le altre cose, rese organismo amministrativo indipendente la <b>Capital
                Federal</b>, il centro dell'area metropolitana di Buenos Aires.
            </Typography>

            <Typography paragraph sx={guideStyle}>
                Pochi nel Sabbat si resero conto delle ripercussioni che questo avrebbe avuto
                nella politica Cainita: Capital Federal divenne il fulcro di numerose riforme
                volte ad accrescere il valore della citt&agrave;, tra queste la riorganizzazione
                e il potenziamento della polizia: covi Sabbat vennero divelti, e l'organizzazione
                venne sempre di pi&ugrave; spinta verso la Provincia, la regione periferica della capitale
                Argentina.
            </Typography>

            <Typography paragraph>
                <h2 style={titleStyle}>
                    Ventunesimo secolo
                </h2>
            </Typography>

            <Typography paragraph sx={guideStyle}>
                La presenza della Camarilla nel Rio del Plata divenne sempre pi&ugrave; consistente,
                e in pochi nel Sabbat riuscirono ad opporre una qualche resistenza nei luoghi di potere che
                la Camarilla stava riuscendo ad influenzare. Anche i Giovanni non poterono sfruttare appieno 
                l'influenza che i contratti con la Camarilla portarono per la violenta opposizione dei 
                Seguaci di Set, che, intuendo il cambio nella politica porteña, vollero concorrere coi 
                Giovanni per l'appoggio della Camarilla - cosa che alla Camarilla andava pi&ugrave; che bene.<br />
                Il successo della campagna fu cos&igrave; importante che gli Anziani in Europa
                vollero influire nelle decisioni politiche del Dominio: ancora una volta, 
                le Ancillae, a cui andava tutto il merito dell'impresa, correvano il rischio
                di venir private del loro premio.
            </Typography>

            <Typography paragraph sx={guideStyle}>
                Due furono gli accadimenti che avrebbero potuto cementare la situazione politica,
                e rendere stabile la presenza della Camarilla nell'America del Sud.<br />
                Buenos Aires non fu l'unica citt&agrave; su cui la Camarilla invest&igrave; le proprie risorse. 
                Venne costituito un Principato in piena regola, appoggiato dalle forze degli 
                Anziani, a <b>Montevideo</b>: venne scelta <b>Maria Augusta Carvalho Sforza</b>, componente
                in vita della nobilt&agrave; portoghese di stanza in Brasile, Abbracciata
                da un potente anziano del Principato francese di Villon.<br />
                In gran segreto, poi, vennero intavolate trattative con l'Arcivescovo Lasombra
                di Buenos Aires <b>Juan Antonio &Aacute;vila</b> per negoziare il suo tradimento
                al Sabbat, con successiva istituzione di un Principato sotto la sua egida,
                sul modello di quanto fu fatto gi&agrave; a Milano con Gian Galeazzo Visconti.
            </Typography>

            <Typography paragraph sx={guideStyle}>
                Poi tutti dovettero confrontarsi con gli accadimenti delle Ultime Notti.
            </Typography>

            <Typography paragraph>
                <h2 style={titleStyle}>
                    Ultime Notti
                </h2>
            </Typography>

            <Typography paragraph sx={guideStyle}>
                Il Sabbat, nel 2005, cominci&ograve; ad organizzare la logistica della traversata 
                verso il Medio Oriente, per la grande <b>Guerra della Gehenna</b>. &Aacute;vila venne
                colto nel mezzo delle contrattazioni dall'editto emanato dai Cardinali
                di Citt&agrave; del Messico, ed i suoi tentativi di ritardare la partenza
                vennero immediatamente percepiti come segnali di debolezza dai suoi Vescovi.
            </Typography>

            <Typography paragraph sx={guideStyle}>
                Nel giro di un mese tutto precipit&ograve;. Il Sabbat si divise, 
                cominci&ograve; a circolare il sospetto che 
                l'Arcivescovo stesse trattando con la Camarilla, e la reazione degli altri
                Vescovi fu quella di organizzare comunque la partenza, ma non prima di 
                inficiare gli sforzi di un Arcivescovo ormai barricato nel suo rifugio.<br />
                La parte pi&ugrave; consistente sarebbe partita via nave alla volta del
                Medio Oriente, ma non prima di aver fatto scalo a <b>Montevideo</b> per 
                organizzare una serie di consistenti brecce alla Masquerade.
                Il gruppo scelto che rimase temporaneamente a Buenos Aires avrebbe
                dovuto colpire allo stesso modo la Camarilla, approfittando 
                del disordine per infliggere la Morte Ultima all'Arcivescovo traditore.
            </Typography>

            <Typography paragraph sx={guideStyle}>
                Montevideo venne abbandonata dopo soli cinque giorni dalla comparsa 
                della Seconda Inquisizione, guidata dall'<b>Entit&agrave;</b>, il servizio
                segreto del Vaticano, e dalla reintegrata <b>Societ&agrave; di San 
                Leopoldo</b>. Buenos Aires venne salvata con un altro accordo: al 
                Vescovo <b>Heinrich H&uuml;nger</b>, pedina degli <b>Amici Noctis</b>,
                sarebbe stata concessa la Primogenitura nel nuovo Dominio
                in cambio del disinnesco della cellula terroristica sabbatica
                e della Morte Ultima dell'ex Arcivescovo &Aacute;vila.
                A condurre le trattative per la Camarilla fu la stessa <b>Maria Augusta 
                Carvalho Sforza</b>, ormai ex Principe di Montevideo.
                I Lasombra ottennero in cambio anche la soppressione, nel
                Dominio di Buenos Aires, della <b>clausola di Chicago</b>, per cui 
                per ogni Lasombra Abbracciato, un altro anziano avrebbe dovuto
                subire la Morte Ultima.
            </Typography>

            <Typography paragraph sx={guideStyle}>
                Il piano riusc&igrave;, e si evit&ograve; una disastrosa
                serie di brecce alla Masquerade, che avrebbero significato
                la fine del Dominio ancor prima della sua nascita.
            </Typography>

            <Typography paragraph sx={guideStyle}>
                Mentre la via per la Camarilla era ormai delineata, restava
                comunque da organizzare il Dominio, la relativa distribuzione
                di cariche, e la costruzione di influenze. Molti dei Fratelli
                che facevano parte del Dominio di Montevideo raggiunsero il nuovo
                Dominio, altri invece, sentendosi traditi dal trattamento di
                favore concesso ai pochi Lasombra integrati nella Camarilla,
                si unirono ai pochi sopravvissuti diseredati del Sabbat rimasti e 
                formarono l'embrione della prima cellula Anarchica di Buenos Aires.
            </Typography>

            <Typography paragraph sx={guideStyle}>
                Nel frattempo, i Giovanni e i Seguaci di Set, anche nella
                remota regione sudamericana, subirono l'eco degli eventi
                che hanno interessato i loro clan.<br />
                I Giovanni soffrirono il contraccolpo finanziario a seguito
                delle sistematiche interferenze, in borsa e con controlli fiscali,
                delle aziende e dei fondi di investimento legati ai nomi delle 
                Famiglie Giovanni e Dunsirn.
                Si affidarono sempre di pi&ugrave; alla branca della 
                famiglia Pisanob in fuga dalla rappresaglia Cappadocia 
                come prestanome, ed al <i>rebranding</i> del 
                cambio di nome in <b>Hecata</b>. Riuscirono a sopravvivere
                anche grazie alla loro utilit&agrave; per la Camarilla,
                data dalla loro influenza tra molti dei discendenti 
                italiani della citt&agrave; nei luoghi di potere.
            </Typography>

            <Typography paragraph sx={guideStyle}>
                I Seguaci di Set, ora i <b>Ministri</b> di Set, rifiutati dalla 
                Camarilla, allacciarono le loro sorti a quelle 
                dell'embrione Anarchico che si stava creando, aiutandolo
                a svilupparsi nelle regioni periferiche della Provincia, 
                una volta occupata dal Sabbat.
            </Typography>

            <Typography paragraph>
                <h2 style={titleStyle}>
                    America Latina
                </h2>
            </Typography>

            <Typography paragraph sx={guideStyle}>
                E nel resto dello sterminato continente dell'America Latina?
                L'ambientazione di Buenos Aires by Night considerer&agrave; 
                quanto segue per quel che riguarda gli altri stati del Nuovo 
                Continente. Ignoreremo qualsiasi informazione presente in altri
                manuali all'infuori di quelli descritti nella sezione di&nbsp;
                <Link href={GuideRoutes.environment}>Ambientazione generale</Link>.
            </Typography>

            <Typography paragraph sx={guideStyle}>
                Per tutta la sua storia, l'America Latina &egrave; stata una terra
                contesa tra le forze del Sabbat, e le creature del Mondo di Tenebra&trade;
                pi&ugrave; legate alle forze della Natura: i <b>Licantropi</b>. Nelle
                grandi metropoli come São Paulo, Buenos Aires, Lima o Santiago,
                i quartier poveri e la grande violenza sono sempre state ispirate, 
                sfruttate e guidate anche dalla mano del Sabbat, che ha sempre trovato
                la scarsa e inefficace concorrenza di sparute linee di Sangue sfuggite
                dall'asfissiante Vecchio Continente.<br />
                Ma la relativa tranquillit&agrave; con cui hanno da sempre colonizzato
                queste zone &egrave; stata a pi&ugrave; riprese disturbata dalle costanti
                incursioni dei Lupini, gelosi dello spazio che le citt&agrave; stavano 
                prepotentemente sottraendo alla natura lussureggiante che, prima 
                dell'intervento dell'uomo, copriva gran parte del Continente.
            </Typography>

            <Typography paragraph sx={guideStyle}>
                La Camarilla, a partire dal progressivo abbandono da parte delle 
                potenze colonizzatrici europee dei territori,
                ha progressivamente perso interesse per il continente, ritenuto 
                troppo distante dai loro ancestrali domini europei, preferendo
                aumentare la loro influenza sul Vecchio Continente, e fronteggiare
                il Sabbat sui territori dell'America del Nord.<br />
                Complici per&ograve; le sconfitte subite proprio negli Stati Uniti,
                i primi sforzi vennero ispirati da certa classe dirigente Ventrue
                di origine spagnola per aumentare la loro influenza in quelle zone
                dimenticate. Buenos Aires, quindi, &egrave; da considerarsi il 
                primo esperimento riuscito in Sud America dal diciottesimo secolo,
                e sarebbe stato considerato un nodo di grande importanza strategica
                e logistica per l'ulteriore espansione nel resto del Continente,
                non fossero avvenute le catastrofi che si sono avvicendate nei primi 
                vent'anni del ventunesimo secolo.
            </Typography>

            <Typography paragraph sx={guideStyle}>
                La presenza della Seconda Inquisizione nel Continente Americano del Sud, 
                con l'<b>Entit&agrave;</b> e la Societ&agrave; di San Leopoldo in testa, 
                &egrave; stata da sempre forte, e le grandi distanze da percorrere
                per viaggiare da una metropoli all'altra rendono l'abbandono della
                tecnologia un grande handicap.<br />
                Ma la situazione precipit&ograve; con <b>l'attacco alla Chantry Tremere</b> a
                Vienna, col successivo <b>Concilio di Praga</b> indetto per tentare di gestire
                la situazione, e il <b>Richiamo</b>, la chiamata soprannaturale a cui tutti
                gli Anziani della Camarilla hanno dovuto rispondere.
                Al Concilio di Praga, Theo Bell, il famoso Brujah affiliato alla Camarilla,
                infliggendo la Morte Ultima ad Hardestadt - e forse a Pieterszoon stesso - ha
                di fatto scisso il destino della quasi totalit&agrave; del clan Brujah
                da quello della Camarilla, tagliando nel frattempo la testa alla gerarchia
                sulla quale la Camarilla poggiava da secoli.<br />
                Da allora, il clan <b>Banu Haqim</b>, storicamente accettato tra le fila della 
                Camarilla, nonostante la protesta di ci&ograve; che rimase dei Tremere, 
                non ha fatto altro che attutire il colpo, ma le poche risorse che la Camarilla 
                aveva da offrire furono investite per mantenere quel poco che la Seconda 
                Inquisizione, con l'epurazione di Londra e Berlino, aveva eradicato.
            </Typography>

            <Typography paragraph sx={guideStyle}>
                In questo contesto globale si svolgono le - per lo pi&ugrave; - isolate 
                attivit&agrave; del Dominio di Buenos Aires. Nonostante ora citt&agrave;
                come São Paulo, Santiago, Lima, Rio de Janeiro, siano rimaste praticamente
                sguarnite dalla presenza del Sabbat, la presenza di Lupini, della Seconda
                Inquisizione e la scarsit&agrave; di risorse spedite dai Domini del Vecchio
                Continente rendono improponibile l'espansione.<br />
                In questo contesto, sia il Dominio che l'organizzazione Anarchica stanno
                reclutando Fratelli di ritorno dalla disastrosa esperienza di Montevideo,
                e nuovi "coloni" europei, Cainiti in grado di approfittare delle numerose
                posizioni di potere ancora vacanti.
            </Typography>
        </>
    );
}

EnvironmentBaires.getLayout = (page: ReactElement) => (
    <GuideLayout>
        {page}
    </GuideLayout>
)

export default EnvironmentBaires;
