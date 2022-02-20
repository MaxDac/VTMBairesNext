import {graphql, GraphQLTaggedNode} from "relay-runtime";

export const getCreationTemplateQuery: GraphQLTaggedNode = graphql`
    query GetCreationTemplateQuery {
        getCreationTemplates {
            id
            name
            description
        }
    }
`;
