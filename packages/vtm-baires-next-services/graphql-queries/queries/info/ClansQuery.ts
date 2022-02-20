import {graphql, GraphQLTaggedNode} from "relay-runtime";

export const clansQuery: GraphQLTaggedNode = graphql`
    query ClansQuery {
        clans {
            id
            name
        }
    }
`;
