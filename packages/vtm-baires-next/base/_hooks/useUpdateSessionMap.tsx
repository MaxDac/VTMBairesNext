import {useEffect} from "react";
import {useRelayEnvironment} from "react-relay";
import {updateSessionMap} from "vtm-baires-next-services/graphql-queries/mutations/sessions/UpdateSessionMapMutation";

export const useUpdateSessionMap = (id: string) => {
    const environment = useRelayEnvironment();

    useEffect(() => {
        updateSessionMap(environment, id)
            .catch((e: Error) => console.error("Error while updating session map", e));
    }, [environment, id]);
};
