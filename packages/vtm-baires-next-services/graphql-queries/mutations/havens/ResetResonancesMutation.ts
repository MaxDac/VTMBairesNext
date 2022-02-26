import {graphql} from "relay-runtime";
import {wrapMutation} from "vtm-baires-next-utils/index";
import type {IEnvironment} from "relay-runtime";
import type {ResetResonancesMutation$data} from "./__generated__/ResetResonancesMutation.graphql";

const mutation = graphql`
    mutation ResetResonancesMutation {
        resetResonances {
            result
        }
    }
`;

const mutationPromise = (environment: IEnvironment): Promise<ResetResonancesMutation$data> => {
    return wrapMutation<ResetResonancesMutation$data>(environment, mutation, {});
}

export default mutationPromise;
