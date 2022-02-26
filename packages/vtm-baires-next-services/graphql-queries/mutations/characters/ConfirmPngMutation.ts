import {graphql} from "relay-runtime";
import {wrapMutation} from "vtm-baires-next-utils/index";
import type {IEnvironment} from "relay-runtime";
import type {ConfirmPngMutation$data} from "./__generated__/ConfirmPngMutation.graphql";

const mutation = graphql`
    mutation ConfirmPngMutation($characterId: ID!) {
        confirmPng(input: {
            characterId: $characterId
        }) {
            response {
                id
            }
        }
    }
`;

const mutationPromise = (environment: IEnvironment, characterId: string): Promise<ConfirmPngMutation$data> => {
    return wrapMutation<ConfirmPngMutation$data>(environment, mutation, {
        characterId
    });
}

export default mutationPromise;
