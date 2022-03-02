import {ReactElement} from "react";
import {useRouter} from "next/router";
import ManagePost from "../../../../../../components/forum/forms/ManagePost";
import MainLayout from "../../../../../../components/layouts/MainLayout";
import Index from "../../../../../Main";

const ModifyPost = (): ReactElement => {
    const router = useRouter()
    const {threadId, postId} = router.query

    return (
        <ManagePost threadId={threadId as string}
                    postId={postId as string} />
    );
};

ModifyPost.getLayout = (page: ReactElement) => (
    <MainLayout>
        {page}
    </MainLayout>
)

export default ModifyPost;
