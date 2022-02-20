import {graphql, GraphQLTaggedNode} from "relay-runtime";

export const getAllChatLocationsQuery: GraphQLTaggedNode = graphql`
    query GetAllChatLocationsQuery {
        allChatLocations {
            id
            name
        }
    }
`;
