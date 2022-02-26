import type {ReactElement} from "react";
import React from "react";
import type {Post} from "vtm-baires-next-services/graphql-queries/queries/forum/GetForumThreadPostsQuery";
import type {Option} from "vtm-baires-next-utils";
import ForumPostOffGame from "./ForumPostOffGame";
import ForumPostOnGame from "./ForumPostOnGame";
import ForumPostLayout from "./ForumPostLayout";

type Props = {
    threadId: string;
    onGame: boolean;
    post: Option<Post>;
    onReload: () => void;
}

const ForumPost = ({threadId, onGame, post, onReload}: Props): ReactElement => {
    return (
        <ForumPostLayout key={post?.id}
                         post={post}
                         threadId={threadId}
                         onReload={onReload}>
            <ForumPostInternal post={post}
                               onGame={onGame} />
        </ForumPostLayout>
    );
};

const ForumPostInternal = ({post, onGame}: any) => {
    if (post?.onGame) {
        return (
            <ForumPostOnGame post={post}
                             onGame={onGame} />
        );
    }
    else {
        return (
            <ForumPostOffGame post={post}
                              onGame={onGame}/>
        );
    }
}

export default ForumPost;
