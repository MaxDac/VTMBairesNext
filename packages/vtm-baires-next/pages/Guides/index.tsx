import React, {ReactElement} from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {guideStyle, titleStyle} from "../../components/guides/GuidesStyles";
import Link from "next/link";
import {GuideRoutes} from "../../base/routes";
import GuideLayout from "../../components/layouts/GuideLayout";
import Glossary from "./Glossary";

const Index = (): ReactElement => {
    return (
        <Box>
            <Typography paragraph>
                <h1 style={titleStyle}>
                    Guide di Buenos Aires by Night
                </h1>
            </Typography>

            <Typography paragraph sx={guideStyle}>
                Lo staff di Buenos Aires by Night vi d&agrave; il benvenuto nella sua comunit&agrave; online,
                e vi ringrazia del tempo che dedicherete fin da ora al suo sviluppo ed alla sua evoluzione.
                La guida che state per leggere non ambisce a coprire tutte le informazioni contenute nella 
                manualistica della <b>White Wolf</b>&trade;
                riguardo <b>Vampiri: la Masquerade</b>&trade;, ma speriamo di darvi una buona infarinata. Per
                approfondimenti, comunque, vi rimandiamo ai relativi manuali, nella loro ultima versione v5,
                ai quali la comunit&agrave; si ispira e tenta di implementare nel (a volte) limitante contesto online.
            </Typography>

            <Typography paragraph sx={guideStyle}>
                Nel sito, sar&agrave; possibile giocare solamente personaggi vampiri affiliati alla <b>Camarilla</b> - 
                per chi non ha mai giocato a Vampiri: la Masquerade&trade;, non vi preoccupate, verr&agrave; spiegato
                tutto nell'apposita sezione di questa <Link href={GuideRoutes.environment}>guida</Link>.
                Questo vuol dire che non si accetteranno personaggi umani, e nemmeno personaggi di linee di sangue
                esotiche, o di clan non ufficialmente affiliati alla Camarilla. Se non siete esperti nell'ambientazione,
                o non avete mai letto un manuale, questa guida comprende quasi tutto quello che c'&egrave; da sapere
                per poter interpretare un vampiro appena Abbracciato (trasformato in vampiro). All'interno del sito,
                poi, le guide e i narratori saranno a vostra disposizione per chiarire qualsiasi dubbio. C'&egrave;
                anche una comunit&agrave;
                su <a href="https://discord.gg/3wHD3er8Du" target="_blank" rel="noreferrer">Discord</a> su cui potrete
                chiarire i vostri dubbi.
            </Typography>

            <Typography paragraph sx={guideStyle}>
                La guida si svilupper&agrave; in questo modo:
                <ul>
                    <li>
                        Verranno elencate le regole generali del gioco, come si consiglia di condurre 
                        l'interpretazione dei personaggi, cosa &egrave; consentito e cosa no.
                    </li>
                    <li>
                        Verr&agrave; descritta l'ambientazione di partenza in generale, e come questa si allaccia e si
                        configura all'interno di quella definita nei manuali di Vampiri: la Masquerade v5.
                    </li>
                    <li>
                        Saranno quindi presi in considerazione i personaggi non giocanti principali, i loro ruoli e
                        un abbozzo della loro biografia.
                    </li>
                    <li>
                        L'ultima sezione della guida riguarder&agrave; informazioni di natura generale, per coadiuvare
                        l'interpretazione dei vostri personaggi.
                    </li>
                </ul>
            </Typography>
            <Typography paragraph sx={guideStyle}>
                Rinnoviamo i nostri ringraziamenti per averci scelto, e alla White Wolf (il cui link potete trovare
                nella sezione dei <i>Credits</i>) che ha reso possibile giocare.
            </Typography>
        </Box>
    );
}

Index.getLayout = (page: ReactElement) => (
    <GuideLayout>
        {page}
    </GuideLayout>
)

export default Index;
