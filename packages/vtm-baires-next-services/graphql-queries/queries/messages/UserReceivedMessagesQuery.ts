import {graphql, GraphQLTaggedNode} from "relay-runtime";

export const userReceivedMessagesQuery: GraphQLTaggedNode = graphql`
    query UserReceivedMessagesQuery {
        me {
            receivedMessages {
                id
                subject
                senderUser {
                    id
                    name
                }
                senderCharacter {
                    id
                    name
                }
                senderUserId
                senderCharacterId
                read
                onGame
                insertedAt
                modifiedAt
            }
        }
    }
`;
