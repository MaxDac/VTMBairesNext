import {graphql, GraphQLTaggedNode} from "relay-runtime";

export const listSessionQuery: GraphQLTaggedNode = graphql`
    query SessionQuery {
        sessionsList {
            user {
                id
                name
                role
            }
            character {
                id
                name
            }
            location {
                id
                name
            }
        }
    }
`;
