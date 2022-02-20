import {graphql, GraphQLTaggedNode} from "relay-runtime";

export const allUsersQuery: GraphQLTaggedNode = graphql`
    query AllUsersQuery {
        allUsers {
            id
            name
        }
    }
`;
