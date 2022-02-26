import {graphql} from "relay-runtime";
import {wrapMutation} from "vtm-baires-next-utils/index";
import type {IEnvironment} from "relay-runtime";
import type {AddAdvantagesInput, AddAdvantagesMutation$data} from "./__generated__/AddAdvantagesMutation.graphql";

const mutation = graphql`
    mutation AddAdvantagesMutation($input: AddAdvantagesInput!) {
        addAdvantages(input: $input) {
            result {
                id
            }
        }
    }
`;

const mutationPromise = (environment: IEnvironment, request: AddAdvantagesInput): Promise<AddAdvantagesMutation$data> =>
    wrapMutation<AddAdvantagesMutation$data>(environment, mutation, {
        input: request
    });

export default mutationPromise;
