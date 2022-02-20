import {graphql} from "relay-runtime";
import {wrapMutation} from "vtm-baires-next-utils";
import type {IEnvironment} from "relay-runtime";
import type {HuntInput, HuntMutation$data} from "./__generated__/HuntMutation.graphql";

const mutation = graphql`
    mutation HuntMutation($input: HuntInput!) {
        hunt(input: $input) {
            result
        }
    }
`;

const mutationPromise = (environment: IEnvironment, input: HuntInput): Promise<HuntMutation$data> => {
    return wrapMutation<HuntMutation$data>(environment, mutation, {
        input
    });
};

export default mutationPromise;
