import {ReactElement} from "react";
import NewMessage from "../../../../components/messages/NewMessage";
import {useRouter} from "next/router";

const SendMessageToCharacterId = (): ReactElement => {
    const router = useRouter()
    const {id} = router.query

    return (
        <NewMessage toCharacterId={id as string} />
    );
}

export default SendMessageToCharacterId;
