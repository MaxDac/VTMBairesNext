import {graphql, GraphQLTaggedNode} from "relay-runtime";

export const userSentMessagesQuery: GraphQLTaggedNode = graphql`
    query UserSentMessagesQuery {
        me {
            sentMessages {
                id
                subject
                receiverUser {
                    id
                    name
                }
                receiverCharacter {
                    id
                    name
                }
                receiverUserId
                receiverCharacterId
                read
                onGame
                insertedAt
                modifiedAt
            }
        }
    }
`;
