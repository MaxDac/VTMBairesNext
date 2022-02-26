import React from "react";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import type {ReactElement} from "react";
import type {Option} from "vtm-baires-next-utils";
import {useCustomLazyLoadQuery} from "vtm-baires-next-utils";
import {
    getCharacterDescriptionQuery
} from "vtm-baires-next-services/graphql-queries/queries/character/GetCharacterDescriptionQuery";
import type {
    GetCharacterDescriptionQuery
} from "vtm-baires-next-services/graphql-queries/queries/character/__generated__/GetCharacterDescriptionQuery.graphql";
import {SimpleImage} from "vtm-baires-next-components";

type PropsInternal = {
    characterId: string;
    close: () => void;
}

type Props = {
    characterId: Option<string>;
    close: () => void;
}

const ChatDescriptionModalInternal = ({characterId, close}: PropsInternal): ReactElement => {
    const characterInfo =
        useCustomLazyLoadQuery<GetCharacterDescriptionQuery>(getCharacterDescriptionQuery, {id: characterId})
            ?.getCharacterDescription;

    const chatAvatar = () => {
        if (characterInfo?.avatar != null) {
            return (
                <SimpleImage src={characterInfo.avatar}
                             align="left"
                             alt="avatar"
                             hspace="10px"
                             vspace="10px"
                             style={{
                                 maxWidth: "200px",
                                 maxHeight: "300px",
                                 height: "auto"
                             }} />
            );
        }

        return (<></>);
    }

    return (
        <>
            <DialogTitle>
                {characterInfo?.name}
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {chatAvatar()}
                    {characterInfo?.description}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={(_: any) => close()} color="primary">
                    Chiudi
                </Button>
            </DialogActions>
        </>
    );
}

const ChatDescriptionModal = (props: Props): ReactElement => {
    if (props.characterId != null) {
        return (<ChatDescriptionModalInternal characterId={props.characterId} close={props.close} />);
    }

    return (<></>);
}

export default ChatDescriptionModal;
