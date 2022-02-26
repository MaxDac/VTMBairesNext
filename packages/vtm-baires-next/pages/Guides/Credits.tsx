import React, {ReactElement} from "react";
import Typography from "@mui/material/Typography";
import {guideStyle, titleStyle} from "../../components/guides/GuidesStyles";
import Box from "@mui/material/Box";
import GuideLayout from "../../components/layouts/GuideLayout";
import {SimpleImage} from "vtm-baires-next-components";

const Credits = (): ReactElement => {
    const imageLinkStyle = {
        maxHeight: "60px",
        maxWidth: "auto"
    };

    return (
        <>
            <Typography paragraph sx={guideStyle}>
                <h1 style={titleStyle}>
                    Credits
                </h1>
            </Typography>

            <Box sx={{minHeight: "95px"}}>
                <a href="https://www.worldofdarkness.com/" target="_blank" rel="noreferrer">
                    <SimpleImage alt="WhiteWolfLogo"
                                 src="/WhiteWolfLogo.webp"
                                 align="left"
                                 hspace="10px"
                                 vspace="10px"
                                 style={imageLinkStyle} />
                </a>

                <Typography paragraph sx={guideStyle}>
                    <h2 style={titleStyle}>
                        White Wolf&trade; World of Darkness
                    </h2>
                </Typography>

                <Typography paragraph sx={guideStyle}>
                    Questo sito non sarebbe stato possibile senza il lavoro fatto dalla White Wolf&trade; con
                    il World of Darkness. Questo gioco si basa sul regolamento incluso nella Versione 5 dei 
                    manuali di Vampiri: la Masquerade.
                </Typography>
            </Box>

            <Box sx={{minHeight: "95x"}}>
                <a href="https://whitewolf.fandom.com/wiki/Main_Page" target="_blank" rel="noreferrer">
                    <SimpleImage alt="WhiteWolfWikiLogo"
                                 src="/WhiteWolfWikiLogo.webp"
                                 align="right"
                                 hspace="10px"
                                 vspace="10px"
                                 style={imageLinkStyle} />
                </a>

                <Typography paragraph sx={guideStyle}>
                    <h2 style={titleStyle}>
                        White Wolf Wiki
                    </h2>
                </Typography>

                <Typography paragraph sx={guideStyle}>
                    In questa guida non ufficiale sono elencate la maggior parte delle informazioni sul 
                    mondo di Vampiri: la Masquerade. Un utile riferimento per tutti i giocatori, dai pi&ugrave;
                    esperti per consultare informazioni specifiche, ai meno esperti, per studiare in breve
                    tutto quello che c'&egrave; da sapere sul Mondo di Tenebra.
                </Typography>
            </Box>

            <Box sx={{minHeight: "95x"}}>
                <a href="https://www.studioronin.com" target="_blank" rel="noreferrer">
                    <SimpleImage alt="StudioRoninLogo"
                                 src="/StudioRoninLogo.webp"
                                 align="left"
                                 hspace="10px"
                                 vspace="10px"
                                 style={imageLinkStyle} />
                </a>

                <Typography paragraph sx={guideStyle}>
                    <h2 style={titleStyle}>
                        Studio Ronin
                    </h2>
                </Typography>

                <Typography paragraph sx={guideStyle}>
                    Molte delle immagini utilizzate nel sito sono state prese direttamente dai manuali della
                    White Wolf&trade;, e l'artista pi&ugrave; utilizzato &egrave; stato sicuramente Christopher
                    Shy. <b>Studio Ronin</b>&trade; &egrave; il sito dove potrete trovare le sue opere, e ci
                    sembrava giusto citarlo.
                </Typography>
            </Box>

            <Typography paragraph sx={guideStyle}>
                <h2 style={titleStyle}>
                    Contenuti consigliati
                </h2>
            </Typography>

            <Typography paragraph sx={guideStyle}>
                Di seguito elencheremo alcuni contenuti (per lo pi&ugrave; <i>videogames</i>) che possono
                aiutare a comprendere l'ambientazione, la storia, e il lessico di <b>Vampiri: la Masquearade</b>&trade;.
                Ovviamente, <b>non sar&agrave; necessario comprare o giocare ai titoli descritti di seguito
                per poter entrare e giocare in chat</b>, ma stimiamo che, soprattutto per giocatori alle 
                prime armi, questi giochi aiutino ad acquisire le informazioni essenziali per giocare
                correttamente.
            </Typography>

            <Box sx={{minHeight: "95x"}}>
                <Typography paragraph sx={guideStyle}>
                    <h2 style={titleStyle}>
                        Coteries of New York / Shadows of New York
                    </h2>
                </Typography>

                <Typography paragraph sx={guideStyle}>
                    Due giochi targati Mondo di Tenebra che &egrave; possibile acquistare tramite Steam 
                    o Good old Games. Danno uno sguardo estremamente veritiero sull'ambientazione di 
                    Vampiri la Masqueade&trade; e sulla sua atmosfera. Sono incentrati sull'ultima versione
                    dei manuali, quindi sono molto utili per comprenderla.
                </Typography>

                <Typography paragraph sx={guideStyle}>
                    <h2 style={titleStyle}>
                        Vampire the Masquerade: Redemption & Bloodlines
                    </h2>
                </Typography>

                <Typography paragraph sx={guideStyle}>
                    Seppur relativamente vecchi (entrambi risalgono a quasi vent'anni fa) entrambi questi
                    giochi, oltre ad offrire un gameplay pi&ugrave; tradizionale rispetto ai due citati prima,
                    offrono un'ampio spettro di esperienze e <i>lore</i> che vi sar&agrave; sicuramente utile
                    per approfondire ulteriormente l'ambientazione.
                </Typography>

                <Typography paragraph sx={guideStyle}>
                    <h2 style={titleStyle}>
                        La Sfinge di Quarzo Nero (blog)
                    </h2>
                </Typography>

                <Typography paragraph sx={guideStyle}>
                    Blog molto interessante, con ottimi spunti per organizzare e gestire un sito di Play by Chat
                    online. Accessibile a <a href="https://quartzilnero.blogspot.com/" target="_blank" rel="noreferrer">
                        questo link
                    </a>.
                </Typography>
            </Box>
        </>
    );
}

Credits.getLayout = (page: ReactElement) => (
    <GuideLayout>
        {page}
    </GuideLayout>
)

export default Credits;
