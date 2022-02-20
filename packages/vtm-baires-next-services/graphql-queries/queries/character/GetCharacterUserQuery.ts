import {graphql, GraphQLTaggedNode} from "relay-runtime";

export const getCharacterUserQuery: GraphQLTaggedNode = graphql`
    query GetCharacterUserQuery($characterId: ID!) {
        getCharacterUser(characterId: $characterId) {
            id
            name
            role
        }
    }
`;
