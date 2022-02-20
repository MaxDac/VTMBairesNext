import {graphql, Observable} from "relay-runtime";
import {ChatEntry} from "../data-utils";
import {wrapSubscription} from "vtm-baires-next-utils";

const subscription = graphql`
    subscription ChatSubscription($mapId: ID!, $token: String!) {
        newChatEntry(mapId: $mapId, token: $token) {
            id
            text
            offGame
            result
            master
            hide
            command @required(action: LOG)
            character {
                id
                name
            }
            chatMap {
                id
            }
            insertedAt
        }
    }
`;

const subscriptionObservable = (mapId: string, token: string): Observable<ChatEntry> =>
    wrapSubscription<ChatEntry>(subscription, { mapId, token }, ({ newChatEntry }) => newChatEntry);

export default subscriptionObservable;
