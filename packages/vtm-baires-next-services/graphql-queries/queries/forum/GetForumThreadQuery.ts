import {graphql, GraphQLTaggedNode} from "relay-runtime";

export const getForumThreadQuery: GraphQLTaggedNode = graphql`
    query GetForumThreadQuery($forumThreadId: ID!) {
        getForumThread(id: $forumThreadId) {
            id @required(action: LOG)
            forumSection {
                id
            }
            creatorCharacter {
                id
                name
            }
            creatorUser {
                id
                name
            }
            allowedCharacters {
                id @required(action: LOG)
                name
            }
            onGame
            postCount
            title
            description
            highlighted
        }
    }
`;
