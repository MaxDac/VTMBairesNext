import React, {ReactElement} from "react";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import {guideStyle, titleStyle} from "../../components/guides/GuidesStyles";
import {GuideRoutes} from "../../base/routes";
import GuideLayout from "../../components/layouts/GuideLayout";
import Camarilla from "./Camarilla";

const Clans = (): ReactElement => {
    return (
        <>
            <Typography paragraph>
                <h1 style={titleStyle}>
                    Clan
                </h1>
            </Typography>

            <Typography paragraph sx={guideStyle}>
                In creazione, il personaggio all'inizio dovr&agrave; scegliere il clan del proprio personaggio.
                Mentre l'affiliazione di una Setta pu&ograve; avere a che fare con il libero arbitrio del personaggio,
                il clan ha a che fare col sangue del Sire: &egrave; impossibile cambiarne le caratteristiche.<br />
                Il Sangue determina i poteri del Cainita, porta con s&eacute; le maledizioni del Sangue (debolezza 
                al fuoco e ai raggi solari, e la Bestia), e una maledizione caratteristica del clan, che ha la 
                doppia funzione di tormentare la non-vita del Cainita, e di riconoscerlo come appartenente 
                ad una di queste grandi "famiglie" ancestrali.<br />
                Siccome in Buenos Aires by Night sar&agrave; possibile solamente interpretare Fratelli appartenenti
                alla Camarilla, anche la scelta dei clan sar&agrave; ridotta ai soli clan affiliati alla setta.
            </Typography>

            <Typography paragraph sx={guideStyle}>
                Nella leggenda Cainita, i clan hanno avuto origine dai mitici Antidiluviani, esseri dai poteri
                leggendari che infestano la terra da migliaia di anni. Qualunque sia la loro origine, &egrave; 
                indubbio che i differenti clan hanno delle caratteristiche differenti tra di loro. Esistono poi
                i <b>Vili</b> che, pur essendo vampiri a tutti gli effetti, non mostrano i segni
                caratteristici dell'appartenenza ad un clan, e i <b>Sangue Debole</b>, ovvero
                vampiri la cui Generazione, o lontananza in Abbracci dai mitici progenitori, &egrave; cos&igrave;
                grande che il loro sangue ha perso molte delle caratteristiche tipiche dei Cainiti, come la
                debolezza ai raggi solari, il pallore cadaverico, o l'impossibilit&agrave; di mangiare cibo.
            </Typography>

            <Typography paragraph>
                <h3 style={titleStyle}>
                    Maledizione e Compulsione
                </h3>
            </Typography>

            <Typography paragraph sx={guideStyle}>
                Il Sangue del Clan influenza in maniera a volte sottile, a volte tragicamente evidente la non-vita
                e il comportamento di un vampiro. Solo <b>Vili</b>, senza Clan, e i Sangue Debole 
                non soffrono di queste condizioni, e questo &egrave; in parte la ragione della loro 
                ostracizzazione da parte degli altri Clan.<br />
                Mentre la Maledizione ha un effetto permanente, la Compulsione &egrave; pi&ugrave; sottile.
                Influenza in modo lieve qualsiasi azione del personaggio, e si manifesta in modo prepotente
                quando il tiro di un dado risulta in un <Link href={GuideRoutes.mechanics}><a id="dice-results">Fallimento Bestiale</a></Link>.
            </Typography>

            <Typography paragraph>
                <h2 style={titleStyle}>
                    Clan Giocabili
                </h2>
            </Typography>

            <Typography paragraph>
                <h3 style={titleStyle}>
                    Banu Haqim
                </h3>
            </Typography>

            <Typography paragraph sx={guideStyle}>
                Sempre chiamati Assamiti fuori dal clan, i Banu Haqim sono un clan di guerrieri formidabili, 
                come anche di maghi sapienti e di dotti diplomatici. La loro struttura &egrave; sempre stata
                indipendente, e il loro quartier generale arroccato ad <b>Alamut</b>, in Medio Oriente.<br />
                Sono stati recentemente accettati nella Camarilla. La loro debolezza &egrave; una strana 
                dipendenza dal sangue degli altri Cainiti, e la difficolt&agrave; che dimostrano nel resistere
                alla tentazione della Diablerie.<br />
                <b>Maledizione</b>: da tempo immemore, i Banu Haqim hanno un debole per il sangue Cainita. Se 
                assumono l'equivalente di un punto di Fame in Sangue, dovranno testare per la Frenesia di Rabbia
                con una Difficolt&agrave; pari a 2 + Severit&agrave; della Maledizione. Se falliscono, sentiranno
                il bisogno di continuare a bere Sangue Cainita, anche fino alla Diablerie.<br />
                <b>Compulsione</b>: per il resto della scena il Cainita dovr&agrave; punire col Sangue chiunque
                agisce in contrasto alle sue convinzioni, umano o Cainita. Finch&eacute; non si sar&agrave; dissetato 
                con almeno un livello di Fame col Sangue del trasgressore, ogni suo ammontare diminuir&agrave; di 3. 
                Ovviamente, se riesce nel suo intento, potr&agrave; subire anche la Maledizione di Clan se la vittima 
                &egrave; un Cainita a sua volta.<br />
                <b>Affiliazioni</b>: Camarilla, o Indipendenti.<br />
                <b>Discipline</b>: Oscurazione, Stregoneria del Sangue, Velocit&agrave;.
            </Typography>

            <Typography paragraph>
                <h3 style={titleStyle}>
                    Brujah
                </h3>
            </Typography>

            <Typography paragraph sx={guideStyle}>
                I Cainiti del clan Brujah sono notoriamente scelti tra iconoclasti, idealisti, ribelli. Il loro
                sangue &egrave; naturalmente portato all'ira, e questa tendenza si &egrave; esplicitata col
                recente abbandono di massa del clan dalla Camarilla. Alcuni Cainiti hanno comunque deciso di rimanere
                all'interno della Torre d'Avorio, come gi&agrave; successe con i Gangrel che si rifiutarono di uscire
                quando Xaviar lo impose.<br />
                La maledizione del loro sangue &egrave; la tendenza alla frenesia, sull'onda dell'ira che 
                esprime il loro Sangue.<br /> 
                <b>Maledizione</b>: i Cainiti del clan Brujah soffrono la Bestia molto pi&ugrave; degli altri clan, e tendono a 
                scattare ad ogni provocazione. I personaggi dovranno sottrarre un numero di dadi pari alla Severit&agrave; della
                Maledizione all'ammontare per resistere alla Frenesia di Rabbia. L'ammontare non potr&agrave; scendere sotto l'1.<br />
                <b>Compulsione</b>: la Compulsione del Clan Brujah &egrave; quella di affermare la loro ribellione, sia convincendo
                (anche con la forza se necessario) un'altra persona del proprio punto di vista in versione anti autoritaria, o
                disubbedendo ad ordini, diretti od indiretti, da parte di ci&ograve; che lui considera l'autorit&agrave; - dal
                rifiutarsi apertamente di eseguire un ordine, oppure trasgredendo volontariamente l'etichetta di un luogo, ad 
                esempio l'Elysium. Finch&eacute; non avr&agrave; ottemperato a questo dettame del Sangue, l'ammontare di ogni 
                suo tiro di dado sar&agrave; ridotto di 2.<br />
                <b>Affiliazioni</b>: Anarchici, pochi Cainiti hanno deciso di rimanere nella Camarilla.<br />
                <b>Discipline</b>: Ascendente, Potenza, Velocit&agrave;.
            </Typography>

            <Typography paragraph>
                <h3 style={titleStyle}>
                    Gangrel
                </h3>
            </Typography>

            <Typography paragraph sx={guideStyle}>
                Il clan Gangrel &egrave; composto da persone che, per Abbraccio o gi&agrave; nel corso della 
                loro vita mortale, hanno una profonda connessione con la natura e con la Bestia. Attivisti
                per l'ambiente, ma anche solitari ed eremiti, trovano spazio in questo clan, che ha gi&agrave;
                da un paio di decenni abbandonato in massa la Camarilla per rendersi indipendente, o anarchico.<br />
                La maledizione del loro sangue &egrave; la tendenza alla frenesia, sull'onda dell'ira che 
                esprime il loro Sangue.<br /> 
                <b>Maledizione</b>: se i Cainiti del clan Brujah soffrono la Bestia, quelli del clan Gangrel hanno
                con essa una relazione profonda. La loro maledizione consiste nella crescita di un tratto bestiale
                (orecchie da pipistrello, occhi da gatto, tic animali, visione di serpente) per ogni livello di
                Severit&agrave; della Maledizione per una notte dopo la Frenesia. Ogni tratto bestiale sottrae 1
                all'ammontare di un Attributo. Se il Gangrel decide di "cavalcare" la Bestia (vedi la voce Frenesia
                nel <Link href={GuideRoutes.glossary}><a id="frenzy">Glossario</a></Link>) acquisiranno solo un tratto animale,
                indipendentemente dalla Severit&agrave; della Maledizione. L'Attributo penalizzato dal tratto animale
                sar&agrave; deciso dal Narratore.<br />
                <b>Compulsione</b>: la comunione con la Bestia per il Gangrel rende molto difficile, a volte, la 
                normale comunicazione sociale. Quando la Compulsione del Clan sopravviene, il Cainita regredisce
                a necessit&agrave; e bisogni animali: trova difficile parlare, trova scomodi e inutili anche i vestiti,
                e trova anche che il modo migliore per risolvere conflitti sia l'uso della forza. Per una scena,
                ogni tiro che richiede gli Attributi di Persuasione e Intelligenza subiranno una penalit&agrave;
                di 3.<br />
                <b>Affiliazioni</b>: Anarchici o Indipendenti, pochi Cainiti hanno deciso di rimanere nella Camarilla.<br />
                <b>Discipline</b>: Animalit&agrave;, Proteide, Robustezza.
            </Typography>

            <Typography paragraph>
                <h3 style={titleStyle}>
                    Lasombra
                </h3>
            </Typography>

            <Typography paragraph sx={guideStyle}>
                I Lasombra sono Cainiti noti per la loro brutalit&agrave; e mancanza di scrupoli, oltre che per la loro connessione
                che sfocia in feticismo con le Ombre, che controllano grazie al potere della loro Vitae. La loro tendenza &egrave; 
                quella di dominare soggiogando, in maniera pi&ugrave; o meno plateale, dipendendo dal contesto. Hanno recentemente
                stretto un accordo con la Camarilla per garantirsi l'affiliazione alla Setta, ma alcuni ribelli Sabbat possono 
                ora far parte degli Anarchici, se non sono partiti col Sabbat per la Guerra della Gehenna.<br />
                La maledizione del loro sangue consiste nell'impossibilit&agrave; di riflettere la loro immagine chiaramente sugli 
                specchi: i Neonati vedranno la loro immagine sfocata, disturbata, mentre gli Anziani non la vedranno affatto. Questo
                difetto influenza curiosamente anche tutta la tecnologia moderna: non possono essere registrati da telecamere, o 
                da microfoni, e tutta la tecnologia attorno a loro tende a non funzionare correttamente, o affatto. Nonostante questo,
                o proprio per l'effetto che fanno alla tecnologia, la Seconda Inquisizione riesce a capire immediatamente che ha a che 
                fare con Cainiti di questo clan.<br /> 
                <b>Maledizione</b>: la Maledizione del clan Lasombra aveva a che fare con gli specchi, che distorcevano la loro 
                immagine in modo quasi irriconoscibile, e col passare del tempo non la riflettevano affatto. Ora, questo difetto 
                &egrave; diventato doppiamente pericoloso: ogni registrazione di un Lasombra apparir&agrave; distorta, rivelando 
                a coloro che sanno cosa cercare immediatamente la natura del Cainita, e questi <i>glitch</i> non riusciranno
                nemmeno con sicurezza a celare l'identit&agrave; del vampiro. Anche la tecnologia si ribella: il Cainita dovr&agrave;
                tirare su Tecnologia a Difficolt&agrave; 2 pi&ugrave; Severit&agrave; della Maledizione per usare apparecchi 
                elettronici, altrimenti semplicemente non riusciranno nemmeno a registrare la propria voce o manipolare 
                uno <i>smartphone</i>. Per queste ragioni, &egrave; piuttosto frequente che un Lasombra asserva un mortale 
                con legame di Sague per prendersi carico di tutto ci&ograve; che riguarda la tecnologia.<br />
                <b>Compulsione</b>: la spietatezza insita nel Sangue dei Lasombra li porta a compiere qualsiasi azione pur di 
                ottenere quello che vogliono. Per questo motivo sono estremamente influenzati da qualsiasi azione che compiono senza 
                successo, o che non ha l'esito da loro prospettato. Finch&eacute; non hanno successo tentando nuovamente la stessa 
                azione, perdono 2 dadi ad ogni ammontare per tutte le altre azioni. Se la Compulsione ha origine dopo un 
                Fallimento Bestiale (vedi <Link href={GuideRoutes.mechanics}><a id="dice-results">meccaniche di gioco</a></Link>), quell'azione fallita
                sar&agrave; l'origine del loro malessere, e subiranno la penalit&agrave; finch&eacute; non l'avranno ritentata
                con successo.<br />
                <b>Affiliazioni</b>: Camarilla, alcuni Anarchici.<br />
                <b>Discipline</b>: Potenza, Dominazione, Oblivion.
            </Typography>

            <Typography paragraph>
                <h3 style={titleStyle}>
                    Malkavian
                </h3>
            </Typography>

            <Typography paragraph sx={guideStyle}>
                Il clan Malkavian &egrave; uno dei clan che nessuno comprende appieno, la loro storia &egrave; stata tormentata e
                si intreccia con la Maledizione del loro Sangue: la Follia. Tutti i membri del clan hanno, o avevano gi&agrave; in vita,
                una patologia mentale pi&ugrave; o meno accentuata, che li ha resi vittime delle Inquisizioni e degli altri Fratelli.
                Ma assieme alla Follia, hanno sempre avuto una profonda intuizione, e i loro movimenti apparentemente casuali hanno
                sempre inquietato chi aveva coscienza del fatto che non era saggio derubricare i Malkavian a semplici pazzi imprevedibili.
                L'Abbraccio Malkavian &egrave; apparentemente causale, quindi non c'&egrave; nessuna limitazione al tipo di personaggio
                che si vuole fare.<br />
                <b>Maledizione</b>: il Sangue del Clan &egrave; maledetto dalla Follia. Dal momento dell'Abbraccio, i Malkavian 
                acquisiscono una Alienazione Mentale a scelta del personaggio, ed all'Abbraccio, sempre che non siano di Tredicesima
                Generazione e nasca un Sangue Debole, corrono il rischio che la mente della progenie sia cos&igrave; sconvolta
                da qualsiasi cosa succeda durante il rito, che rimane catatonica.<br />
                <b>Compulsione</b>: quando soffrono della compulsione del loro Clan, la percezione del Malkavian comincia a divergere
                dalla realt&agrave;, e le esperienze extrasensoriali di cui sono spettatori (o vittime, secondo i punti di vista), li 
                rende estremamente suscettibili a qualsiasi stimolo. Subiscono una penalit&agrave; di 2 dadi all'ammontare di 
                qualsiasi tiro su Destrezza, Persuasione, Autocontrollo e Prontezza, e anche per resistere alla Frenesia di Terrore.
                (<b>HR</b>) Durante questo stato possono per&ograve; casualmente intuire indizi su una situazione differente, che 
                magari non hanno nemmeno vissuto, e che magari mai vivranno, a discrezione del Narratore.<br />
                <b>Affiliazioni</b>: Camarilla, alcuni Anarchici.<br />
                <b>Discipline</b>: Auspex, Dominazione, Oscurazione.
            </Typography>

            <Typography paragraph>
                <h3 style={titleStyle}>
                    Nosferatu
                </h3>
            </Typography>

            <Typography paragraph sx={guideStyle}>
                Se il Sangue Malkavian rovina la mente dei Cainiti, il Sangue Nosferatu ne rovina le fattezze. Chiunque venga
                Abbracciato da un Nosferatu, finisce irrimediabilmente per diventare un orrore deambulante. Questo difetto ha
                ovviamente influenzato la storia del clan: un clan di spie, di sopravvissuti, di hacker formidabili e soprattutto
                unito al loro interno.<br />
                <b>Maledizione</b>: la Maledizione nel Sangue dei Nosferatu li rende orribili in aspetto. Acquisiscono
                il difetto <b>Repulsivo</b> in creazione, e ovviamente non sar&agrave; possibile acquisirlo tra i difetti, n&eacute;
                potranno acquisire altri pregi riguardanti l'aspetto. Oltre questo, anche mascherandosi, avranno seri problemi
                nell'interfacciars con un mortale, che istintivamente li riconoscer&agrave; per i mostri che sono. Nelle
                interazioni con gli umani, anche da mascherati, o sotto l'effetto di Oscurazione, subiranno una penalit&agrave; 
                all'ammontari pari alla Severit&agrave; della Maledizione.<br /> 
                <b>Compulsione</b>: i Cainiti del clan Nosferatu sono attratti dai segreti in modo, appunto, compulsivo. Sentono il
                bisogno viscerale di conoscere segreti che pochi, o nessuno, sa, e tendenzialmente non li condividono, se non per
                scambiarli con altri segreti, e addirittura questa volont&agrave; arriva ad essere pi&ugrave; forte di quella per 
                il Sangue. I Nosferatu vittime della loro compulsione subiranno due dadi di penalit&agrave; a tutti gli ammontare
                se non compiono azioni volte alla scoperta di segreti, pi&ugrave; o meno grandi.<br />
                <b>Affiliazioni</b>: Camarilla, Anarchici o Indipendenti.<br />
                <b>Discipline</b>: Animalit&agrave;, Oscurazione, Potenza.
            </Typography>

            <Typography paragraph>
                <h3 style={titleStyle}>
                    Toreador
                </h3>
            </Typography>

            <Typography paragraph sx={guideStyle}>
                I Toreador sono da sempre considerati gli artisti tra i Cainiti, i Fratelli con pi&ugrave; sensibilit&agrave; e pi&ugrave; connessione
                con gli umani e l'umanit&agrave;. Ed &egrave; vero, nel bene e nel male. Maestri diplomatici, li si pu&ograve; trovare a loro agio
                tanto in Elysium come Arpie, tanto in mostre d'arte, come artisti o mecenati. Questo clan disprezza la volgarit&agrave; e la bruttezza,
                ed apprezza la bellezza: vien da s&eacute; che i personaggi Toreador sono mediamente artisti, o... semplicemente affascinanti.<br />
                La maledizione del loro sangue ha a che fare con la Bellezza: il Toreador non riesce a tollerare ci&ograve; che definisce brutto, e 
                invece si ferma in estasi a contemplare ci&ograve; che per lui &egrave; il bello. Essendo questi termini del tutto arbitrari, chi 
                vorr&agrave; interpretare un personaggio Toreador dovr&agrave; porre tra le Note cosa il suo personaggio ritiene bello e cosa brutto.<br /> 
                <b>Maledizione</b>: i Toreador sono cultori, fautori, e addirittura dipendenti dalla bellezza. Sono cos&igrave; dipendenti da essa
                che se si trovano in ambienti o con persone che non rispondono al loro gusto estetico, il loro stesso Sangue si rifiuta di funzionare
                correttamente: quando si trovano in questi ambienti, sottraggono all'ammontare per tutte le Discipline un numero di dadi pari al 
                livello di Severit&agrave; della Disciplina.<br />
                <b>Compulsione</b>: come detto, i Toreador hanno un debole per la bellezza. Il loro Sangue, quando sono vittime della Compulsione,
                non riescono a distogliere lo sguardo da qualcosa che, per loro, ha una bellezza estrema - e quello che &egrave; considerata bellezza,
                ovviamente, varia da Toreador a Toreador. Potrebbe essere un quadro, una macchia di sangue su una parete, o addirittura l'alba. Per 
                tutta la durata della scena, o finch&eacute; il vampiro non pu&ograve; pi&ugrave; percepire l'oggetto della sua attenzione,
                dar&agrave; attenzione solo all'oggetto, se gli rivolgeranno la parola, parler&agrave; solo di quello, e tutte le azioni che non 
                riguardano la contemplazione subiranno una penalit&agrave; di 2 dadi all'ammontare.<br />
                <b>Affiliazioni</b>: Camarilla, alcuni Anarchici.<br />
                <b>Discipline</b>: Ascendente, Auspex, Velocit&agrave;.
            </Typography>

            <Typography paragraph>
                <h3 style={titleStyle}>
                    Tremere
                </h3>
            </Typography>

            <Typography paragraph sx={guideStyle}>
                Il clan dei magi, degli stregoni del Sangue, &egrave; sicuramente quello che ha ricevuto il pi&ugrave; duro colpo da parte della Seconda
                Inquisizione. Un tempo chiuso in una rigida gerarchia piramidale tenuta insieme da legami di Sangue, con la distruzione della Haus de Hexe
                il clan ha perso la punta della piramide, e il castello di carte &egrave; venuto gi&ugrave;. Ora, esistono diverse fazioni di Tremere,
                alcuni nella Camarilla, pochi addirittura tra gli Anarchici. In generale, comunque, il clan Abbraccia persone estremamente intelligenti
                e portate allo studio.<br />
                <b>Maledizione</b>: prima dell'attacco alla Chantry di Vienna, il clan era tenuto insieme nella sua perfetta struttura piramidale dai 
                legami di Sangue tra sire e infante, che teneva insieme questo clan di magi particolarmente inclini al reciproco tradimento ed alla
                competizione estrema. Dopo la distruzione della Chantry, il castello di carte &egrave; caduto con la caduta del Concilio dei Sette, 
                quella che fu la testa del Clan. Ora, forse per una mutazione, o per la maledizione dell'Antidiluviano diablerizzato da Tremere,
                i Tremere non riescono pi&ugrave; a legare col Sangue altri vampiri, ed anche legare col Sangue mortali, ma la Vitae del Cainita 
                deve essere bevuta per un numero addizionale di notti pari alla Severit&agrave; della Maledizione, affinch&eacute; il Legame abbia 
                effetto.<br />
                <b>Compulsione</b>: i Cainiti del clan Tremere sono ossessionati dalla perfezione. Quando fanno qualcosa, il loro Sangue non gli 
                consente nulla al di sotto della perfezione. Quando sono preda della Compulsione, perderanno 2 dadi all'ammontare finch&egrave; non
                otterranno un successo critico in un tiro di dado, arrivando anche a ripetere ossessivamente l'esecuzione di una particolare azione.
                L'ammontare per un'azione ripetuta una volta scender&agrave; di uno, a partire dal secondo tentativo la penalit&agrave; 
                all'ammontare si ridurr&agrave; a 0, ma solo per quella particolare azione ripetuta: per tutto il resto, rimarr&agrave; la 
                penalit&agrave; di 2 dadi.<br />
                <b>Affiliazioni</b>: Camarilla, alcuni Anarchici.<br />
                <b>Discipline</b>: Auspex, Stregoneria del Sangue, Dominazione.
            </Typography>

            <Typography paragraph>
                <h3 style={titleStyle}>
                    Ventrue
                </h3>
            </Typography>

            <Typography paragraph sx={guideStyle}>
                Il clan dei Re, il clan che ha modellato la Camarilla e la sua struttura di potere e ne ha istituito le Tradizioni, o leggi, e ne ha 
                importo la loro osservazione. I Ventrue vedono il comando come la loro naturale aspirazione, ci&ograve; che sono nati per fare, e 
                pongono in pratica questa loro naturale propensione con la loro rigida gerarchia, il rispetto e l'imposizione dell'autorit&agrave;.
                Al contrario dei Lasombra, che vedono nella prevaricazione una compulsione, i Ventrue vedono il Dominio come quasi un loro dovere.<br />
                La maledizione del loro sangue gli impedisce di nutrirsi di mortali al di furoi di uno specifico tipo, siano essi donne d'affari, 
                nobili o vergini. Se si cibano di sangue non appartenente alla categoria da loro prediletta, lo vomitano.<br /> 
                <b>Maledizione</b>: la Maledizione dei Ventrue si esprime attraverso l'impossibilit&agrave; di ingerire Sangue da mortali all'infuori
                di un ristretto insieme. Un personaggio Ventrue dovr&agrave; comunicare da quale gruppo di persone il personaggio si nutre. Esempi di 
                gruppi possono essere umani di discendenza tedesca, donne dai capelli neri naturali, militari, tossicodipendenti da una particolare 
                sostanza. Se il Ventrue si nutre di Sangue al di fuori di questo gruppo, dovr&agrave; spendere un punto di Forza di Volont&agrave;
                per non vomitare. Con un tiro di <b>Fermezza + Allerta con Difficolt&agrave; 4 o pi&ugrave;</b>.<br />
                <b>Compulsione</b>: i Ventrue devono comandare. Il loro Sangue non accetta nulla che non sia stato impartito tramite la loro leadership.
                Quando soffrono della loro compulsione, i Cainiti del clan Ventrue subiscono una penalit&agrave; di 2 dadi a tutti gli ammontare, 
                almeno finch&eacute; qualcuno non obbedisce direttamente ad un loro ordine, e tale ordine non pu&ograve; essere impartito tramite 
                mezzi Soprannaturali, come Dominazione, altrimenti la penalit&agrave; durer&agrave; per tutta la scena.<br />
                <b>Affiliazioni</b>: Camarilla.<br />
                <b>Discipline</b>: Ascendente, Dominazione, Robustezza.
            </Typography>

            <Typography paragraph>
                <h3 style={titleStyle}>
                    Vili
                </h3>
            </Typography>

            <Typography paragraph sx={guideStyle}>
                I Vili sono vampiri in tutto e per tutto, tranne che per il clan. Dopo l'Abbraccio, non hanno presentato nessuna caratteristica
                tipica del clan: Nosferatu con aspetto normale, Malkavian sani di mente, o Ventrue in grado di cibarsi di qualsiasi forma di Sangue. 
                Cainiti di questo tipo sono notoriamente stati sempre ostracizzati e esiliati dal clan, e addirittura dalla Camarilla, considerati poco 
                meglio dei Sangue Debole. Il loro numero adesso &egrave; per&ograve; aumentato, e costituiscono una forza notevole, da non ignorare.<br />
                I Vili non soffrono nessuna maledizione di clan, anche se soffrono normalmente della maledizione del Sangue Cainita, e quindi raggi del Sole
                e fuoco hanno lo stesso effetto su di loro, e la loro Bestia non ha nulla da invidiare a quella dei "normali" Cainiti.<br /> 
                <b>Affiliazioni</b>: Anarchici, in rari casi nei bassi ranghi della Camarilla, ma non potranno assumere Status.<br />
                <b>Discipline</b>: i Vili manifestano la loro duttilit&agrave; riuscendo ad apprendere qualsiasi Disciplina non rara (non potranno apprendere
                Stregoneria del Sangue o Oblivion, per esempio).
            </Typography>

            <Typography paragraph>
                <h3 style={titleStyle}>
                    Sangue Debole
                </h3>
            </Typography>

            <Typography paragraph sx={guideStyle}>
                Nelle Ultime Notti, molti Abbracci di tredicesime generazioni hanno generato dei vampiri con un Sangue cos&igrave; debole e diluito da non 
                riuscire nemmeno, in alcuni casi, a sostenere i loro corpi non morti, e a soffrire molto di meno le maledizioni ancestrali del Sangue di 
                Caino. Alcuni di questi Cainiti possono addirittura camminare al Sole, mangiare cibo umano senza vomitarlo, altri hanno addirittura
                battito e sono indistinguibili da altri umani. In ogni caso, i Sangue Debole sono generalmente cacciati e sterminati senza piet&agrave;
                dalla Camarilla quando non possono essere usati, ignorati nel migliore dei casi, attivamente esiliati o uccisi nel peggiore dagli Anarchici, 
                in quanto secondo le leggende la loro apparizione &egrave; un segno dell'arrivo della Gehenna, la fine dei tempi per i Cainiti.<br />
                I Sangue Debole soffrono di una serie di Pregi e Difetti caratteristici del loro "clan", che dovranno essere specificati in creazione.<br />
                <b>Affiliazioni</b>: Nessuna, sono generalmente cacciati a vista da tutti gli altri Cainiti.<br />
                <b>Discipline</b>: &egrave; possibile per loro apprendere l'Alchimia del Sangue.
            </Typography>

            <Typography paragraph>
                <h2 style={titleStyle}>
                    Altri Clan
                </h2>
            </Typography>

            <Typography paragraph>
                <h3 style={titleStyle}>
                    Hecata
                </h3>
            </Typography>

            <Typography paragraph sx={guideStyle}>
                Originariamente Cappadoci, poi Giovanni, in seguito alla Diablerie operata da Augustus Giovanni, poi Hecata,
                in seguito all'attacco finanziario della Seconda Inquisizione, gli Hecata sono un variegato gruppo di Cainiti 
                dediti alla Necromanzia. Data la complessit&agrave; della storia di questo clan, &egrave; consigliato a giocatori 
                pi&ugrave; esperti.<br />
                La maledizione del loro sangue si manifesta nel Bacio: invece di portare sensazioni di estasi, trasmette un dolore
                inimmaginabile nella vittima, che deve essere costretta, se sveglia.<br /> 
                <b>Affiliazioni</b>: rigorosamente Indipendenti.<br />
                <b>Discipline</b>: Giovanni: Potenza, Dominazione, Oblivion, Pisanob/altri: Auspex, Oblivion, Robustezza.
            </Typography>

            <Typography paragraph>
                <h3 style={titleStyle}>
                    Ministry
                </h3>
            </Typography>

            <Typography paragraph sx={guideStyle}>
                <i>In costruzione</i>.
            </Typography>

            <Typography paragraph>
                <h3 style={titleStyle}>
                    Ravnos
                </h3>
            </Typography>

            <Typography paragraph sx={guideStyle}>
                La storia del clan Ravnos ha origine in India, ma si &egrave; spostata in Europa con le carovane degli zingari, e
                questi sono tutti quelli che sono sopravvissuti alla terribile <b>Settimana degli Incubi</b>. Da allora, gli elementi 
                del clan in un continente si contano sulle dita di una mano. I Narratori si riservano di poter non accettare il personaggio,
                data la loro estrema scarsit&agrave;.<br />
                La maledizione del loro sangue &egrave; la tendenza al vizio: ogni Ravnos ha un vizio, ed &egrave; quasi impossibile
                resistervi quando l'occasione si presenta.<br /> 
                <b>Affiliazioni</b>: Indipendenti o Anarchici.<br />
                <b>Discipline</b>: Animalit&agrave;, Oscurazione, Ascendente.
            </Typography>

            <Typography paragraph>
                <h3 style={titleStyle}>
                    Salubri
                </h3>
            </Typography>

            <Typography paragraph sx={guideStyle}>
                Il clan dei Salubri si pensava del tutto estinto per mano dei Tremere, che ne hanno diablerizzato l'Antidiluviano, ma
                evidentemente coi guai che stanno attraversando ora i Tremere, i pochi Salubri rimasti hanno deciso di uscire allo scoperto.
                Questo clan &egrave; avvolto nel mistero, nelle Notti Moderne, e sono ancora pi&ugrave; rari dei Ravnos, motivo per cui 
                i Narratori si riservano di non accettare nemmeno questi personaggi.<br />
                La maledizione del loro sangue li costringe a potersi nutrire solo di vittime consenzienti. Inoltre, la loro Vitae sembra
                essere molto pi&ugrave; dolce di quella degli altri Cainiti, e per questo motivo sono costantemente cacciati dagli altri clan.<br /> 
                <b>Affiliazioni</b>: Indipendenti o Anarchici.<br />
                <b>Discipline</b>: Auspex, Dominazione, Robustezza.
            </Typography>

            <Typography paragraph>
                <h3 style={titleStyle}>
                    Tzimisce
                </h3>
            </Typography>

            <Typography paragraph sx={guideStyle}>
                I Dragoni, gli appartenenti del clan Tzimisce, sono tra i Cainiti pi&ugrave; inumani, ed orgogliosi di esserlo. Un tempo signori dei
                Carpazi, alla loro abilit&agrave; di modellare carne e ossa a loro piacimento, si &egrave; aggiunta, nella rivolta Anarchica, la 
                capacit&agrave; di spezzare i legami di sangue tramite il rituale che in seguito sarebbe stato conosciuto come Vaulderie. Da sempre
                affiliati del Sabbat, la stragrande maggioranza di loro &egrave; partita per la Guerra di Gehenna, ed allo stato attuale sono 
                estremamente rari. Per questo motivo, i Narratori potranno decidere di rifiutare un personaggio di questo clan.<br />
                La maledizione del loro sangue li costringe a dover dormire vicino a qualcosa che abbia estrema importanza per il Cainita, il che
                pu&ograve; essere la loro terra natale, o un gruppo di persone affiliate ad una organizzazione. Se non riescono a farlo, subiranno un
                danno alla Forza di Volont&agrave; pari alla gravit&agrave; della loro Maledizione per ogni notte passata in questo modo.<br /> 
                <b>Affiliazioni</b>: Anarchici o Indipendenti.<br />
                <b>Discipline</b>: Animalit&agrave;, Dominazione, Proteide (Vicissitudine).
            </Typography>
        </>
    );
}

Clans.getLayout = (page: ReactElement) => (
    <GuideLayout>
        {page}
    </GuideLayout>
)

export default Clans;
