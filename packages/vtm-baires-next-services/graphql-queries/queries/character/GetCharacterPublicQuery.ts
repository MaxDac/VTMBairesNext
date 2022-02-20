import {graphql, GraphQLTaggedNode} from "relay-runtime";

export const getCharacterPublicQuery: GraphQLTaggedNode = graphql`
    query GetCharacterPublicQuery($id: ID!) {
        getCharacterPublicInfo(id: $id) {
            id,
            ...CharacterFragments_characterInfo
            ...CharacterFragments_characterSheet
            ...CharacterFragments_characterOff
        }
    }
`;
