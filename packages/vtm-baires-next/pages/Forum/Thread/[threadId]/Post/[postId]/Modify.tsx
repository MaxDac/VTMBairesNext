import {ReactElement} from "react";
import {useRouter} from "next/router";
import ManagePost from "../../../../../../components/forum/forms/ManagePost";

const ModifyPost = (): ReactElement => {
    const router = useRouter()
    const {threadId, postId} = router.query

    return (
        <ManagePost threadId={threadId as string}
                    postId={postId as string} />
    );
};

export default ModifyPost;
