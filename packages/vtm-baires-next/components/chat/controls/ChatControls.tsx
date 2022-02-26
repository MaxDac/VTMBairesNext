import React from "react";
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import HealingIcon from '@mui/icons-material/Healing';
import RoomIcon from '@mui/icons-material/Room';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import FlashOnOutlinedIcon from '@mui/icons-material/FlashOnOutlined';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import {useTheme} from "@mui/material/styles";
import {useRelayEnvironment} from "react-relay";
import {menuIconStyle} from "../../menu/menu-base-utils";
import DownloadIcon from '@mui/icons-material/Download';
import type {ReactElement} from "react";
import {useDialog, useCustomSnackbar} from "vtm-baires-next-components";
import useCharacterSession from "../../../session/hooks/useCharacterSession";
import {AlertType, handleMutation} from "vtm-baires-next-utils";
import RouseCheckMutation from "vtm-baires-next-services/graphql-queries/mutations/chat/RouseCheckMutation";
import UseWillpowerChatMutation from "vtm-baires-next-services/graphql-queries/mutations/chat/UseWillpowerChatMutation";
import HealMutation from "vtm-baires-next-services/graphql-queries/mutations/chat/HealMutation";

type Props = {
    openMapModal: () => void;
    openCharacterStatusPopup: () => void;
    mapId: string;
    onChatLogRequested: () => void;
};

const ChatControls = ({openMapModal, openCharacterStatusPopup, mapId, onChatLogRequested}: Props): ReactElement => {
    const environment = useRelayEnvironment();
    const theme = useTheme();
    const {showDialog} = useDialog()
    const {enqueueSnackbar} = useCustomSnackbar()
    const [character,] = useCharacterSession();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const onMapClicked = (_: any) => {
        openMapModal();
        handleClose();
    };

    const onChatLogRequestedHandler = (_: any) => {
        onChatLogRequested();
        handleClose();
    };

    const showSelectCharacterNotification = () => 
        enqueueSnackbar({
            type: AlertType.Warning,
            message: "Devi prima selezionare un personaggio"
        });

    const vampireReservedActions = () => {
        if (character?.clan?.name === "Umano") {
            return [];
        }

        return [
            <SpeedDialAction key={1}
                             icon={<BloodtypeIcon sx={menuIconStyle} />}
                             tooltipTitle="Spendi vitae"
                             onClick={requestRouseCheck} />,
            <SpeedDialAction key={2}
                             icon={<FlashOnOutlinedIcon sx={menuIconStyle} />}
                             tooltipTitle="Spendi WP"
                             onClick={requestWillpowerUse} />,
            <SpeedDialAction key={3}
                             icon={<HealingIcon sx={menuIconStyle} />}
                             tooltipTitle="Guarisci"
                             onClick={requestHeal} />
        ];
    }

    const requestRouseCheck = (_: any) => {
        if (character?.id != null) {
            showDialog("Vitae", "Sei sicuro di voler spendere vitae?",
                () => {
                    handleMutation(() =>
                        RouseCheckMutation(environment, {
                            characterId: character?.id ?? "",
                            chatMapId: mapId
                        }), enqueueSnackbar);
                });
        }
        else {
            showSelectCharacterNotification();
        } 

        handleClose();
    }

    const requestWillpowerUse = (_: any) => {
        showDialog("Forza di Volontà", "Sei sicuro di voler spendere Forza di Volontà?",
            () => {
                if (character?.id != null) {
                    handleMutation(() =>
                        UseWillpowerChatMutation(environment, {
                            characterId: character?.id ?? "",
                            chatMapId: mapId
                        }), enqueueSnackbar);
                }
                else {
                    showSelectCharacterNotification();
                }
            });

        handleClose();
    }

    const requestHeal = (_: any) => {
        showDialog(
            "Guarire",
            "Sei sicuro di voler spendere vitae per guarire il personaggio?\nRicorda che puoi farlo solo una volta per turno, e il tentativo apparirà in chat.",
            () => {
                if (character?.id != null) {
                    handleMutation(
                        () => HealMutation(environment, character?.id ?? "", mapId),
                        enqueueSnackbar
                    );
                }
                else {
                    showSelectCharacterNotification();
                }
            }
        );
    };

    return (
        <SpeedDial ariaLabel="Azioni chat"
                   sx={{
                       position: 'absolute',
                       top: theme.spacing(10),
                       right: theme.spacing(3)
                   }}
                   icon={<SpeedDialIcon sx={menuIconStyle} />}
                   onClose={handleClose}
                   onOpen={handleOpen}
                   direction="down"
                   open={open}>
            <SpeedDialAction icon={<RoomIcon sx={menuIconStyle} />}
                             tooltipTitle="Location"
                             onClick={onMapClicked} />
            <SpeedDialAction icon={<DownloadIcon sx={menuIconStyle} />}
                             tooltipTitle="Download Chat"
                             onClick={onChatLogRequestedHandler} />
            <SpeedDialAction icon={<AssignmentIndIcon sx={menuIconStyle} />}
                             tooltipTitle="Status"
                             onClick={(_: any) => openCharacterStatusPopup()} />
            {vampireReservedActions()}
        </SpeedDial>
    )
}

export default ChatControls;
