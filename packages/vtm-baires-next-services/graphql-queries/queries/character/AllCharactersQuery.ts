import {graphql, GraphQLTaggedNode} from "relay-runtime";

export const allCharactersQuery: GraphQLTaggedNode = graphql`
    query AllCharactersQuery {
        charactersList {
            id
            name
            user {
                id
            }
        }
    }
`;
