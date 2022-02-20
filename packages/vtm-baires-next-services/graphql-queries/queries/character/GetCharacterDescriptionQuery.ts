import {graphql, GraphQLTaggedNode} from "relay-runtime";

export const getCharacterDescriptionQuery: GraphQLTaggedNode = graphql`
    query GetCharacterDescriptionQuery($id: ID!) {
        getCharacterDescription(characterId: $id) {
            id
            name
            avatar
            description
        }
    }
`;
