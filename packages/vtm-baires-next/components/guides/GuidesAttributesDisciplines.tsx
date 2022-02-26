import React, {ReactElement} from "react";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import {guideStyle, liStyle, titleStyle} from "./GuidesStyles";
import {GuideRoutes} from "../../base/routes";

const GuidesAttributesDisciplines = (): ReactElement => {
    return (
        <>
            <Typography paragraph sx={guideStyle}>
                Le Discipline costituiscono l'insieme di poteri e di conoscenze che rendono i vampiri potenti esseri soprannaturali.
                Con il nuovo regolamento di Vampiri: la Masquerade&trade;, sono stati introdotti pi&ugrave; poteri per lo stesso livello di
                Disciplina, ma un personaggio potr&agrave; acquistare <b>un solo potere per livello di Disciplina</b>, includendo anche i poteri
                amalgama, per i quali sar&agrave; necessario avere anche il punteggio richiesto nella seconda Disciplina.
            </Typography>

            <Typography paragraph sx={guideStyle}>
                Di seguito proponiamo un veloce riassunto dei poteri acquisibili in creazione.
            </Typography>

            <Typography paragraph>
                <h3 style={titleStyle}>
                    Animalit&agrave;
                </h3>
            </Typography>

            <Typography paragraph sx={guideStyle}>
                I poteri di Animalit&agrave; hanno a che fare con la Bestia interiore, del personaggio e altrui.

                <ul>
                    <li style={liStyle}>
                        <b>Legare il <i>Famulus</i></b> (&#9679;): crea un legame mentale con un animale legato di Sangue.<br />
                        <b>Sistema</b>: tiro di Carisma + Affinit&agrave; animale Diff. 2 per ordini semplici, maggiore per pi&ugrave; complessi.
                    </li>

                    <li style={liStyle}>
                        <b>Percepire la Bestia</b> (&#9679;): il vampiro riesce a percepire la Bestia negli altri, intuendo se si tratta di una Bestia soprannaturale (Cainiti o lupini) o meno.<br />
                        <b>Sistema</b>: tiro contrastato di Fermezza + Animalit&agrave; del Cainita contro Autocontrollo + Sotterfugio del bersaglio.
                    </li>
                    
                    <li style={liStyle}>
                        <b>Sussurri Ferali</b> (&#9679;&#9679;): il vampiro pu&ograve; entrare in contatto con un animale, scambiando informazioni basiche (carenza di prede). Il vampiro pu&ograve;
                        anche tentare di chiamare un gruppo di un preciso animale.<br />
                        <b>Sistema</b>: 1 Prova di Risveglio, poi tiro di Persuasione + Animalit&agrave; (convincere un animale) o Carisma + Animalit&agrave; (richiamare un animale), 
                        Diff. 3 per ordini semplici, 6 per ordini di vita o morte; 2 per richiamare animali presenti nei dintorni, 6 per richiamarne da lontano.
                    </li>

                    <li style={liStyle}>
                        <b>Succulenza animale</b> (&#9679;&#9679;&#9679;): il vampiro pu&ograve; soddisfare la sua Fame con un animale come se fosse sangue umano, riducendo enormemente le controindicazioni.<br />
                        <b>Sistema</b>: il vampiro riesce a soddisfare la sua Fame con animali, indipendentemente dalla Potenza del Sangue. Se inoltre consuma un Famulus, raggiunge automaticamente Fame 1.
                    </li>

                    <li style={liStyle}>
                        <b>Domare la Bestia</b> (&#9679;&#9679;&#9679;): calma la Bestia in un umano, riducendolo ad uno stato semi letargico, o un vampiro, limitandone i poteri e, possibilmente, facendolo uscire dalla Frenesia.<br />
                        <b>Sistema</b>: 1 Prova di Risveglio, tiro contrastato di Carisma + Animalit&agrave; contro Costituzione + Fermezza. Se la vittima &egrave; umana, cadr&agrave; in uno stato letargico. Se &egrave; un vampiro,
                        non potr&agrave; aumentare i propri Attributi col Sangue, e durer&agrave; un numero di turni pari ai successi supplementari + 1. Se il vampiro ottiene un successo critico, la vittima
                        uscir&agrave; dalla Frenesia.
                    </li>

                    <li style={liStyle}>
                        <b>Sciame non-morto</b> (&#9679;&#9679;&#9679; - Amalgama con Oscurazione &#9679;&#9679;): (Nosfeatu) il vampiro riesce ad estendere il proprio controllo ad uno sciame di insetti.<br />
                        <b>Sistema</b>: i poteri che precedentemente potevano prendere di mira solo i vertebrati, adesso si possono usare con sciami di insetti, che possono anche vivere nelle cavit&agrave; interne del vampiro.
                    </li>

                    <li style={liStyle}>
                        <b>Sottomettere lo spirito</b> (&#9679;&#9679;&#9679;&#9679;): il vampiro trasferisce la sua mente in un animale, prendendone completamente il possesso (mentre il corpo del vampiro rimane indifeso, in uno stato simile al Torpore).<br />
                        <b>Sistema</b>: 1 Prova di Risveglio, 0 se la vittima &egrave; il <i>famulus</i>, poi Persuasione + Animalit&agrave; Difficolt&agrave; 4. Se il corpo del vampiro subisce danni, o se l'animale muore, la trance finisce e il vampiro perde 
                        1 punto di Forza di Volont&agrave;.
                    </li>

                    <li style={liStyle}>
                        <b>Dominio Animale</b> (&#9679;&#9679;&#9679;&#9679;&#9679;): il controllo del vampiro sul Regno Animale &egrave; cos&igrave; grande che ora riesce a compandare interi stormi, o branchi di animali, che possono arrivare
                        a lanciarsi in spregio della propria vita per proteggere il Cainita.<br />
                        <b>Sistema</b>: 2 Prove di Risveglio, poi Carisma + Animalit&agrave;, Difficolt&agrave; 3 per ordini semplici, Diff. 5 per ordini che possono costare la vita al branco o allo stormo.
                    </li>

                    <li style={liStyle}>
                        <b>Scacciare la Bestia</b> (&#9679;&#9679;&#9679;&#9679;&#9679;): quando il vampiro sta per perdere il controllo alla Bestia per paura o per rabbia, pu&ograve; scacciare la sua Bestia, inviandola in un mortale o un
                        vampiro nelle vicinanze, e quest'ultimo sperimenter&agrave; la Frenesia al posto del vampiro.<br />
                        <b>Sistema</b>: 1 Prova di Risveglio, quindi tiro contrastato di Prontezza + Animalit&agrave; contro Autocontrollo + Fermezza. Se il tiro fallisce, il vampiro entra in Frenesia automaticamente. Se riesce, la vittima entra in Frenesia al suo posto.<br />
                        Non sar&agrave; possibile trasferire Frenesia di Fame, e successivamente il vampiro potr&agrave; ancora entrare in Frenesia se sottoposto ad altri stimoli.
                    </li>
                </ul>
            </Typography>

            <Typography paragraph>
                <h3 style={titleStyle}>
                    Ascendente
                </h3>
            </Typography>

            <Typography paragraph sx={guideStyle}>
                Aumenta il naturale charme del Cainita.

                <ul>
                    <li style={liStyle}>
                        <b>Soggezione</b> (&#9679;): la presenza del vampiro diventa immediatamente un punto di riferimento, quasi impossibile da ignorare. Non ispira infatuazioni, ma sicuramente riesce a catturare l'attenzione sul vampiro.<br />
                        <b>Sistema</b>: il potere &egrave; gratuito, e grazie a questo il vampiro potr&agrave; aggiungere il suo livello di Ascendente a tiri di Persuasione, Espressivit&agrave;, ed in generale a qualsiasi tiro che 
                        riguardi il Carisma (tranne tiri di intimidazione). Se un altro Cainita si accorge di essere sotto l'influsso di questo potere, potr&agrave; tirare Autocontrollo + Intelligenza contro Persuasione + Ascendente del vampiro: se il tiro ha successo,
                        il Cainita diventa immune dal potere per il resto della scena, mentre se il tiro totalizza un successo critico, il vampiro diventa immune da ogni forma di Ascendente del vampiro per il resto della notte.
                    </li>

                    <li style={liStyle}>
                        <b>Intimidazione</b> (&#9679;): il vampiro, invece di attirare su di s&eacute; l'attenzione, usa il potere per intimidire, minacciare quelli che gli stanno attorno. 
                        I mortali eviteranno immediatamente di dare attenzione al vampiro, e anche i vampiri avranno remore ad interfacciarsi col Cainita.<br />
                        <b>Sistema</b>: il potere &egrave; gratuito, e consente al vampiro di aggiungere il suo punteggio di Ascendente a tutti i tiri di Intimidazione. Inoltre, attaccare il vampiro sar&agrave; possibile solo dopo aver
                        totalizzato un successo su un tiro di Fermezza + Autocontrollo a Difficolt&agrave; 2.
                    </li>

                    <li style={liStyle}>
                        <b>Bacio Persistente</b> (&#9679;&#9679;): il Bacio del vampiro, il suo morso, induce un'estasi molto superiore a quella di un normale Bacio, tanto che i mortali vittime di questo potere ne diventano dipendenti, con conseguente anemia o anche morte.<br />
                        <b>Sistema</b>: il potere &egrave; gratuito, e il vampiro potr&agrave; scegliere di attivare o meno il potere ogni volta che si nutre. Se il potere &egrave; attivo, il Cainita aggiunger&agrave; il livello di Ascendente ad ogni tiro riguardante il Carisma
                        come Attributo. Il mortale potr&agrave; effettuare un tiro sulla Forza di Volont&agrave; con Difficolt&agrave; pari al livello di Ascendente del vampiro ogni settimana per resistere all'effetto del potere.
                        Un successo critico, o tre successi in altrettante settimane, annullano l'effetto del potere.
                    </li>

                    <li style={liStyle}>
                        <b>Sguardo Terribile</b> (&#9679;&#9679;&#9679;): il vampiro riesce a condensare la sua natura soprannaturale in un singolo, terribile sguardo, che blocca i mortali di terrore, costringendoli a fuggire o a rimanere bloccati dalla paura, e nei vampiri arriva a causare R&ouml;tschreck.<br />
                        <b>Sistema</b>: effettuando 1 Prova di Risveglio, il vampiro tira Carisma + Ascendente contro Autocontrollo + Fermezza della vittima.
                        <ul>
                            <li>Un fallimento comporta che i mortali siano incapacitati ad agire contro il vampiro per un turno, se non per autodifesa, mentre un Cainita rimane indifferente al potere.</li>
                            <li>Un successo riesce a far scappare via un mortale in preda al panico, e comporta che un Cainita sia incapacitato ad agire contro il vampiro per un turno, se non per autodifesa.</li>
                            <li>Un successo critico comporta che i mortali rimangano pietrificati dal terrore, in posizione fetale. I personaggi vampiri dovranno effettuare un test
                                sul <Link href={GuideRoutes.homeRules}><a id="frenzy-types">R&ouml;tschreck</a></Link> a Difficolt&agrave; 3: anche se hanno successo sul tiro, subiranno comunque gli effetti del
                                successo come da punto precedente.</li>
                        </ul>
                    </li>

                    <li style={liStyle}>
                        <b>Ammaliamento</b> (&#9679;&#9679;&#9679;): il vampiro instilla meraviglia e infatuazione ai massimi livelli in una singola vittima, che tratter&agrave; il vampiro come il suo idolo.<br />
                        <b>Sistema</b>: effettuando 1 Prova di Risveglio, il vampiro deve catturare l'attenzione della vittima, e avere successo in un tiro conteso tra Carisma + Ascendente contro Autocontrollo + Prontezza della vittima.
                        Il potere ha effetto per un'ora, pi&ograve; un'ulteriore ora per successo supplementare al tiro contrastato. Durante l'effetto del potere, il vampiro potr&agrave; aggiungere il suo livello di Ascendente a
                        tutti i tiri Sociali verso la vittima. Il potere potr&agrave; essere rinnovato alla fine dello stesso, ma un fallimento comporter&agrave; la fine dell'effetto.
                    </li>

                    <li style={liStyle}>
                        <b>Voce Irresistibile</b> (&#9679;&#9679;&#9679;&#9679; - Amalgama: Dominazione &#9679;): il vampiro ora necessita solo della sua voce per comandare la sua vittima, non pi&ugrave; del suo sguardo.<br />
                        <b>Sistema</b>: il potere &egrave; automatico. Ora, il vampiro non dovr&agrave; necessariamente guardare negli occhi la vittima, la sua voce da sola baster&agrave; a perpetrare la Dominazione.
                    </li>

                    <li style={liStyle}>
                        <b>Convocazione</b> (&#9679;&#9679;&#9679;&#9679;): il vampiro pu&ograve; convocare qualsiasi mortale o Cainita su cui abbia precedentemente usato Soggezione, Ammaliamento o Maest&agrave;, oppure che abbia assaggiato una volta il suo sangue.
                        La vittima non metter&agrave; in pericolo la sua vita n&eacute; far&agrave; follie per raggiungere il Cainita, ma si prodigher&agrave; comunque per raggiungerlo. La vittima sapr&agrave; chi lo sta chiamando e la sua posizione.<br />
                        <b>Sistema</b>: effettuando 1 Prova di Risveglio, il Cainita pensa intensamente alla persona da convocare per cinque minuti, quindi tira Persuasione + Ascendente contro Autocontrollo + Intelligenza della vittima.
                        Se il tiro riesce, la vittima sentir&agrave; il bisogno di recarsi dal Cainita. Se il tiro totalizza un successo critico, la vittima metter&agrave; a rischio addirittura la sua vita per raggiungere il chiamante.
                    </li>

                    <li style={liStyle}>
                        <b>Maest&agrave;</b> (&#9679;&#9679;&#9679;&#9679;&#9679;): il vampiro, a questo livello, diventa una vera e proprio immagine angelica o mostruosamente infernale, lasciando mortali e Cainiti attorno senza parole, senza la possibilit&agrave; di agire, se non continuando a guardare il Cainita.<br />
                        <b>Sistema</b>: effettuando 2 Prove di Risveglio, e il potere avr&agrave; effetto. Tutti gli astanti dovranno osservare in adorazione in terrore reverenziale il Cainita, e chi vorr&agrave; opporsi anche solo per un turno
                        all'effetto del potere dovr&agrave; tirare Autocontrollo + Fermezza contro Carisma + Ascendente: un successo garantir&agrave; libert&agrave; d'azione per un turno, mentre un successo critico render&agrave; la vittima
                        immune dal potere per il resto della scena.
                    </li>

                    <li style={liStyle}>
                        <b>Magnetismo da Star</b> (&#9679;&#9679;&#9679;&#9679;&#9679;): gli effetti di Ascendente adesso hanno effetto anche su chi sta vedendo i loro <i>live feeds</i>, o li sente per telefono. Il potere non ha effetto a posteriori.<br />
                        <b>Sistema</b>: i poteri di Ascendente <b>Soggezione</b>, <b>Intimidazione</b> e <b>Ammaliamento</b> adesso funzionanono su registrazioni dal vivo. Per Ammaliamento, il vampiro dovr&agrave; scandire il nome della vittima chiaramente,
                        per gli altri il Cainita apparir&agrave; attraente, ma non in modo soprannaturale.
                    </li>
                </ul>
            </Typography>

            <Typography paragraph>
                <h3 style={titleStyle}>
                    Auspex
                </h3>
            </Typography>

            <Typography paragraph sx={guideStyle}>
                La Disciplina sensoriale per eccellenza, ha a che fare con la Percezione soprannaturale dei vampiri.

                <ul>
                    <li style={liStyle}>
                        <b>Sensi sviluppati</b> (&#9679;): i sensi del vampiro si amplificano a dismisura, dandogli la possibilit&agrave; di vedere nella quasi oscurit&agrave;, percepire ultrasuoni o l'odore del sangue a distanza.<br />
                        <b>Sistema</b>: automatico. Il vampiro aggiunge il suo punteggio di Auspex a tutti i tiri basati sulla percezione. Se esposto a violenti stimoli sensoriali, come esplosioni o flash, deve tirare Prontezza + Fermezza Diff. 3 per non venire
                        confusi; in caso di fallimento, il vampiro sperimenter&agrave; una penalit&agrave; a tutti i tiri basati sulla percezione di -3 per il resto della Scena.
                    </li>

                    <li style={liStyle}>
                        <b>Percepire l'Invisibile</b> (&#9679;): il vampiro riesce ad individuare presenze celate in modo soprannaturale, come vampiri che stanno usando Oscurazione, o spiriti.<br />
                        <b>Sistema</b>: automatico, le creature che si potranno vedere saranno a discrezione del Narratore. Il vampiro con questo potere potr&agrave; anche accorgersi della presenza di vampiri Oscurati. Se sta cercando attivamente presenze
                        il vampiro tirer&agrave; Fermezza + Auspex, se invece sta solo osservando ci&ograve; che lo circonda tirer&agrave; Prontezza + Auspex, contro Prontezza + Oscurazione del vampiro oscurato.
                    </li>

                    <li style={liStyle}>
                        <b>Premonizione</b> (&#9679;&#9679;): questo potere fornisce al vampiro dei lampi di intuizione. Il vampiro riesce a ricordare un dettaglio prima ritenuto insignificante, o a captare i segnali di una imboscata.<br />
                        <b>Sistema</b>: se non scatenata dal Narratore, il personaggio dovr&agrave; concentrarsi su un oggetto, effettuare 1 Prova di Risveglio e tirare Fermezza + Auspex: il numero di successi determiner&agrave; la quantit&agrave;
                        di informazioni che il personaggio intuir&agrave;.
                    </li>

                    <li style={liStyle}>
                        <b>Scrutare l'Anima</b> (&#9679;&#9679;&#9679;): il vampiro riesce a captare l'aura di una persona, individuandone i sentimenti e le caratteristiche.<br />
                        <b>Sistema</b>: il personaggio effettua 1 Prova di Risveglio, quindi tira Intelligenza + Auspex contro Autocontrollo + Sotterfugio della vittima. Il numero di successi supplementari indicher&agrave; quante informazioni il vampiro riuscir&agrave; 
                        ad ottenere dalla vittima. In caso di giocata libera, il personaggio potr&agrave; fare tre domande sullo stato emotivo del bersaglio. Il potere ha effetto anche sulle folle, ma in quel caso sar&agrave; necessaria la presenza
                        del Narratore.
                    </li>

                    <li style={liStyle}>
                        <b>Condivisione dei Sensi</b> (&#9679;&#9679;&#9679;): il vampiro riesce a percepire informazioni sensoriali di qualcuno in linea visuale, oppure, a lunga distanza, di qualcuno che ha ancora qualche goccia del suo sangue.<br />
                        <b>Sistema</b>: effettuare 1 Prova di Risveglio, quindi tirare Fermezza + Auspex a Difficolt&agrave; 3, o pi&ugrave; se il bersaglio &egrave; distante. &Egrave; impossibile accorgersi della condivisione senza usare Percepire l'Invisibile,
                        ma se la vittima si accorge dell'intrusione, dovr&agrave; riuscire in un tiro di Prontezza + Fermezza contro Prontezza + Fermezza del perpetratore: se il tiro riesce, il vampiro non potr&agrave; condividere i sensi per il resto
                        della notte.
                    </li>
                    <li style={liStyle}>
                        <b>Tocco degli Spiriti</b> (&#9679;&#9679;&#9679;&#9679;): il vampiro riesce a percepire residui di emozione o altri indizi impossibili da decifrare con mezzi tradizionali toccando un oggetto inanimato.<br />
                        <b>Sistema</b>: effettuare 1 Prova di Risveglio, quindi tirare Intelligenza + Auspex a Difficolt&agrave; determinata dal Narratore. Questo potere non potr&agrave; essere usato in una giocata libera.
                    </li>
                    <li style={liStyle}>
                        <b>Chiaroveggenza</b> (&#9679;&#9679;&#9679;&#9679;&#9679;): entrando in un leggero stato di <i>trance</i>, il vampiro riesce a percepire qualsiasi cosa fuori dall'ordinario in un quartiere o, se all'esterno o in un'area scarsamente popolata, in un'area di svariati chilometri.<br />
                        <b>Sistema</b>: effettuare 1 Prova di Risveglio, quindi tirare Intelligenza + Auspex ad una Difficolt&agrave; determinata dal Narratore. Questo potere non potr&agrave; essere usato in giocate libere.
                    </li>
                    <li style={liStyle}>
                        <b>Possessione</b> (&#9679;&#9679;&#9679;&#9679;&#9679; - Amalgama con Dominazione &#9679;&#9679;&#9679;): il vampiro acquisisce il controllo completo del corpo di un mortale.<br />
                        <b>Sistema</b>: questo potere ha effetto solo su mortali. Effettuare 2 Prove di Risveglio, quindi tirare Fermezza + Auspex contro Fermezza + Intelligenza della vittima. Se il tiro finisce in pareggio, pu&ograve; 
                        essere ritentato, in quanto la Possessione &egrave; una Disciplina che implica una lotta di volont&agrave; tra il vampiro e la sua vittima. Se il vampiro fallisce totalmente, non potr&agrave; pi&ugrave; 
                        possedere il mortale per il resto della scena.
                    </li>
                    <li style={liStyle}>
                        <b>Telepatia</b> (&#9679;&#9679;&#9679;&#9679;&#9679;): il vampiro riesce a leggere la mente di mortali o vampiri (anche se questi ultimi con un po' pi&ugrave; di fatica). Riesce anche ad impiantare pensieri nella mente della vittima.<br />
                        <b>Sistema</b>: effettuare 1 Prova di Risveglio, quindi tirare Fermezza + Auspex contro Prontezza + Sotterfugio della vittima. Se la vittima &egrave; consenziente, o se il vampiro vuole semplicemente trasmettere un pensiero alla vittima,
                        sia essa mortale o Cainita, non dovr&agrave; effettuare nessun tiro.
                    </li>
                </ul>
            </Typography>

            <Typography paragraph>
                <h3 style={titleStyle}>
                    Stregoneria del Sangue
                </h3>
            </Typography>

            <Typography paragraph sx={guideStyle}>
                Questa Disciplina &egrave; a met&agrave; tra magia e poteri della vitae. Ogni livello acquisito di questa Disciplina garantisce anche un Rituale dello stesso livello.
                Per aggiungere un rituale al personaggio, contattare un Narratore.<br />
                <b>Home Rule</b>: i personaggi di Tremere e Banu Haqim avranno a disposizione differenti "rami" di discipline, con solo alcuni poteri condivisi. Ad esempio, un personaggio
                Tremere non potr&agrave; apprendere il potere <b>Vitae Corrosiva</b>, cos&igrave; come un personaggio Banu Haqim non potr&agrave; apprendere <b>Assaggio di Sangue</b>.
                Entrambi, per&ograve;, potranno apprendere <b>Estinzione di Vitae</b>.

                <ul>
                    <li>
                        <b>Condiviso</b>
                        <ul>
                            <li style={liStyle}>
                                <b>Estinzione di Vitae</b> (&#9679;&#9679;): il vampiro, concentrandosi su un altro vampiro in vista ed eseguendo una serie di gesti, riesce a rendere infruibile la vitae della vittima, innalzando la sua Fame.<br />
                                <b>Sistema</b>: effettuando 1 Prova di Risveglio, il vampiro tira Intelligenza + Stregoneria del Sangue contro Costituzione + Autocontrollo della vittima, mentre esegue delle sottili movenze particolari richieste dal potere ed ha la sua vittima nella sua linea di visuale.
                                La vittima vedr&agrave; alzare la sua Fame di 1 se il tiro ha successo, di 2 se il tiro &egrave; un successo critico. Potr&agrave; per&ograve; riconoscere chi gli ha inflitto questa penalit&agrave; se riesce a vedere il cainita, effettuando un tiro di 
                                Intelligenza + Occulto contro Prontezza + Sotterfugio del Cainita.
                            </li>

                            <li style={liStyle}>
                                <b>Ladro di Sangue</b> (&#9679;&#9679;&#9679;&#9679;): il vampiro, concentrandosi, riesce ad aprire una ferita in un'arteria di un umano, ed a far levitare il sangue in aria, fino alla sua bocca. L'umano non si accorger&agrave; di nulla,
                                come se fosse soggetto al Bacio del vampiro, la sua ferita si richiuder&agrave; una volta finito l'effetto del potere, ma il potere in s&eacute; &egrave; abbastanza evidente, ed &egrave; considerato un grande rischio di infrazione della <b>Masquerade</b>.<br />
                                <b>Sistema</b>: effettuando 1 Prova di Risveglio, il Cainita dovr&agrave; richiamare l'attenzione di un mortale, ed effettuare un tiro di Prontezza + Stregoneria del Sangue contro Prontezza + Occulto della vittima. Se il tiro ha successo, il Cainita non potr&agrave; fare
                                nulla durante l'operazione, ma si nutrir&agrave; al doppio della velocit&agrave; normale con un successo, al triplo con un successo critico.
                            </li>
                        </ul>
                    </li>
                    <li>
                        <b>Tremere</b>
                        <ul>
                            <li style={liStyle}>
                                <b>Assaggio del Sangue</b> (&#9679;): tramite un sorso di sangue, il Vampiro riesce a discernere i tratti basici dell'entit&agrave; a cui appartiene.<br />
                                <b>Sistema</b>: il potere &egrave; gratuito, ma richiede un tiro di attivazione di Fermezza + Stregoneria del Sangue a Difficolt&agrave; 3. Con un successo, il vampiro riesce a capire se il sangue assaggiato appartiene ad un mortale (nel qual caso capir&agrave;
                                anche la Risonanza del Sangue), o di un cainita, o di un'altra creatura soprannaturale. Un successo critico dir&agrave; al vampiro se il Cainita la cui Vitae sta assaggiando ha commesso Diablerie, e se ha una generazione maggiore o minore della sua,
                                determinando la generazione esatta se entro 1 livello dalla sua. Altre informazioni apprese saranno a discrezione del Narratore.                                    
                            </li>

                            <li style={liStyle}>
                                <b>Potenza nel Sangue</b> (&#9679;&#9679;&#9679;): il vampiro, concentrandosi sul proprio sangue, riesce ad aumentarne la Potenza.<br />
                                <b>Sistema</b>: effettuando 1 Prova di Risveglio, il vampiro tira Fermezza + Stregoneria del Sangue a Difficolt&agrave; 2 pi&ugrave; al sua attale Potenza di Sangue. Con un successo, il vampiro aumenta la propria Potenza del Sangue di 1, mentre un successo critico garantisce
                                l'aumento di 2 livelli di Potenza del Sangue. Il potere dura una scena, e il Cainita pu&ograve; aumentare la Potenza del Sangue ignorando il limite generazionale, usando questo potere.
                            </li>

                            <li style={liStyle}>
                                <b>Calderone di Sangue</b> (&#9679;&#9679;&#9679;&#9679;&#9679;): attraverso questo terribile potere, il vampiro fa bollire letteralmente il sangue nelle vene della vittima, mortale o Cainita, provocando la morte quasi certa del mortale, e danni Aggravati per i Cainiti.<br />
                                <b>Sistema</b>: il vampiro dovr&agrave; toccare la vittima, tirando Destrezza + Atletica se in combattimento. Se riesce a toccarla, effettuando 1 Prova di Risveglio, tirer&agrave; in seguito Fermezza + Stregoneria del Sangue contro Autocontrollo + Occulto (o Robustezza se pi&ugrave; alta).
                                Ogni successo supplementare ottenuto dal Cainita attaccante si tradurr&agrave; in un danno Aggravato per la vittima. Se la vittima &egrave; un umano, morir&agrave; immediatamente gridando di dolore, e il Cainita aggiunger&agrave; automaticamente una Macchia all'Umanit&agrave;.
                                Se invece la vittima &egrave; Cainita, dovr&agrave; aggiungere anche un livello di Fame per ogni danno Aggravato subito.
                            </li>
                        </ul>
                    </li>
                    <li>
                        <b>Banu Haqim</b>
                        <ul>
                            <li style={liStyle}>
                                <b>Vitae Corrosiva</b> (&#9679;): il vampiro riesce a convertire la sua vitae in una sostanza altamente corrosiva.<br />
                                <b>Sistema</b>: la Vitae del vampiro diventa corrosiva. La Vitae deve scorrere da una ferita (molto spesso auto-inflitta), e la quantit&agrave; di Vitae equivalente a 1 Prova di Risveglio pu&ograve; sciogliere approssimativamente 35 cm di materiale,
                                a meno che non sia una lega super resistente (particolari acciai, titanio), nel qual caso riuscir&agrave; solo a scalfire la superficie.
                            </li>

                            <li style={liStyle}>
                                <b>Tocco dello Scorpione</b> (&#9679;&#9679;&#9679;): la vitae del vampiro diventa un icore velenoso che incapacita mortali e Cainiti, e pu&ograve; essere sputato, o impresso su lame ed agire per contatto.
                                A parte alcune tecniche praticate da alcune Societ&agrave; Segrete umane, e Robustezza, c'&egrave; poco da fare contro questo potere.<br />
                                <b>Sistema</b>: ogni oncia di Vitae trasformata in icore velenoso richiede 1 Prova di Risveglio, dopo essersi concentrato per un turno. Ogni Prova di Risveglio di Vitae richieder&agrave; un turno per essere trasformata. 
                                La Vitae trasformata dovr&agrave; uscire da una ferita del Cainita. Ogni Prova di Risveglio di Vitae potr&agrave; essere disposto su una lama, o conservato per poter essere sputato. Sputare la quantit&agrave; di sangue
                                richieder&agrave; un tiro di attacco di Destrezza + Atletica, che dovr&agrave; essere schivato come un qualsiasi attacco con arma a distanza. Se usato con una lama, invece, si seguiranno le normali regole del
                                combattimento in mischia. Il sangue potr&agrave; essere anche ingerito da chi sta tentando di diablerizzare l'utilizzatore, ma non potr&agrave; essere usato durante il Morso, non potr&agrave; essere disposto su
                                frecce o pallottole, o iniettato tramite siringhe, o diluito in acqua.<br />
                                Quando il Cainita riesce a far entrare in contatto l'icore velenoso con la vittima, dovr&agrave; tirare Forza + Stregoneria del Sangue contro Costituzione + Occulto (chi possiede Robustezza con un grado maggiore di Occulto, 
                                potr&agrave; usarla al suo posto): la vittima subir&agrave; un danno per successo supplementare del Cainita sul tiro. I mortali subiranno danni Aggravati, e anche ne subiranno solo uno, cadranno a terra privi di sensi.
                                I Cainiti invece subiranno danni Superficiali senza poterli dimezzare.<br />
                                Il veleno conserver&agrave; la sua potenza per un turno.
                            </li>

                            <li style={liStyle}>
                                <b>Carezza di Baal</b> (&#9679;&#9679;&#9679;&#9679;&#9679;): il vampiro trasmuta la sua Vitae in un veleno pericolosissimo sia per i Cainiti che per i mortali.<br />
                                <b>Sistema</b>: questo potere segue le stesse regole del <b>Tocco dello Scorpione</b>, ma la potenza del veleno aumenta, e riesce a fare danni Aggravati sia ad umani che a Cainiti. Se un umano subisce anche solo un danno
                                Aggravato dal contatto col veleno, morir&agrave; sul colpo. Se la vittima &egrave; un Cainita, e subisce danni Aggravati dal veleno, l'utilizzatore potr&agrave; tirare nuovamente Forza + Stregoneria del Sangue contro Costituzione
                                + Occulto o Robustezza: se il tiro ha successo, la vittima entrer&agrave; automaticamente in torpore la prossima volta che si riposer&agrave; per il giorno.
                            </li>
                        </ul>
                    </li>
                </ul>
            </Typography>

            <Typography paragraph>
                <h3 style={titleStyle}>
                    Dominazione
                </h3>
            </Typography>

            <Typography paragraph sx={guideStyle}>
                Questa Disciplina usa il Sangue per imporre comandi e suggestioni nella mente delle vittime. Si applica solo a vampiri della stessa generazione in su, o ai mortali. <b>Tutti</b> i poteri necessitano che il vampiro catturi lo sguardo della vittima.
                Se la vittima ha una generazione <b>strettamente superiore</b> rispetto a quella del vampiro (quindi, questa regola <b>non vale</b> per uguale generazione), gli effetti della Dominazione potranno essere ignoranti spendendo un punto di Forza di Volont&agrave;.
                            
                <ul>
                    <li style={liStyle}>
                        <b>Confondere la Memoria</b> (&#9679;): pronunciando le parole "<b>Dimentica!</b>", (<i>Olvida!</i> in spagnolo) il vampiro riesce a far dimenticare gli ultimi cinque minuti alla vittima. La vittima non ricorder&agrave; nulla, e al massimo si accorger&agrave; del fatto che mancano cinque minuti dalla sua memoria.<br />
                        <b>Sistema</b>: non richiede Prova di Risveglio. Non richiede nemmeno un tiro se la vittima &egrave; un mortale impreparato; se invece la vittima sta opponendo attivamente resistenza, o se &egrave; un Cainita, il dominatore dovr&agrave; tirare Carisma + Dominazione contro Prontezza + Fermezza della vittima.
                    </li>

                    <li style={liStyle}>
                        <b>Costringere</b> (&#9679;): il vampiro impone alla vittima l'esecuzione di un semplice comando, come "<b>Corri!</b>" o "<b>Fermo!</b>". Il comando deve essere chiaro e verr&agrave; eseguito alla lettera.<br />
                        <b>Sistema</b>: non richiede Prova di Risveglio. Non richiede nemmeno un tiro se la vittima &egrave; un mortale impreparato; se invece la vittima sta opponendo attivamente resistenza, se &egrave; stato precedentemente Dominato nella scena o se &egrave; un Cainita, 
                        il dominatore dovr&agrave; tirare Carisma + Dominazione contro Prontezza + Fermezza della vittima. Il potere non ha effetto se il comando mette in pericolo la vita della vittima.
                    </li>

                    <li style={liStyle}>
                        <b>Mesmerismo</b> (&#9679;&#9679;): il vampiro riesce ad imprimere comandi complessi, fintanto che la vittima continua ad osservare il vampiro negli occhi. Gli ordini non devono contenere ordini condizionali (tipo "<b>Dai i documenti solo se vedi Tizio"</b>), altrimenti falliranno.
                        L'ordine verr&agrave; eseguito immediatamente, e non potr&agrave; contenere condizioni, ovvero una condizione per la quale il comando varr&agrave; in futuro.<br />
                        <b>Sistema</b>: il potere costa 1 Prova di Risveglio. Non richiede nemmeno un tiro se la vittima &egrave; un mortale impreparato; se invece la vittima sta opponendo attivamente resistenza, se &egrave; stato precedentemente Dominato nella scena o se &egrave; un Cainita, 
                        il dominatore dovr&agrave; tirare Carisma + Dominazione contro Prontezza + Fermezza della vittima. Il potere non ha effetto se il comando mette in pericolo la vita della vittima.
                    </li>

                    <li style={liStyle}>
                        <b>Demenza (Malkavian)</b> (&#9679;&#9679; - Amalgama con Oscurazione &#9679;&#9679;): nel corso di una conversazione normale, il vampiro riesce ad ispirare tra le righe delle sue frasi la sua influenza, agitando la vittima e riuscendo a far emergere i suoi demoni interiori, facendogli perdere temporaneamente la ragione.<br />
                        <b>Sistema</b>: effettuando 1 Prova di Risveglio, il vampiro deve vincere un confronto sociale contro la vittima, tirando Persuasione + Dominazione contro Autocontrollo + Intelligenza. Ogni successo sottrae un punto di Forza di Volont&agrave;.
                        Quando tutti i punti di Forza di Volont&agrave; della vittima saranno stati sottratti, se la vittima &egrave; un umano, subir&agrave; un esaurimento nervoso, se &egrave; un vampiro sar&agrave; soggetto ad una Compulsione.
                    </li>

                    <li style={liStyle}>
                        <b>La Mente Immemore</b> (&#9679;&#9679;&#9679;): il vampiro pu&ograve; riscrivere interi brani della memoria della sua vittima, descrivendo nei minimi particolari quello che la mente ricorder&agrave;.<br />
                        <b>Sistema</b>: effettuando 1 Prova di Risveglio, il vampiro potr&agrave; tirare tiri ripetuti di Persuasione + Dominazione contro Intelligenza + Fermezza della vittima. Ogni successo supplementare consentir&agrave;
                        al vampiro di rimuovere o aggiungere un ricordo. Un successo critico creera un imprinting perfetto, simulando un'intera memoria, o sostituendone una. (<b>Home Rule</b>) Un fallimento totale invece annuller&agrave; 
                        tutti i progressi fatti, e la vittima non potr&agrave; essere pi&ugrave; dominata per il resto della scena.
                    </li>

                    <li style={liStyle}>
                        <b>Ordine Sommerso</b> (&#9679;&#9679;&#9679;): per acquisire questo potere, il personaggio dovr&agrave; possedere <b>Mesmerismo</b> come precondizione. Il vampiro riesce stavolta ad usare lo stesso potere di <b>Mesmerismo</b>, ma la suggestione, l'ordine rimarr&agrave; dormiente, 
                        finch&eacute; non si verificher&agrave; una condizione specifica dettata dal Cainita. La direttiva pu&ograve; rimanere sommersa per anni, prima di attivarsi.<br />
                        <b>Sistema</b>: come Mesmerismo, ma in questo caso il tiro dovr&agrave; essere effettuato dal Narratore e non dovr&agrave; essere conosciuto dal dominatore, poich&eacute; il vampiro non potr&agrave; sapere se l'ordine 
                        &egrave; stato impiantato o meno.
                    </li>
                    
                    <li style={liStyle}>
                        <b>Razionalizzazione</b> (&#9679;&#9679;&#9679;&#9679;): la vittima dei poteri di Dominazione &egrave; ora convinta di aver agito secondo il proprio libero arbitrio. L'uso prolungato di questa Disciplina pu&ograve; provocare seri traumi.<br />
                        <b>Sistema</b>: nessun costo aggiuntivo rispetto agli altri poteri. La vittima, per&ograve;, potr&agrave; effettuare un tiro di Prontezza + Allerta Difficolt&agrave; 5, per questionare il proprio giudizio.
                    </li>

                    <li style={liStyle}>
                        <b>Persuasione di Massa</b> (&#9679;&#9679;&#9679;&#9679;&#9679;): il Cainita pu&ograve; ora usare i poteri di dominazione su un'intera folla di mortali, o anche su un gruppo di altri Cainiti.<br />
                        <b>Sistema</b>: 1 Prova di Risveglio aggiuntivo rispetto al potere che si intende utilizzare sulla folla. Tutti quanti presenti nella folla dovranno osservare negli occhi il vampiro.
                    </li>

                    <li style={liStyle}>
                        <b>Decreto Finale</b> (&#9679;&#9679;&#9679;&#9679;&#9679;): i comandi dati con Dominazione adesso vengono eseguiti anche se la vittima percepisce chiaramente che questi gli faranno attivamente danno, o la porteranno alla morte (o alla Morte Ultima, nel caso dei vampiri).<br />
                        <b>Sistema</b>: nessun Prova di Risveglio supplementare, ma a discrezione del Narratore le conseguenze sull'Umanit&agrave; del personaggio possono essere gravi. Il tiro dovr&agrave; essere resistito per forza, non potr&agrave; avere
                        automaticamente successo nemmeno sui mortali.
                    </li>
                </ul>
            </Typography>

            <Typography paragraph>
                <h3 style={titleStyle}>
                    Oblivion
                </h3>
            </Typography>

            <Typography paragraph sx={guideStyle}>
                Questa Disciplina sacrilega prende il suo potere in parte dalla vitae del Cainita, ed in parte dalle energie oltre il Velo che separa il regno dei vivi da quello dei morti.
                Lasombra e Hecata sembrano sfruttare le stesse tecniche per <b>connettersi</b> con i loro poteri, ma i luoghi che raggiungono sono diametralmente opposti, e cos&igrave; anche le conoscenze che hanno accumulato.<br />
                Data la natura particolarmente sacrilega di questa Disciplina, praticarla &egrave; un rischio per l'Umanit&agrave; dell'evocatore.

                <ul>
                    <li>
                        <b>Lasombra</b>
                        <ul>
                            <li style={liStyle}>
                                <b>Mantello d'Ombra</b> (&#9679;): applicando il loro potere alle ombre ambientali, il Cainita riesce ad apparire pi&ugrave; sinistro ed inquietante.<br />
                                <b>Sistema</b>: il potere &egrave; gratuito, e il vampiro ottiene un bonus di 2 dadi a tutti i tiri sulla Furtivit&agrave; e 2 agli ammontare di Intimidazione verso i mortali.
                            </li>

                            <li style={liStyle}>
                                <b>Veduta dell'Oblivion</b> (&#9679;): il vampiro chiude gli occhi, ed al riaprirli, le sue iridi sono completamente nere. Ora riesce a vedere nell'ombra pi&ugrave; nera, facendo fatica a vedere invece alla luce, come se la vista si fosse invertita.
                                Riescono anche a percepire Presenze oltre il Velo che non stiano attivamente cercando di nascondersi dal Cainita.<br />
                                <b>Sistema</b>: il potere &egrave; gratuito. Il vampiro diventa capace di vedere oltre il Sudario edifici, e le entit&agrave; che li popolano, Spiriti e Spettri. 
                                Queste entit&agrave; non possono acorgersi automaticamente del fatto che il vampiro li sta osservando, ma se se ne accorgono, potrebbero reagire anche violentemente. 
                                Questo potere non garantisce di poter toccare queste entit&agrave;.
                            </li>
                            
                            <li style={liStyle}>
                                <b>Proiettare l'Ombra</b> (&#9679;&#9679;): i poteri di Oblivion spesso falliscono per via della mancanza di ombre. Questo potere consente all'utilizzatore di far sgorgare l'ombra interna del vampiro. Questa ombra seguir&agrave; le movenze del vampiro, proiettandone la figura,
                                anche se a volte potr&agrave; assumere contorni inquietanti, riflettendo la propensione e l'umore del vampiro che le ha evocate.<br />
                                <b>Sistema</b>: effettuando 1 Prova di Risveglio, il Cainita riesce a proiettare un'Ombra soprannaturale dalla quale possono essere evocate altre Ombre dell'Oblivion. L'Ombra potrebbe vivere di vita propria a discrezione del Narratore.
                                Nei confronti sociali, l'Ombra garantisce 1 danno alla Forza di Volont&agrave; in pi&ugrave;.
                            </li>

                            <li style={liStyle}>
                                <b>Braccia di Ahriman</b> (&#9679;&#9679; - Amalgama: Potenza &#9679;&#9679;): il vampiro riesce ad evocare lingue d'ombra che si dipanano da zone di oscurit&agrave; ambientale, scorrendo sulle superfici e percorrendo la vittima, tentando di stritolarla.
                                Il vampiro non potr&agrave; fare nulla finch&eacute; controlla le propaggini di Abisso.<br />
                                <b>Sistema</b>: evocare le Braccia di Ahriman necessita di 1 Prova di Risveglio. Il braccio, come tutte le Ombre evocate con Oblivion, necessiter&agrave; di una zona d'ombra, o del 
                                potere <b>Proiettare l'Ombra</b>. Durante l'evocazione, e per tutta la durata del potere, il vampiro non potr&agrave; fare altro che controllare le braccia. Il braccio avr&agrave; 
                                una lunghezza di due volte il punteggio di Oblivion in metri, e un ammontare di dadi per attaccare (percuotendo o stritolando) e difendersi pari a Prontezza + Oblivion del Lasombra, 
                                ma potr&agrave; muoversi solamente lungo le superfici, non nell'aria. Il braccio potr&agrave; dividersi in pi&ugrave; tentacoli e dedicarsi a pi&ugrave; avversari, seguendo le regole 
                                per avversari multipli descritte nelle <Link href={GuideRoutes.mechanics}><a id="multiple-foes">meccaniche di gioco</a></Link>.<br />
                                I tentacoli infliggono danni magici, aggiungeranno la met&agrave; arrotondata per eccesso del punteggio di Potenza del vampiro, e sottrarsi al loro giogo sar&agrave; uno sforzo di
                                volont&agrave;, non fisico: la vittima dovr&agrave; avere successo in un tiro di Fermezza + Autocontrollo contro Prontezza + Oblivion dell'evocatore per poter passare oltre il 
                                tentacolo senza subire danni, anche se il tentacolo potr&agrave; attaccare nuovamente.<br />
                                L'unico modo per infliggere danni ai tentacoli &egrave; con luce solare o una luce molto forte, proiettata da lampade specializzate, ed anche in questo caso l'evocatore potr&agrave;
                                tentare un tiro di Prontezza + Oblivion per poter schivare gli attacchi, oppure tentare di "sopportare" la luce e continuare l'attacco (in quest'ultimo caso, subendo un danno).
                                I tentacoli avranno 3 livelli di Salute.<br />
                                (<b>Home Rule</b>): nel caso in cui l'evocatore perda il controllo del tentacolo evocato, a discrezione del Narratore quest'ultimo potr&agrave; svanire, tornando nel luogo 
                                sacrilego dal quale &egrave; stato evocato, oppure liberarsi da qualsiasi costrizione e attaccare qualsiasi cosa gli capiti a tiro, evocatore compreso.
                            </li>

                            <li style={liStyle}>
                                <b>Prospettiva d'Ombra</b> (&#9679;&#9679;&#9679;): il vampiro riesce a proiettare i suoi sensi in una zona d'ombra in linea di vista, sentendo e vedendo come se fosse 
                                nascosto proprio in quella zona d'ombra.<br />
                                <b>Sistema</b>: effettuando 1 Prova di Risveglio, i sensi del vampiro sono proiettati sulla zona d'ombra, e sar&agrave; capace di percepire tutto come se fosse presente.
                                L'unico modo per poter percepire la presenza del vampiro nella zona d'ombra sar&agrave; tramite mezzi soprannaturali, come <b>Percepire l'Invisibile</b>.
                            </li>
                            <li style={liStyle}>
                                <b>Tocco dell'Oblivion</b> (&#9679;&#9679;&#9679;): il vampiro, riuscendo a toccare e fare presa sulla vittima, trasferisce parte dell'Oblivion al suo interno nella vittima, 
                                di fatto "invecchiando" la parte che tocca, infliggendo danni Aggravati alla parte coinvolta.<br />
                                <b>Sistema</b>: il vampiro effettuer&agrave; 1 Prova di Risveglio, quindi dovr&agrave; toccare la vittima, con un tiro di Forza + Rissa se la vittima si ribella. Una volta avuto il contatto, 
                                il potere si attiva automaticamente, "trasmettendo" la corruzione dell'ombra nella materia viva dell'avversario, infliggendo automaticamente 2 danni Aggravati, ed infliggendo 
                                una ferita o una frattura immediata: se il tocco avviene a braccia o gambe, potrebbe essere una frattura che lasci la vittima zoppicante o senza l'uso del braccio, se avviene
                                sugli occhi la vittima sar&agrave; accecata, e cos&igrave; via. Una vittima potrebbe essere resa temporaneamente sorda, cieca o muta. Guarire questo tipo di ferite per un mortale
                                richiede molto tempo e riabilitazione, un vampiro invece pu&ograve; guarire la ferita come dei normali danni Aggravati.
                            </li>
                            <li style={liStyle}>
                                <b>Sudario dello Stige</b> (&#9679;&#9679;&#9679;&#9679;): ombre vengono vomitate da una zona d'ombra vicino al comando del Cainita, che ingloba una porzione di spazio attorno 
                                alla zona d'ombra che avvolge qualsiasi cosa attorno, scorrendo attraverso le superfici e chi ha la sfortuna di trovarsi vicino. Tutti quelli travolti dall'Ombra, tranne l'invocatore, 
                                soffrono di soffocamento e non riusciranno a vedere nulla, se non con mezzi soprannaturali.<br />
                                <b>Sistema</b>: effettuando 1 Prova di Risveglio, il Lasombra si concentra per un turno, e l'Ombra evocata da ogni zona oscura dell'ambiente prorompe nella realt&agrave; per un raggio di
                                due volte il punteggio di Oblivion in metri, coprendo tutto con un'oscurit&agrave; come in una notte senza luna n&eacute; stelle. Chiunque si trovi all'interno della zona d'ombra, 
                                a meno che non abbia una Disciplina che gli consenta di vedere anche nella Tenebra soprannaturale (come <b>Occhio della Bestia</b> o <b>Sensi Sviluppati</b>), subisce una penalit&agrave;
                                di 3 dadi a tutti gli ammontare, e i mortali subiscono 1 danno Superficiale per soffocamento.
                            </li>
                            <li style={liStyle}>
                                <b>Passo d'Ombra</b> (&#9679;&#9679;&#9679;&#9679;&#9679;): il Cainita entra in una zona d'ombra, e riesce ad emergere in un'altra zona d'ombra poco distante. Questo potere all'apparenza 
                                innocuo, nasconde una terribile verit&agrave;, palesata dalle vittime di chi, dal vampiro, viene costretto all'interno di una di queste zone d'ombra, anche solo per un breve periodo: 
                                che navighino il Labirinto solo superficialmente o se vi finiscano dentro, ci&ograve; che emerge non &egrave; pi&ugrave; lo stesso, e rischia di subire "Macchie" all'umanit&agrave;.<br />
                                <b>Sistema</b>: effettuando 1 Prova di Risveglio, il vampiro pu&ograve; entrare in una zona d'ombra sufficientemente grande per contenerlo, ed uscire in un'altra. Il vampiro pu&ograve; 
                                portare con s&eacute; un'altra persona: se questa non vorr&agrave; seguire il vampiro, questi dovr&agrave; costringerla con un tiro di Forza + Rissa.<br />
                                L'attraversamento avviene in una zona non bene identificata, almeno al di fuori dei mistici Lasombra, chiamata Labirinto: il rischio, quando si usa questo potere, &egrave; quello di 
                                venire corrotti dal contatto con questo luogo: a discrezione del Narratore, il personaggio (o i personaggi, se il vampiro ne costringe un altro a seguirlo) subir&agrave; delle
                                Macchie all'umanit&agrave;.
                            </li>
                            <li style={liStyle}>
                                <b>Avatar di Tenebra</b> (&#9679;&#9679;&#9679;&#9679;&#9679;): tramite questo potere, il vampiro riesce a tramutarsi in tenebra viva, dalle stesse caratteristiche del Sudario dello Stige. 
                                Pu&ograve; soffocare vittime, oppure scorrere sulle pareti a velocit&agrave; d'uomo e passare attraverso le pi&ugrave; microscopiche fessure.<br />
                                <b>Sistema</b>: effettuando 2 Prove di Risveglio, il vampiro impiega 1 turno per convertirsi in una sostanza d'ombra simile a quella prodotta dal <b>Sudario dello Stige</b>, e sortisce
                                gli stessi effetti. Il vampiro potr&agrave; passare per qualsiasi superficie, tranne quelle chiuse ermeticamente, e potr&agrave; anche nutrirsi dei mortali all'interno della sua
                                essenza anche senza affondare le zanne. A discrezione del Narratore, potr&agrave; usare Discipline di tipo mentale.
                            </li>
                        </ul>
                    </li>
                    {/* <li>
                        <b>Hecata</b>
                        <ul>
                            <li style={liStyle}><b>Cenere alla Cenere</b> (&#9679;): infondendo la propria vitae all'interno di un cadavere non animato, il cadavere si disintegra completamente in tre turni.</li>
                            <li style={liStyle}><b>Il Fetter Vincolante</b> (&#9679;): il vampiro riesce a percepire, concentrandosi, ci&ograve; che &egrave; importante per un fantasma, riuscendo a percepire i suoi dintorni proprio come li percepisce un fantasma. Tale oggetto &egrave; il Fetter,
                                l'oggetto in cui i Fantasmi "riposano".</li>
                            <li style={liStyle}><b>Precognizione Fatale</b> (&#9679;&#9679; - Amalgama: Auspex &#9679;&#9679;): il vampiro riesce a percepire il momento della morte di un mortale su cui posa lo sugardo, dopo essersi concentrato, e i suoi occhi diventati completamente neri.</li>
                            <li style={liStyle}><b>Dove il Velo si Dissolve</b> (&#9679;&#9679;): il vampiro riesce a percepire dove il Velo che separa il mondo dei vivi da quello di morti &egrave; pi&ugrave; spesso o quasi inesistente, nel primo caso se il luogo &egrave; consacrato o non sono avvenute
                                morti, nel secondo se un evento terribile che &egrave; costato molte vite ha avuto luogo, o se un Necromante ha officiato un rituale per diminuire artificialmente il Velo.</li>
                            <li style={liStyle}><b>Aura di Decadimento</b> (&#9679;&#9679;&#9679;): l'aura del vampiro cos&igrave; percettivo nei confronti del Sudario, o Velo, accelera attorno a lui il decadimento di ci&ograve; che &egrave; vivo, spargendo malattie e facendo marcire il cibo. Con questo potere
                                il vampiro pu&ograve; scientemente accelerare questo processo, che per&ograve; non accelera il decadimento dei cadaveri.</li>
                            <li style={liStyle}><b>Festa di Passioni</b> (&#9679;&#9679;&#9679;): il vampiro riesce a trarre nutrimento dalle emozioni che affliggono uno spettro o uno spirito, riuscendo a non-vivere pi&ugrave; tempo senza la necessit&agrave; di nutrirsi di sangue.</li>
                            <li style={liStyle}><b>Piaga Necrotica</b> (&#9679;&#9679;&#9679;&#9679;): il vampiro, sfruttando la sua vicinanza al Sudario, instilla una malattia nei mortali, malattia che pu&ograve; rischiare di essere contagiosa. Pi&ugrave; il vampiro &egrave; versato in medicina, pi&ugrave; potr&agrave;
                                imprimere una particolare caratteristica o simulare una malattia esistente quando usa questo potere.</li>
                            <li style={liStyle}><b>Soddisfare il Fato</b> (&#9679;&#9679;&#9679;&#9679;&#9679;): il Cainita sovverte una condizione artificiale che ha a sua volta sovvertito il fato, facendo riapparire una malattia in una persona guarita, rompendo un osso che si era riformato, o imprimendo gli anni guadagnati
                                da un ghoul asservito ad un vampiro che, grazie alla vitae del Sire, non ha sofferto il passaggio del tempo.</li>
                            <li style={liStyle}><b>Appassire lo spirito</b> (&#9679;&#9679;&#9679;&#9679;&#9679;): questo terribile potere offre al vampiro la capacit&agrave; di disintegrare lo spirito di un mortale o di un Cainita, rischiando anche che non si ripresenti come spirito o spettro dopo la morte, lasciando sul posto
                                un guscio vuoto. Questo potere ha delle severe ripercussioni sull'Umanit&agrave; del vampiro, e rischia di collezionare "Macchie" all'umanit&agrave;.</li>
                        </ul>
                    </li> */}
                </ul>
            </Typography>

            <Typography paragraph>
                <h3 style={titleStyle}>
                    Oscurazione
                </h3>
            </Typography>

            <Typography paragraph sx={guideStyle}>
                Tramite questa Disciplina, il vampiro riesce a rendersi invisibile agli occhi dei mortali e della maggior parte dei Cainiti. Il potere si basa su un'illusione, sulla manipolazione delle menti, non su un effetto fisico,
                quindi per attivarlo il vampiro non deve essere visto da nessuno, altrimenti il potere non funzioner&agrave; su chiunque lo abbia visto mentre l'attivava.
                Per tenere la manipolazione mentale indotta da Oscurazione attiva, il vampiro non potr&agrave; fare eccessivo rumore, o attirare su di s&eacute; l'attenzione, n&eacute; ostacolare attivamente il cammino di una persona, ad esempio attraverso una porta, anche se
                i sussurri non rompono l'illusione. Se il vampiro rischia di essere percepito, la vittima di Oscurazione potr&agrave; tirare Prontezza + Allerta contro Prontezza + Furtivit&agrave; del vampiro.
                Il potere di Auspex <b>Percepire l'Invisibile</b> potr&agrave; inoltre smascherare un vampiro Oscurato. Il potere non ha ovviamente effetto su macchinari elettronici automatici.
                In caso di imboscate, inoltre, la vittima avr&agrave; una frazione di secondo di tempo per accorgersi dell'attacco, e a discrezione del Narratore potr&agrave; reagire.<br />
                <b>Nota V5</b>: contrariamente al regolamento delle precedenti versioni, il livello di Auspex e Oscurazione dei vampiri non varr&agrave; pi&ugrave; nella scoperta di vampiri oscurati. Un vampiro con Oscurazione 5 potr&agrave; essere visto da un vampiro 
                con Auspex 1.

                <ul>
                    <li style={liStyle}>
                        <b>Cappa di Ombre</b> (&#9679;): il vampiro diventa invisibile se rimane perfettamente fermo, non emette nessun suono, e rimane dietro una sorta di copertura.<br />
                        <b>Sistema</b>: segue le regole generali di Oscurazione, e non costa nulla. Il potere rimarr&agrave; attivo finch&eacute; il vampiro non si muover&agrave;.
                    </li>

                    <li style={liStyle}>
                        <b>Silenzio di Morte (Banu Haqim)</b> (&#9679;): il vampiro non emette suoni, o meglio, riesce ad annullare qualsiasi suono che emette dai sensi di chi gli &egrave; vicino. Microfoni ed altri apparecchi elettronici continuano a captare i suoni che emette.<br />
                        <b>Sistema</b>: il potere &egrave; gratuito, e cancella qualsiasi suono emesso dal vampiro, in modo tale che solo i possessori di <b>Percepire l'Invisibile</b> potranno accorgersi del vampiro, se si basano solo sull'udito.
                        Il vampiro potr&agrave; silenziare solo i suoni emessi da lui: se fa ad esempio cadere oggetti, o sbatte una porta, quei suoni verranno percepiti normalmente.
                    </li>

                    <li style={liStyle}>
                        <b>Passaggio Invisibile</b> (&#9679;&#9679;): il vampiro ora pu&ograve; muoversi, e se non emette suoni dirompenti, pu&ograve; rimanere invisibile.<br />
                        <b>Sistema</b>: effettuando 1 Prova di Risveglio, il vampiro pu&ograve; muoversi sotto l'effetto di Oscurazione. Varranno sempre i limiti imposti dall'Oscurazione descritti precedentemente. Dura una scena, o finch&egrave; scoperto.
                    </li>

                    <li style={liStyle}>
                        <b>Ghost in the Machine</b> (&#9679;&#9679;&#9679;): il vampiro riesce a trasmettere il potere di Oscurazione anche ai macchinari elettronici, rendendosi invisibile o comunque irriconoscibile. L'effetto svanisce col tempo, ma la figura del vampiro rimarr&agrave; irriconoscibile.<br />
                        <b>Sistema</b>: il potere non ha ulteriori costi, proietta solo gli effetti di Oscurazione sui macchinari. Chi vede una registrazione dal vivo del vampiro subisce il potere come se fosse in presenza del vampiro. 
                        Per riconoscere il vampiro nelle registrazioni prese quando usava Oscurazione, la Difficolt&agrave; aumenta di 3. Il vampiro acquisisce anche 3 dadi supplementari all'ammontare per eludere sistemi di sorveglianza.
                    </li>

                    <li style={liStyle}>
                        <b>Maschera delle Mille Facce</b> (&#9679;&#9679;&#9679;): il vampiro pu&ograve; assumere l'aspetto di un'altra persona qualunque, invece di sparire. L'identit&agrave; della persona sar&agrave; inerente al contesto, e il vampiro non potr&agrave; copiare l'aspetto di una persona nello specifico.<br />
                        <b>Sistema</b>: effettuando 1 Prova di Risveglio, il vampiro assume delle sembianze di una persona qualunque, assolutamente ininfluente, del suo stesso sesso e pi&ugrave; o meno delle sue stesse fattezze. Anche i vestiti 
                        appaiono come perfettamente normali, privi di risalto. Come al solito, il potere di <b>Percepire l'Invisibile</b> potr&agrave; vedere attraverso l'illusione.
                    </li>

                    <li style={liStyle}>
                        <b>Nascondere</b> (&#9679;&#9679;&#9679;&#9679; - Amalgama Auspex &#9679;&#9679;&#9679;): il vampiro riesce ad imprimere la suggestione ipnotica che ispira con Oscurazione sulla sua persona ad un oggetto inanimato, che adesso rimarr&agrave; invisibile agli sguardi altrui.<br />
                        <b>Sistema</b>: effettuando 1 Prova di Risveglio, il vampiro tocca l'oggetto che vuole nascondere e tira Intelligenza + Oscurazione con Difficolt&agrave; variabile (2 per piccoli oggetti, 6 per una casa in mezzo ad uno spazio aperto).
                        Il potere durer&agrave; per una notte, pi&ugrave; la differenza tra i successi e la Difficolt&agrave; al tiro di attivazione. Il potere ha effetto per qualsasi oggetto che non si muove di moto proprio (auto in movimento), e 
                        avr&agrave; effetto anche per qualsiasi cosa stia dentro l'oggetto (persone in un'auto). Chi possiede <b>Percepire l'Invisibile</b> potr&agrave; vedere oltre l'illusione effettuando un tiro di 
                        Prontezza + Auspex contro Intelligenza + Oscurazione del vampiro.
                    </li>

                    <li style={liStyle}>
                        <b>Svanire</b> (&#9679;&#9679;&#9679;&#9679;): <b>Necessario avere Cappa di Ombre</b> il Cainita riesce a sparire dalla vista, in un battito di ciglia, attivando il potere di Cappa d'Ombre o Passaggio Invisibile, ed anche la memoria del Cainita negli astanti diventer&agrave; sfocata e indistinta,
                        come se la mente cercasse di dare un senso a quanto appena visto.<br />
                        <b>Sistema</b>: il costo &egrave; lo stesso del potere aumentato. Il vampiro dovr&agrave; tirare Prontezza + Oscurazione contro Prontezza + Allerta delle vittime. Se il tiro riesce, gli umani che assistono razionalizzeranno questionando se 
                        il vampiro &egrave; stato presente per tutto il tempo in cui vi hanno interagito. Un successo critico, gli umani dimenticheranno completamente la presenza del vampiro per tutta la scena. I vampiri che assistono al potere
                        non vedranno modificata la loro memoria, ma se vincono il confronto, sar&agrave; come se il vampiro avesse attivato il potere quando non era ancora osservato.
                    </li>

                    <li style={liStyle}>
                        <b>Ammantare le Masse</b> (&#9679;&#9679;&#9679;&#9679;&#9679;): il vampiro ora riesce a coprire anche altri compagni dietro la coltre di Oscurazione, attivando anche per loro i poteri di Cappa d'Ombra o di Passaggio Invisibile.<br />
                        <b>Sistema</b>: il vampiro dovr&agrave; effettuare 1 Prova di Risveglio supplementare rispetto al potere che verr&agrave; aumentato. Il vampiro potr&agrave; estendere il potere ad un numero di persone pari al suo punteggio di Prontezza; ogni persona
                        oltre quel numero, coster&agrave; 1 Prova di Risveglio. Ogni persona sar&agrave; sotto l'effetto del potere come se possedesse il livello di Oscurazione del cainita, ma tutti quelli interessati dal potere potranno vedersi tra di loro.
                        Se uno dei personaggi interessati viene scoperto, gli altri continueranno a rimaere sotto l'effetto di Oscurazione. Se il vampiro che ha attivato il potere viene scoperto, invece, l'illusione svanisce per tutti.
                    </li>

                    <li style={liStyle}>
                        <b>Guisa dell'Impostore</b> (&#9679;&#9679;&#9679;&#9679;&#9679;): il Cainita dopo aver studiato una persona, riesce a replicarne in tutto e per tutto l'aspetto e i comportamenti, apparendo praticamente come lei.<br />
                        <b>Sistema</b>: effettuando 1 Prova di Risveglio, il Narratore tirer&agrave; senza che il giocatore sappia il risultato un tiro di Prontezza + Oscurazione a Difficolt&agrave; 4. Un fallimento a questo tiro significher&agrave; che il Cainita 
                        non ha creato un'illusione tale da convincere chi conosce l'impersonato. Se, inoltre, il Cainita vorr&agrave; imitare il modo di muoversi e di parlare della persona, dovr&agrave; tirare Persuasione + Espressivit&agrave;;
                        un successo critico in questo tiro render&agrave; non necessari altri tiri per il resto della scena. Anche questo potere potr&agrave; essere identificato tramite <b>Percepire l'Invisibile</b>
                    </li>
                </ul>
            </Typography>

            <Typography paragraph>
                <h3 style={titleStyle}>
                    Potenza
                </h3>
            </Typography>

            <Typography paragraph sx={guideStyle}>
                Aumenta la potenza fisica del Cainita.

                <ul>
                    <li style={liStyle}>
                        <b>Corpo Letale</b> (&#9679;): il vampiro pu&ograve; infliggere danni aggravati con le sue nude mani agli umani.<br />
                        <b>Sistema</b>: il potere &egrave; automatico, ma pu&ograve; non essere utilizzato. Il cainita ignora anche un livello di armatura per punteggio di Potenza.
                    </li>

                    <li style={liStyle}>
                        <b>Balzo Innaturale</b> (&#9679;): il vampiro, grazie alla sua poderosa forza, riesce a saltare molto pi&ugrave; lontano di quanto un mortale riesca a fare.<br />
                        <b>Sistema</b>: il potere &egrave; gratuito, e consente di effettuare un balzo di 3 metri per livello di Potenza in verticale, e 5 metri per livello di Potenza in orizzontale, senza bisogno di rincorsa.
                    </li>

                    <li style={liStyle}>
                        <b>Prodezza</b> (&#9679;&#9679;): il vampiro, spendendo sangue, riesce ad aggiungere il proprio punteggio di Potenza alla Forza in combattimento senza armi, o in generale in test sulla forza.<br />
                        <b>Sistema</b>: effettuando 1 Prova di Risveglio, il vampiro potr&agrave; aggiungere il suo punteggio di Potenza ad ogni danno a mani nude, e ad ogni impresa che si basi sulla Forza.
                    </li>

                    <li style={liStyle}>
                        <b>Morso Brutale</b> (&#9679;&#9679;&#9679;): il vampiro riesce a bere un'incredibile quantit&agrave; di sangue quando si ciba, drenando il sangue da una vittima in pochi secondi. 
                        Viene solitamente impiegato in combattiento, quando la vittima riesce a piantare le proprie zanne nella vittima.<br />
                        <b>Sistema</b>: il potere &egrave; gratuito. Il cainita potr&agrave; consumare tutta la vitae della vittima in un turno, causando danni Aggravati agli umani per ogni punto di Fame acquisito. I vampiri 
                        vittime di questo potere subiranno invece danni Superficiali. Per poter usare questo potere, il Cainita dovr&agrave; vincere un confronto in una presa per poter affondare le proprie zanne sulla vittima.
                        L'eventuale punteggio di Armatura non protegge da questi danni, dato che si tratti di danni ad organi interni.
                    </li>

                    <li style={liStyle}>
                        <b>Scintilla di Rabbia</b> (&#9679;&#9679;&#9679; - Amalgama: Ascendente &#9679;&#9679;&#9679;): il vampiro riesce ad ispirare rabbia ferale o addirittura frenesia negli astanti.<br />
                        <b>Sistema</b>: effettuando 1 Prova di Risveglio, il vampiro pu&ograve; aggiungere il suo punteggio di Potenza a qualsiasi tentativo di incitare una persona, o una folla, ad atti di rabbia. 
                        Il vampiro potr&agrave; anche ispirare rabbia ad un altro vampiro attivando il potere e tirando Persuasione + Potenza contro Autocontrollo + Intelligenza della vittima. Se il tiro riesce,
                        la vittima dovr&agrave; testare il personaggio per <Link href={GuideRoutes.homeRules}><a id="frenzy-types">Frenesia di Furia</a></Link> a Difficolt&agrave; 3.
                    </li>

                    <li style={liStyle}>
                        <b>Presa Sconcertante</b> (&#9679;&#9679;&#9679;): il vampiro riesce ad arrampicarsi senza difficolt&agrave;, usando le proprie dita per penetrare la dura pietra di una parete.<br />
                        <b>Sistema</b>: effettuando 1 Prova di Risveglio, il vampiro non dovr&agrave; effettuare nessun test per arrampicarsi su superfici non metalliche. Alcuni vetri potranno non sopportare lo stress, comunque.
                        L'arrampicata &egrave; effettuata rompendo le superfici, quindi chiunque osservi la superficie interessata, potr&agrave; identificare l'utilizzo di questa Disciplina con un tiro di 
                        Intelligenza + Investigazione a Difficolt&agrave; 2; gli effetti sui vetri di questa Disciplina non dovranno nemmeno essere testati.
                    </li>

                    <li style={liStyle}>
                        <b>Pozione di Potenza</b> (&#9679;&#9679;&#9679;&#9679;): chiunque beva il Sangue del Cainita acqusisce un numero di pallini di potenza pari alla met&agrave; per difetto di quelli che possiede il Cainita.<br />
                        <b>Sistema</b>: chi beve l'equivalente di un Prova di Risveglio di Vitae del Cainita, acquisisce un livello di Potenza pari alla met&agrave; di quelli del Cainita, arrotondato per difetto (quindi 2). Dura per una notte,
                        o fino a quando il cainita non raggiunge un livello di Fame pari a 5.
                    </li>

                    <li style={liStyle}>
                        <b>Terremoto</b> (&#9679;&#9679;&#9679;&#9679;&#9679;): il vampiro, dando un pugno o un calcio al pavimento, riesce a provocare increspature nel terreno che fanno immediatamente cadere gli avversari, ma potrebbero anche far cadere case addosso all'utilizzatore.<br />
                        <b>Sistema</b>: effettuando 2 Prove di Risveglio, il vampiro attiva il potere senza nessun altro test. Se usato sul pavimento, si formeranno delle crepe, se usato su altre superfici verticali, mobilia e specchi si romperanno
                        e si rischier&agrave; anche di rompere la parete. Chiunque sia interessato dal raggio d'azione dovr&agrave; tirare Destrezza + Atletica Difficolt&agrave; 3. Un successo indica che perderanno l'azione, un successo
                        critico consentir&agrave; di mantenere l'equilibrio senza perdere il turno, mentre un fallimento comporter&agrave; la caduta, e il successivo turno dovr&agrave; essere speso per alzarsi.
                    </li>

                    <li style={liStyle}>
                        <b>Pugno di Caino</b> (&#9679;&#9679;&#9679;&#9679;&#9679;): il Cainita riesce ad infliggere danni Aggravati con le sue nude mani, sia a Cainiti che mortali.<br />
                        <b>Sistema</b>: effettuando 1 Prova di Risveglio, il vampiro per il resto della scena pu&ograve; infliggere danni aggravati con le sue nude mani, a vampiri e mortali.
                    </li>
                </ul>
            </Typography>

            <Typography paragraph>
                <h3 style={titleStyle}>
                    Proteide
                </h3>
            </Typography>

            <Typography paragraph sx={guideStyle}>
                Questo potere fa assumere al Cainita un aspetto bestiale, e gli fa ereditare il potere delle fiere.

                <ul>
                    <li style={liStyle}>
                        <b>Occhio della Bestia</b> (&#9679;): Gli occhi del vampiro emanano un bagliore rosso, e il Cainita riesce a vedere anche nella pi&ugrave; completa oscurit&agrave;.<br />
                        <b>Sistema</b>: il potere &egrave; gratuito, e non &egrave; richiesto nessuno tiro di attivazione. Il potere garantisce visione nell'oscurit&agrave;, anche soprannaturale. Lo sguardo soprannaturale
                        assunto dal vampiro garantisce un bonus di 2 dadi all'ammontare per i tiri di intimidazione contro i mortali.
                    </li>

                    <li style={liStyle}>
                        <b>Peso di una Piuma</b> (&#9679;): il vampiro diventa leggero come una piuma, evitando di far scattare sensori di pressione, evitare danni da caduta. Il vampiro non potr&agrave; effettuare salti enormi, dato che anche la sua Forza &egrave; proporzionalmente ridotta.<br />
                        <b>Sistema</b>: il potere &egrave; gratuito e pu&ograve; essere attivato senza necessit&agrave; di un tiro, se il vampiro ha il tempo di prepararsi, altrimenti dovr&agrave; effettuare un tiro di Prontezza + Sopravvivenza a Difficolt&agrave; 3.
                        Sotto l'effetto di questo potere, il vampiro non subir&agrave; danni da caduta, da spinta, e a discrezione del Narratore non attiver&agrave; sensori di pressione sul terreno.
                    </li>

                    <li style={liStyle}>
                        <b>Armi Ferali</b> (&#9679;&#9679;): le armi naturali del vampiro si allungano mostruosamente, diventando artigli o denti da serpente. Gli artigli e i denti causano danni aggravati ai mortali, e i danni superficiali causati ai vampiri non potranno essere dimezzati come normalmente avviene.<br />
                        <b>Sistema</b>: effettuando 1 Prova di Risveglio, il vampiro riesce ad attivare il potere. Con le propaggini acquisite grazie a questo potere, il vampiro ottiene un bonus di +2 a tutti gli ammontare sui tiri di Rissa, potr&agrave; fare danni Aggravati
                        agli umani, e i danni Superficiali inflitti agli altri Cainiti tramite questo potere non potranno essere dimezzati, come normalmente succede.
                    </li>

                    <li style={liStyle}>
                        <b>Fondersi con la Terra</b> (&#9679;&#9679;&#9679;): il vampiro riesce a fondersi con la terra sottostante, posto che la terra sia naturale. A meno che non sia in torpore, il vampiro riuscir&agrave; a risvegliarsi la notte successiva se non in torpore.<br />
                        <b>Sistema</b>: effettuando 1 Prova di Risveglio, il vampiro riesce a fondersi con terreni naturali, come roccia, terra o manto erboso. Il potere non funziona su superfici artificiali come cemento. Il vampiro non potr&agrave; fondere oggetti personali
                        n&eacute; vestiti, che rimarranno sulla superficie del terreno dove si &egrave; fuso. Il potere richiede un turno per completarsi, e durante la notte sar&agrave; consapevole di quello che succede nei dintorni, mentre di giorno &egrave; soggetto
                        alle stesse regole degli altri vampiri in caso di disturbi (scavi, o altro).
                    </li>

                    <li style={liStyle}>
                        <b>Cambio di Forma</b> (&#9679;&#9679;&#9679;): il vampiro riesce a trasformarsi in un animale pi&ugrave; o meno del suo stesso peso, con nessuna parvenza soprannaturale.<br />
                        <b>Sistema</b>: per attivare il potere &egrave; necessario solo 1 Prova di Risveglio, il vampiro impiegher&agrave; un turno a trasformarsi, durante il quale dovr&agrave; considerarsi inerme. Il Cainita non potr&agrave; trasformare oggetti o vestiti, e
                        la capacit&agrave; di trasporto &egrave; limitata a quella dell'animale. Il Cainita potr&agrave; usare le Discipline di Auspex, Animalit&agrave;, Velocit&agrave;, Robustezza, Potenza e Proteide.
                    </li>

                    <li style={liStyle}>
                        <b>Metamorfosi</b> (&#9679;&#9679;&#9679;&#9679;): <b>Prerequisito: Cambio di Forma</b> il vampiro ora riesce a trasformarsi in animali di diverso peso e forma rispetto all'aspetto naturale, come pipistrelli, o corvi.<br />
                        <b>Sistema</b>: segue le stesse regole di <b>Cambio di Forma</b>.
                    </li>

                    <li style={liStyle}>
                        <b>Forma di Nebbia</b> (&#9679;&#9679;&#9679;&#9679;&#9679;): il vampiro si trasforma in nebbia, e pu&ograve; soffrire danni solo da fuoco, Sole o altri rituali magici soprannaturali. Solo forti folate di vento potranno far sobbalzare la coltre di nebbia.<br />
                        <b>Sistema</b>: per trasformarsi, il vampiro pu&ograve; decidere di effettuare 1 Prova di Risveglio e metterci tre turni, oppure effettuare 1 Prova di Risveglio supplementare per ogni turno che desiderano velocizzare, per un minimo di uno (quindi, al massimo, 3 Prove di Risveglio).
                        In questo stato, il cainita pu&ograve; muoversi come nube a passo d'uomo, le Discipline che potr&agrave; usare saranno a discrezione del Narratore, e potr&agrave; subire danni solo da Fuoco, Sole o da mezzi soprannaturali, come Stregoneria del Sangue.<br />
                        La ritrasformazione in forma normale impiegher&agrave; gli stessi tre turni.
                    </li>

                    <li style={liStyle}>
                        <b>Cuore senza Restrizioni</b> (&#9679;&#9679;&#9679;&#9679;&#9679;): il vampiro controlla la sua forma anche interiormente, riuscendo a spostare il cuore dalla sua posizione originale, rendendolo incredibilmente difficile da bloccare con paletti.<br />
                        <b>Sistema</b>: il potere &egrave; gratuito, e aumenta la Difficolt&agrave; per azioni non in combattimento per porre un paletto nel cuore del Cainita di 3. Durante un combattimento, sar&agrave; possibile impalettare il Cainita con un successo critico,
                        e comunque anche con un paletto nel cuore, il Cainita potr&agrave; effettuare 1 Prova di Risveglio e tirare Forza + Fermezza a Difficolt&agrave; 5 per liberarsi (nel qual caso, il paletto sar&agrave; espulso dal loro petto): questo tentativo non sar&agrave; possibile
                        se il vmapiro ha un livello di Fame 5.
                    </li>
                </ul>
            </Typography>

            <Typography paragraph>
                <h3 style={titleStyle}>
                    Robustezza
                </h3>
            </Typography>

            <Typography paragraph sx={guideStyle}>
                La Disciplina aumenta l'innaturale resilienza del vampiro.

                <ul>
                    <li style={liStyle}>
                        <b>Resilienza</b> (&#9679;): il vampiro diventa immensamente resiliente: aggiunge il punteggio di Robustezza alla Salute.<br />
                        <b>Sistema</b>: il potere &egrave; automatico, il vampiro avr&agrave; un punto Salute in pi&ugrave; per ogni punto di Robustezza.
                    </li>

                    <li style={liStyle}>
                        <b>Mente Ininfluenzabile</b> (&#9679;): il vampiro protegge la sua mente da tentativi di coercizione di qualsiasi tipo.<br />
                        <b>Sistema</b>: il potere &egrave; automatico, il vampiro aggiunge il proprio punteggio di Robustezza a tentativi sociali di intimidazione, seduzione e coercizione.
                        Quest potere funziona anche contro Ascendente e Dominazione.
                    </li>

                    <li style={liStyle}>
                        <b>Durezza</b> (&#9679;&#9679;): il vampiro riesce ad usare il suo punteggio di Robustezza per sottrarre i danni superficiali inflitti dai nemici.<br />
                        <b>Sistema</b>: effettuando 1 Prova di Risveglio, per il resto della scena il vampiro sottrae il proprio punteggio di Robustezza a tutti i danni <b>superficiali</b>, prima del dimezzamento.
                        I danni effettivamente subiti non potranno scendere comunque al di sotto di 1.
                    </li>

                    <li style={liStyle}>
                        <b>Bestie Resilienti</b> (&#9679;&#9679; - Amalgama con Animalismo &#9679;): il vampiro condivide la sua resilienza innaturale con gli animali che controlla, garantendogli alcuni dei benefici di Robustezza.<br />
                        <b>Sistema</b>: il potere &egrave; gratuito per <b>Famulus</b>, mentre si dovr&agrave; spendere 1 Prova di Risveglio e tirare Costituzione + Robustezza a Difficolt&agrave; 3 per altri animali; ogni successo 
                        corrisponder&agrave; ad un animale imbevuto con questo potere. Gli animali dovranno essere inoltre sotto l'effetto di Animalit&agrave; del vampiro. A questo punto, gli animali acquisiranno un numero di punti
                        Salute pari al livello di Robustezza del vampiro. Quando il potere finisce, si dovranno togliere punti pari alla Robustezza del personaggio, cominciando da quelli non marcati come danni subiti: questo potrebbe
                        risultare nella morte dell'animale.
                    </li>

                    <li style={liStyle}>
                        <b>Sfidare la Maledizione</b> (&#9679;&#9679;&#9679;): il vampiro pu&ograve; convertire danni aggravati in una scena in danni superficiali, fino ad un massimo del suo punteggio di Robustezza, e non potr&agrave; guarire questi danni per il resto della scena.<br />
                        <b>Sistema</b>: effettuando 1 Prova di Risveglio, il vampiro potr&agrave; convertire un numero di danni Aggravati pari al suo punteggio di Robustezza in danni Superficiali. Il numero totale di danni convertiti vale 
                        per l'intera scena, non per un singolo attacco. Per attivare il potere istintivamente, quando subisce l'attacco il vampiro tirer&agrave; Prontezza + Sopravvivenza Difficolt&agrave; 3: se il tiro fallisce, il potere
                        non si attiver&agrave;, altrimenti il vampiro dovr&agrave; effettuare 1 Prova di Risveglio il turno successivo. Esempio: se il vampiro possiede Robustezza 3, e subisce 2 danni Aggravati in un turno, pu&ograve; decidere 
                        di convertire questi in danni Superficiali, lasciando il terzo danno a disposizione per il prossimo turno, ma non potr&agrave; convertirne pi&ugrave; di 3 per scena. I danni Superficiali cos&igrave; convertiti
                        non potranno essere curati fino alla fine della scena.
                    </li>

                    <li style={liStyle}>
                        <b>Fortificare la Barriera Interna</b> (&#9679;&#9679;&#9679;): il vampiro fortifica la sua mente, invece della sua pelle, riuscendo ad impedire e resistere a tentativi di scrutinio dell'aura o dei suoi pensieri. La sua mente appare vuota, e l'aura piatta.<br />
                        <b>Sistema</b>: il potere non ha costo, ma deve essere attivato e varr&agrave; per una scena. I tentativi di <b>Scrutare l'Anima</b> e <b>Telepatia</b>, e altri poteri simili,
                        avranno una Difficolt&agrave; aumentata pari al valore di Robustezza dimezzato e arrotondato per eccesso. Se il potere pu&ograve; essere resistito, il vampiro potr&agrave; 
                        aggiungere il valore di Robustezza al tiro per resistere.
                    </li>

                    <li style={liStyle}>
                        <b>Pozione di Robustezza</b> (&#9679;&#9679;&#9679;&#9679;): la vittima condensa il potere di Robustezza nel suo sangue, infondendolo a chiunque lo beva.<br />
                        <b>Sistema</b>: chi beve l'equivalente di un Prova di Risveglio di Vitae del Cainita, acquisisce un livello di Robustezza pari alla met&agrave; di quelli del Cainita, arrotondato per difetto (quindi 2). Dura per una notte,
                        o fino a quando il cainita non raggiunge un livello di Fame pari a 5.
                    </li>

                    <li style={liStyle}>
                        <b>Carne di Marmo</b> (&#9679;&#9679;&#9679;&#9679;&#9679;): la pelle del Cainita diventa di marmo, riuscendo a deviare uno degli attacchi che, per turno, gli vengono inferti.<br />
                        <b>Sistema</b>: effettuando 2 Prove di Risveglio, per tutto il resto della scena il vampiro pu&ograve; ignorare il primo danno per turno, includendo danni da combattimento, da fuoco, ma non da raggi solari.
                        Per "primo" si intende il danno pi&ugrave; grave subito in un turno. Se un tiro di attacco totalizza un successo critico, questo attacco andr&agrave; a segno indipendentemente dall'attivazione del potere.
                    </li>
                    
                    <li style={liStyle}>
                        <b>Prodezza dal Dolore</b> (&#9679;&#9679;&#9679;&#9679;&#9679;): il Cainita non soffre pi&ugrave; gli impedimenti dati dalla perdita di punti salute, fino al torpore. Riesce ad agire normalmente anche se incapacitato.<br />
                        <b>Sistema</b>: effettuando 1 Prova di Risveglio, il vampiro ignora tutti gli effetti negativi dati dalla perdita di punti Salute. Aumenta inoltre di un punto un attributo Fisico per ogni punto di danno, sia esso Superficiale
                        o Aggravato, fino ad un punteggio massimo di 7.
                    </li>
                </ul>
            </Typography>

            <Typography paragraph>
                <h3 style={titleStyle}>
                    Alchimia dei Sangue Debole
                </h3>
            </Typography>

            <Typography paragraph sx={guideStyle}>
                Nata come una risposta dei Sangue Debole alla quasi totale mancanza di poteri donati dal loro sangue diluito, l'Alchimia di Sangue &egrave; diventata una conoscenza diffusa tra i nuovi reietti tra i Cainiti 
                nel nuovo millennio. Impossibilitati ad usare la loro Vitae per le Discipline, i Sangue Debole sperimentano e sviluppano delle formule che hanno la loro Vitae come ingrediente principale, e altri come
                catalizzatori per la produzione di elisir che garantiscono determinati poteri all'utilizzatore. Sono molte le voci che girano in tutte i Domini o le comuni anarchiche; si vocifera che alcuni di questi 
                utilizzatori abbia dei veri e propri laboratori, e trascrive le formule frutto di sperimentazione in codice, per non divulgarle, proprio come gli alchimisti medievali; altri dicono, invece, che questi
                alchimisti del nuovo millennio sappiano addirittura mimare i poteri dei Cainiti, e si sa per certo che alcuni si fanno pagare in Vitae cainita.<br />
                La Camarilla tiene un atteggiamento di pacata indifferenza nei confronti di questi sviluppi: ha altri problemi a cui pensare. Alcuni Anarchici, ma anche alcuni Fratelli Neonati, ha pagato il loro supporto
                per alcuni di questi elisir.
            </Typography>

            <Typography paragraph sx={guideStyle}>
                C'&egrave; un po' di verit&agrave; in tutte queste voci: l'Alchimia di Sangue Debole consiste nel distillare formule che hanno come base il Sangue Debole, sangue umano con determinate Risonanze, e alcuni
                ingredienti rintracciabili dai supermercati dai siti New Age, e alcuni addirittura cos&igrave; rari da essere disponibili solo nel Dark Web, o in mercati di contrabbando. Le sostanze che si distillano, poi,
                devono essere assunte dal vampiro di Sangue Debole, e quindi attivate all'interno del corpo del Cainita, che poi potr&agrave; usare il potere, la cui efficacia varia in base alla qualit&agrave; degli 
                ingredienti, ed alla sua capacit&agrave; realizzativa. &Egrave; anche possibile replicare alcuni poteri di Discipline cainite, a patto di mescolare anche la Vitae del Cainita di un clan che possieda
                quella Disciplina: non &egrave; infatti indispensabile che il vampiro donatore conosca il potere particolare della Disciplina, la conoscenza ancenstrale risiede nella sua Vitae.
                Esistono tre tipi di Alchimia, e la differenza fondamentale &egrave; l'<b>Athanor</b>, o il forno alchemico.
            </Typography>

            <Typography paragraph>
                <h5 style={titleStyle}>
                    Athanor Corporis
                </h5>
            </Typography>

            <Typography paragraph sx={guideStyle}>
                In questa branca dell'Alchimia di Sangue Debole, le sostanze vengono distillate all'interno del suo corpo. Il Sangue Debole assume tutti gli ingredienti, quindi distilla
                la sostanza all'interno del corpo, e la pu&ograve; gi&agrave; attivare per usarla. Questa pratica &egrave; sicuramente quella che offre la maggiore rapidit&agrave; di attivazione, ma 
                dipende dalla disponibilit&agrave; degli ingredienti.
            </Typography>

            <Typography paragraph>
                <h5 style={titleStyle}>
                    Calcinatio
                </h5>
            </Typography>

            <Typography paragraph sx={guideStyle}>
                La <b>Calcinatio</b> prevede che il Forno Alchemico sia invece il corpo di un mortale che contiene il sangue della particolare risonanza richiesta dalla formula. Il vampiro di Sangue
                Debole dona il proprio sangue al suo collaboratore (o vittima, dipende dalle circostanze) assieme agli altri ingredienti, e distilla la formula all'interno del mortale. In questo modo
                l'elisir sar&agrave; disponibile, e continuer&agrave; a prodursi all'interno del corpo del mortale, finch&eacute; questi conserver&agrave; la particolare Risonanza richiesta 
                dalla formula. Se l'emozione che prova cambia, l'elisir al suo interno perder&agrave; efficacia. Al vampiro baster&agrave; nutrirsi del suo sangue per poter assumere l'elisir e
                attivarlo.
            </Typography>

            <Typography paragraph>
                <h5 style={titleStyle}>
                    Fixatio
                </h5>
            </Typography>

            <Typography paragraph sx={guideStyle}>
                In questo caso, il Sangue Debole dispone di un vero e proprio laboratorio alchemico - anche se in molti casi somiglia di pi&ugrave; ad un laboratorio per la cottura di metanfetamine,
                o il taglio di droga. In questo caso, la qualit&agrave; degli strumenti da laboratorio &egrave; fondamentale: un laboratorio improvvisato consente solo formule dal livello 3 in gi&ugrave;,
                e riduce di 2 l'ammontare di dadi per la distillazione della formula. Il Sangue Debole potr&agrave; portare con s&eacute; un numero di formule pari al punteggio di Prontezza o
                Destrezza; pu&ograve; inoltre conservare un numero pari al doppio della somma del punteggio di Alchimia del Sangue Debole e Rifugio. In qualsiasi modo, nonostante con questo metodo
                sia possibile produrre e conservare pi&ugrave; di una formula per volta, il Sangue Debole potr&agrave; attivarne solo una per turno.
            </Typography>

            <Typography paragraph>
                <h5 style={titleStyle}>
                    Sistema
                </h5>
            </Typography>

            <Typography paragraph sx={guideStyle}>
                In fase di creazione, il giocatore dovr&agrave; scegliere quale dei tre metodi user&agrave; il Sangue Debole. Apprendere un nuovo metodo sar&agrave; equivalente
                ad apprendere una nuova Disciplina, come se partisse da 0. Per la discussione dei rituali disponibili per l'Alchimia di Sangue Debole, contattare un Narratore.
            </Typography>

            <Typography paragraph>
                <h3 style={titleStyle}>
                    Velocit&agrave;
                </h3>
            </Typography>

            <Typography paragraph sx={guideStyle}>
                Questa Disciplina aumenta la naturale grazie e la velocit&agrave; di movimento di un vampiro.

                <ul>
                    <li style={liStyle}>
                        <b>Grazie Felina</b> (&#9679;): il vampiro assume la grazia e la destrezza di un ginnasta olimpico.<br />
                        <b>Sistema</b>: non &egrave; necessario nessun tiro, n&eacute; Prova di Risveglio, il vampiro riesce a camminare e tenersi in equilibrio su qualsiasi supporto, a patto che siano in grado di sostenere il suo peso.
                    </li>

                    <li style={liStyle}>
                        <b>Riflessi Rapidi</b> (&#9679;): questo potere (passivo) del vampiro gli consente di percepire ad una velocit&agrave; incredibile pericoli altrimenti letali. Pu&ograve; arrivare anche ad evitare frecce, o a scansare pallottole senza copertura.<br />
                        <b>Sistema</b>: non &egrave; necessario nessun tiro, n&eacute; Prova di Risveglio, il vampiro non subisce nessuna penalit&agrave; per la mancanza di copertura sotto attacco di armi da fuoco, e ha anche a disposizione una 
                        azione supplementare del valore massimo di 2 dadi per ricaricare l'arma, per esempio.
                    </li>

                    <li style={liStyle}>
                        <b>Leggerezza</b> (&#9679;&#9679;): il vampiro a questo livello si muove con una velocit&agrave; incredibile. Aggiunge il valore di Velocit&agrave; all'ammontare di Destrezza, anche per difesa nei combattimenti.<br />
                        <b>Sistema</b>: effettuando 1 Prova di Risveglio per scena, il vampiro pu&ograve; aggiungere il suo punteggio di Velocit&agrave; ad ogni tiro di Destrezza fuori dal combattimento, al massimo per schivare con Destrezza + Atletica.
                    </li>

                    <li style={liStyle}>
                        <b>Battito di Ciglia</b> (&#9679;&#9679;&#9679;): il vampiro pu&ograve; ingaggiare subito battaglia dopo aver percorso fino ad una cinquantina di metri (avendo a disposizione ancora un'azione), o fuggire immediatamente dalla scena.<br />
                        <b>Sistema</b>: effettuando 1 Prova di Risveglio, il vampiro raggiunge il bersaglio e ha ancora a disposizione un'azione, quindi &egrave; come se fosse gi&agrave; nella mischia all'inizio del turno, per la determinazione 
                        dell'<Link href={GuideRoutes.mechanics}><a id="initiative">Iniziativa</a></Link>. Dipendendo dal terreno, il Narratore potr&agrave; chiedere un tiro di Destrezza + Atletica. Nel caso in cui l'avversario voglia usare un'arma da fuoco, il vampiro
                        dovr&agrave; tirare Destrezza + Atletica contro Destrezza + Armi da Fuoco dell'attaccante: se il vampiro riesce, potr&agrave; agire prima dell'attaccante, viceversa l'attaccante avr&agrave; a disposizione un'azione per sparare
                        contro il vampiro.
                    </li>

                    <li style={liStyle}>
                        <b>Attraversamento</b> (&#9679;&#9679;&#9679;): il vampiro riesce a scalare pareti verticali per una buona distanza, o addirittura riesce a correre sull'acqua, con la dovuta rincorsa.<br />
                        <b>Sistema</b>: effettuando 1 Prova di Risveglio, il vampiro tira Destrezza + Atletica, con una Difficolt&agrave; dipendente dal tipo di superficie. Ogni successo avviciner&agrave; il vampiro al traguardo.
                    </li>

                    <li style={liStyle}>
                        <b>Pozione di Velocit&agrave;</b> (&#9679;&#9679;&#9679;&#9679;): il Sangue del vampiro riesce a trasmettere la met&agrave; dei pallini per difetto a chiunque beva il suo sangue.<br />
                        <b>Sistema</b>: chi beve l'equivalente di un Prova di Risveglio di Vitae del Cainita, acquisisce un livello di Velocit&agrave; pari alla met&agrave; di quelli del Cainita, arrotondato per difetto (quindi 2). Dura per una notte,
                        o fino a quando il cainita non raggiunge un livello di Fame pari a 5.
                    </li>

                    <li style={liStyle}>
                        <b>Colpo Infallibile</b> (&#9679;&#9679;&#9679;&#9679; Amalgama: Auspex &#9679;&#9679;): il mondo per il Cainita pare fermarsi per qualche istante, in cui riesce a prendere la mira come se fosse un tiro stazionario, anche se
                        attorno a lui pu&ograve; succedere qualsiasi cosa.<br />
                        <b>Sistema</b>: effettuando 1 Prova di Risveglio, il potere &egrave; automatico. Il vampiro potr&agrave; attaccare un altro personaggio con Armi da Fuoco tirando a Difficolt&agrave; 1, e quest'ultimo non potr&agrave; difendersi, a meno
                        che non possieda Velocit&agrave; 5: in quel caso, potr&agrave; difendersi facendo un Prova di Risveglio.
                    </li>

                    <li style={liStyle}>
                        <b>Colpo Fulmineo</b> (&#9679;&#9679;&#9679;&#9679;&#9679;): il vampiro riesce a colpire un bersaglio in mischia senza che questi possa difendersi (Diff. 1), a meno che anche il bersaglio possegga Velocit&agrave; 5.<br />
                        <b>Sistema</b>: il personaggio effettua 1 Prova di Risveglio, e per un solo attacco di rissa o mischia il bersaglio non potr&agrave; difendersi. Il tiro di attacco avr&agrave; difficolt&agrave; 1.
                        Un personaggio con Velocit&agrave; 5 potr&agrave; effettuare 1 Prova di Risveglio e difendersi normalmente.
                    </li>
                    
                    <li style={liStyle}>
                        <b>Frazione di Secondo</b> (&#9679;&#9679;&#9679;&#9679;&#9679;): il vampiro &egrave; cos&igrave; veloce che riesce ad agire in base ai suoi riflessi soprannaturali. 
                        Pu&ograve; passare attraverso una porta che si sta chiudendo, o apparire dietro un nemico in procinto di effettuare un'imboscata.<br />
                        <b>Sistema</b>: effettuando 1 Prova di Risveglio, il personaggio potr&agrave;, sempre ragionevolmente, anticipare qualsiasi cosa il Narratore stia preparando; non sono necessari tiri.
                    </li>
                </ul>
            </Typography>
        </>
    );
}

export default GuidesAttributesDisciplines;
