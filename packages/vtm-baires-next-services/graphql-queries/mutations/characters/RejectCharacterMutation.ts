import {graphql} from "relay-runtime";
import {wrapMutation} from "vtm-baires-next-utils";
import type {IEnvironment} from "relay-runtime";
import type { RejectCharacterMutation$data } from "./__generated__/RejectCharacterMutation.graphql";

const mutation = graphql`
    mutation RejectCharacterMutation($characterId: ID!, $reason: String!) {
        rejectCharacter(characterId: $characterId, reason: $reason)
    }
`;

const mutationPromise = (environment: IEnvironment, characterId: string, reason: string): Promise<boolean> => {
    return wrapMutation<RejectCharacterMutation$data>(environment, mutation, {
        characterId,
        reason
    })?.then(r => r?.rejectCharacter === true);
}

export default mutationPromise;
