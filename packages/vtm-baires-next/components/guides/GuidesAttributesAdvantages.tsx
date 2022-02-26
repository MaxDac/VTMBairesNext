import React, {ReactElement} from "react";
import Typography from "@mui/material/Typography";
import { guideStyle, liStyle, titleStyle } from "./GuidesStyles";
import Link from "next/link";
import {GuideRoutes} from "../../base/routes";

type Props = {
    showAttributes: (name: string, section?: string) => any[];
}

const GuidesAttributesAdvantages = ({showAttributes}: Props): ReactElement => {
    return (
        <>
            <Typography paragraph>
                <h3 style={titleStyle}>
                    Background
                </h3>
            </Typography>

            <Typography paragraph sx={guideStyle}>
                I Background sono Vantaggi che determinano il potere del Cainita sul mondo mortale. Mentre le altre
                caratteristiche, inclusi Pregi e Difetti, sono profondamente legati alla natura stessa del personaggio,
                i Background possono facilmente cambiare nel tempo se il personaggio si impegna nella loro conquista,
                o se eventi fuori dal controllo del Cainita glieli sottraggono. Data la natura mutevole di queste
                caratteristiche, <b>parte del regolamento verr&agrave; gestito nel Forum interno</b>, cos&igrave; come
                l'elenco dei background gi&agrave; acquisiti dagli altri personaggi.
            </Typography>

            <Typography paragraph sx={guideStyle}>
                In generale, poi, il Narratore potr&agrave; dover cambiare i Background scelti per poter inserire
                correttamente il personaggio nell'ambientazione. Come regola generale, comunque, <b>non sar&agrave;
                consentito in fase di creazione indicare un alleato / una influenza / un seguace con un punteggio
                maggiore di 2</b>. Questa regola vale anche per le diverse aree di influenza dei background, in fase di
                creazione il personaggio non potr&agrave; possedere pi&grave; di 3 pallini in una singola area di
                influenza (esempio: Politica, Criminalit&agrave;, ...).
            </Typography>

            <Typography paragraph sx={guideStyle}>
                <ul>
                    {showAttributes("Advantage")}
                </ul>
            </Typography>

            <Typography paragraph>
                <h3 style={titleStyle}>
                    Difetti di Background
                </h3>
            </Typography>

            <Typography paragraph sx={guideStyle}>
                Un personaggio potrebbe possedere anche livelli <b>negativi</b> di un particolare Background. Ad esempio,
                invece di essere famoso per qualcosa di positivo in un particolare circolo, potrebbe avere un oscuro segreto
                od essere addirittura famoso per qualcosa di <b>negativo</b>. Per la natura stessa del gioco via chat, non 
                sar&agrave; possibile acquisire tutti i Difetti di Background elencati nei manuali (sarebbe impossibile giocare,
                ad esempio, le difficolt&agrave; di doversi arrangiare ogni notte per trovare un rifugio improvvisato, dato che
                la maggior parte dei personaggi non possiede il terzo potere di Proteide).
            </Typography>

            <Typography paragraph sx={guideStyle}>
                I difetti ai Background dovranno essere <b>ampiamente giustificati nel Background o nelle Note in creazione</b>,
                altrimenti non saranno considerati validi; i Narratori si riservano il diritto di modificare la scheda, sottraendo
                il difetto selezionato se non correttamente giustificato.<br />
                Non sar&agrave; generalmente consentito investire punti ed allo stesso tempo avere un Difetto in uno stesso Background,
                a meno che tale scelta non sia giustificata nel Background o nelle Note del personaggio. Anche in questo caso, se la 
                motivazione non convincer&agrave; il Narratore che accetta la scheda, ci riserviamo la facolt&agrave; di modificare
                la scheda, per poi contattare i giocatori in un secondo momento per sistemarla.
            </Typography>

            <Typography paragraph sx={guideStyle}>

                <ul>
                    <li style={liStyle}>
                        <b>Fama</b>

                        <ul>
                            <li>
                                <b>Difetto: (&#9679;) Segreto Oscuro (Home Rule)</b>: il Cainita ha un segreto che, se rivelato, ne
                                metterebbe seriamente in pericolo la non-vita. Sar&agrave; necessario scrivere nel Background 
                                o nelle note del personaggio qual è il suo segreto oscuro.
                            </li>
                            <li>
                                <b>Difetto: (&#9679;&#9679;) Infamia</b>: il personaggio &egrave; molto famoso, ma per qualcosa di 
                                assolutamente orribile. Il motivo dell'infamia dovr&agrave; essere scritto chiaramente nel Background
                                o nelle Note del personaggio. A discrezione del Narratore, la difficolt&agrave; o l'ammontare dei 
                                tiri sociali nei confronti di chi &egrave; a conoscenza del motivo dell'infamia possono diminuire.
                                Se il segreto &egrave; noto alle autorit&agrave;, queste ad esempio potrebbero attivamente cercare
                                di arrestarlo od ucciderlo.
                            </li>
                        </ul>
                    </li>
                </ul>

                <ul>
                    <li style={liStyle}>
                        <b>Influenza</b>

                        <ul>
                            <li>
                                <b>Difetto: (&#9679;) Malvisto</b>: il personaggio subir&agrave; una penalit&agrave; di un dado
                                all'ammontare dei tiri Sociali che coinvolgono qualsiasi gruppo di potere all'interno della citt&agrave;,
                                tranne Alleati e Contatti.
                            </li>
                            <li>
                                <b>Difetto: (&#9679;&#9679;) Disprezzato</b>: un gruppo o un centro di potere vive per ostacolare 
                                il Cainita in ogni sua mossa. Il personaggio subir&agrave; una penalit&agrave; di due dadi ad ogni 
                                ammontare su tiri sociali contro attori terzi rispetto al gruppo nemico.
                            </li>
                        </ul>
                    </li>
                </ul>

                <ul>
                    <li style={liStyle}>
                        <b>Maschera</b>

                        <ul>
                            <li>
                                <b>Difetto: (&#9679;) Noto Defunto</b>: la "morte" del personaggio &egrave; nota a vari
                                livelli, e i mortali potrebbero non prendere benissimo la sua riapparizione. Il difetto si 
                                applica a qualsiasi ricerca sulla sua identit&agrave; nelle banche dati.
                            </li>
                            <li>
                                <b>Difetto: (&#9679;&#9679;) Noto <i>BlankBody</i></b>: il personaggio &egrave; stato schedato in un 
                                database di un servizio segreto o dal servizio immigrazione di un particolare stato, che ha 
                                trasmesso l'informazione ad altre agenzie amiche. La schedatura potrebbe riguardare
                                traccia biometrica, nome, storia o frequentazioni. Generalmente, la Seconda Inquisizione 
                                trasmetter&agrave; ai servizi di immigrazione informazioni volte a renderlo un potenziale
                                terrorista.
                            </li>
                        </ul>
                    </li>
                </ul>

            </Typography>

            <Typography paragraph>
                <h3 style={titleStyle}>
                    Pregi e Difetti
                </h3>
            </Typography>

            <Typography paragraph sx={guideStyle}>

                <ul>
                    <li style={liStyle}>
                        <b>Linguista</b>: si condidera normalmente che il personaggio &egrave; capace di parlare la propria madre lingua.
                        Acquistendo un numero variabile di pallini in questo Pregio, potrete parlare una lingua aggiuntiva per pallino.
                        Questo Pregio &egrave; fondamentale per personaggio che provengono da paesi in cui non si parla spagnolo, e dovranno
                        acquisire almeno un pallino.<br />
                        
                        <ul>
                            <li>
                                <b>Difetto: (&#9679;&#9679;) Illitterato</b>: il personaggio non sa n&eacute; scrivere n&eacute; leggere. Il
                                personaggio potr&agrave; acquisire un solo pallino in Scienze e Accademiche, e non potrete acquisire nessuna
                                specializzazione concernente la modernit&agrave;.
                            </li>
                        </ul>
                        
                    </li>

                    <li style={liStyle}>
                        <b>Aspetto</b>: Il vampiro ha un bell'aspetto, o un aspetto orribile. Questo lo aiuta o lo ostacola nelle
                        interazioni sociali dove questa caratteristica indubbiamente influisce. A seconda dell'entit&agrave; del
                        Pregio o del Difetto, il Narratore potr&agrave; considerare una Difficolt&agrave; nei tiri sociali diminuita
                        o aumentata.<br />

                        <ul>
                            <li>
                                <b>Difetto: (&#9679;&#9679;) Repulsivo</b>: il personaggio perde due dadi dall'ammontare nelle interazioni
                                sociali in cui l'aspetto &egrave; determinante.
                            </li>
                            <li>
                                <b>Difetto: (&#9679;) Brutto</b>: il personaggio perde un dado dall'ammontare nelle interazioni
                                sociali in cui l'aspetto &egrave; determinante.
                            </li>
                            <li>
                                <b>Pregio: (&#9679;&#9679;) Bello</b>: il personaggio aggiunge un dado dall'ammontare nelle interazioni
                                sociali in cui l'aspetto &egrave; determinante.
                            </li>
                            <li>
                                <b>Pregio: (&#9679;&#9679;&#9679;&#9679;) Stupendo</b>: il personaggio aggiunge due dadi dall'ammontare
                                nelle interazioni sociali in cui l'aspetto &egrave; determinante, ma il suo aspetto sar&agrave;
                                cos&igrave; evidente che sar&agrave; difficile rendersi credibile in altri contesti (intimidazioni).
                                In casi estremi, potrebbe attirare anche attenzioni indesiderate.
                            </li>
                        </ul>
                    </li>

                    <li style={liStyle}>
                        <b>Dipendente</b>: Il vampiro dipende da un'altra sostanza oltre al Sangue, e la cerca attivamente
                        nel Sangue delle sue vittime. La dipendenza da una sostanza comporta che, all'assunzione, questa
                        agisca anche sul metabolismo non-morto del Cainita, producendo gli stessi effetti che avrebbe su
                        un mortale.<br />
                        <b>Nota</b>: nel sito, se il giocatore vorr&agrave; prendere questo difetto, dovr&agrave; indicare
                        due risonanze che la sostanza da cui &egrave; dipendente ispira. Se l'ultima caccia non avr&agrave;
                        quelle risonanze, si considerer&agrave; che il vampiro <b>non si &egrave; nutrito di sangue con
                        la sostanza di cui &egrave; dipendente</b>.

                        <ul>
                            <li>
                                <b>Difetto: (&#9679;&#9679;) Dipendenza cronica</b>: si perdono due dadi dall'ammontare di <b>tutti</b>
                                i tiri di dado dopo che il personaggio si &egrave; cibato di un mortale che non conteneva la sostanza,
                                a meno che le azioni non portino al consumo proprio di quella sostanza.
                            </li>
                            <li>
                                <b>Difetto: (&#9679;) Dipendenza</b>: si perdono due dadi dall'ammontare di <b>tutti</b>
                                i tiri di dado dopo che il personaggio si &egrave; cibato di un mortale che non conteneva la sostanza,
                                a meno che le azioni non portino al consumo proprio di quella sostanza.
                            </li>
                            <li>
                                <b>Pregio: (&#9679;) Dipendente altamente funzionale</b>: il personaggio aggiunge un dado all'ammontare
                                di tutti i dadi dopo essersi nutrito della sostanza di cui &egrave; dipendente. In questo caso, il
                                giocatore dovr&agrave; identificare <b>solo una</b> risonanza con la quale potr&agrave; sfruttare
                                il dado in pi&ugrave;.
                            </li>
                        </ul>
                    </li>

                    <li style={liStyle}>
                        <b>Reazione al legame</b>: Il vampiro o il mortale reagisce in modo diverso dal normale ai legami di
                        sangue.

                        <ul>
                            <li>
                                <b>Difetto: (&#9679;&#9679;) Schiavo del Sangue</b>: il personaggio &egrave; completamente legato ad
                                un vampiro solo dopo un sorso di sangue, invece di tre. Si dovr&agrave; indicare come si &egrave;
                                estinto il precedente legame di sangue col Sire, o se il Sire &egrave; un giocatore / personaggio non
                                giocante all'interno del gioco.
                            </li>
                            <li>
                                <b>Difetto: (&#9679;) Dipendente dal Sangue</b>: il sapore del Sangue di un altro Cainita &egrave;
                                pi&ugrave; dolce per il personaggio che per altri. Si sottrae un dado per ogni tiro usato per
                                resistere ad un legame di Sangue.
                            </li>
                            <li>
                                <b>Difetto: (&#9679;) Legame lungo</b>: il legame di sangue si esaurisce pi&ugrave; lentamente
                                per il personaggio. Si perde un livello di legame di sangue dopo tre mesi, invece che uno.
                            </li>
                            <li>
                                <b>Pregio: (&#9679;) Resistente al Legame</b>: il personaggio &egrave; particolarmente resistente
                                ai legami di sangue, ed aggiunge un dado per ogni livello (massimo 3) di questo Pregio all'ammontare
                                di tutti i dadi di resistenza al legame di sangue.
                            </li>
                            <li>
                                <b>Pregio: (&#9679;&#9679;) Legame corto</b>: i legami di Sangue durano meno per il personaggio. Un legame
                                perde efficacia dopo ogni luna nuova o luna piena (cio&egrave; due volte al mese).
                            </li>
                            <li>
                                <b>Pregio: (&#9679;&#9679;&#9679;&#9679;&#9679;) Indipendente dal Legame</b>: i legami di Sangue non hanno
                                effetto sul personaggio. Il personaggio potrebbe anche pensare di vendere la sua vitae ad un alchimista.
                            </li>
                        </ul>
                    </li>

                    <li style={liStyle}>
                        <b>Caccia</b>: Ci sono diversi pregi e difetti legati alla caccia e al morso, del tutto indipendenti
                        tra di loro.

                        <ul>
                            <li>
                                <b>Difetto: (&#9679;&#9679;) Vegano</b>: il personaggio riesce a cibarsi solo di animali, e dovr&agrave;
                                spendere due punti di Forza di Volont&agrave; per potersi cibare di un umano. I <b>Ventrue</b> non
                                potranno prendere questo Difetto.
                            </li>
                            <li>
                                <b>Difetto: (&#9679;&#9679;) Organivoro</b>: il personaggio, oltre al sangue, deve consumare
                                anche gli organi e la carne delle vittime, specialmente gli organi ricchi di sangue.
                            </li>
                            <li>
                                <b>Difetto: (&#9679;) Esclusione di preda</b>: il Cainita non pu&ograve; cibarsi di particolari
                                classi di prede. Se &egrave; costretto a farlo, guadagner&agrave; una <b>Macchia</b> (vedere
                                la sezione delle meccaniche di gioco). Il personaggio guadagner&agrave; una Macchia anche se
                                assister&agrave; alla caccia di un altro Cainita ai danni della classe di prede di cui lui
                                non riesce a cibarsi senza intervenire.
                            </li>
                            <li>
                                <b>Pregio: (&#9679;) Mastino del sangue</b>: il personaggio riesce a captare la Risonanza del
                                sangue di un mortale con l'olfatto. Il personaggio potr&agrave; tentare un tiro di Risoluzione +
                                Allerta Diff. 3 a distanza di olfatto, 2 a distanza ravvicinata, 4 se altri odori sono presenti
                                nell'aria o se &egrave; ad una distanza maggiore.
                            </li>
                            <li>
                                <b>Pregio: (&#9679;&#9679;&#9679;) Stomaco di ferro</b>: il Cainita pu&ograve; cibarsi normalmente
                                di sangue freddo, rancido e plasma frazionato. Non guadagner&agrave; comunque Risonanza dal sangue.
                            </li>
                        </ul>
                    </li>

                    <li style={liStyle}>
                        <b>Mitici</b>: i seguenti Pregi e Difetti riguardano credenze e caratteristiche soprannaturali
                        del Cainita.
                        
                        <ul>
                            <li>
                                <b>Difetto: (&#9679;&#9679;) Debole al Paletto</b>: il personaggio soffre la Morte ultima
                                quando viene trafitto da un paletto al cuore, invece di entrare semplicemente in torpore.
                            </li>
                            <li>
                                <b>Difetto: (&#9679;) Maledizione da folklore</b>: il personaggio subisce danni Aggravati
                                da una fonte di danno folkloristico, tra cui:
                                <ul>
                                    <li>Acqua santa (come fuoco)</li>
                                    <li>Argento: armi d'argento infliggono aggravati, e anche toccare una moneta d'argento
                                        infligge danni aggravati
                                    </li>
                                    <li>Raggi UV (come Sole)</li>
                                </ul>
                            </li>
                            <li>
                                <b>Difetto: (&#9679;) Blocco da Folklore</b>: il Cainita ha un blocco psicologico dato da una
                                leggenda folkloristica. Il personaggio rifuggir&agrave; attivamente il confronto con questi
                                fenomeni, oppure dovr&agrave; spendere un punto di Forza di Volont&agrave; per oltrepassarli.
                                Il personaggio pu&ograve; avere pi&ugrave; di un blocco, e ogni blocco
                                sar&agrave; rappresentato da un punto aggiuntivo del difetto. Le leggende includono:
                                <ul>
                                    <li>Oggetti sacri branditi da persone normali (senza Vera Fede)</li>
                                    <li>Attraversare acqua corrente</li>
                                    <li>Entrare non invitato in una casa</li>
                                    <li>Animali bianchi</li>
                                    <li>Aglio</li>
                                    <li>Rose selvatiche</li>
                                    <li>Semi caduti che non sono stati contati</li>
                                </ul>
                            </li>
                            <li>
                                <b>Difetto: (&#9679;) Stigmate</b>: il personaggio comincia attivamente a sanguinare da ferite
                                aperte in tutto il corpo quando raggiunge Fame 4. Questo ovviamente attirer&agrave; l'attenzione,
                                e a discrezione del Narratore potr&agrave; provocare altri inconvenienti al vampiro.
                            </li>
                            <li>
                                <b>Pregio: (&#9679;&#9679;) Mangiare cibo</b>: normalmente un Cainita non tollera l'ingestione di
                                cibo. Pu&ograve; trattenerlo nello stomaco se spende vitae per simulare di essere ancora in vita,
                                altrimenti dovr&agrave; vomitarlo subito. Personaggi con questo pregio invece riescono
                                a mangiare senza problemi, e possono anche provare piacere, al contrario del resto che
                                ogni volta che assaggia cibo &egrave; come se assaggiasse cenere di sigaretta.<br />
                                Il personaggio dovr&agrave; comunque espellere il cibo prima del riposo diurno.
                            </li>
                        </ul>
                    </li>
                </ul>

            </Typography>

            <Typography paragraph>
                <h3 style={titleStyle}>
                    Pregi e Difetti dei Sangue Debole
                </h3>
            </Typography>

            <Typography paragraph sx={guideStyle}>
                I seguenti pregi e difetti non hanno valore, perch&egrave; fanno parte delle caratteristiche dei
                Sangue Debole. I personaggi di Sangue Debole, in altre parole, dovranno prendere almeno un pregio e
                un difetto di Sangue Debole, e non vedranno aumentare i propri punti nei Vantaggi. Per maggiori
                informazioni, consultare la <Link href={GuideRoutes.creation}>guida della creazione della scheda</Link>.
            </Typography>

            <Typography paragraph>
                <h4 style={titleStyle}>
                    Difetti
                </h4>
            </Typography>

            <Typography paragraph sx={guideStyle}>
                <ul>
                    <li style={liStyle}>
                        <b>Denti da Latte</b>: i denti del personaggio non si sono mai sviluppati correttamente,
                        o non esistono affatto, e sono inutili nel Morso. Il personaggio dovr&agrave; tagliare la
                        vittima per poter bere, o estrarre il sangue con una siringa.
                    </li>

                    <li style={liStyle}>
                        <b>Temperamento della Bestia</b>: il personaggio soffre la Bestia come qualsiasi altro Cainita.
                        Dovr&agrave; sottoporsi agli stessi test sulla frenesia dei vampiri normali.
                    </li>

                    <li style={liStyle}>
                        <b>Marchiato dalla Camarilla</b>: molti Principi della Camarilla cacciano i Sangue Debole
                        a vista e li distruggono. Altri invece li marchiano, aspettando che commettano la pur minima
                        infrazione per cacciarli e ucciderli come i loro colleghi. Il tuo personaggio &egrave;
                        stato marchiato dallo Scheriffo di una citt&agrave; Camarilla, e il marchio &egrave; una
                        ferita incurabile. Alla prossima infrazione, il personaggio avr&agrave; tutta la Camarilla
                        al suo inseguimento.<br />
                        &Egrave; ancora possibile prendere il Background Contatti con un PnG Camarilla.
                    </li>

                    <li style={liStyle}>
                        <b>Maledizione di Clan</b>: il personaggio soffre della maledizione del clan del Cainita che
                        l'ha abbracciato. La severit&agrave; del difetto &egrave; da considerarsi 1. Se il sangue
                        Debole ha acquisito il difetto <b>Temperamento della Bestia</b>, potr&agrave; acquisire
                        solamente la maledizione di clan Brujah o Gangrel, mentre potr&agrave; acquisire quella Tremere
                        solamente se acquisisce anche il Pregio Sangue Debole <b>Sangue incatenante</b>.
                    </li>

                    <li style={liStyle}>
                        <b>Carne Morta</b>: il Sangue del personaggio &egrave; troppo debole per sostenere la sua
                        natura non-morta, e quindi le sue carni sono sempre in uno stato di decomposizione. Oltre
                        al colore grigiastro, la pelle emana anche un nauseabondo odore di putrefazione. Il Sangue Debole
                        sottrarr&agrave; un dado all'ammontare di ogni tiro di interazione sociale con un umano, e
                        ovviamente non potr&agrave; prendere il pregio <b>Come vivo</b>.
                    </li>

                    <li style={liStyle}>
                        <b>Fragilit&agrave; mortale</b>: il Sangue non riesce a guarire le ferite del vampiro, e quindi
                        dovr&agrave; guarire danni come un mortale. Il personaggio non potr&agrave; acquisire il Pregio
                        <b>Resilienza Vampirica</b> se prende questo difetto.
                    </li>

                    <li style={liStyle}>
                        <b>Evitato dagli Anarchici</b>: il personaggio ha in qualche modo fatto infuriare qualche
                        Anarchico. Come risultato, tutti gli Anarchici del Regnum lo evitano, e piuttosto che averci
                        a che fare, lo consegnerebbero alla Camarilla. Se prende questo Difetto, il personaggio
                        non potr&agrave; acquisire il Pregio <b>Compagni Anarchici</b>.
                    </li>

                    <li style={liStyle}>
                        <b>Dipendenza dalla Vitae</b>: il Sangue del personaggio &egrave; troppo debole. Per questo
                        motivo, se il personaggio non riesce a bere una quantit&agrave; di sangue pari ad un pallino
                        di Fame di Vitae Vampirica, il personaggio non potr&agrave; usare i poteri Vampirici,
                        inclusa la Alchimia di Sangue Debole.
                    </li>
                </ul>
            </Typography>

            <Typography paragraph>
                <h4 style={titleStyle}>
                    Pregi
                </h4>
            </Typography>

            <Typography paragraph sx={guideStyle}>
                <ul>
                    <li style={liStyle}>
                        <b>Compagni Anarchici</b>: il personaggio &egrave; riuscito ad amicarsi una coterie Anarchica,
                        che lo sopporta, e alla meglio addirittura lo tratta come un animale da compagnia. Prendendo
                        questo Pregio, si deve acquisire anche un pallino di Mawla, corrispondente alla Coterie Anarchica.
                    </li>

                    <li style={liStyle}>
                        <b>Contatto in Camarilla</b>: il personaggio &egrave; riuscito ad amicarsi un Cainita della Camarilla
                        che lo tratta (malamente) come informatore, in cambio della possibilit&agrave; di entrare a far
                        parte della Camarilla diventando un Fratello a tutti gli effetti. Prendendo questo Pregio, si
                        deve acquisire anche un pallino di Mawla, corrispondente alla Contatto nella Camarilla.
                    </li>

                    <li style={liStyle}>
                        <b>Sangue Incatenante</b>: il vampiro Sangue Debole pu&ograve; Abbracciare e creare legami di
                        sangue come un Cainita normale, anche se tutti i vampiri creati dal Sangue Debole, saranno
                        a loro volta dei Sangue Debole.
                    </li>

                    <li style={liStyle}>
                        <b>Day Drinker</b>: la luce del Sole fa ancora meno danni al Sangue Debole rispetto al normale.
                        Stando alla luce del Sole, il vampiro dimezza (per eccesso) la Salute, e non pu&ograve; usare
                        i poteri del Sangue, per il resto non soffre altri danni.<br />
                        La Fame per&ograve; continua a venire percepita, e il vampiro sentir&agrave; il bisogno di
                        riposare. Se inoltre i danni subiti supereranno i livelli di salute dimezzati, il vampiro
                        entrer&agrave; in torpore finch&egrave; non verr&agrave; tolto dalla luce del Sole.<br />
                        <b>Home Rule</b>: Questo pregio non sar&agrave; disponibile in creazione.
                    </li>

                    <li style={liStyle}>
                        <b>Affinit&agrave; di Disciplina</b>: il Sangue Debole ha una affinit&agrave; con una
                        Disciplina. Il personaggio acquisisce questa Disciplina in creazione, e potr&agrave;
                        aumentarne il valore come se fosse un vampiro normale. Il Pregio pu&ograve; essere
                        preso solo in fase di creazione, e la Risonanza del sangue non avr&agrave; nessun
                        effetto sull'ammontare dei dadi per la Disciplina.
                    </li>

                    <li style={liStyle}>
                        <b>Come Vivo</b>: il personaggio ha un battito cardiaco, pu&ograve; mangiare cibo, e
                        approfittare dell'attivit&agrave; sessuale come un qualunque umano. Nessuna ispezione
                        medica, se non di altissima precisione, individua nessuna anomalia... di notte.
                    </li>

                    <li style={liStyle}>
                        <b>Alchimia di Sangue Debole</b>: il Sangue Debole cambia quando si nutre. L'Alchima
                        del Sangue sublima e aumenta l'intensit&agrave; di questo cambiamento. Che sia spontaneo
                        o il risultato degli insegnamenti di un mentore, o la lettura di note e formule di altri
                        "cuochi", il personaggio acquisisce un pallino di Alchimia di Sangue. Il personaggio
                        pu&ograve; acquisire altri punti di Alchimia del Sangue come se fosse una Disciplina
                        con l'esperienza. Questo Pregio pu&ograve; essere acquisito in gioco.
                    </li>

                    <li style={liStyle}>
                        <b>Resilienza Vampirica</b>: il personaggio soffre dei danni come un vampiro, e quindi
                        proiettili e danni da armi da taglio verranno considerati come dei semplici danni
                        superficiali.
                    </li>
                </ul>
            </Typography>
        </>
    );
}

export default GuidesAttributesAdvantages;
