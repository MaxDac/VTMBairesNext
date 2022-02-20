import {graphql} from "relay-runtime";
import {wrapMutation} from "vtm-baires-next-utils";
import type {IEnvironment} from "relay-runtime";
import type {ResetHuntMutation$data} from "./__generated__/ResetHuntMutation.graphql";

const mutation = graphql`
    mutation ResetHuntMutation($characterId: ID!) {
        resetCharacterHunt(input: {
            characterId: $characterId
        }) {
            result {
                id
            }
        }
    }
`;

const mutationPromise = (environment: IEnvironment, characterId: string): Promise<ResetHuntMutation$data> => {
    return wrapMutation<ResetHuntMutation$data>(environment, mutation, {
        characterId
    });
}

export default mutationPromise;
