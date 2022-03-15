import {graphql, GraphQLTaggedNode} from "relay-runtime";

export const mainMapsQuery: GraphQLTaggedNode = graphql`
    query MainMapsQuery {
        mainMaps {
            id
            name
            description
            children {
                id
                name
            }
        }
    }
`;
