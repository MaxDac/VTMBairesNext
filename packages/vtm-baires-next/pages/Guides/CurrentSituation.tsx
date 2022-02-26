import React, {ReactElement} from "react";
import Link from "next/link";
import Typography from "@mui/material/Typography";
import {guideStyle, titleStyle} from "../../components/guides/GuidesStyles";
import {GuideRoutes} from "../../base/routes";
import GuideLayout from "../../components/layouts/GuideLayout";
import Credits from "./Credits";

const CurrentSituation = (): ReactElement => {
    return (
        <>
            <Typography component="div">
                <h1 style={titleStyle}>
                    Situazione Attuale
                </h1>
            </Typography>

            <Typography paragraph sx={guideStyle}>
                Se siete arrivati fin qui, probabilmente avrete gi&agrave; letto la storia dei Cainiti, delle Sette che
                popolano il Dominio di Buenos Aires e i personaggi (non giocanti) che le rappresentano. La storia di 
                un <b>Play by Chat</b>, per&ograve;, &egrave; in continuo movimento, soprattutto se ambientato in un
                Dominio che non &egrave; ancora perfettamente stabile: i personaggi che ricoprono una carica possono
                cambiare, o addirittura <b>a cambiare potrebbe essere la Setta che ha il predominio sul 
                territorio</b>. Tutto &egrave; possibile, e tutte le possibilit&agrave; verranno date ai giocatori
                per esprimere il potenziale dei propri personaggi.
            </Typography>

            <Typography paragraph sx={guideStyle}>
                Per fare questo, per&ograve;, &egrave; bene aver presente la storia del Dominio, e come inserire il 
                vostro personaggio al suo interno in modo concreto. Questa sezione verr&agrave; aggiornata anche con 
                avvenimenti di grande importanza che avvengono man mano nel gioco.
            </Typography>

            <Typography component="div">
                <h2 style={titleStyle}>
                    Il Dominio Oggi
                </h2>
            </Typography>

            <Typography paragraph sx={guideStyle}>
                La zona metropolitana di Buenos Aires, divisa tra <b>Capital Federal</b>, il centro 
                (locations: <b>Palermo</b>, <b>Centro</b> e <b>La Boca</b>), e la <b>Provincia</b>, la periferia. La
                Camarilla vanta un controllo capillare del territorio nella Capital Federal, e sta invitando i propri
                aderenti ad ampliare la rete di influenza tra gli umani della citt&agrave;. Nella zona periferica, 
                invece, dove l'influenza e il controllo del territorio non &egrave; cos&igrave; forte, il <b>Movimento
                    Anarchico</b>, composto almeno per ora principalmente di reduci del Sabbat che deteneva il potere in
                citt&agrave;, ha una forte presenza, in aperta sfida alla Camarilla.
            </Typography>

            <Typography paragraph sx={guideStyle}>
                Nella zona Sud, si sono ritagliati un Dominio i Cainiti del clan <b>Hecata</b>, col beneplacito della 
                Camarilla, nei quartieri residenziali di Avellaneda, e qualche elemento dei <b>Ministri di Set</b> nella 
                zona industriale di Quilmes. Entrambe le fazioni sono sopportate dalla Camarilla, che non ha attualmente
                i mezzi per poter dettare legge al di fuori della Capital Federal.
            </Typography>

            <Typography component="div">
                <h2 style={titleStyle}>
                    Chi sono i Fratelli
                </h2>
            </Typography>

            <Typography paragraph sx={guideStyle}>
                Il Dominio di Buenos Aires ha acquisito una certa importanza, e la sua fama &egrave; giunta anche nei 
                Domini Europei e Statunitensi: il Dominio &egrave; sguarnito, un'occasione perfetta per Neonati 
                desiderosi di mettersi in mostra sul campo, anche in una situazione di parziale pericolosit&agrave;, 
                proprio per la scarsa presenza della Setta, e per le difficolt&agrave; logistiche dei trasferimenti
                col Vecchio Continente. Di seguito, potrete consultare gli esempi di personaggi vampiri attivi nel 
                Dominio, per poter meglio calibrare la biografia del vostro.
            </Typography>

            <Typography component="div">
                <h3 style={titleStyle}>
                    Il Reduce
                </h3>
            </Typography>

            <Typography paragraph sx={guideStyle}>
                La travagliata storia dell'instaurazione del Dominio a Buenos Aires &egrave; stata preceduta da quella
                di <b>Montevideo</b>. Il Reduce &egrave; un Cainita che gi&agrave; aveva investito nell'ex Dominio di 
                Montevideo, ed &egrave; riuscito a scappare dalla Seconda Inquisizione per partecipare alla costruzione
                della Camarilla a Buenos Aires.
            </Typography>

            <Typography component="div">
                <h3 style={titleStyle}>
                    L'Avventuriero
                </h3>
            </Typography>

            <Typography paragraph sx={guideStyle}>
                La non-vita nel Vecchio Continente per l'Avventuriero era troppo noiosa, e la tentazione di potersi 
                misurare su un Dominio troppo appetibile per non approfittarne. L'Avventuriero ha speso quasi tutti 
                i suoi risparmi per garantirsi un volo tranquillo fino all'Aeroparque di Buenos Aires, per poter 
                dare il suo contributo.
            </Typography>

            <Typography component="div">
                <h3 style={titleStyle}>
                    Il Reietto
                </h3>
            </Typography>

            <Typography paragraph sx={guideStyle}>
                Se l'Avventuriero ha raggiunto Buenos Aires per scelta, il Reietto l'ha fatto per mera necessit&agrave;.
                Il Fratello potrebbe avere un Segreto Oscuro, o addirittura un Nemico (<b>Difetti consigliati</b>) 
                acerrimo ad attenderlo in Europa, e pur di non dover affrontare le conseguenze delle sue azioni in 
                Europa, ha deciso di riparare in un Dominio in difficolt&agrave; per poter essere troppo selettivo nella 
                scelta dei suoi componenti.
            </Typography>

            <Typography component="div">
                <h3 style={titleStyle}>
                    Il Pentito
                </h3>
            </Typography>

            <Typography paragraph sx={guideStyle}>
                Stanco della vita nel Sabbat, o nella Rivolta Anarchica, e alla ricerca di stabilit&agrave; a costo 
                della propria assoluta libert&agrave;, il Pentito &egrave; un Cainita che ha giurato solennemente 
                fedelt&agrave; alla Camarilla, lasciandosi alle spalle la sua vita precedente. Il Fratello in questo
                caso avr&agrave; una vita difficile in Camarilla, in quanto ancora mal visto, ma soprattutto con la 
                fazione che ha abbandonato (Difetto <b>Nemico</b> consigliato). Ricordatevi che il Movimento Anarchico
                &egrave; composto in gran parte da ex Sabbat, quindi entrambe le Sette sono "rappresentate" a Buenos
                Aires, e potrebbero avercela con il Fratello.
            </Typography>

            <Typography component="div">
                <h3 style={titleStyle}>
                    L'Infante
                </h3>
            </Typography>

            <Typography paragraph sx={guideStyle}>
                (Consigliato per chi per la prima volta si approccia a Vampiri: la Masquerade&trade;) Abbracciato 
                solamente di recente da un Fratello, per l'Infante il mondo dei Fratelli &egrave; del tutto nuovo:
                la terminologia, le cariche, la burocrazia e il potere di stampo feudale sembrano cos&igrave; 
                anacronistici, ma sta scoperndo quanto possono essere reali, e <b>letali</b>. L'Infante non &egrave;
                ancora stato ufficialmente presentato in Elysium, quindi non pu&ograve; acquisire Status in fase di
                creazione, ed &egrave; veramente difficile che possa acquisire il background di <b>Generazione</b>,
                anzi, pu&ograve; gi&agrave; ritenersi fortunato a non essere un Sangue Debole.
            </Typography>

            <Typography paragraph sx={guideStyle}>
                <b>Nota</b>: nel caso in cui scegliate come Sire uno dei personaggi non giocanti esposti in
                questa <Link href={GuideRoutes.npcs}>Sezione</Link>, <b>&egrave; indispensabile contattare un narratore
                    prima di mandare il background</b>. Chi non contatter&agrave; un narratore, potr&agrave; vedere
                    il proprio personaggio <b>rifiutato</b>.
            </Typography>

            <Typography component="div">
                <h3 style={titleStyle}>
                    Il Prescelto
                </h3>
            </Typography>

            <Typography paragraph sx={guideStyle}>
                Una variante dell'Infante, il Prescelto &egrave; stato Abbracciato da uno dei cainiti di Buenos Aires,
                ma &egrave; gi&agrave; stato presentato, in quanto ritenuto precocemente pronto per rappresentare la
                Camarilla e per preservare la Masquerade. Ovviamente, questo prototipo di personaggio &egrave; adatto
                a giocatori pi&ugrave; navigati. <b>Vale inoltre la stessa limitazione dell'Infante per la selezione
                    di un personaggio non giocante come Sire.</b>
            </Typography>

            <Typography component="div">
                <h3 style={titleStyle}>
                    Il Sangue Debole
                </h3>
            </Typography>

            <Typography paragraph sx={guideStyle}>
                La non-vita per i <i>Duskborn</i> &egrave; normalmente molto complicata nei Domini della Camarilla e 
                nelle Baronie Anarchiche. Screditati e ostracizzati quando va bene, attivamente cacciati quando va 
                male, sono sempre costretti a barcamenarsi e fuggire per non morire, senza nemmeno l'ausilio delle
                Discipline. Buenos Aires offre loro una posizione migliore rispetto a tanti Domini: la Camarilla e 
                gli Anarchici sono entrambi presenti, ma non troppo, e per loro si aprono opportunit&agrave;, per chi 
                le sa sfruttare, per vendere i propri servigi, o semplicemente farsi sopportare a patto di non aiutare
                l'una o l'altra fazione.
            </Typography>

            <Typography component="div">
                <h2 style={titleStyle}>
                    La Non-Vita a Buenos Aires
                </h2>
            </Typography>

            <Typography paragraph sx={guideStyle}>
                Avete a questo punto deciso come &egrave; arrivato a Buenos Aires il vostro personaggio. Per decidere
                come ingannare la noia della non-vita del vostro personaggio, dovrete sapere quali questioni sono ancora
                aperte per poterle sfruttare, o quali &egrave; possibile aprire. Il genere di cose su cui si basano i
                pettegolezzi in Elysium.
            </Typography>

            <Typography component="div">
                <h3 style={titleStyle}>
                    La Questione Anarchica
                </h3>
            </Typography>

            <Typography paragraph sx={guideStyle}>
                Buenos Aires &egrave; per la Camarilla assieme una speranza, un costoso investimento e un avamposto in
                un Continente dominato da altre forze: per questo motivo, data anche la particolare congiuntura 
                politica che tiene per ora lontana la Seconda Inquisizione dal territorio Argentino, &egrave; 
                necessario fortificare il Dominio, ed <b>espanderlo</b>.
                Il fronte aperto per eccellenza in citt&agrave; &egrave; quello tra la Camarilla e la Fazione Anarchica.
                Da una parte, <i>los conquistadores</i>, gli Europei venuti in citt&agrave; per occuparla e per 
                imprigionarla nelle sue regole, nei suoi protocolli e nella sua burocrazia, dall'altra i traditori 
                della causa del Sabbat, coloro che non hanno voluto intraprendere la folle Crociata dei loro compagni.
                In questa guerra fredda per mancanza di mezzi da una parte e dall'altra, la trincea &egrave; definita 
                al confine tra Capital Federal e Provincia. Come si comporter&agrave; il vostro personaggio? 
                Rimarr&agrave; fedele alla Camarilla, oppure strizzer&agrave; l'occhio alla Fazione Anarchica, nella 
                speranza che prenda il sopravvento? O ancora rimarr&agrave; al centro, usando il sotterfugio per 
                rimanere in equilibrio tra le due Fazioni, in modo da saltare sul carro del vincitore a guerra finita?
            </Typography>

            <Typography component="div">
                <h3 style={titleStyle}>
                    La Politica
                </h3>
            </Typography>

            <Typography paragraph sx={guideStyle}>
                Pur potendo contare il numero di Fratelli sulle dita di due mani, ogni raggruppamento di Cainiti
                &egrave; un teatro dell'eterna Jihad, e nel caso della Camarilla, la situazione politica &egrave; il suo
                palcoscenico. La disponibilit&agrave; di posti da Primogenito, per esempio, potrebbe essere un'ottima 
                occasione per un Neonato per dimostrare il suo valore, per accrescere il suo potere, per consolidare
                la sua posizione. Il vostro personaggio si immischier&agrave; nelle questioni politiche? 
                Assumer&agrave; la responsabilit&agrave; della Primogenitura, influenzando le decisioni del Principe?
                Oppure rimarr&agrave; nelle retrovie, cercando di influenzare a sua volta i Primogeniti? 
                Lavorer&agrave; per l'acquisizione di influenze nel mondo umano, in modo da poter aumentare il suo 
                Status agli occhi del Principe, esigendo anche Favori in cambio di aiuti nel mondo mortale, o si 
                disinteresser&agrave; completamente della politica, investendo le proprie energie in altro?
            </Typography>

            <Typography component="div">
                <h3 style={titleStyle}>
                    La Questione dei Sangue Debole
                </h3>
            </Typography>

            <Typography paragraph sx={guideStyle}>
                A Buenos Aires, la questione dei Sangue Debole non &egrave; ancora stata affrontata, avendo altro di 
                pi&ugrave; impellente a cui pensare. Questo d&agrave; loro un po' di respiro, e un modo per trovare il 
                proprio spazio nel Dominio, per rendersi indispensabili prima di risultare sacrificabili ma i Fratelli
                come si comporteranno? Sfrutteranno la situazione per indebolire un loro avversario politico, oppure
                saranno animati da sinceri sentimenti di umana piet&agrave; e li aiuteranno? E se i Sangue debole
                arriveranno ad accumulare abbastanza potere da arrivare a chiedere una Primogenitura nel Dominio, da
                che parte si schierer&agrave; il vostro personaggio?
            </Typography>

            <Typography paragraph sx={guideStyle}>
                E i Sangue Debole? Cercheranno di aggregarsi assieme ai loro simili, sotto la guida di <b>Rinaldi</b>?
                Oppure si muoveranno in modo indipendente, cercando di nascondersi, o di rendersi utili per i Fratelli?
            </Typography>
        </>
    );
}

CurrentSituation.getLayout = (page: ReactElement) => (
    <GuideLayout>
        {page}
    </GuideLayout>
)

export default CurrentSituation;
