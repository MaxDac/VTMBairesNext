import React, {ReactElement} from "react";
import Typography from "@mui/material/Typography";
import { guideStyle, titleStyle } from "../../components/guides/GuidesStyles";
import GuideLayout from "../../components/layouts/GuideLayout";
import Experience from "./Experience";

const Faq = (): ReactElement => {
    return (
        <>
            <Typography paragraph sx={guideStyle}>
                <h1 style={titleStyle}>
                    F.A.Q.
                </h1>
            </Typography>

            <Typography paragraph sx={guideStyle}>
                Questa sezione sar&agrave; dedicata alle risposte alle domande
                pi&ugrave; frequenti. Vi invitiamo a contattarci in caso riteniate 
                sia utile aggiungere la vostra domanda alla lista.
            </Typography>
        </>
    );
}

Faq.getLayout = (page: ReactElement) => (
    <GuideLayout>
        {page}
    </GuideLayout>
)

export default Faq;
