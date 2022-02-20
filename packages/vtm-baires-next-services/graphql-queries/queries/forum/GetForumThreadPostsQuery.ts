import {graphql, GraphQLTaggedNode} from "relay-runtime";
import type {Option} from "vtm-baires-next-utils";

// This redundant type definition is due to the fact that the auto-generated query doesn't extract the type of the post,
// but rather it represent the post type directly in the array definition.
export type Post = {
    readonly id: string,
    readonly text: Option<string>,
    readonly character: Option<{
        readonly id: string,
        readonly name: Option<string>,
    }>,
    readonly user: Option<{
        readonly id: string,
        readonly name: Option<string>,
    }>,
    readonly onGame: Option<boolean>,
    readonly insertedAt: Option<any>,
    readonly updatedAt: Option<any>,
};

export const getForumThreadPostsQuery: GraphQLTaggedNode = graphql`
    query GetForumThreadPostsQuery($forumThreadId: ID!, $pageSize: Int!, $page: Int!) {
        getForumThreadPosts(id: $forumThreadId, pageSize: $pageSize, page: $page) {
            id
            text
            character {
                id
                name
            }
            user {
                id
                name
            }
            onGame
            insertedAt
            updatedAt
        }
    }
`;
