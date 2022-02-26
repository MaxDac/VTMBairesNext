import {ReactElement} from "react";
import NewMessage from "../../../components/messages/NewMessage";
import {useRouter} from "next/router";

const ReplyToMessageId = (): ReactElement => {
    const router = useRouter()
    const {id} = router.query

    return (
        <NewMessage replyMessageId={id as string} />
    );
}

export default ReplyToMessageId;
