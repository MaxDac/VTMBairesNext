import React, {ReactElement} from "react";
import Typography from "@mui/material/Typography";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from "@mui/material/Box";
import StyledTableRow from "../../components/guides/StyledTableRow";
import StyledTableCell from "../../components/guides/StyledTableCell";
import {guideStyle, liStyle, titleStyle} from "../../components/guides/GuidesStyles";
import {
    freeHavenFillColorWithoutOpacity,
    occupiedHavenFillColorWithoutOpacity,
    personalHavenFillColorWithoutOpacity,
} from "../../components/haven/haven-map-areas-helpers";
import GuideLayout from "../../components/layouts/GuideLayout";

const Hunt = (): ReactElement => {
    return (
        <>
            <Typography paragraph>
                <h1 style={titleStyle}>
                    Caccia
                </h1>
            </Typography>

            <Typography paragraph style={guideStyle}>
                Per i Cainiti, la caccia &egrave; di fondamentale importanza. Il <b>Sangue</b>, oltre ad essere al fonte 
                di nutrimento e di potere dei vampiri, ne determina anche, almeno in parte, lo stato emotivo e la 
                propensione a certe Discipline. Per questo motivo, per qualsiasi Cainita, &egrave; di fondamentale
                importanza garantirsi un approvigionamento di sangue costante e possibilmente di qualit&agrave;, per non
                soffrire i morsi della Fame e rischiare di entrare in Frenesia, con conseguenze possibilmente 
                devastanti.
            </Typography>

            <Typography paragraph style={guideStyle}>
                La caccia &egrave; completamente automatizzata nel sito, dovrete solo scegliere in quale zona far 
                cacciare il vostro personaggio: dipendendo dalla zona, infatti, la difficolt&agrave; nel reperire la 
                preda potr&agrave; variare, cos&igrave; come i pericoli in cui il Cainita pu&ograve; incorrere.
            </Typography>

            <Typography paragraph>
                <h3 style={titleStyle}>
                    Tiro di Caccia
                </h3>
            </Typography>

            <Typography paragraph style={guideStyle}>
                In fase di creazione del personaggio, ogni giocatore deve selezionare il Tipo di Predatore associato.
                Il Tipo di Predatore influenza enormemente le caratteristiche in scheda del personaggio, poich&eacute;
                &egrave; la caccia stessa che influenza enormemente le abitudini dei Cainiti. Per questo motivo, il Tiro
                di Caccia, ovvero il tiro che verr&agrave; automaticamente eseguito ogni volta che il personaggio 
                caccia, dipender&agrave; dal Tipo di Predatore che avete scelto.
            </Typography>

            <Typography paragraph style={guideStyle}>
                Ispirandosi al manuale, di seguito potete trovare elencati i tiri associati ad ogni Tipo di Predatore:

                <ul>
                    <li style={liStyle}><b>Accattone</b>: Intelligenza + Bassifondi.</li>
                    <li style={liStyle}><b>Allevatore</b>: Autocontrollo + Affinit&agrave; Animale.</li>
                    <li style={liStyle}><b>Consensualista</b>: Persuasione + Convincere.</li>
                    <li style={liStyle}><b>Osiride</b>: Persuasione + Sotterfugio.</li>
                    <li style={liStyle}><b>Randagio</b>: Prontezza + Bassifondi.</li>
                    <li style={liStyle}><b>Regina della Scena</b>: Persuasione + Convincere.</li>
                    <li style={liStyle}><b>Sandman</b>: Destrezza + Furtivit&agrave;.</li>
                    <li style={liStyle}><b>Simulante</b>: Persuasione + Sotterfugio.</li>
                    <li style={liStyle}><b>Sirena</b>: Carisma + Sotterfugio.</li>
                </ul>
            </Typography>

            <Typography paragraph>
                <h3 style={titleStyle}>
                    Difficolt&agrave; intrinseca di caccia
                </h3>
            </Typography>

            <Typography paragraph style={guideStyle}>
                Ogni personaggio avr&agrave; una difficolt&agrave; intrinseca di caccia dipendente dalle caratteristiche
                che ha espresso nella scheda. Particolari Background, come Gregge, o particolari Difetti, come 
                Esclusione di Preda, influiscono direttamente sulla scelta della Difficolt&agrave; base del tiro per la 
                caccia.

                <ul>
                    <li style={liStyle}>
                        <b>Gregge</b>: il punteggio di Gregge diminuir&agrave; di 1 punto la Difficolt&agrave; di caccia
                        fino ad un livello minimo di 0.
                    </li>
                    <li style={liStyle}>
                        <b>Esclusione di Preda</b>: ogni Difetto Esclusione di Preda acquisito aumenter&agrave; la 
                        difficolt&agrave; del tiro di caccia di 1. I Venrue dovranno considerare anche il Difetto 
                        "naturale" del loro lignaggio, quindi se acquisiranno un altro Difetto di questo tipo, 
                        vedranno la Difficolt&agrave; del tiro aumentata di 2.
                    </li>
                    <li style={liStyle}>
                        <b>Succulenza Animale</b>: acquisendo questo potere di Animalit&agrave;, il personaggio porta
                        automaticamente a 0 la Difficolt&agrave; del tiro.
                    </li>
                </ul>

                Il Narratore potr&agrave; comunque determinare la Difficolt&agrave; del tiro di caccia in base anche ad
                altri parametri, e quindi a sua discrezione la Difficolt&agrave; potrebbe non seguire alla lettera
                questo regolamento. Un caso particolare potrebbe ad esempio essere la scelta di pi&agrave; livelli di
                Esclusione di Preda, che potrebbero aumentare la Difficolt&agrave; del tiro.
            </Typography>
            
            <Typography paragraph style={guideStyle}>
                Sar&agrave; possibile consultare la Difficolt&agrave; del tiro di Caccia in scheda, accanto al Tipo
                di Predatore.
            </Typography>

            <Typography paragraph>
                <h3 style={titleStyle}>
                    Il Dominio
                </h3>
            </Typography>

            <Typography paragraph style={guideStyle}>
                Ogni personaggio potr&agrave; selezionare una locazione come suo Dominio, richiedendola ad un Narratore. 
                Ogni locazione ha una serie di caratteristiche che ne determinano la pericolosit&agrave;, le 
                caratteristiche medie delle persone che ci vivono, che influenzano la risonanza del sangue pi&ugrave; 
                facile da trovare, e il livello di <b>Risorse</b> che il personaggio deve avere per sostenere i costi. 
                Il punteggio di Risorse espresso dalla locazione non esprime direttamente il numero di "pallini" di 
                Risorse necessari per ottenere il Dominio: altri Background potrebbero influenzare la possibilit&agrave; 
                di reclamare un Dominio, come Alleati, Influenza o Fama. 
            </Typography>

            <Typography paragraph style={guideStyle}>
                In fase di accettazione della scheda, potrete proporre una locazione come Dominio del vostro 
                personaggio, e a sua discrezione il Narratore potr&agrave; accettare la vostra scelta o indicare le 
                caratteristiche di una locazione accessibile al vostro personaggio. Ad esempio, se il personaggio ha 
                Risorse 1, ma un Alleato di livello 2 e un Rifugio di livello 2, potrebbe aver sfruttato la sua 
                conoscenza per aver ottenuto un attico protetto poco in vista, protetto dalla luce del giorno, senza 
                aver dovuto sborsare denaro.
            </Typography>

            <Typography paragraph style={guideStyle}>
                La propriet&agrave; di un Dominio &egrave; una caratteristica "fluida" associata al personaggio, come i 
                Background di cui dispone. Un personaggio pu&ograve; espandere il suo Dominio a seguito di giocate o di
                riscossione di Favori, cos&igrave; come potrebbe semplicemente ottenere permesso di caccia in un Dominio
                di un altro personaggio previa concessione di un Favore (Minore o Maggiore, dipendendo dalle 
                caratteristiche del Dominio e, soprattutto, dalla sagacia dimostrata nella trattativa dai personaggi).
            </Typography>

            <Typography paragraph style={guideStyle}>
                Ogni Dominio ha poi delle caratteristiche proprie.

                <ul>
                    <li style={liStyle}>
                        <b>Difficolt&agrave;</b>: il modificatore di Difficolt&agrave; del Dominio agire direttamente
                        sul tiro di Caccia. Una locazione pu&ograve; offrire un bonus alla Difficolt&agrave; (valori
                        negativi), pu&ograve; non incidere, o pu&oagrave; addirittura aumentarla.
                    </li>

                    <li style={liStyle}>
                        <b>Risorse</b>: questo punteggio determina quante risorse il personaggio deve possedere per 
                        vantare la propriet&agrave; e l'esclusiva di Caccia del Dominio. Un particolare Dominio ad 
                        esempio potrebbe essere stato concesso dal Principe ad un personaggio in base al suo Status.
                    </li>

                    <li style={liStyle}>
                        <b>Pericolosit&agrave;</b>: la Caccia &egrave; generalmente molto rischiosa. La necessit&agrave; 
                        di mantenere la Masquerade, la Seconda Inquisizione, altre creature soprannaturali, o magari
                        semplicemente forze dell'ordine particolarmente zelanti potrebbero creare problemi al Cainita.
                        La pericolosit&agrave; quantifica proprio questo aspetto.
                    </li>

                    <li style={liStyle}>
                        <b>Controllo</b>: esprime il controllo del territorio operato sul Dominio. Maggiore &egrave; il 
                        controllo, maggiore sar&agrave; la probabilit&agrave; che la locazione sia monitorata. Questa
                        caratteristica diventa fondamentale se il personaggio vuole cacciare in una locazione gi&agrave;
                        occupata da un altro Cainita, in quanto maggiore &egrave; il controllo, maggiore sar&agrave; la
                        probabilit&agrave; che il vampiro venga scoperto.
                    </li>
                </ul>
            </Typography>

            <Typography paragraph>
                <h3 style={titleStyle}>
                    La schermata
                </h3>
            </Typography>

            <Typography paragraph style={guideStyle}>
                La caccia automatica &egrave; accessibile dal menu a sinistra all'interno del sito. Per poter accedere
                alla Caccia, sar&agrave; necessario "Risvegliare" il personaggio. Il Risveglio preclude un test sul
                Risveglio del Sangue: se il test fallisce, la Fame del personaggio aumenter&agrave; automaticamente di
                1. Dopo aver risvegliato il personaggio, il pulsante di Caccia sar&agrave; disponibile, e sarete
                condotti alla schermata di Caccia.
            </Typography>

            <Typography paragraph style={guideStyle}>
                La pagina di Caccia mette a disposizione una serie di locazioni in giro per la citt&agrave; ognuna delle 
                quali con caratteristiche differenti, e colori diversi per rappresentare lo stato di occupazione.

                <ul>
                    <li style={liStyle}>
                        <span style={{
                            fontWeight: "bold",
                            color: personalHavenFillColorWithoutOpacity
                        }}>Verde</span>: le locazioni marcate in verde costituiscono il Dominio (o i Domini) del vostro 
                        personaggio. Cacciando nel vostro Dominio non si incorrer&agrave; nel rischio di venire 
                        identificati da altri Cainiti, e i rischi connessi alla caccia saranno contenuti.
                    </li>

                    <li style={liStyle}>
                        <span style={{
                            fontWeight: "bold",
                            color: occupiedHavenFillColorWithoutOpacity
                        }}>Rosso</span>: le locazioni marcate col colore rosso intenso sono attualmente occupate da 
                        altri personaggi (giocanti o non giocanti). &Egrave; possibile cacciare all'interno del Dominio
                        di altri personaggi, ma dipendendo dal punteggio di <b>Controllo</b> della locazione, 
                        il Cainita del Dominio potrebbe accorgersi della vostra intrusione, con conseguenze pi&agrave;
                        o meno spiacevoli.
                    </li>

                    <li style={liStyle}>
                        <span style={{
                            fontWeight: "bold",
                            color: freeHavenFillColorWithoutOpacity,
                        }}>Neutro</span>: le locazioni con colore neutro non sono reclamate da nessuno come proprio 
                        Dominio, quindi sono potenzialmente libere per la caccia indipendente. In queste aree, comunque,
                        la difficolt&agrave; di caccia potrebbe essere variabile, e non necessariamente uguale a quella
                        del Dominio del vostro personaggio.
                    </li>
                </ul>
            </Typography>

            <Typography paragraph style={guideStyle}>
                Per ogni locazione non occupata verranno indicate le coordinate tra parentesi. Le coordinate vi 
                permetteranno di indicare al Narratore che si occuper&agrave; di accettare la vostra scheda quale 
                locazione volete come Dominio del vostro personaggio.<br />
                La schermata offre anche una stima delle caratteristiche di una particolare locazione. Selezionando 
                una locazione, vi verr&agrave; chiesto di confermare la vostra scelta, quindi l'esito della caccia
                apparir&agrave; come notifica in basso a sinistra, e sar&agrave; disponibile anche in scheda nella
                sezione delle statistiche.
            </Typography>

            <Typography paragraph>
                <h3 style={titleStyle}>
                    Gli eventi del Dominio
                </h3>
            </Typography>

            <Typography paragraph style={guideStyle}>
                Dato che un personaggio pu&ograve; cacciare nel Dominio di un altro personaggio giocante, potrebbe
                succedere che quest'ultimo se ne accorga. In chat sar&agrave; presente una schermata chiamata <b>Eventi
                Dominio</b>, in cui ogni personaggio potr&agrave; consultare le infrazioni commesse da altre personaggi.
                Le infrazioni possono essere una semplice Caccia nel proprio Dominio, oppure un evento potenzialmente
                catastrofico innescato da un altro personaggio, che potrebbe rendere presto il 
                Dominio <i>off-limits</i>.
            </Typography>

            <Typography paragraph style={guideStyle}>
                Si ricordi che una delle Tradizioni della Camarilla &egrave; la Tradizione del Dominio, e che
                all'interno di un Dominio il personaggio fa le veci del Principe, e pu&ograve; esigere giustizia dalla
                burocrazia della Camarilla... che solitamente vuol dire che il personaggio pu&ograve; denunciare 
                l'infrazione allo Sceriffo. Alternativamente, il personaggio pu&ograve; chiedere di essere ripagato
                con un Favore; insomma, eventi di questo tipo possono e devono essere un incentivo al gioco politico
                in chat.
            </Typography>

            <Typography paragraph>
                <h3 style={titleStyle}>
                    Ubicaione del Rifugio
                </h3>
            </Typography>

            <Typography paragraph style={guideStyle}>
                Rifugio e Dominio sono considerati come due concetti differenti. Mentre il Dominio &egrave; la porzione
                di territorio che un Cainita pu&ograve; reclamare come sua zona di caccia, il rifugio &egrave; 
                materialmente la sistemazione che il Cainita ha costruito o comprato, e rinforzato per renderla sicura 
                dai raggi solari, e potrebbe <b>non trovarsi</b> nella zona di territori del suo Dominio.
                Per questa ragione, conoscere il Dominio di un personaggio <b>non equivale</b> a conoscere l'ubicazione
                del suo rifugio; nel caso in cui un personaggio voglia danneggiarne un altro agendo suo suo rifugio, 
                quindi, dovr&agrave; sempre impegnarsi a scoprire l'esatta ubicazione del Rifugio del Cainita.
            </Typography>

            <Typography paragraph>
                <h3 style={titleStyle}>
                    La Risonanza del Sangue
                </h3>
            </Typography>

            <Typography paragraph style={guideStyle}>
                Il Sangue non porta con s&eacute; solo nutrimento, ma anche una <b>Risonanza</b>, ovvero il carico 
                emotivo della vittima della caccia. Il Sangue viene percepito in modo differente a seconda delle 
                emozioni del mortale dal quale il Cainita si nutre, e le emozioni influenzeranno anche lo stato emotivo
                del Cainita stesso, a seconda della potenza della risonanza.
            </Typography>

            <Typography paragraph style={guideStyle}>
                Il tiro di Caccia determina automaticamente la Risonanza, che verr&agrave; specificata sia nella 
                notifica a seguito della Caccia, sia nello status del personaggio, visibile tra le statistiche in scheda
                e nello status accessibile nella pagina di chat, tra i comandi disponibili.
            </Typography>

            <Typography paragraph style={guideStyle}>
                La Risonanza, oltre potenzialmente a modificare lo stato d'animo del Cainita, influenza anche 
                l'efficacia delle Discipline del personaggio. Particolari Risonanze possono agevolare o compromettere
                l'esecuzione di una Disciplina, che viene messa in atto proprio utilizzando la componente magica 
                distillata dal Sangue di cui il Cainita si &egrave; nutrito: la <b>Vitae</b>. &Egrave; quindi del tutto
                naturale che alcune Discipline "funzionino meglio" con una particolare risonanza o emozione nel sangue
                rispetto ad altre.
            </Typography>

            <Typography paragraph style={guideStyle}>
                <b>Home Rule</b>: la Risonanza &egrave; una caratteristica introdotta nella Versione 5 del Manuale Base,
                e, nonostante "abbia senso" per l'ambientazione, potrebbe rischiare di inficiare l'interpretazione di un
                personaggio, essendo null'altro che un'imposizione data da un tiro di dado. In altre parole, il
                giocatore non sta interpretando il personaggio che va attivamente alla ricerca di una particolare preda,
                giocate del genere non hanno senso in un contesto di Play by Chat. Per questa ragione, verr&agrave; 
                istituita la seguente Home Rule: <b>i personaggi non saranno costretti ad interpretare la Risonanza
                acquisita con il tiro di Caccia, ma se non la interpreteranno attivamente, non potranno beneficiare
                del bonus alle Discipline garantito dalla Risonanza stessa</b>. La decisione su quali bonus o malus 
                applicare alle Discipline in base alla risonanza saranno a discrezione del Narratore.
            </Typography>

            <Typography paragraph style={guideStyle}>
                A titolo informativo, in seguito vengono proposte le caratteristiche di ogni Risonanza, e il bonus / 
                malus relativo.
            </Typography>

            <Typography paragraph style={guideStyle}>
                <Box sx={{padding: "10px"}}>
                    <TableContainer component={Paper} sx={{
                        width: "100%", 
                        margin: "0 auto" 
                    }}>
                        <Table aria-label="Risonanze">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>Risonanza</StyledTableCell>
                                    <StyledTableCell>Discipline con Bonus</StyledTableCell>
                                    <StyledTableCell>Discipline con Malus</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <StyledTableRow>
                                    <StyledTableCell component="th" scope="row">
                                        Collerica
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        Potenza, Velocit&agrave;
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        Oscurazione, Dominazione
                                    </StyledTableCell>
                                </StyledTableRow>
                                <StyledTableRow>
                                    <StyledTableCell component="th" scope="row">
                                        Melanconica
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        Oscurazione, Robustezza
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        Potenza, Stregoneria del Sangue
                                    </StyledTableCell>
                                </StyledTableRow>
                                <StyledTableRow>
                                    <StyledTableCell component="th" scope="row">
                                        Flemmatica
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        Auspex, Dominazione
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        Velocit&agrave;, Ascendente
                                    </StyledTableCell>
                                </StyledTableRow>
                                <StyledTableRow>
                                    <StyledTableCell component="th" scope="row">
                                        Sanguigna
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        Ascendente, Stregoneria del Sangue
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        Auspex, Robustezza
                                    </StyledTableCell>
                                </StyledTableRow>
                                <StyledTableRow>
                                    <StyledTableCell component="th" scope="row">
                                        Sangue animale
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        Animalit&agrave;, Proteide
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        Dominazione, Stregoneria del Sangue
                                    </StyledTableCell>
                                </StyledTableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </Typography>
            
            <Typography paragraph style={guideStyle}>
                <Box sx={{padding: "10px"}}>
                    <TableContainer component={Paper} sx={{
                        width: "100%", 
                        margin: "0 auto" 
                    }}>
                        <Table aria-label="Bonus Risonanze">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>Temperamento Risonanza</StyledTableCell>
                                    <StyledTableCell>Bonus / Malus</StyledTableCell>
                                    <StyledTableCell>Interpretazione</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <StyledTableRow>
                                    <StyledTableCell component="th" scope="row">
                                        Trascurabile
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        0
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        Il temperamento del Cainita non cambia.
                                    </StyledTableCell>
                                </StyledTableRow>

                                <StyledTableRow>
                                    <StyledTableCell component="th" scope="row">
                                        Trascurabile
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        1
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        Il temperamento del Cainita potrebbe essere influenzato, ma solo marginalmente.
                                    </StyledTableCell>
                                </StyledTableRow>

                                <StyledTableRow>
                                    <StyledTableCell component="th" scope="row">
                                        Intenso
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        2
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        Il temperamento del Cainita &egrave; pesantemente influenzato dalla Risonanza,
                                        per tutta la scena.
                                    </StyledTableCell>
                                </StyledTableRow>

                                <StyledTableRow>
                                    <StyledTableCell component="th" scope="row">
                                        Acuto / Discrasia
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        3
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        Il Cainita &egrave; cos&igrave; influenzato dalla Risonanza acquisita che il suo
                                        comportamento cambia rispetto al normale. Diventa anche molto pi&ugrave; 
                                        suscettibile alla frenesia.
                                    </StyledTableCell>
                                </StyledTableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </Typography>
        </>
    );
}

Hunt.getLayout = (page: ReactElement) => (
    <GuideLayout>
        {page}
    </GuideLayout>
)

export default Hunt;
