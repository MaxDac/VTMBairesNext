import React, {Suspense, useState} from "react";
import List from "@mui/material/List";
import MessageListItem from "../../components/messages/components/MessageListItem";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import {useRelayEnvironment} from "react-relay";
import {useTheme} from "@mui/material/styles";
import {useMediaQuery} from "@mui/material";
import type {ReactElement} from "react";
import {useRouter} from "next/router";
import {useCustomSnackbar, useDialog} from "vtm-baires-next-components";
import {handleMutation, useCustomLazyLoadQuery} from "vtm-baires-next-utils";
import {
    userReceivedMessagesQuery
} from "vtm-baires-next-services/graphql-queries/queries/messages/UserReceivedMessagesQuery";
import {
    UserReceivedMessagesQuery
} from "vtm-baires-next-services/graphql-queries/queries/messages/__generated__/UserReceivedMessagesQuery.graphql";
import DeleteAllReceivedMessagesMutation
    from "vtm-baires-next-services/graphql-queries/mutations/messages/DeleteAllReceivedMessagesMutation";
import {Routes} from "../../base/routes";

const Index = (): ReactElement => {
    const theme = useTheme();
    const router = useRouter();
    const environment = useRelayEnvironment();
    const {enqueueSnackbar} = useCustomSnackbar();
    const {showDialog} = useDialog();
    const [fetchKey, setFetchKey] = useState(0);

    const messages = useCustomLazyLoadQuery<UserReceivedMessagesQuery>(userReceivedMessagesQuery, {}, {
        fetchPolicy: "store-and-network",
        fetchKey: fetchKey
    });

    const isSmall = useMediaQuery(theme.breakpoints.down("md"));

    const messageList = () =>
        (messages?.me?.receivedMessages ?? [])
            ?.map(m =>
                m != null
                    ? (<MessageListItem key={m.id} message={{
                        id: m.id,
                        subject: m.subject,
                        onGame: m.onGame,
                        read: m.read,
                        insertedAt: m.insertedAt,
                        modifiedAt: m.modifiedAt,
                        senderUser: {...m.senderUser},
                        senderCharacter: m.senderCharacter
                            ? {...m.senderCharacter}
                            : null
                    }} />)
                    : <></>);

    const onDeleteAll = (_: any) => {
        showDialog(
            "Cancella tutti i messaggi",
            "Sei sicuro di voler cancellare tutti i tuoi messaggi ricevuti?",
            () => {
                handleMutation(
                    () => DeleteAllReceivedMessagesMutation(environment),
                    enqueueSnackbar,
                    {
                        successMessage: "I messaggi sono stati cancellati correttamente",
                        onCompleted: () => {
                            setFetchKey(p => p + 1);
                        }
                    });
            }
        )
    };

    const buttonType = () => isSmall ? "contained" : "outlined";

    return (
        <>
            <div style={{textAlign: "right", padding: "1rem"}}>
                <ButtonGroup>
                    <Button variant={buttonType()} onClick={(_: any) => router.push(Routes.newMessage())}>
                        Scrivi nuovo
                    </Button>
                    <Button variant={buttonType()} onClick={(_: any) => router.push(Routes.sentMessages)}>
                        Messaggi inviati
                    </Button>
                    <Button variant={buttonType()} onClick={onDeleteAll}>
                        Cancella tutti
                    </Button>
                </ButtonGroup>
            </div>
            <Suspense fallback={"Loading..."}>
                <List sx={{width: "100%", bgcolor: "background.paper"}}>
                    {messageList()}
                </List>
            </Suspense>
        </>
    );
}

export default Index;
