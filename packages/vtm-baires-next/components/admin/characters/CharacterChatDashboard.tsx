import React from "react";
import CharacterSheet from "../../character/CharacterSheet";
import Grid from "@mui/material/Grid";
import ChangeCharacterStatusForm from "./forms/ChangeCharacterStatusForm";
import type {ReactElement} from "react";
import {
    useCharacterCompleteQuery
} from "vtm-baires-next-services/graphql-queries/queries/character/GetCharacterCompleteQuery";

type Props = {
    characterId: string;
}

const CharacterChatDashboard = ({characterId}: Props): ReactElement => {
    const character = useCharacterCompleteQuery(characterId);

    const showCharacterStatusForm = () => {
        if (character != null) {
            return (<ChangeCharacterStatusForm character={character} />);
        }

        return (<></>);
    }

    return (
        <Grid container>
            <Grid item xs={12}>
                {showCharacterStatusForm()}
            </Grid>
            <Grid item xs={12}>
                <CharacterSheet contained={true}
                                id={characterId}
                                reload={true}/>
            </Grid>
        </Grid>
    );
}

export default CharacterChatDashboard;
