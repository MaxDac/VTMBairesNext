import {graphql} from "relay-runtime";
import type {IEnvironment} from "relay-runtime";
import {wrapMutation} from "vtm-baires-next-utils";

const deleteCharacterMutation = graphql`
    mutation DeleteCharacterMutation($characterId: ID!) {
        deleteCharacter(characterId: $characterId)
    }
`;

const mutationPromise = (environment: IEnvironment, characterId: string): Promise<boolean> =>
    wrapMutation<any>(environment, deleteCharacterMutation, {
        characterId
    });

export default mutationPromise;
