import React from "react";
import {object, string} from "yup";
import type {ReactElement} from "react";
import ModifyPost from "./posts/ModifyPost";
import NewPost from "./posts/NewPost";
import {useCustomLazyLoadQuery} from "vtm-baires-next-utils";
import {getForumThreadQuery} from "vtm-baires-next-services/graphql-queries/queries/forum/GetForumThreadQuery";
import {
    GetForumThreadQuery
} from "vtm-baires-next-services/graphql-queries/queries/forum/__generated__/GetForumThreadQuery.graphql";

export const CreateNewPostValidationSchema: any = object().shape({
    text: string().required("Richiesto")
});

type Props = {
    threadId: string;
    postId?: string;
}

const ManagePost = ({threadId, postId}: Props): ReactElement => {
    const thread = useCustomLazyLoadQuery<GetForumThreadQuery>(getForumThreadQuery, {
        forumThreadId: threadId
    })?.getForumThread;

    if (thread?.id != null) {
        if (postId != null) {
            return (<ModifyPost threadId={thread.id} title={thread?.title} postId={postId} />);
        }

        return (<NewPost threadId={thread.id} title={thread?.title} />);
    }

    return (<></>);
}

export default ManagePost;
