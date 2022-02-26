import {ReactElement} from "react";
import NewMessage from "../../../../components/messages/NewMessage";
import {useRouter} from "next/router";

const SendMessageToUserId = (): ReactElement => {
    const router = useRouter()
    const {id} = router.query

    return (
        <NewMessage toUserId={id as string} />
    );
}

export default SendMessageToUserId;
