import React, {ReactElement} from "react";
import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";
import CharacterSheetPublic from "./CharacterSheetPublic";
import CharacterSheetComplete from "./CharacterSheetComplete";
import {isUserMaster} from "vtm-baires-next-services/graphql-queries/data-utils";
import {useRecoilValue} from "recoil";
import type {Option} from "vtm-baires-next-utils";
import type {Session, SessionCharacter} from "vtm-baires-next-services";
import {sessionCharacterStateAtom, sessionStateAtom} from "../../session/atoms/recoil-atoms";

type Props = {
    id?: string;
    reload?: boolean;
    contained?: boolean;
    fetchKey?: number;
}

const CharacterSheet = (props: Props): ReactElement => {
    const user = useRecoilValue<Option<Session>>(sessionStateAtom)
    const character = useRecoilValue<Option<SessionCharacter>>(sessionCharacterStateAtom)

    const characterOfUser = () =>
        character?.id != null &&
        props.id != null &&
        character.id === props.id;

    if (isUserMaster(user) || characterOfUser()) {
        return (<CharacterSheetComplete {...props} />);
    }
    else if (props.id != null) {
        return (<CharacterSheetPublic id={props.id} {...props} />);
    }
    else if (character?.id != null) {
        return (<CharacterSheetComplete {...props} id={character.id} />);
    }
    else {
        return (<></>);
    }
}

export const CharacterSheetSuspenseFallback = (): ReactElement => {
    return (
        <>
            <Box component="div" style={{textAlign: "center"}}>
                <Skeleton variant="text" height={20} width={40} />
            </Box>

            <Skeleton variant="circular" width={40} height={40} />
            <Skeleton variant="rectangular" width={210} height={118} />
        </>
    );
}

export default CharacterSheet;
