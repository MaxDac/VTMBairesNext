import React, {ReactElement} from "react";
import Typography from "@mui/material/Typography";
import { guideStyle, liStyle, titleStyle } from "../../components/guides/GuidesStyles";
import GuideLayout from "../../components/layouts/GuideLayout";
import Roles from "./Roles";

const Sayings = (): ReactElement => {
    return (
        <>
            <Typography paragraph>
                <h1 style={titleStyle}>
                    Modi di dire
                </h1>
            </Typography>

            <Typography paragraph sx={guideStyle}>
                Buenos Aires &egrave; stato per decenni un centro di raccolta delle pi&ugrave;
                disparate culture provenienti da tutto il mondo, trasportate in barca coi 
                numerosissimi migranti che hanno trovato ospitalit&agrave; negli sterminati spazi
                dell'Argentina. Questo crogiolo di culture, personalit&agrave;, impulsi, ha generato
                nel corso del Ventesimo secolo una delle societ&agrave; pi&ugrave; vibranti e 
                profonde al mondo, regalandoci scrittori, poeti, musici, scienziati e tanto altro,
                oltre al famoso e malinconico ballo per cui il Paese &egrave; cos&igrave; famoso: il&nbsp;
                <b>Tango</b>.
            </Typography>

            <Typography paragraph sx={guideStyle}>
                Il miscuglio di culture ha portato anche alla sintesi di una serie di frasi idiomatiche
                caratteristiche della regione del Rio del Plata, una <i>mezcla</i> di spagnolo, italiano,
                ed altre influenze chiamato <i>Lunfardo</i>. Di seguito potrete trovare differenti
                espressioni tratte da questo dialetto porteño, e la loro traduzione pi&ugrave; o meno
                fedele in italiano: l'utilizzo di queste espressioni idiomatiche
                in gioco non &egrave; solo concesso, ma incentivato, per rendere pi&ugrave; credibile 
                l'ambientazione.
            </Typography>

            <Typography paragraph sx={guideStyle}>
                <ul>
                    <li style={liStyle}>
                        <b>Boludo</b>: ingenuo, stupido, pu&ograve; essere usato in contesti bonari o scherzosi, ma
                        anche come insulto.
                    </li>
                    <li style={liStyle}>
                        <b>Carajo</b>: imprecazione (<i>me importan tres carajos</i>)
                    </li>
                    <li style={liStyle}>
                        <b>Che</b>: usato per richiamare l'attenzione (tipo "Hey tu")
                    </li>
                    <li style={liStyle}>
                        <b>Chorro</b>: ladrone
                    </li>
                    <li style={liStyle}>
                        <b>Concha</b>: organiro riproduttivo femminile. In generale utilizzato in congiunzione con altro come forma
                        di imprecazione piuttosto diffusa.

                        <ul>
                            <li>La concha de la lora (essendo <i>lora</i> la femmina del pappagallo)</li>
                            <li>La concha de tu madre / de tu hermana</li>
                        </ul>
                    </li>
                    <li style={liStyle}>
                        <b>Laburar</b>: lavorare
                    </li>
                    <li style={liStyle}>
                        <b>Loma del orto</b>: l'espressione che pi&ugrave; ci si avvicina, e che ne rende il significato,
                        &egrave; <i>in culo ai lupi</i>
                    </li>
                    <li style={liStyle}>
                        <b>Mina</b>: donna, dall'italiano femmina (inteso un po' in quel senso)
                    </li>
                    <li style={liStyle}>
                        <b>Orto</b>: il posteriore (leggi: culo)
                    </li>
                    <li style={liStyle}>
                        <b>Pelotudo</b>: idiota, o peggio (leggi: <i>coglione</i>), usato in contesti decisamente
                        pi&ugrave; aggressivi o affermativi rispetto a <i>boludo</i>
                    </li>
                    <li style={liStyle}>
                        <b>Pibe</b>: giovane
                    </li>
                    <li style={liStyle}>
                        <b>Puta madre</b>: imprecazione del tutto generica, equivalente a <i>porca puttana</i> in italiano.
                    </li>
                    <li style={liStyle}>
                        <b>Quilombo</b>: casino, situazione caotica
                    </li>
                    <li style={liStyle}>
                        <b>Trago</b>: un drink, una bevanda. Nel contesto dei Cainiti, pu&ograve; anche assumere il
                        significato di caccia.
                    </li>
                    <li style={liStyle}>
                        <b>Trucho</b>: falso, contraffatto
                    </li>
                    <li style={liStyle}>
                        <b>Upite</b>: vedi <b>orto</b>
                    </li>
                    <li style={liStyle}>
                        <b>Villero</b>: abitante della <i>Villa</i>, inteso come quartiere problematico
                    </li>
                </ul>
            </Typography>

            <Typography paragraph sx={guideStyle}>
                I giocatori sono attivamente invitati ad arricchire questa collezione. Ricordiamo che 
                il <i>lunfardo</i> fa anche un po' parte della nostra cultura: &egrave; infatti considerato
                una versione semplificata dell'italiano, usato dagli immigrati italiani in Argentina per comunicare
                con persone che non parlavano la loro stessa lingua (fonte:&nbsp;
                <a href="https://en.wikipedia.org/wiki/Lunfardo#Influence_from_Cocoliche"
                   target="_blank"
                   rel="noreferrer">Wikipedia</a>)
            </Typography>
        </>
    );
}

Sayings.getLayout = (page: ReactElement) => (
    <GuideLayout>
        {page}
    </GuideLayout>
)

export default Sayings;
