import {graphql, GraphQLTaggedNode} from "relay-runtime";

export const getMessageQuery: GraphQLTaggedNode = graphql`
    query GetMessageQuery($messageId: ID!) {
        getMessage(messageId: $messageId) {
            id
            subject
            senderUser {
                id
                name
            }
            receiverUser {
                id
                name
            }
            senderCharacter {
                id
                name
            }
            receiverCharacter {
                id
                name
            }
            senderUserId
            senderCharacterId
            receiverUserId
            receiverCharacterId
            text
            read
            onGame
            insertedAt
            modifiedAt
        }
    }
`;
