import React, {useState} from "react";
import InvertColorsIcon from '@mui/icons-material/InvertColors';
import RemoveRedEyeTwoToneIcon from '@mui/icons-material/RemoveRedEyeTwoTone';
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import {useRelayEnvironment} from "react-relay";
import {menuIconStyle, MenuSecondaryText} from "../menu-base-utils";
import {useIsCharacterAwake} from "vtm-baires-next-services/graphql-queries/queries/character/IsCharacterAwakeQuery";
import AwakeCharacterMutation from "vtm-baires-next-services/graphql-queries/mutations/characters/AwakeCharacterMutation";
import type {ReactElement} from "react";
import {useRouter} from "next/router";
import {useCustomSnackbar, useDialog} from "vtm-baires-next-components";
import useCharacterSession from "../../../session/hooks/useCharacterSession";
import {characterIsVampire} from "../../character/character-utils";
import type {
    AwakeCharacterMutation$data
} from "vtm-baires-next-services/graphql-queries/mutations/characters/__generated__/AwakeCharacterMutation.graphql";
import {AlertType} from "vtm-baires-next-utils";
import {Routes} from "../../../base/routes";

const MenuHuntSection = (): ReactElement => {
    const router = useRouter();
    const environment = useRelayEnvironment();
    const {enqueueSnackbar} = useCustomSnackbar()
    const {showDialog} = useDialog()
    const [character,] = useCharacterSession();

    const isCharacterVampire = characterIsVampire(character);
    const [awakeFetchKey, setAwakeFetchKey] = useState(1);

    const awakeRequest = () => {
        if (character?.id != null) {
            showDialog(
                "Risveglio",
                "Sei sicuro di voler risvegliare il tuo personaggio?",
                () => {
                    if (character?.id != null) {
                        AwakeCharacterMutation(environment, character.id)
                            .then((result: AwakeCharacterMutation$data) => {
                                setAwakeFetchKey(p => p + 1);
                                if (result?.awake?.result != null) {
                                    const awakeResult = result.awake.result;

                                    enqueueSnackbar({
                                        type: AlertType.Info,
                                        duration: 7000,
                                        message: awakeResult
                                    });
                                }
                                else {
                                    console.error("No back end message", result);
                                    enqueueSnackbar({
                                        type: AlertType.Error,
                                        message: "Qualcosa non è andato come previsto, contatta un master per maggiori informazioni."
                                    });
                                }
                            })
                            .catch(e => {
                                setAwakeFetchKey(p => p + 1);
                                console.error("Error while awakening!", e);
                                enqueueSnackbar({
                                    type: AlertType.Error,
                                    message: "Qualcosa non è andato come previsto, contatta un master per maggiori informazioni."
                                })
                            });
                    }
                    else {
                        enqueueSnackbar({
                            type: AlertType.Error,
                            message: "Devi prima selezionare il personaggio."
                        });
                    }
                });
        }
        else {
            enqueueSnackbar({
                type: AlertType.Warning,
                message: "Devi selezionare un personaggio prima di cacciare."
            });
        }
    };

    const huntRequest = () => router.push(Routes.hunt);

    if (isCharacterVampire && character?.id != null) {
        return (<MenuHuntSectionInternal awakeRequest={awakeRequest}
                                         huntRequest={huntRequest}
                                         characterId={character.id}
                                         awakeFetchKey={awakeFetchKey} />);
    }

    return (<></>);
}

type MenuHuntSectionInternalProps = {
    characterId: string;
    awakeRequest: (request: any) => void;
    huntRequest: (request: any) => void;
    awakeFetchKey: number;
};

const MenuHuntSectionInternal = ({
                                     characterId,
                                     awakeRequest,
                                     huntRequest,
                                     awakeFetchKey
                                 }: MenuHuntSectionInternalProps): ReactElement => {
    const isCharacterAwake = useIsCharacterAwake(characterId, awakeFetchKey);

    return isCharacterAwake
        ? (<MenuHuntControl huntRequest={huntRequest} />)
        : (<MenuAwakeControl awakeRequest={awakeRequest} />);
};

const MenuHuntControl = ({huntRequest}: any) => (
    <ListItem button onClick={huntRequest}>
        <ListItemIcon>
            <InvertColorsIcon sx={menuIconStyle} />
        </ListItemIcon>
        <ListItemText secondary={<MenuSecondaryText text="Caccia" />} />
    </ListItem>
);

const MenuAwakeControl = ({awakeRequest}: any) => (
    <ListItem button onClick={awakeRequest}>
        <ListItemIcon>
            <RemoveRedEyeTwoToneIcon sx={menuIconStyle} />
        </ListItemIcon>
        <ListItemText secondary={<MenuSecondaryText text="Risveglio" />} />
    </ListItem>
);

export default MenuHuntSection;
