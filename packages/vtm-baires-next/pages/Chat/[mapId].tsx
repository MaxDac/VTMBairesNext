import type {ReactElement} from "react";
import React, {Suspense, useEffect, useRef, useState} from "react";
import ChatInput from "../../components/chat/controls/ChatInput";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import {useRelayEnvironment} from "react-relay";
import type {ChatDiceRequest} from "../../components/chat/controls/ChatThrowDiceInput";
import ChatControls from "../../components/chat/controls/ChatControls";
import {Typography} from "@mui/material";
import ChatMasterModal from "../../components/chat/modals/ChatMasterModal";
import ChatDescriptionModal from "../../components/chat/modals/ChatDescriptionModal";
import ChatStatusModal from "../../components/chat/modals/ChatStatusModal";
import {useChatEntries} from "../../components/chat/hooks/ChatEntriesHook";
import ChatScreen from "../../components/chat/screen/ChatScreen";
import useChatSubscription from "../../base/_hooks/useChatSubscription";
import {getFileTextFromChatEntries} from "../../components/chat/chat-helpers";
import {useUpdateSessionMap} from "../../base/_hooks/useUpdateSessionMap";
import {useRouter} from "next/router";
import type {ChatEntry, Map} from "vtm-baires-next-services/graphql-queries/data-utils";
import useMap from "vtm-baires-next-services/graphql-queries/queries/map/MapQuery";
import {useHasUserAccessToMap} from "vtm-baires-next-services/graphql-queries/queries/map/HasUserAccessToMapQuery";
import {useIsCharacterAwake} from "vtm-baires-next-services/graphql-queries/queries/character/IsCharacterAwakeQuery";
import useCharacterSession from "../../session/hooks/useCharacterSession";
import {useRecoilValue} from "recoil";
import {isUserMasterSelector} from "../../session/selectors/recoil-selectors";
import {DefaultFallback, useCustomSnackbar, useDialog} from "vtm-baires-next-components";
import type {Option} from "vtm-baires-next-utils";
import {AlertType, downloadFile, handleMutation} from "vtm-baires-next-utils";
import useLocationSession from "../../session/hooks/useLocationSession";
import deleteChatEntryMutation from "vtm-baires-next-services/graphql-queries/mutations/chat/DeleteChatEntryMutation";
import chatEntryMutationPromise from "vtm-baires-next-services/graphql-queries/mutations/chat/CreateChatEntryMutation";
import chatDiceEntryMutationPromise from "vtm-baires-next-services/graphql-queries/mutations/chat/CreateChatDiceEntry";

type ChatProps = {
    map: Map
}

const Chat = (): ReactElement => {
    const router = useRouter()
    const {mapId} = router.query

    const map = useMap(mapId as string);
    const userHasAccess = useHasUserAccessToMap(mapId as string);

    if (map != null && (!map.isPrivate || userHasAccess)) {
        return (<ChatInternal map={map} />);
    }

    return (
        <h2>
            Non hai accesso a questa chat
        </h2>
    );
};

const ShowChatInput = ({character, characterId, onNewEntry, onNewDiceEntry}: any) => {
    const isCharacterAwake = useIsCharacterAwake(characterId, 1);

    if (!isCharacterAwake) {
        return (
            <Typography>
                Devi risvegliare il personaggio per poter giocare. Una volta risvegliato, potresti dover aggiornare
                la pagina.
            </Typography>
        );
    }

    if (character?.approved) {
        return (
            <ChatInput newChatEntry={onNewEntry}
                       newDiceEntry={onNewDiceEntry} />
        );
    }

    return (
        <Typography>
            Il tuo personaggio non &egrave; ancora stato accettato.
        </Typography>
    )
};

