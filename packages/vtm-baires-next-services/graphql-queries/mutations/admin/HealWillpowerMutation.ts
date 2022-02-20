import {graphql} from "relay-runtime";
import {wrapMutation} from "vtm-baires-next-utils";
import type {IEnvironment} from "relay-runtime";
import type {
    HealWillpowerMutation$data,
    HealWillpowerMutation$variables
} from "./__generated__/HealWillpowerMutation.graphql";

const mutation = graphql`
    mutation HealWillpowerMutation($characterId: ID!, $quantity: Int!) {
        healWillpower(input: {
            characterId: $characterId,
            quantity: $quantity
        }) {
            result
        }
    }
`;

const mutationPromise = (environment: IEnvironment, request: HealWillpowerMutation$variables): Promise<HealWillpowerMutation$data> => {
    return wrapMutation<HealWillpowerMutation$data>(environment, mutation, request);
}

export default mutationPromise;
