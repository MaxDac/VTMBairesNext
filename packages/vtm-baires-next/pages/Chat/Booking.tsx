import type {ReactElement} from "react";
import React from "react";
import {object, string} from "yup";
import Typography from "@mui/material/Typography";
import {useFormik} from "formik";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {useTheme} from "@mui/material/styles";
import {useRelayEnvironment} from "react-relay";
import {useHasUserAlreadyBooked} from "vtm-baires-next-services/graphql-queries/queries/chat/HasUserAlreadyBookedQuery";
import {useRouter} from "next/router";
import {FormSelectField, useCustomSnackbar, useDialog, useWait} from "vtm-baires-next-components";
import {useCustomLazyLoadQuery} from "vtm-baires-next-utils/src/relay-utils";
import {
    getAvailableCharactersQuery
} from "vtm-baires-next-services/graphql-queries/queries/chat/GetAvailableCharactersQuery";
import useSession from "../../session/hooks/useSession";
import {
    useAvailablePrivateChats
} from "vtm-baires-next-services/graphql-queries/queries/map/AvailablePrivateChatsQuery";
import {
    GetAvailableCharactersQuery
} from "vtm-baires-next-services/graphql-queries/queries/chat/__generated__/GetAvailableCharactersQuery.graphql";
import {allPlayersQuery} from "vtm-baires-next-services/graphql-queries/queries/character/AllPlayersQuery";
import {
    AllPlayersQuery
} from "vtm-baires-next-services/graphql-queries/queries/character/__generated__/AllPlayersQuery.graphql";
import {AlertType, isNotNullNorEmpty} from "vtm-baires-next-utils";
import AddUserToChatMutation from "vtm-baires-next-services/graphql-queries/mutations/chat/AddUserToChatMutation";
import BookChatMapMutation from "vtm-baires-next-services/graphql-queries/mutations/chat/BookChatMapMutation";
import {Routes} from "../../base/routes";
import MainLayout from "../../components/layouts/MainLayout";

const numberOfPossibleUsers = 5;

const getShape = () => {
    let shape = {
        chatMapId: string().required("Richiesto"),
        guest1: string().required("Richiesto"),
    };

    for (let i = 2; i <= numberOfPossibleUsers; i++) {
        const key = `guest${i}` as keyof typeof shape;
        // @ts-ignore
        shape[key] = string().nullable().notRequired()
    }

    return shape;
};

const BookChatsFormValidationSchema = object().shape(getShape());

const getInitialObject = () => {
    let initialObject = {
        chatMapId: "",
        guest1: ""
    };

    for (let i = 2; i <= numberOfPossibleUsers; i++) {
        // @ts-ignore
        initialObject[`guest${i}`] = "";
    }

    return initialObject;
};

const Booking = (): ReactElement => {
    const hasUserAlreadyBooked = useHasUserAlreadyBooked();

    if (!hasUserAlreadyBooked) {
        return (<BookChatsInternal />);
    }

    return (
        <h2>
            Hai gi&agrave; prenotato, o sei stato invitato, in un'altra chat privata.
        </h2>
    );
};

