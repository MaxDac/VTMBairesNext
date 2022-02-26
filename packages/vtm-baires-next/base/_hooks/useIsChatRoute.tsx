import {useRouter} from "next/router";

const useIsChatRoute = (): boolean => {
    const {pathname} = useRouter();
    return pathname.indexOf("chat") !== -1;
}

export default useIsChatRoute;
