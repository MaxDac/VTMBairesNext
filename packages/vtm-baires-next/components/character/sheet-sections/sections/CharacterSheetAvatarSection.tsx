import React, {ReactElement} from "react";
import {useFragment} from "react-relay";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import type {
    CharacterFragments_characterSheet$key
} from "vtm-baires-next-services/graphql-queries/queries/character/__generated__/CharacterFragments_characterSheet.graphql";
import {characterSheetFragment} from "vtm-baires-next-services/graphql-queries/queries/character/CharacterFragments";

export const avatarWidth: number = 270;
export const avatarHeight: number = 470;

type Props = {
    characterQuery: CharacterFragments_characterSheet$key;
}

const CharacterSheetAvatarSection = ({characterQuery}: Props): ReactElement => {
    const sheet = useFragment(
        characterSheetFragment,
        characterQuery);

    const realAvatarHeight = sheet?.isNpc === true ? avatarWidth : avatarHeight

    return (
        <Paper component="div" sx={{
            width: `${avatarWidth + 10}px`,
            height: `${realAvatarHeight + 10}px`,
            display: "inline-flex",
            textAlign: "center",
            margin: "1rem",
            backgroundColor: "background.paper"
        }} variant="outlined">
            <Box sx={{
                margin: "0 auto",
                marginTop: "auto",
                marginBottom: "auto",
                background: `url('${sheet?.avatar ?? ""}')`,
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                width: `${avatarWidth}px`,
                height: `${realAvatarHeight}px`,
            }} />
        </Paper>
    )
};

export default CharacterSheetAvatarSection;
