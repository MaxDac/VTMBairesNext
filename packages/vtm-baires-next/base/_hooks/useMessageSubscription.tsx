import {useEffect, useState} from "react";
import {useCustomSnackbar} from "vtm-baires-next-components";
import {AlertType, subscribe, useCustomLazyLoadQuery} from "vtm-baires-next-utils";
import {getMessageDigestQuery} from "vtm-baires-next-services/graphql-queries/queries/messages/GetMessageDigestQuery";
import {
    GetMessageDigestQuery
} from "vtm-baires-next-services/graphql-queries/queries/messages/__generated__/GetMessageDigestQuery.graphql";
import useSubscriptionTokenQuery
    from "vtm-baires-next-services/graphql-queries/queries/accounts/SubscriptionTokenQuery";
import {
    MessageNotificationSubscription$data
} from "vtm-baires-next-services/graphql-queries/subscriptions/__generated__/MessageNotificationSubscription.graphql";
import MessageNotificationSubscription
    from "vtm-baires-next-services/graphql-queries/subscriptions/MessageNotificationSubscription";

export const useMessageSubscription = (): number => {
    const {enqueueSnackbar} = useCustomSnackbar()
    const messagesDigest = useCustomLazyLoadQuery<GetMessageDigestQuery>(getMessageDigestQuery, {}, {
        fetchPolicy: "network-only"
    });

    const [numberOfMessages, setNumberOfMessages] = useState(messagesDigest?.messagesDigest?.unreadMessages ?? 0);

    // Message notification subscription
    const chatToken = useSubscriptionTokenQuery();

    useEffect(() => {
        const handleNotification = (notification: MessageNotificationSubscription$data) => {
            if (notification?.newMessageNotification?.message != null) {
                const message = notification.newMessageNotification.message;

                if (notification.newMessageNotification.message?.operation !== "set_message_read") {
                    enqueueSnackbar({
                        type: AlertType.Info,
                        message: message.senderName != null
                            ? `${message.senderName}: ${message.subject}`
                            : message.subject
                    });
                }
            }
        }

        const handleMessageBadgeUpdate = (notification: MessageNotificationSubscription$data) => {
            if (notification?.newMessageNotification?.numberUnread != null) {
                setNumberOfMessages(notification.newMessageNotification.numberUnread);
            }
        }

        if (chatToken != null) {
            const messageSubscription =
                subscribe(
                    MessageNotificationSubscription(chatToken),
                    (notification: MessageNotificationSubscription$data) => {
                        handleNotification(notification);
                        handleMessageBadgeUpdate(notification);
                    });

            return () => {
                console.debug("unsubscribe from message");
                messageSubscription.unsubscribe();
            };
        }
    }, [enqueueSnackbar, chatToken]);

    return numberOfMessages;
}