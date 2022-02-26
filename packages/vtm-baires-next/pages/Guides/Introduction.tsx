import React, {ReactElement} from "react";
import Typography from "@mui/material/Typography";
import {guideStyle, titleStyle} from "../../components/guides/GuidesStyles";
import Link from "next/link";
import {GuideRoutes} from "../../base/routes";
import GuideLayout from "../../components/layouts/GuideLayout";
import Hunt from "./Hunt";

const GuidesGlossary = (): ReactElement => {
    return (
        <>
            <Typography paragraph>
                <h1 style={titleStyle}>
                    Introduzione
                </h1>
            </Typography>

            <Typography paragraph sx={guideStyle}>
                Questo gioco si ispira, come detto, ai manuali di <b>Vampiri: la Masquerade&trade;</b>, che fanno parte
                di una collana che tratta di quello che viene chiamato il <b>Mondo di Tenebra</b>, ovvero generalmente
                un mondo che gli esseri umani sono impossibilitati a percepire. Questo mondo &egrave; popolato di ogni 
                genere di creatura fantastica dalle leggende: licantropi, maghi e fate popolano questo mondo assieme,
                appunto, ai <b>vampiri</b>.
            </Typography>

            <Typography paragraph sx={guideStyle}>
                I vampiri ritratti da Vampiri: la Masquerade&trade; non sono troppo distanti dalle rappresentazioni
                date dalla letteratura e dalla filmografia: sono predatori soprannaturali per cui fuoco e raggi del Sole
                sono anatema, possono nutrirsi solo di sangue, ma a parte rari casi non sono influenzati da comuni 
                credenze (non sfuggono da croci o da acqua corrente) e i paletti di legno non li uccidono, ma riescono
                solo temporaneamente a bloccarli.
            </Typography>

            <Typography paragraph sx={guideStyle}>
                Nella sezione Ambientazione di questa guida potrete avere un'idea di come la loro societ&agrave; &egrave;
                organizzata, e quali sono le personalit&grave; di riferimento e i loro nemici.
            </Typography>

            <Typography paragraph sx={guideStyle}>
                Il <Link href={GuideRoutes.glossary}>Glossario</Link> vi fornir&agrave; un lessico basico per poter
                affrontare le altre sezioni, mentre potrete trovare informazioni sul mondo di Tenebra nella 
                sezione <Link href={GuideRoutes.environment}>Globale</Link>. 
            </Typography>

            <Typography paragraph sx={guideStyle}>
                Potrete trovare informazioni sulla citt&agrave; di Buenos Aires e la sua organizzazione nelle
                sezioni <Link href={GuideRoutes.environmentBaires}>Buenos Aires</Link> e <Link href={GuideRoutes.environmentSects}>Sette</Link>.
            </Typography>
        </>
    );
}

GuidesGlossary.getLayout = (page: ReactElement) => (
    <GuideLayout>
        {page}
    </GuideLayout>
)

export default GuidesGlossary;
