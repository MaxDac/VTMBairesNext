import type {ReactElement} from "react";
import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import {useFragment} from "react-relay";
import {characterOffFragment} from "vtm-baires-next-services/graphql-queries/queries/character/CharacterFragments";
import type {
    CharacterFragments_characterOff$key
} from "vtm-baires-next-services/graphql-queries/queries/character/__generated__/CharacterFragments_characterOff.graphql";
import {mainFontFamily, ParsedText, SoundWrapperComponent} from "vtm-baires-next-components";

type Props = {
    characterQuery: CharacterFragments_characterOff$key
};

const offComponents = {
    img: ({node, ...props}: any) => (
        <Box sx={{textAlign: "center"}}>
            <img {...props} style={{margin: "0 auto"}} alt={props?.alt ?? "img"} />
        </Box>
    )
};

const CharacterSheetOffSection = ({characterQuery}: Props): ReactElement => {
    const sheet = useFragment(
        characterOffFragment,
        characterQuery);

    return (
        <Grid item xs={12}>
            {
                sheet?.soundtrack != null && sheet.soundtrack !== ""
                    ? (<SoundWrapperComponent soundSourceUrl={sheet.soundtrack} />)
                    : (<></>)
            }
            <ParsedText text={sheet?.off} 
                        ignoreDefaultComponents 
                        internalDivSx={{
                            ...mainFontFamily
                        }}
                        components={offComponents}
                        useDivsInsteadOfParagraphs={true} />
        </Grid>
    );
}

export default CharacterSheetOffSection;
