import type {ReactElement} from "react";
import React, {useEffect} from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import ReturnToMessagesControl from "../../components/messages/components/ReturnToMessagesControl";
import {useRelayEnvironment} from "react-relay";
import ReadMessageAvatar from "../../components/messages/components/ReadMessageAvatar";
import {useRouter} from "next/router";
import {AlertType, useCustomLazyLoadQuery} from "vtm-baires-next-utils";
import {getMessageQuery} from "vtm-baires-next-services/graphql-queries/queries/messages/GetMessageQuery";
import type {
    GetMessageQuery
} from "vtm-baires-next-services/graphql-queries/queries/messages/__generated__/GetMessageQuery.graphql";
import {ParsedText, useCustomSnackbar, useDialog} from "vtm-baires-next-components";
import SetMessageReadMutation from "vtm-baires-next-services/graphql-queries/mutations/messages/SetMessageReadMutation";
import {getInitials} from "vtm-baires-next-utils/src/utils";
import DeleteMessageMutation from "vtm-baires-next-services/graphql-queries/mutations/messages/DeleteMessageMutation";
import {Routes} from "../../base/routes";
import MainLayout from "../../components/layouts/MainLayout";

const Id = (): ReactElement => {
    const router = useRouter();
    const {id} = router.query;

    const environment = useRelayEnvironment();
    const {enqueueSnackbar} = useCustomSnackbar();
    const {showDialog} = useDialog();

    const message = useCustomLazyLoadQuery<GetMessageQuery>(getMessageQuery, {
        messageId: id as string
    })?.getMessage;

    useEffect(() => {
        if (message?.id != null && !message.read) {
            SetMessageReadMutation(environment, message.id)
                .catch((e: Error) => console.error("Error while setting read flag on the message.", e));
        }
    }, [environment, message]);

    const avatarSize = 72;

    const avatarStyle = {
        width: avatarSize,
        height: avatarSize
    };

    const getSenderName = () =>
        message?.senderCharacter?.name ?? message?.senderUser?.name;

    const getReceiverName = () =>
        message?.receiverCharacter?.name ?? message?.receiverUser?.name;

    const getAvatarSrc = () => {
        if (message?.senderCharacter?.id != null) {
            return (<ReadMessageAvatar characterId={message.senderCharacter.id}
                                      avatarStyle={avatarStyle} />);
        }

        return (<Avatar sx={avatarStyle}>{getInitials(getSenderName() ?? "")}</Avatar>);
    };

    const deleteMessage = (_: any) =>
        showDialog("Cancella messaggio", "Sei sicuro di voler cancellare il messaggio?", () => {
            DeleteMessageMutation(environment, id as string)
                .catch((e: Error) => enqueueSnackbar({
                    type: AlertType.Error,
                    graphqlErrors: e,
                    message: "Si è verificato un errore cancellando il messaggio."
                }))
                .finally(() => router.push(Routes.messages));
        });

    return (
        <ReturnToMessagesControl>
            <Card sx={{
                width: "100%",
                background: "#191919"
            }}>
                <CardContent>
                    <Grid container sx={{width: "100%"}}>
                        <Grid item xs={3} sm={2} md={1}>
                            {getAvatarSrc()}
                        </Grid>
                        <Grid item xs={9} sm={10} md={11}>
                            <Typography>
                                <b>Da: </b> {getSenderName()}
                            </Typography>
                            <Typography>
                                <b>A: </b> {getReceiverName()}
                            </Typography>
                            <Typography>
                                <b>Oggetto: </b> {message?.subject}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Paper variant="outlined" component="div" sx={{
                                padding: "10px",
                                margin: "10px"
                            }}>
                                <ParsedText text={message?.text} />
                            </Paper>
                        </Grid>
                    </Grid>
                </CardContent>
                <CardActions sx={{textAlign: "right"}}>
                    <Button type="button" onClick={(_: any) => router.push(Routes.newMessage(id as string))}>Rispondi</Button>
                    <Button type="button" onClick={deleteMessage}>Elimina</Button>
                </CardActions>
            </Card>
        </ReturnToMessagesControl>
    );
}

Id.getLayout = (page: ReactElement) => (
    <MainLayout>
        {page}
    </MainLayout>
)

export default Id;
