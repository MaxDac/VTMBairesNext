import {graphql, GraphQLTaggedNode} from "relay-runtime";
import {useCustomLazyLoadQuery} from "vtm-baires-next-utils/src/relay-utils";
import {ForumHasNewPostQuery} from "./__generated__/ForumHasNewPostQuery.graphql";

export const forumHasNewPostQuery: GraphQLTaggedNode = graphql`
    query ForumHasNewPostQuery {
        getForumSections {
            hasNewPosts
        }
    }
`;

/**
 * Determines whether the forum has new messages.
 * @return {boolean} True if the forum has new messages, False otherwise.
 */
export const useForumHasNewPosts = (): boolean =>
    useCustomLazyLoadQuery<ForumHasNewPostQuery>(forumHasNewPostQuery, {}, {
        fetchPolicy: "network-only"
    })?.getForumSections?.some(x => x?.hasNewPosts === true) ?? false;
