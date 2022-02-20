import {graphql} from "relay-runtime";
import {wrapMutation} from "vtm-baires-next-utils";
import type {IEnvironment} from "relay-runtime";
import type {
    SetCharacterStatusMutation$data,
    SetCharacterStatusRequest
} from "./__generated__/SetCharacterStatusMutation.graphql";

const mutation = graphql`
    mutation SetCharacterStatusMutation($characterId: ID!, $request: SetCharacterStatusRequest!) {
        setCharacterStatus(input: {
            characterId: $characterId,
            request: $request
        }) {
            result {
                id
            }
        }
    }
`;

const mutationPromise = (environment: IEnvironment, characterId: string, request: SetCharacterStatusRequest): Promise<SetCharacterStatusMutation$data> => {
    return wrapMutation<SetCharacterStatusMutation$data>(environment, mutation, {
        characterId,
        request
    });
}

export default mutationPromise;
