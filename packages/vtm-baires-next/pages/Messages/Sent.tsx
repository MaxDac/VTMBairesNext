import type {ReactElement} from "react";
import React, {Suspense, useState} from "react";
import List from "@mui/material/List";
import MessageListItem from "../../components/messages/components/MessageListItem";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import {useRelayEnvironment} from "react-relay";
import {useRouter} from "next/router";
import {useCustomSnackbar, useDialog} from "vtm-baires-next-components";
import {handleMutation, useCustomLazyLoadQuery} from "vtm-baires-next-utils";
import {userSentMessagesQuery} from "vtm-baires-next-services/graphql-queries/queries/messages/UserSentMessagesQuery";
import type {
    UserSentMessagesQuery
} from "vtm-baires-next-services/graphql-queries/queries/messages/__generated__/UserSentMessagesQuery.graphql";
import DeleteAllSentMessagesMutation
    from "vtm-baires-next-services/graphql-queries/mutations/messages/DeleteAllSentMessagesMutation";
import {Routes} from "../../base/routes";
import MainLayout from "../../components/layouts/MainLayout";

const Sent = (): ReactElement => {
    const router = useRouter();
    const environment = useRelayEnvironment();
    const {enqueueSnackbar} = useCustomSnackbar();
    const {showDialog} = useDialog()
    const [fetchKey, setFetchKey] = useState(0);

    const messages = useCustomLazyLoadQuery<UserSentMessagesQuery>(userSentMessagesQuery, {}, {
        fetchPolicy: "store-and-network",
        fetchKey: fetchKey
    });

    const messageList = () =>
        (messages?.me?.sentMessages ?? [])
            ?.map(m =>
                m != null
                    ? (<MessageListItem key={m.id} message={{
                        id: m.id,
                        subject: m.subject,
                        onGame: m.onGame,
                        read: m.read,
                        insertedAt: m.insertedAt,
                        modifiedAt: m.modifiedAt,
                        receiverUser: {...m.receiverUser},
                        receiverCharacter: m.receiverCharacter?.id != null
                            ? {...m.receiverCharacter}
                            : null
                    }} />)
                    : <></>);

    const onDeleteAll = (_: any) => {
        showDialog(
            "Cancella tutti i messaggi",
            "Sei sicuro di voler cancellare tutti i tuoi messaggi ricevuti?",
            () => {
                handleMutation(
                    () => DeleteAllSentMessagesMutation(environment),
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

    return (
        <>
            <div style={{textAlign: "right", padding: "1rem"}}>
                <ButtonGroup>
                    <Button type="submit" onClick={(_: any) => router.push(Routes.newMessage())}>
                        Scrivi nuovo
                    </Button>
                    <Button type="submit" onClick={(_: any) => router.push(Routes.messages)}>
                        Messaggi ricevuti
                    </Button>
                    <Button type="submit" onClick={onDeleteAll}>
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

Sent.getLayout = (page: ReactElement) => (
    <MainLayout>
        {page}
    </MainLayout>
)

export default Sent;