const ChatInternal = ({map}: ChatProps): ReactElement => {
    const session = useRef(useLocationSession());

    const environment = useRelayEnvironment();
    const [character,] = useCharacterSession();

    const isUserMaster = useRecoilValue(isUserMasterSelector);

    const {enqueueSnackbar} = useCustomSnackbar()
    const {showDialog} = useDialog()

    const [mapModalOpen, setMapModalOpen] = useState(false);
    const [modalTitle, setModalTitle] = useState(map?.name);
    const [modalDescription, setModalDescription] = useState(map?.description);

    const [characterModalOpen, setCharacterModalOpen] = useState(false);
    const [selectedCharacterId, setSelectedCharacterId] = useState<Option<string>>(null);
    const [selectedCharacterName, setSelectedCharacterName] = useState<Option<string>>(null);
    const [characterStatusOpen, setCharacterStatusOpen] = useState(false);

    const initialEntries = useChatEntries(map.id);
    const [entries, setEntries] = useState<Array<ChatEntry>>(initialEntries);

    useChatSubscription(map.id, setEntries);
    useUpdateSessionMap(map.id);

    useEffect(() => {
        if (map?.id != null) {
            const [,setLocation] = session.current;
            setLocation({
                id: map.id,
                name: map?.name
            });
        }
    }, [map])

    const showMapDescription = () => {
        setModalTitle((_: any) => map?.name);
        setModalDescription((_: any) => map?.description);
        setMapModalOpen((_: any) => true);
    };

    const showCharacterDescription = (id: string, name: string) => {
        setSelectedCharacterId((_: any) => id);
        setSelectedCharacterName((_: any) => name);
        setCharacterModalOpen((_: any) => true);
    };

    const deletePhrase = (entryId: string) => {
        if (isUserMaster) {
            showDialog(
                "Cancellazione frase",
                "Sei sicuro di voler cancellare la frase dallo schermo? La frase sarà sempre fruibile nella schermata di storico delle chat",
                () => {
                    handleMutation(
                        () => deleteChatEntryMutation(environment, entryId),
                        enqueueSnackbar,
                        {
                            successMessage: "Frase correttamente cancellata"
                        })
                });
        }
    };

    const createEntry = (action: (id: string, name: string) => Promise<any>) => {
        // Bug
        // If the master changes the character in the left hand side menu, being in the chat doesn't update the
        // character in session directly, because here it's a closure.
        const [ch,] = useCharacterSession();

        if (ch?.id != null && map?.id != null) {
            action(ch.id, map.id)
                .catch(error => enqueueSnackbar({
                    type: AlertType.Error,
                    graphqlErrors: error,
                    message: "An error happened while sending the chat" }));
        }

        if (!ch?.id) {
            enqueueSnackbar({
                type: AlertType.Error,
                message: "You must select a character to play."
            });
        }

        if (!map?.id) {
            enqueueSnackbar({
                type: AlertType.Error,
                message: "You're not on a map."
            });
        }
    };

    const parseEntry = (entry: string): [boolean, string] => {
        const [first,] = entry;

        if (first === "+") {
            return [true, entry.substring(1)];
        }

        return [false, entry];
    };

    const onNewEntry = (entry: string) => {
        if (entry != null && entry !== "") {
            const [offGame, parsedEntry] = parseEntry(entry);

            createEntry((characterId, mapId) =>
                chatEntryMutationPromise(environment, {
                    characterId: characterId,
                    chatMapId: mapId,
                    offGame: offGame,
                    text: parsedEntry,
                }));
        }
    };

    const onNewDiceEntry = (request: ChatDiceRequest) =>
        createEntry((characterId, mapId) =>
            chatDiceEntryMutationPromise(environment, {
                abilityId: request.abilityId,
                attributeId: request.attributeId,
                forDiscipline: request.forDiscipline,
                augmentAttribute: request.augmentAttribute,
                difficulty: request.difficulty,
                freeThrow: request.freeThrow,
                master: request.master,
                characterId: characterId,
                chatMapId: mapId
            }));

    const showChatInput = () => {
        if (character?.id != null) {
            return (
                <ShowChatInput characterId={character.id}
                               character={character}
                               onNewEntry={onNewEntry}
                               onNewDiceEntry={onNewDiceEntry} />
            );
        }

        return (
            <Typography>
                Non hai selezionato nessun personaggio.
            </Typography>
        );
    };

    const downloadChat = () => {
        const fileText = getFileTextFromChatEntries(entries);
        downloadFile("chat.txt", fileText);
    };

    const showChatMasterModal = () => {
        if (selectedCharacterId != null && selectedCharacterName != null) {
            return <ChatMasterModal mapId={map.id}
                                    characterId={selectedCharacterId}
                                    characterName={selectedCharacterName}
                                    closeModal={() => setCharacterModalOpen((_: any) => false)} />
        }

        return (<></>);
    }

    return (
        <>
            <Dialog open={characterModalOpen && isUserMaster}
                    onClose={(_: any) => setCharacterModalOpen((_: any) => false)}
                    fullScreen
                    aria-labelledby="character-modal">
                {showChatMasterModal()}
            </Dialog>
            <Dialog open={characterModalOpen && !isUserMaster}
                    onClose={(_: any) => setMapModalOpen(false)}
                    aria-labelledby="character-description">
                <ChatDescriptionModal characterId={selectedCharacterId}
                                        close={() => setCharacterModalOpen((_: any) => false)} />
            </Dialog>
            <Dialog open={characterStatusOpen}
                    onClose={(_: any) => setCharacterStatusOpen((_: any) => false)}
                    maxWidth="sm"
                    fullWidth
                    aria-labelledby="character-status">
                <ChatStatusModal characterId={character?.id}
                                    close={() => setCharacterStatusOpen((_: any) => false)} />
            </Dialog>
            <Dialog open={mapModalOpen}
                    onClose={(_: any) => setMapModalOpen(false)}
                    aria-labelledby="map-info">
                <DialogTitle>
                    {modalTitle}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {modalDescription}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={(_: any) => setMapModalOpen(false)} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
            <Box component="div" sx={{
                display: "flex",
                flexDirection: "column",
                height: "calc(100% - 47px)",
                overflow: "hidden"
            }} id="chat-entries">
                <ChatControls openMapModal={() => showMapDescription()}
                              openCharacterStatusPopup={() => setCharacterStatusOpen((_: any) => true)}
                              mapId={map.id}
                              onChatLogRequested={downloadChat} />
                <Suspense fallback={<DefaultFallback />}>
                    <ChatScreen entries={entries}
                                showCharacterDescription={showCharacterDescription}
                                canDelete={isUserMaster}
                                deletePhrase={deletePhrase} />
                </Suspense>
                <Box component="div" sx={{
                    flex: "0 1 100px",
                    width: "100%"
                }}>
                    {showChatInput()}
                </Box>
            </Box>
        </>
    );
};

export default Chat;
