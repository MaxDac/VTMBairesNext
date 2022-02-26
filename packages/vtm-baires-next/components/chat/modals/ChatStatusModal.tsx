import React from "react";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import {useFragment} from "react-relay";
import CharacterSheetStatusStatsSection from "../../character/sheet-sections/sections/CharacterSheetStatusStatsSection";
import CharacterFragmentProvider from "../../character/data/CharacterFragmentProvider";
import type {ReactElement} from "react";
import type {Option} from "vtm-baires-next-utils";
import type {
    CharacterFragments_characterStats$key
} from "vtm-baires-next-services/graphql-queries/queries/character/__generated__/CharacterFragments_characterStats.graphql";
import {characterStatsFragment} from "vtm-baires-next-services/graphql-queries/queries/character/CharacterFragments";

type PropsInternal = {
    characterQuery: CharacterFragments_characterStats$key;
    close: () => void;
}

type Props = {
    characterId: Option<string>;
    close: () => void;
}

const ChatStatusModalInternal = ({characterQuery, close}: PropsInternal): ReactElement => {
    const sheet: any = useFragment<CharacterFragments_characterStats$key>(
        characterStatsFragment,
        characterQuery);

    return (
        <>
            <DialogTitle>
                Status
            </DialogTitle>
            <DialogContent>
                <CharacterSheetStatusStatsSection sheet={sheet} />
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={(_: any) => close()} color="primary">
                    Close
                </Button>
            </DialogActions>
        </>
    );
}

const ChatStatusModal = (props: Props): ReactElement => {
    if (props.characterId != null) {
        return (
            <CharacterFragmentProvider characterId={props.characterId}
                                       showWarningWhenNoCharacterSelected={true}>
                {character =>
                    <ChatStatusModalInternal characterQuery={character}
                                             close={props.close} />
                }
            </CharacterFragmentProvider>
        );
    }

    return (<></>);
}

export default ChatStatusModal;
