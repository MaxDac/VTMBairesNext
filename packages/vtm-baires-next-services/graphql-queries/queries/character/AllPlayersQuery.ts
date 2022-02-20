import {graphql, GraphQLTaggedNode} from "relay-runtime";

export const allPlayersQuery: GraphQLTaggedNode = graphql`
    query AllPlayersQuery {
        playersCharactersList {
            id
            name
            user {
                id
            }
        }
    }
`;
