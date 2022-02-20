import {graphql, GraphQLTaggedNode} from "relay-runtime";

export const getAvailableCharactersQuery: GraphQLTaggedNode = graphql`
    query GetAvailableCharactersQuery {
        privateChatAvailableUsers {
            id
            name
        }
    }
`;
