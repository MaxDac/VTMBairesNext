import {graphql, Observable} from "relay-runtime";
import {wrapSubscription} from "vtm-baires-next-utils/index";
import {MessageNotificationSubscription$data} from "./__generated__/MessageNotificationSubscription.graphql";

const subscription = graphql`
    subscription MessageNotificationSubscription($token: String!) {
        newMessageNotification(token: $token) {
            message {
                id
                subject
                senderName
                operation
            }
            numberUnread
        }
    }
`;

const subscriptionObservable = (token: string): Observable<MessageNotificationSubscription$data> =>
    wrapSubscription<MessageNotificationSubscription$data>(subscription, {
        token
    });

export default subscriptionObservable;
