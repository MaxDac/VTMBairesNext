import React, {ReactElement} from "react";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { guideStyle, liStyle, titleStyle } from "../../components/guides/GuidesStyles";
import {GuideRoutes} from "../../base/routes";
import GuideLayout from "../../components/layouts/GuideLayout";
import Clans from "./Clans";

const Creation = (): ReactElement => {
    return (
        <>
            <Typography paragraph>
                <h1 style={titleStyle}>
                    Creazione della Scheda
                </h1>
            </Typography>

            <Typography paragraph style={guideStyle}>
                La creazione della scheda &egrave; sicuramente una delle parti pi&ugrave; importanti del gioco.
                Una scheda ben pensata e in linea col personaggio agevola l'interpretazione, definisce punti di forza 
                e deboli del personaggio e consente ai master di "capirlo". Il sito di Buenos Aires by Night offre
                la possibilit&agrave; di creare automaticamente la scheda per quanto riguarda la definizione di Attributi,
                Abilit&agrave; e Discipline, ma lascia la definizione dei Vantaggi a voi giocatori.
            </Typography>

            <Typography paragraph style={guideStyle}>
                Il motivo &egrave; chiaro: i Vantaggi devono essere accompagnati da una spiegazione sufficientemente
                credibile per il personaggio, e potranno subire cambiamenti per adattarlo alla nostra ambientazione.
                Questa &egrave; la ragione per cui chiediamo di specificare Vantaggi, Pregi e Difetti in modo testuale.
            </Typography>

            <Typography paragraph style={guideStyle}>
                Un'altra caratteristica della scheda che dovrete indicare saranno le <b>Convinzioni</b>
                ovvero il credo fondamentale che segue il personaggio, e ne determina la sua umanit&agrave;.
                Le convinzioni saranno fondamentali per determinare cosa lo tiene aggrappato alla sua Umanit&agrave;,
                un codice (seppur minimo) di condotta al quale si rifaceva intimamente per poter giustificare le 
                proprie azioni. Non si devono confondere le convinzioni con il credo religioso, o per qualcosa di
                "buonista": il personaggio sar&agrave; un vampiro, e c'&egrave; una buona probabilit&agrave;
                che in vita non sia stato uno stinco di santo. In questo senso, le Convinzioni non dovranno
                corrispondere a buone intenzioni, ma semplicemente a dei minimi dettami morali che il 
                personaggio, intimamente, segue o seguiva per giustificare ci&ograve; che era, &egrave; 
                diventato e ci&ograve; che ha intenzione di fare.
            </Typography>

            <Typography paragraph style={guideStyle}>
                In ordine, ora, verranno dettagliate le parti della creazione automatica del personaggio.
            </Typography>

            <Typography paragraph>
                <h3 style={titleStyle}>
                    Informazioni generali
                </h3>
            </Typography>

            <Typography paragraph style={guideStyle}>
                Questa &egrave; la sezione pi&ugrave; importante della scheda. In questa sezione, dovrete definire il nome del 
                personaggio, il suo <Link href={GuideRoutes.clans}>Clan</Link>, il suo avatar,
                la sua descrizione, ma soprattutto la sua biografia, la storia della non vita (ed eventualmente dell'Abbraccio)
                del personaggio. La biografia dovr&agrave; essere credibile, e dovr&agrave; adattarsi all'ambientazione
                di Buenos Aires by Night. Una biografia priva di contenuti potr&agrave; determinare il rifiuto e la
                successiva cancellazione del personaggio.
            </Typography>

            <Typography paragraph style={guideStyle}>
                Potete trovare una serie di tipi di personaggio che ben si adattano all'Ambientazione di Buenos Aires 
                nella <Link href={GuideRoutes.currentSituation}>Situazione Attuale</Link>.
            </Typography>

            <Typography paragraph>
                <h3 style={titleStyle}>
                    Attributi e Abilit&agrave;
                </h3>
            </Typography>

            <Typography paragraph style={guideStyle}>
                Le successive due schermate riguardano la definizione di Attributi e Abilit&agrave;. Il sistema &egrave; automatico,
                potrete scegliere gli Attributi da affidare ai vari valori, e nella schermata delle Abilit&agrave; anche il tipo di 
                personaggio per la selezione delle Abilit&agrave;. La descrizione di Attributi e Abilit&agrave; pu&ograve; essere 
                consultata nella relativa <Link href={GuideRoutes.attributes}>pagina della guida</Link>.<br />
                Potrete anche scegliere di saltare completamente questa parte ed
                affidarvi a dei <i>Template</i>, un set pre-fabbricato di Attributi e Abilit&agrave; gi&agrave; costruiti e adatti
                per particolari tipi di personaggi. Se non avete intenzione di perdere troppo tempo nello stilare la scheda, e vi 
                fidate del giudizio dei master, selezionate pure un template, potrete comunque sostituire e sistema Abilit&agrave; e 
                Attributi alla fine del processo di creazione.
            </Typography>

            <Typography paragraph>
                <h3 style={titleStyle}>
                    Caratteristiche del personaggio
                </h3>
            </Typography>

            <Typography paragraph style={guideStyle}>
                La parte successiva della creazione riguarda le ultime caratteristiche del personaggio. I personaggi Cainiti dovranno
                selezionare le due Discipline che potranno avere in fase di creazione. Dato che ogni Disciplina, con il nuovo regolamento
                pu&ograve; avere pi&ugrave; di un potere per livello, <b>sar&agrave; necessario indicare nelle note al master, quali 
                poteri per ogni livello di Disciplina selezionato volete prendere</b>, dato che sar&agrave; possibile selezionare un
                solo potere per livello di Disciplina.
            </Typography>

            <Typography paragraph style={guideStyle}>
                <b>Nota</b>: col nuovo regolamento, la scelta dei poteri delle Discipline &egrave; differente da quello normalmente
                utilizzato nelle precedenti versioni di Vampiri: la Masquerade&trade;. Per ogni livello di punto Disciplina acquisito,
                sar&agrave; necessario indicare quale potere il Cainita conosce. La scelta, ad ogni livello, pu&ograve; ricadere su un 
                potere dello stesso livello acquisito, <b>o uno inferiore</b>. Esempio: un personaggio acquisisce il potere di 
                Ascendente a livello 1, e sceglie di prendere <b>Soggezione</b>. In seguito, decide di comprare con punti esperienza
                il secondo livello: in questo caso, pu&ograve; scegliere il potere di secondo livello, come <b>Bacio Persistente</b>, 
                oppure pu&ograve; scegliere di acquistare il secondo potere di primo livello, <b>Intimidire</b>. Nel caso in cui scelga 
                di prendere <b>Bacio Persistente</b>, e acquisti il terzo livello della Disciplina, anche in quel caso potr&agrave;
                scegliere di prendere un potere di terzo livello, oppure di acquistare <b>Intimidire</b>, nonostante sia 2 livelli 
                inferiore.
            </Typography>

            <Typography paragraph style={guideStyle}>
                Potrete trovare le Discipline <Link href={GuideRoutes.attributes}>nell'apposita sezione della guida</Link>.
            </Typography>

            <Typography paragraph>
                <h4 style={titleStyle}>
                    Tipo di Predatore
                </h4>
            </Typography>
                
            <Typography paragraph style={guideStyle}>
                Per Cainiti e personaggi di Sangue Debole, si dovr&agrave; anche scegliere il Tipo di Predatore. La scelta di
                Tipo di Predatore garantir&agrave; anche attributi aggiuntivi alla scheda, come 
                le <Link href={GuideRoutes.attributes}><a id="specialties"><b>Specialit&agrave;</b></a></Link> del personaggio e <b>un
                    solo</b> pallino di Disciplina a scelta tra quelle indicate. Ovviamente, sar&agrave; privilegiata la 
                    Disciplina di clan rispetto ad una non di clan. Ad esempio: se un <b>Brujah</b> ha intenzione di prendere
                    il Tipo di Predatore Sirena, avr&agrave; un punto gratuito in <b>Ascendente</b> e non potr&agrave;
                    quindi prendere il pallino in <b>Robustezza</b>.<br />
                Il Tipo di Predatore &egrave; estremamente indicativo del personaggio che vorrete interpretare, e i 
                Narratori potranno cambiarlo in base al vostro background: &egrave; infatti inverosimile per un Gangrel
                abituato alla vita solitaria nella natura, poter essere un Tipo di Predatore <b>Osiride</b>.<br />
                Potrete scegliere tra questi:

                <ul>
                    <li style={liStyle}>
                        <b>Accattone</b>: l'accattone preferisce procurarsi sangue senza cacciare, acquistando sacche di sangue, rubandole
                        o acquisendole con altri mezzi. Il personaggio potrebbe ancora lavorare il turno di notte in Ospedale.
                        I <b>Ventrue</b> non potranno acquisire questo tipo di predatore.<br />

                        <ul>
                            <li><b>Specialit&agrave;</b>: Bassifondi (Mercato nero) e Criminalit&agrave; (Scassinare)</li>
                            <li><b>Disciplina</b>: Oscurazione o Stregoneria del Sangue (solo Tremere)</li>
                            <li><b>Pregio</b>: Stomaco di Ferro (&#9679;&#9679;&#9679;)</li>
                            <li><b>Difetto</b>: Nemico (&#9679;&#9679;) (ha un creditore, o un'altra ragione per cui 
                                il personaggio si tiene lontano dalle strade)</li>
                        </ul>
                    </li>
                    <li style={liStyle}>
                        <b>Allevatore</b>: l'Allevatore non si nutre di esseri umani, ma solamente di animali. Normalmente, questo tipo
                        di Cainita in vita era una persona con fortissimi principi morali, che ha trasposto anche nella non vita.
                        Il fatto di nutrirsi di animali rischia per&ograve; di aumentare la <b>Fame</b>, quindi vivono sempre col
                        pericolo della Frenesia.<br />

                        <ul>
                            <li><b>Specialit&agrave;</b>: Affinit&agrave; Animale (specificare animale) e Sopravvivenza (Caccia)</li>
                            <li><b>Disciplina</b>: Animalit&agrave; o Proteide</li>
                            <li><b>Pregio</b>: riceve un pallino di Umanit&agrave;</li>
                            <li><b>Difetto</b>: Vegano (&#9679;&#9679;)</li>
                        </ul>
                    </li>
                    <li style={liStyle}>
                        <b>Consensualista</b>: il personaggio pu&ograve; nutrirsi solo di mortali consenzienti. Questo tipo di Cainita 
                        potrebbe correre il costante rischio di infrangere la Masquerade, dato che la vittima rischia di poter capire
                        cosa &egrave; realmente il Cainita.<br />

                        <ul>
                            <li><b>Specialit&agrave;</b>: Convincere (Vittime) e Medicina (Flebotomia)</li>
                            <li><b>Disciplina</b>: Auspex o Robustezza</li>
                            <li><b>Pregio</b>: riceve un pallino di Umanit&agrave;</li>
                            <li><b>Difetto</b>: Segreto Oscuro (&#9679;) per aver trasgredito la Masquerade e 
                                Esclusione di Preda (&#9679;) non consenzienti</li>
                        </ul>
                    </li>
                    <li style={liStyle}>
                        <b>Osiride</b>: il personaggio durante la vita era un guru, un personaggio famoso o comunque
                        molto seguito, come un DJ, uno scrittore, o un predicatore. Ha sempre accesso a Sangue facile,
                        ma il culto che lo segue gli provoca molto spesso problemi con le autorit&agrave;, o perfino
                        con la Camarilla.<br />

                        <ul>
                            <li><b>Specialit&agrave;</b>: Espressivit&agrave; (intrattenimento specifico riferito alla
                            professione seguita in vita) e Occulto (specifica tradizione)</li>
                            <li><b>Disciplina</b>: Ascendente o Stregoneria del Sangue (solo Tremere)</li>
                            <li><b>Pregio</b>: deve spendere (quindi <b>non saranno gratuiti</b>) tre pallini nei Background
                                <b>Fama</b> e/o <b>Gregge</b>.</li>
                            <li><b>Difetto</b>: deve spendere due pallini a piacere nei Difetti <b>Nemico</b> o mitici.</li>
                        </ul>
                    </li>
                    <li style={liStyle}>
                        <b>Randagio</b>: il personaggio caccia e si nutre di qualsiasi cosa si muova, ogni volta che pu&ograve;. Il personaggio
                        si nasconde, tende agguati, si nutre e poi scappa, il pi&ugrave; velocemente possibile.<br />

                        <ul>
                            <li><b>Specialit&agrave;</b>: Intimidire (Rapina) e Rissa (Lotta)</li>
                            <li><b>Disciplina</b>: Potenza o Velocit&agrave;</li>
                            <li><b>Pregio</b>: tre pallini di <b>Contatti</b> nella Criminalit&agrave;</li>
                            <li><b>Difetto</b>: sottrae un pallino di Umanit&agrave;</li>
                        </ul>
                    </li>
                    <li style={liStyle}>
                        <b>Sandman</b>: il vampiro Sandman si nutre di vittime addormentate, sfruttando la sua Furtivit&agrave;. Il tipico
                        personaggio Sandman potrebbe essere un anti-sociale, o qualcuno particolarmente attento alla Masquerade (d'altronde 
                        se non si svegliano quando si nutre, non potranno mai sapere che il personaggio &egrave; stato l&igrave;).<br />

                        <ul>
                            <li><b>Specialit&agrave;</b>: Furtivit&agrave; (Effrazione) e Medicina (Anestesia)</li>
                            <li><b>Disciplina</b>: Auspex o Oscurazione</li>
                            <li><b>Pregio</b>: un pallino in Risorse</li>
                        </ul>
                    </li>
                    <li style={liStyle}>
                        <b>Sanguisuga (non disponibile in creazione)</b>: il personaggio si nutre di altri vampiri. Li pu&ograve; cacciare, 
                        li pu&ograve; costringere, o pu&ograve; pretendere sangue come pagamento. Giocare un personaggio sanguisuga 
                        pu&ograve; essere estremamente pericoloso, in quanto questa pratica &egrave; proibita nella comunit&agrave; Cainita.
                    </li>
                    <li style={liStyle}>
                        <b>Scene Queen</b>: il personaggio Scene Queen gode di popolarit&agrave; in una subcultura, sia essa <i>underground</i>, 
                        nelle strade o qualche altolocato circolo culturale, e sfrutta popolarit&agrave; e status per cibarsi di chi la 
                        considera un esempio da seguire in quella comunit&agrave;. Probabilmente, il vampiro era gi&agrave; una star
                        in quel particolare gruppo.<br />

                        <ul>
                            <li><b>Specialit&agrave;</b>: Autorit&agrave; (limitato ad una specifica "scena"), e a scelta una tra
                            Bassifondi (per la stessa "scena") o Galateo (per la stessa "scena")</li>
                            <li><b>Disciplina</b>: Dominazione o Potenza</li>
                            <li><b>Pregio</b>: un pallino in Fama e uno in Contatti</li>
                            <li><b>Difetto</b>: Esclusione di Preda (&#9679;) per sottoculture o scene differenti dalla sua</li>
                        </ul>
                    </li>
                    <li style={liStyle}>
                        <b>Simulante</b>: il Simulante ha ancora una famiglia mortale (oppure si &egrave; impossessato di una non sua), e 
                        continua ad avere contatti con essa anche nella non-morte. Alcuni Simulanti addirittura si sposano, o adottano figli.
                        Ovviamente questo per la Camarilla &egrave; un atteggiamento ritenuto pericoloso, e potrebbe prendere seri provvedimenti,
                        arrivando fino ad uccidere la famiglia mortale del Cainita.<br />

                        <ul>
                            <li><b>Specialit&agrave;</b>: Convincere (Disorientare) e Sotterfugio (Insabbiare)</li>
                            <li><b>Disciplina</b>: Animalit&agrave; o Dominazione</li>
                            <li><b>Pregio</b>: due pallini di Gregge</li>
                            <li><b>Difetto</b>: Segreto Oscuro (&#9679;) Simulante</li>
                        </ul>
                    </li>
                    <li style={liStyle}>
                        <b>Sirena</b>: il personaggio Sirena si nutre solamente durante un amplesso simulato. Sfrutta le sue capacit&agrave;
                        seduttive, il suo sex appeal, o... altro, per intraprendere una relazione sessuale di una notte, nutrirsi, e 
                        quindi abbandonare la preda per non rivederla mai pi&ugrave;. Potrebbero essere avventori o dipendenti di Night Club,
                        o semplicemente essere molto attivi su Tinder.<br />

                        <ul>
                            <li><b>Specialit&agrave;</b>: Convincere (Seduzione) e Sotterfugio (Seduzione)</li>
                            <li><b>Disciplina</b>: Ascendente o Robustezza</li>
                            <li><b>Pregio</b>: Aspetto: Attraente (&#9679;&#9679;)</li>
                            <li><b>Difetto</b>: Nemico (&#9679;): un amante rifiutato, o un amante geloso</li>
                        </ul>
                    </li>
                </ul>

                Scegliere un predatore comporta anche un numero di Vantaggi / Discipline / Specializzazioni di Abilit&agrave;. Non 
                verranno elencate qui, e la decisione su quali aggiungere alla scheda saranno comunque appannaggio dei master; queste
                potrebbero anche <b>non corrispondere a quelle elencate nel Corebook</b>. 
                L'idea &egrave; quella di concentrarsi sulla natura del personaggio, pi&ugrave; che sull'elenco di bonus e malus 
                che un tipo di predatore garantisce.
            </Typography>

            <Typography paragraph style={guideStyle}>
                In seguito dovrete scegliere Vantaggi e scrivere le Note. Tra i Vantaggi, potrete scegliere di assegnare <b>5 punti</b> tra
                Background, Pregi e Difetti, elencati <Link href={GuideRoutes.attributes}>nella relativa pagina della guida</Link>. Questo 
                si discosta dalla regola del <b>Corebook</b>, ma &egrave; pi&ugrave; adatto per giocatori alle prime armi, ai quali sconsigliamo
                di prendere Pregi e Difetti, per concentrarsi invece sui <b>Backgrounds</b>. Ovviamente, se scegliete di prendere un Difetto,
                il valore del Difetto andr&agrave; sommato al punteggio totale per il valore del Difetto, per un massimo di 2 punti difetto.<br />
                Ad esempio, se decidete di prendere due difetti da un punto per il vostro personaggio, avrete ora a disposizione 7 punti totali
                da spendere su Background e Pregi. In fase di creazione, <b>il numero di pallini di difetto non pu&ograve; essere maggiore di 2</b>.
            </Typography>
            
            <Typography paragraph style={guideStyle}>
                I personaggi <b>Sangue Debole</b> dovranno poi, dopo aver selezionato i Vantaggi secondo le regole appena descritte,
                selezionare un numero uguale di Pregi e Difetti tipici per i Sangue Debole, descritti nella pagina di Attributi, per un massimo di 3.
                Questo significa che, ad esempio, un personaggio potr&agrave; acquisire un pregio e un difetto da Sangue Debole,
                due Pregi e due Difetti Sangue Debole, o tre Pregi e tre Difetti Sangue Debole: <b>Il numero di Pregi e Difetti da
                Sangue Debole dovr&agrave; essere uguale</b>.
            </Typography>

            <Typography paragraph>
                <h4 style={titleStyle}>
                    Specialit&agrave;
                </h4>
            </Typography>

            <Typography paragraph style={guideStyle}>
                Ogni personaggio acquisir&agrave; automaticamente entrambe le Specialit&agrave; in funzione 
                del Tipo di Predatore selezionato, una riferita ad una Abilit&agrave; a piacere, e una per ciascuna delle 
                seguenti Abilit&agrave;, se il personaggio possiede almeno un pallino:

                <ul>
                    <li style={liStyle}>
                        Accademiche
                    </li>

                    <li style={liStyle}>
                        Espressivit&agrave;
                    </li>

                    <li style={liStyle}>
                        Manualit&agrave;
                    </li>

                    <li style={liStyle}>
                        Scienze
                    </li>
                </ul>

                Una specialit&agrave; dovr&agrave; essere riferita ad un campo specifico dell'Abilit&agrave;. I 
                narratori potranno modificare o specificare meglio il settore di una particolare Specialit&agrave;.<br />
                Per avere maggiori informazioni riguardo la Specialit&agrave;, controllare
                la <Link href={GuideRoutes.attributes}>guida</Link>.
            </Typography>

            <Typography paragraph style={guideStyle}>
                <b>Nota</b>: per i giocatori che hanno scelto di disporre i punteggi di Attributi e Abilit&agrave; con 
                i template, dovrete fornire le seguenti Specialità in base al template da voi scelto:

                <ul>
                    <li style={liStyle}>
                        <b>Studioso</b>;
                        <ul>
                            <li>Accademiche</li>
                            <li>Espressivit&agrave;</li>
                            <li>Scienza</li>
                        </ul>
                    </li>
                    
                    <li style={liStyle}>
                        <b>Lottatore</b>; <i>nessuna</i>
                    </li>

                    <li style={liStyle}>
                        <b>Leader</b>;
                        <ul>
                            <li>Accademiche</li>
                            <li>Espressivit&agrave;</li>
                        </ul>
                    </li>
                </ul>
            </Typography>

            <Typography paragraph>
                <h4 style={titleStyle}>
                    Convinzioni
                </h4>
            </Typography>

            <Typography paragraph style={guideStyle} id="convictions">
                Nell'apposita sezione, invece, dovrete scegliere tre <b>Convinzioni</b>.<br />
                Le Convinzioni riassumono le regole morali che il personaggio seguiva in vita, e che lo mantengono umano. Questo &egrave;
                un aspetto <b>importantissimo</b> per il personaggio, in quanto le convinzioni lo aiutano a resistere alle lusinghe della 
                Bestia. Potrete scegliere <b>tre</b> tra le seguenti Convinzioni, proposte dal <b>Corebook</b>, oppure proporne alcune vostre:

                <ul>
                    <li>Non ucciderai</li>
                    <li>Uccidi solo gli immeritevoli/i miscredenti/in un combattimento leale/per legittima difesa</li>
                    <li>Mai esporre i minori alla violenza</li>
                    <li>Ama il prossimo tuo come te stesso</li>
                    <li>Disobbedienza equivale a disonore</li>
                    <li>Proteggi gli innocenti dai pericoli</li>
                    <li>Il coraggio &egrave; il valore pi&ugrave; importante</li>
                    <li>Mantieni sempre la tua parola</li>
                    <li>La Verit&agrave; &egrave; sacra; non dirai falsa testimonianza</li>
                    <li>La schiavit&ugrave; &egrave; malvagit&agrave;</li>
                    <li>Obbedisci all'Autorit&agrave;</li>
                    <li>Il mio Paese prima di tutto</li>
                    <li>Nessuno potr&agrave; mai controllarmi</li>
                    <li>Non indulgere nelle droghe (o nell'alcol)</li>
                    <li>Non torturerai</li>
                    <li>Il colpevole dovr&agrave; essere punito</li>
                    <li>Da ciascuno secondo le sue capacit&agrave;, per ciascuno secondo i suoi bisogni</li>
                    <li>Ruba al ricco per dare al povero</li>
                    <li>Rifiuta la ricchezza, poich&eacute; corrompe.</li>
                    <li>Non agire contro (inserisci gruppo/fede/setta)</li>
                    <li>Aiuta sempre le donne in pericolo</li>
                    <li>Difendi i diseredati</li>
                    <li>Rispetta (inserisci religione) come sacra e rispettane le leggi morali</li>
                </ul>

            </Typography>

            <Typography paragraph>
                <h3 style={titleStyle}>
                    Ritocchi finali
                </h3>
            </Typography>

            <Typography paragraph style={guideStyle}>
                In questa sezione potrete scambiare i valori della vostra scheda da un Attributo all'altro, e tra
                un'Abilit&agrave; e l'altra. Soprattutto se avete scelto di affidarvi ad un <i>template</i> per la 
                definizione del personaggio, in questa sezione potrete personalizzarlo, avendo a disposizione 
                visualmente tutta la scheda del vostro personaggio.
            </Typography>

            <Typography paragraph style={guideStyle}>
                Una volta finiti i ritocchi del personaggio, potrete confermarlo, oppure cancellarlo e ricominciare
                da capo. Se scegliete di confermarlo, i master prenderanno visione della scheda, apporranno le 
                dovute modifiche alla scheda, e accetteranno il personaggio, o vi contatteranno per sistemarlo.<br />
                Nel frattempo, potrete continuare a visionare il sito e le chat, per familiarizzare con il gioco, 
                potrete scrivere post nel Forum, mandare messaggi, e soprattutto partecipare alla vita della 
                Comunit&agrave; <b>VTM Baires</b> su <b>Discord</b>.
            </Typography>
        </>
    );
}

Creation.getLayout = (page: ReactElement) => (
    <GuideLayout>
        {page}
    </GuideLayout>
)

export default Creation;
