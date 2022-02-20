import {graphql, GraphQLTaggedNode} from "relay-runtime";

export const getCharacterAvatarQuery: GraphQLTaggedNode = graphql`
    query GetCharacterAvatarQuery($id: ID!) {
        getCharacterAvatar(characterId: $id) {
            id
            avatar
        }
    }
`;
