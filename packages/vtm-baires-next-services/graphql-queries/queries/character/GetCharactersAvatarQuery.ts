import {graphql, GraphQLTaggedNode} from "relay-runtime";

export const getCharactersAvatarQuery: GraphQLTaggedNode = graphql`
    query GetCharactersAvatarQuery($characterIds: [ID!]) {
        getCharactersAvatar(characterIds: $characterIds) {
            character {
                id
            }
            avatar {
                id
                avatar
            }
        }
    }
`;
