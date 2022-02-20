import {graphql, GraphQLTaggedNode} from "relay-runtime";

export const getMessageDigestQuery: GraphQLTaggedNode = graphql`
    query GetMessageDigestQuery {
        messagesDigest {
            totalMessages
            unreadMessages
        }
    }
`;
