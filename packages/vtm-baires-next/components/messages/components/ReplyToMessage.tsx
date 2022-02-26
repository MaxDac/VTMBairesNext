import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import type {SubmitProperties} from "../NewMessage";
import MessageTemplate from "./MessageTemplate";
import type {ReactElement} from "react";
import {useCustomLazyLoadQuery} from "vtm-baires-next-utils";
import {getMessageQuery} from "vtm-baires-next-services/graphql-queries/queries/messages/GetMessageQuery";
import {
    GetMessageQuery
} from "vtm-baires-next-services/graphql-queries/queries/messages/__generated__/GetMessageQuery.graphql";

type Props = {
    messageId: string;
    onSubmit: (properties: SubmitProperties) => void;
    toUserId?: string;
}

const ReplyToMessage = ({messageId, onSubmit, toUserId}: Props): ReactElement => {
    const message = useCustomLazyLoadQuery<GetMessageQuery>(getMessageQuery, {
        messageId: messageId
    }, {
            fetchPolicy: "store-and-network"
    })?.getMessage;

    const onSubmitInternal = (e: SubmitProperties) => onSubmit({
        ...e,
        replyToMessageId: message?.id
    });

    return (
        <Grid container>
            <Grid item xs={12}>
                <Card sx={{margin: "20px"}}>
                    <CardContent>
                        <Typography variant="h5" component="div" sx={{padding: "10px"}}>
                            Messaggio precedente
                        </Typography>
                        <Typography>
                            {message?.text}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12}>
                <MessageTemplate submitted={onSubmitInternal}
                                 characterId={message?.senderCharacter?.id}
                                 userId={message?.senderUser?.id}
                                 toUserId={toUserId}
                                 onGame={message?.onGame === true}
                                 isReply={true}
                                 subject={`Re: ${message?.subject ?? ""}`}/>
            </Grid>
        </Grid>
    );
}

export default ReplyToMessage;
