import {graphql, GraphQLTaggedNode} from "relay-runtime";

export const attributesCompleteQuery: GraphQLTaggedNode = graphql`
    query AttributesCompleteQuery {
        attributes {
            id
            name
            order
            description
            attributeType {
                id
                name
                section
            }
        }
    }
`;
