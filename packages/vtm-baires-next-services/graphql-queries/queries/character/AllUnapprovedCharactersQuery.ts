import {graphql, GraphQLTaggedNode} from "relay-runtime";

export const allUnapprovedCharactersQuery: GraphQLTaggedNode = graphql`
    query AllUnapprovedCharactersQuery {
        unapprovedCharactersList {
            id
            name
        }
    }
`;