const BookChatsInternal = (): ReactElement => {
    const environment = useRelayEnvironment();
    const router = useRouter();
    const {enqueueSnackbar} = useCustomSnackbar();
    const {showDialog} = useDialog();
    const {startWait, stopWait} = useWait();
    const theme = useTheme();
    const [user,] = useSession();

    const divider = " - ";

    const availablePrivateChats = useAvailablePrivateChats()
        ?.map(m => [m.id, m.name ?? ""] as [string, string]);

    const allowedUsers = useCustomLazyLoadQuery<GetAvailableCharactersQuery>(getAvailableCharactersQuery, {},{
        fetchPolicy: "network-only"
    })
        ?.privateChatAvailableUsers
        ?.map(x => x?.id)
        ?.filter(isNotNullNorEmpty) ?? [];

    const allowedUsersMap = new Map(allowedUsers.map(x => [x, true]));

    const allCharacters = useCustomLazyLoadQuery<AllPlayersQuery>(allPlayersQuery)
        ?.playersCharactersList
        ?.filter(x => x?.user?.id !== user?.id && x?.user?.id && allowedUsersMap.has(x?.user?.id))
        ?.map(c => {
            const characterId =
                c?.user?.id != null
                    ? `${c?.user?.id}${divider}${c?.id}`
                    : "";

            const characterName = c?.name ?? "";

            return [characterId, characterName] as [string, string]
        }) ?? [];

    const manageError = (characterName: string) =>
        (e: any) => {
            console.error("There was an error while trying to add user to chat", e);
            enqueueSnackbar({
                type: AlertType.Error,
                message: `Non è stato possibile invitare il personaggio ${characterName}.`
            });
        };

    const getGuestsTask = (chatId: string, userIds: Array<[string, string]>): Promise<any> => {
        let tasks: Array<Promise<any>> = [];

        for (const [userId, characterName] of userIds) {
            tasks.push(AddUserToChatMutation(environment, chatId, userId).catch(manageError(characterName)));
        }

        return Promise.all(tasks);
    };
    
    const onSubmit = ({chatMapId, guest1, guest2, guest3, guest4, guest5}: any) => {
        const guests: [string, string][] = [guest1, guest2, guest3, guest4, guest5]
            .filter(isNotNullNorEmpty)
            .map(x => {
                const [userId, characterId] = x.split(divider).filter(isNotNullNorEmpty);

                const [val,] = allCharacters
                    .filter(([ids, _]) => ids.indexOf(characterId) !== -1);

                const [, [characterName,]] = val ?? [];
                return [userId, characterName] as [string, string];
            });

        const [firstUserId, firstCharacterName] = guests[0];

        showDialog("Prenotazione stanza privata", "Sei sicuro di voler prenotare una stanza privata?",
            () => {
                startWait();

                BookChatMapMutation(environment, chatMapId)
                    .then((_: any) => AddUserToChatMutation(environment, chatMapId, String(firstUserId)).catch(manageError(firstCharacterName)))
                    .then((_: any) => getGuestsTask(chatMapId, guests.slice(1)))
                    .then((_: any) => {
                        enqueueSnackbar({
                            type: AlertType.Success,
                            message: "La chat è stata prenotata con successo"
                        });
                        setTimeout(() => router.push(Routes.chat(chatMapId)), 1000);
                    })
                    .catch(manageError)
                    .finally(() => stopWait());
            }
        );
    };

    const formik = useFormik({
        initialValues: getInitialObject(),
        validationSchema: BookChatsFormValidationSchema,
        onSubmit
    });

    const characterControls = () => {
        let controls = [];

        for (let i = 1; i <= numberOfPossibleUsers; i++) {
            controls.push(
                <FormSelectField key={i}
                                 formik={formik}
                                 fieldName={`guest${i}`}
                                 label={`Ospite ${i}`}
                                 values={allCharacters}
                                 addNullValue />
            );
        }

        return controls;
    };

    return (
        <>
            <h1 style={{
                fontFamily: 'Disturbed',
                marginRight: "20px"
            }}>
                Prenota chat privata
            </h1>

            <Typography paragraph>
                In questa schermata puoi prenotare una stanza privata. La stanza sar&agrave; accessibile solamente a te
                e ai giocatori che deciderai di invitare. Ricordati che la prenotazione durer&agrave; 6 ore, al termine
                delle quali, dovrai ri-prenotare un'altra stanza privata.
            </Typography>

            <Typography paragraph>
                Dovrai invitare almeno un giocatore in questa schermata.
            </Typography>

            <form onSubmit={formik.handleSubmit}>
                <Box component="div" sx={{
                    width: "100%"
                }}>
                    <Stack sx={{
                        maxWidth: {
                            sx: "100%",
                            md: "50%"
                        },
                        margin: "0 auto"
                    }}>
                        <FormSelectField formik={formik}
                                         fieldName="chatMapId"
                                         label="Chat Privata"
                                         values={availablePrivateChats} />

                        {characterControls()}

                        <Button type="submit"
                                fullWidth
                                variant="outlined"
                                color="primary"
                                sx={{
                                    margin: theme.spacing(3, 0, 2),
                                }}>
                            Invia
                        </Button>
                    </Stack>
                </Box>
            </form>
        </>
    );
}

Booking.getLayout = (page: ReactElement) => (
    <MainLayout>
        {page}
    </MainLayout>
)

export default Booking;
