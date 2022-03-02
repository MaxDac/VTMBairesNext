import {ReactElement} from "react";
import NewMessage from "../../../components/messages/NewMessage";
import {useRouter} from "next/router";
import MainLayout from "../../../components/layouts/MainLayout";

const ReplyToMessageId = (): ReactElement => {
    const router = useRouter()
    const {id} = router.query

    return (
        <NewMessage replyMessageId={id as string} />
    );
}

ReplyToMessageId.getLayout = (page: ReactElement) => (
    <MainLayout>
        {page}
    </MainLayout>
)

export default ReplyToMessageId;
