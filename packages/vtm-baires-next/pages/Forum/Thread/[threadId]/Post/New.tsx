import {ReactElement} from "react";
import {useRouter} from "next/router";
import ManagePost from "../../../../../components/forum/forms/ManagePost";
import MainLayout from "../../../../../components/layouts/MainLayout";
import Index from "../../../../Main";

const NewPost = (): ReactElement => {
    const router = useRouter()
    const {threadId} = router.query

    return (
        <ManagePost threadId={threadId as string} />
    );
};

NewPost.getLayout = (page: ReactElement) => (
    <MainLayout>
        {page}
    </MainLayout>
)

export default NewPost;
