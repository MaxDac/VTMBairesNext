import {graphql, GraphQLTaggedNode} from "relay-runtime";

export const getCharacterQuery: GraphQLTaggedNode = graphql`
    query GetCharacterQuery($id: ID!) {
        getCharacter(id: $id) {
            id,
            ...CharacterFragments_characterInfo
            ...CharacterFragments_characterConcealedInfo
            ...CharacterFragments_characterSheet
            ...CharacterFragments_characterStats
            ...CharacterFragments_characterState
            ...CharacterFragments_characterOff
        }
    }
`;
