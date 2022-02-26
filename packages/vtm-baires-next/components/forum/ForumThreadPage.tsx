import React, {useState} from "react";
import {DefaultPageSize} from "../../pages/Forum/Thread/[threadId]";
import type {ReactElement} from "react";
import ForumPost from "./layout/posts/ForumPost";
import {useCustomLazyLoadQuery} from "vtm-baires-next-utils";
import {
    getForumThreadPostsQuery
} from "vtm-baires-next-services/graphql-queries/queries/forum/GetForumThreadPostsQuery";
import {
    GetForumThreadPostsQuery
} from "vtm-baires-next-services/graphql-queries/queries/forum/__generated__/GetForumThreadPostsQuery.graphql";

type Props = {
    threadId: string;
    page: number;
}

const ForumThreadPage = ({threadId, page}: Props): ReactElement => {
    const [postFetchKey, setPostFetchKey] = useState(0);

    const onReloadCustom = () => {
        setPostFetchKey(p => p + 1);
    }

    const posts = useCustomLazyLoadQuery<GetForumThreadPostsQuery>(getForumThreadPostsQuery, {
        forumThreadId: threadId,
        pageSize: DefaultPageSize,
        page: page
    }, {
        fetchPolicy: "store-and-network",
        fetchKey: postFetchKey
    })?.getForumThreadPosts;

    const showThreadPost = (post: any): ReactElement => (
        <ForumPost key={post?.id}
                   post={post}
                   threadId={threadId}
                   onGame={post?.onGame === true}
                   onReload={onReloadCustom} />
    );

    const showThreadPosts = (): ReactElement[] =>
        posts?.map(showThreadPost) ?? [];

    return (
        <>
            {showThreadPosts()}
        </>
    )
}

export default ForumThreadPage;
