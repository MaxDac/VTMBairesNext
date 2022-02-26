import type {ReactElement} from "react";
import React from "react";
import ReturnToMessagesControl from "./components/ReturnToMessagesControl";
import {useRelayEnvironment} from "react-relay";
import ReplyToMessage from "./components/ReplyToMessage";
import MessageTemplate from "./components/MessageTemplate";
import {AlertType, Option} from "vtm-baires-next-utils";
import {useRouter} from "next/router";
import {useCustomSnackbar} from "vtm-baires-next-components";
import useCharacterSession from "../../session/hooks/useCharacterSession";
import SendMessageMutation from "vtm-baires-next-services/graphql-queries/mutations/messages/SendMessageMutation";
import {Routes} from "../../base/routes";

export type SubmitProperties = {
    subject: string;
    text: string;
    onGame: boolean;
    characterId?: Option<string>;
    userId?: Option<string>;
    replyToMessageId?: Option<string>;
};

type Props = {
    replyMessageId?: string;
    toUserId?: string;
    toCharacterId?: string;
}

const NewMessage = (props: Props): ReactElement => {
    const environment = useRelayEnvironment();
    const router = useRouter();
    const {enqueueSnackbar} = useCustomSnackbar();
    const [character,] = useCharacterSession();

    const onSubmit = (e: SubmitProperties) => {
        SendMessageMutation(environment, {
            onGame: e.onGame,
            receiverCharacterId: e.characterId,
            receiverUserId: e.userId,
            replyToId: props.replyMessageId,
            senderCharacterId: character?.id,
            subject: e.subject,
            text: e.text
        })
            .then((_: any) => enqueueSnackbar({
                type: AlertType.Success,
                message: "Messaggio inviato correttamente"
            }))
            .catch(e => enqueueSnackbar({
                type: AlertType.Error,
                graphqlErrors: e,
                message: "Errore inviando il messaggio!"
            }))
            .finally(() => router.push(Routes.messages));
    };

    const editor = () =>
        props.replyMessageId != null
            ? (<ReplyToMessage messageId={props.replyMessageId}
                               onSubmit={onSubmit}
                               toUserId={props.toUserId} />)
            : (<MessageTemplate submitted={onSubmit} 
                                toUserId={props.toUserId} 
                                toCharacterId={props.toCharacterId}
                                isReply={false} />);

    return (
        <ReturnToMessagesControl>
            {editor()}
        </ReturnToMessagesControl>
    );
}

export default NewMessage;
