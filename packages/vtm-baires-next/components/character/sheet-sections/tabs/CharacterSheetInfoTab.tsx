import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import CharacterSheetDescriptionSection from "../sections/CharacterSheetDescriptionSection";
import CharacterSheetOffSection from "../sections/CharacterSheetOffSection";
import CharacterSheetAvatarSection from "../sections/CharacterSheetAvatarSection";
import type {ReactElement} from "react";

type Props = {
    characterQuery: any
}

const CharacterSheetInfoTab = ({characterQuery}: Props): ReactElement => {
    return (
        <Grid container>
            <Grid item xs={12}>
                <Box component="div" sx={{
                    display: "block",
                    float: "left",
                    marginRight: "30px"
                }}>
                    <CharacterSheetAvatarSection characterQuery={characterQuery} />
                </Box>
                <Box component="div">
                    <CharacterSheetDescriptionSection characterQuery={characterQuery} />
                </Box>
            </Grid>
            <Grid item xs={12}>
                <CharacterSheetOffSection characterQuery={characterQuery} />
            </Grid>
        </Grid>
    )
};

export default CharacterSheetInfoTab;
