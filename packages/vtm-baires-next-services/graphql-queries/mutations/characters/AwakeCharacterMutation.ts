import {graphql} from "relay-runtime";
import type {IEnvironment} from "relay-runtime";
import type {AwakeCharacterMutation$data} from "./__generated__/AwakeCharacterMutation.graphql";
import {wrapMutation} from "../../../src";

const mutation = graphql`
    mutation AwakeCharacterMutation($characterId: ID!) {
        awake(input: {
            characterId: $characterId
        }) {
            result
        }
    }
`;

const mutationPromise = (environment: IEnvironment, characterId: string): Promise<AwakeCharacterMutation$data> => {
    return wrapMutation<AwakeCharacterMutation$data>(environment, mutation, {
        characterId
    });
}

export default mutationPromise;
