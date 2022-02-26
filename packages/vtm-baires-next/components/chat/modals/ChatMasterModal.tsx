import React from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Box from "@mui/material/Box";
import CharacterChatDashboard from "../../admin/characters/CharacterChatDashboard";
import {menuIconStyle} from "../../menu/menu-base-utils";
import type {ReactElement} from "react";
import useSession from "../../../session/hooks/useSession";

type Props = {
    mapId: string;
    characterId?: string;
    characterName?: string;
    closeModal: () => void;
}

const ChatMasterModal = (props: Props): ReactElement => {
    if (props.characterId != null && props.characterName != null) {
        const newProps = {
            ...props,
            characterId: (props.characterId as string),
            characterName: (props.characterName as string)
        }
        return (<ChatMasterModalInternal {...newProps} />);
    }

    return (<></>);
}

type InternalProps = {
    characterId: string;
    characterName: string;
    closeModal: () => void;
}

const ChatMasterModalInternal = ({characterId, characterName, closeModal}: InternalProps): ReactElement => {
    const [user,] = useSession();

    if (user?.role !== "MASTER") {
        return (<></>);
    }
    else {
        return (
            <>
                <AppBar sx={{position: 'relative'}}>
                    <Toolbar>
                        <IconButton edge="start"
                                    color="inherit"
                                    onClick={(_: any) => closeModal()}
                                    aria-label="close">
                            <CloseIcon sx={menuIconStyle} />
                        </IconButton>
                        <Typography sx={{ml: 2, flex: 1}} variant="h6" component="div">
                            {characterName}
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Box sx={{
                    overflow: "auto"
                }}>
                    <CharacterChatDashboard characterId={characterId} />
                </Box>
            </>
        );
    }
}

export default ChatMasterModal;
