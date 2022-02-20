import {graphql} from "relay-runtime";
import {wrapMutation} from "vtm-baires-next-utils";
import type {IEnvironment} from "relay-runtime";
import type {ResetDangerMutation$data} from "./__generated__/ResetDangerMutation.graphql";

const mutation = graphql`
    mutation ResetDangerMutation {
        resetDanger {
            result
        }
    }
`;

const mutationPromise = (environment: IEnvironment): Promise<ResetDangerMutation$data> => {
    return wrapMutation<ResetDangerMutation$data>(environment, mutation, {});
}

export default mutationPromise;
