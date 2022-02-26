import {ReactElement} from "react";
import {useRouter} from "next/router";
import ManagePost from "../../../../../components/forum/forms/ManagePost";

const NewPost = (): ReactElement => {
    const router = useRouter()
    const {threadId} = router.query

    return (
        <ManagePost threadId={threadId as string} />
    );
};

export default NewPost;
