import {graphql, GraphQLTaggedNode} from "relay-runtime";

export const creationClansQuery: GraphQLTaggedNode = graphql`
    query CreationClansQuery {
        creationClans {
            id
            name
        }
    }
`;
