import React from "react";
import Typography from "@mui/material/Typography";
import type {ReactElement} from "react";
import {useUserCharactersQuery} from "vtm-baires-next-services/graphql-queries/queries/accounts/UserCharactersQuery";

type Props = {
    showWarningWhenNoCharacterSelected: boolean,
    children: (characterId: string) => any
}

const RemoteCharacterProvider = (props: Props): ReactElement => {
    const characters = useUserCharactersQuery();

    if (characters != null && characters.length > 0) {
        return props.children(characters[0].id);
    }

    if (props.showWarningWhenNoCharacterSelected) {
        return (
            <Typography>
                You must create a character to view the sheet.
            </Typography>
        );
    }

    return (<></>);
}

export default RemoteCharacterProvider;
