import {ReactElement} from "react";
import NewMessage from "../../../../components/messages/NewMessage";
import {useRouter} from "next/router";
import MainLayout from "../../../../components/layouts/MainLayout";
import Index from "../../../Main";

const SendMessageToCharacterId = (): ReactElement => {
    const router = useRouter()
    const {id} = router.query

    return (
        <NewMessage toCharacterId={id as string} />
    );
}

SendMessageToCharacterId.getLayout = (page: ReactElement) => (
    <MainLayout>
        {page}
    </MainLayout>
)

export default SendMessageToCharacterId;
