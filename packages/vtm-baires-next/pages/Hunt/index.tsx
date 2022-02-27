import type {ReactElement} from "react";
import React, {useState} from "react";
import {useRelayEnvironment} from "react-relay";
import HelpTwoToneIcon from '@mui/icons-material/HelpTwoTone';
import {menuIconStyle} from "../../components/menu/menu-base-utils";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import {useCustomSnackbar, useDialog} from "vtm-baires-next-components";
import useCharacterSession from "../../session/hooks/useCharacterSession";
import {characterIsVampire} from "../../components/character/character-utils";
import {useIsCharacterAwake} from "vtm-baires-next-services/graphql-queries/queries/character/IsCharacterAwakeQuery";
import {tryCastToOneType} from "vtm-baires-next-utils/src/utils";
import {GuideRoutes} from "../../base/routes";
import type {Haven} from "vtm-baires-next-services/graphql-queries/queries/haven/GetHavensQuery";
import HuntMutation from "vtm-baires-next-services/graphql-queries/mutations/characters/HuntMutation";
import type {
    HuntMutation$data
} from "vtm-baires-next-services/graphql-queries/mutations/characters/__generated__/HuntMutation.graphql";
import {AlertType} from "vtm-baires-next-utils";
import HavenMap from "../../components/haven/HavenMap";

type Props = {
    characterId: string;
}

const HuntInternal = ({characterId}: Props) => {
    const environment = useRelayEnvironment();
    const {enqueueSnackbar} = useCustomSnackbar()
    const {showDialog} = useDialog()
    const [character,] = useCharacterSession();

    const isCharacterVampire = characterIsVampire(character);
    const [awakeFetchKey, setAwakeFetchKey] = useState(1);
    // TODO see below
    // const [personalHavenId, setPersonalHavenId] = React.useState<Option<string>>(null);

    const isCharacterAwake = useIsCharacterAwake(characterId, awakeFetchKey);

    const showHuntHelp = (_: any) => {
        const newTab: any = window.open(`#${GuideRoutes.hunt}`, "_blank");
        newTab.focus();
    }

    const onSectionSelected = (h: Haven | string) => {
        const haven = tryCastToOneType<Haven, string>(h);
        
        if (haven?.id != null) {
            huntRequest(haven.id);
        }
    }

    // TODO - Hidden for now, because the personal Domain is already highlighted in the map locations. Check if it's ok with the feedbacks
    //
    // const selectPersonalHaven = () => {
    //     if (personalHavenId != null) {
    //         huntRequest(personalHavenId);
    //     }
    //     else {
    //         enqueueSnackbar({
    //             type: AlertType.Warning,
    //             message: "Il tuo personaggio non ha attualmente un rifugio"
    //         });
    //     }
    // };
    //
    // const showPersonalHavenHuntButton = () => {
    //     if (personalHavenId != null) {
    //         return (
    //             <Box sx={{
    //                 width: "100%",
    //                 display: "flex",
    //                 justifyContent: "center",
    //                 padding: "1rem"
    //             }}>
    //                 <Button type="submit"
    //                         variant="outlined"
    //                         fullWidth
    //                         color="primary"
    //                         onClick={(_: any) => selectPersonalHaven()}
    //                         sx={{
    //                             width: "80%"
    //                         }}>
    //                     Caccia nel Dominio personale
    //                 </Button>
    //             </Box>
    //         )
    //     }
    //
    //     return (<></>);
    // };

    const huntRequest = (havenId: string) => {
        if (character?.id != null) {
            showDialog(
                "Caccia",
                "Sei sicuro di voler mandare il tuo personaggio a caccia? Potrai giocare subito dopo, ma non potrai far cacciare di nuovo il personaggio per un altro giorno",
                () => {
                    if (character?.id != null && havenId != null) {
                        HuntMutation(environment, {
                            characterId: character.id,
                            havenId
                        })
                            .then((result: HuntMutation$data) => {
                                setAwakeFetchKey(p => p + 1);
                                if (result?.hunt?.result != null) {
                                    const huntResult = result.hunt.result;

                                    enqueueSnackbar({
                                        type: AlertType.Info,
                                        duration: 7000,
                                        message: huntResult
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
                                console.error("Error while hunting!", e);
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

    if (isCharacterVampire && isCharacterAwake) {
        return (
            <>
                <h1 style={{
                    fontFamily: 'Disturbed',
                    marginRight: "20px"
                }}>
                    <Stack direction="row" sx={{
                        alignItems: "middle"
                    }}>
                        <Box>
                            Caccia
                        </Box>
                        <IconButton onClick={showHuntHelp}>
                            <HelpTwoToneIcon sx={{menuIconStyle}}/>
                        </IconButton>
                    </Stack>
                </h1>

                {/*TODO - See above for the personal domain button*/}
                {/*{showPersonalHavenHuntButton()}*/}

                <HavenMap onSectionSelected={onSectionSelected} />
                          {/*TODO - See above for the personal domain button*/}
                          {/*setPersonalHaven={id => setPersonalHavenId((_: any) => id)} />*/}
            </>
        );
    }

    return (<></>);
};

const Index = (): ReactElement => {
    const [character,] = useCharacterSession();

    if (character?.id != null) {
        return (
            <HuntInternal characterId={character.id} />
        )
    }

    return (<></>);
}

export default Index;
