import {graphql} from "relay-runtime";
import {wrapMutation} from "vtm-baires-next-utils/index";
import type {IEnvironment} from "relay-runtime";
import type {ApproveCharacterMutation$data} from "./__generated__/ApproveCharacterMutation.graphql";

const mutation = graphql`
    mutation ApproveCharacterMutation($characterId: ID!, $reason: String) {
        approveCharacter(characterId: $characterId, reason: $reason)
    }
`;

const mutationPromise = (environment: IEnvironment, characterId: string, reason: string): Promise<boolean> => {
    return wrapMutation<ApproveCharacterMutation$data>(environment, mutation, {
        characterId,
        reason
    })?.then(r => r?.approveCharacter === true);
}

export default mutationPromise;
