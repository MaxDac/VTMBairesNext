import React from "react";
import {useFragment} from "react-relay";
import Typography from "@mui/material/Typography";
import type {
    CharacterFragments_characterInfo$key
} from "vtm-baires-next-services/graphql-queries/queries/character/__generated__/CharacterFragments_characterInfo.graphql";
import Box from "@mui/material/Box";
import type {ReactElement} from "react";
import type {
    CharacterFragments_characterSheet$key
} from "vtm-baires-next-services/graphql-queries/queries/character/__generated__/CharacterFragments_characterSheet.graphql";
import {
    characterInfoFragment,
    characterSheetFragment
} from "vtm-baires-next-services/graphql-queries/queries/character/CharacterFragments";
import ParsedText from "../../../../../vtm-baires-next-components/src/components/ParsedText";
import {mainFontFamily} from "vtm-baires-next-components";

type Props = {
    characterQuery: CharacterFragments_characterInfo$key & CharacterFragments_characterSheet$key
}

const CharacterSheetDescriptionSection = ({characterQuery}: Props): ReactElement => {
    const info = useFragment<CharacterFragments_characterInfo$key>(
        characterInfoFragment,
        characterQuery);

    const sheet = useFragment<CharacterFragments_characterSheet$key>(
        characterSheetFragment,
        characterQuery);

    const getSheetName = () =>
        info?.isNpc === true
            ? `${info?.name ?? ""} (PNG)`
            : info?.name;

    return (
        <Box component="div">
            <Typography sx={{
                ...mainFontFamily,
                color: "secondary.light",
                fontSize: "24px"
            }}>
                {getSheetName()}
            </Typography>
            <ParsedText text={sheet?.description} ignoreDefaultComponents={true} internalDivSx={{
                ...mainFontFamily,
                marginBottom: "10px"
            }} />
        </Box>
    );
};

export default CharacterSheetDescriptionSection;
