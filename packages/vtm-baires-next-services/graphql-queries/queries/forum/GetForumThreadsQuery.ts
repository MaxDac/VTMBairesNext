import {graphql, GraphQLTaggedNode} from "relay-runtime";

export const getForumThreadsQuery: GraphQLTaggedNode = graphql`
    query GetForumThreadsQuery($forumSectionId: ID!, $pageSize: Int!, $page: Int!, $characterId: ID) {
        getForumThreads(forumSectionId: $forumSectionId, pageSize: $pageSize, page: $page, characterId: $characterId) {
            threadCount
            threads {
                thread {
                    id
                    forumSection {
                        id
                    }
                    creatorUser {
                        id
                        name
                    }
                    creatorCharacter {
                        id
                        name
                    }
                    title
                    description
                    highlighted
                    insertedAt
                    updatedAt
                }
                lastPostUpdatedAt
                hasNewPosts
            }
        }
    }
`;
