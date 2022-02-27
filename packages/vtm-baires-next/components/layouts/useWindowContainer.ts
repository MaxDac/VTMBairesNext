import {ReactElement, useEffect, useState} from "react";
import type {Option} from "vtm-baires-next-utils";

const useWindowContainer = () => {
    // const container =
    const [container, setContainer] = useState<Option<HTMLElement>>(undefined)

    useEffect(() => {
        setContainer(cnt => {
            if (cnt == null) {
                return typeof window !== "undefined" ? window.document.body : undefined
            }

            return cnt
        })
    }, [container, setContainer])

    return container
}

export default useWindowContainer
