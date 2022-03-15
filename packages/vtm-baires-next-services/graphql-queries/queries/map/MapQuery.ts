import {graphql, GraphQLTaggedNode} from "relay-runtime";

export const mapQuery: GraphQLTaggedNode = graphql`
    query MapQuery($id: ID!) {
        map(id: $id) {
            id
            name
            description
            image
            isChat
            isPrivate
        }
    }
`;
