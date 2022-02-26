import {graphql} from "relay-runtime";
import {wrapMutation} from "vtm-baires-next-utils/index";
import type {IEnvironment} from "relay-runtime";
import type {ResolveEventInput, ResolveEventMutation$data} from "./__generated__/ResolveEventMutation.graphql";

const mutation = graphql`
    mutation ResolveEventMutation($input: ResolveEventInput!) {
        resolveEvent(input: $input) {
            result {
                id
                resolved
            }
        }
    }
`;

const mutationPromise = (environment: IEnvironment, input: ResolveEventInput): Promise<ResolveEventMutation$data> => {
    return wrapMutation<ResolveEventMutation$data>(environment, mutation, {input});
}

export default mutationPromise;
