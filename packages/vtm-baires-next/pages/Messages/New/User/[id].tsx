import {ReactElement} from "react";
import NewMessage from "../../../../components/messages/NewMessage";
import {useRouter} from "next/router";
import MainLayout from "../../../../components/layouts/MainLayout";
import Index from "../../../Main";

const SendMessageToUserId = (): ReactElement => {
    const router = useRouter()
    const {id} = router.query

    return (
        <NewMessage toUserId={id as string} />
    );
}

SendMessageToUserId.getLayout = (page: ReactElement) => (
    <MainLayout>
        {page}
    </MainLayout>
)

export default SendMessageToUserId;
