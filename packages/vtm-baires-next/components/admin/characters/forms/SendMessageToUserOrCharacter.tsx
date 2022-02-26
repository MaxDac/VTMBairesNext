import React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import {getCharacterUserQuery} from "vtm-baires-next-services/graphql-queries/queries/character/GetCharacterUserQuery";
import type {ReactElement} from "react";
import type {Character} from "vtm-baires-next-services/graphql-queries/queries/character/GetCharacterCompleteQuery";
import {useRouter} from "next/router";
import {useCustomLazyLoadQuery} from "vtm-baires-next-utils";
import {
    GetCharacterUserQuery
} from "vtm-baires-next-services/graphql-queries/queries/character/__generated__/GetCharacterUserQuery.graphql";
import {Routes} from "../../../../base/routes";

type Props = {
    character: Character;
}

const AddCharacterExperienceForm = ({character}: Props): ReactElement => {
    const router = useRouter();
    const user = useCustomLazyLoadQuery<GetCharacterUserQuery>(getCharacterUserQuery, {characterId: character.id})
        ?.getCharacterUser;

    const sendMessageToUser = () => {
        if (user?.id != null) {
            router.push(Routes.newMessageTo(user?.id));
        }
    };
    
    const sendMessageToCharacter = () => 
        router.push(Routes.newMessageToCharacter(character.id));

    return (
        <Grid container sx={{paddingTop: "1rem", paddingBottom: "1rem"}}>
            <Grid item xs={12} sm={6} sx={{textAlign: "center"}}>
                <Button variant="outlined"
                        onClick={sendMessageToUser}>
                    Messaggio all'Utente ({user?.name})
                </Button>
            </Grid>
            <Grid item xs={12} sm={6} sx={{textAlign: "center"}}>
                <Button variant="outlined"
                        onClick={sendMessageToCharacter}>
                    Messaggio al Personaggio
                </Button>
            </Grid>
        </Grid>
    );
}

export default AddCharacterExperienceForm;
