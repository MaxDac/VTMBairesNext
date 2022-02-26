import {graphql} from "relay-runtime";
import {wrapMutation} from "vtm-baires-next-utils/index";
import type {IEnvironment} from "relay-runtime";

const updateSessionCharacterMutation = graphql`
    mutation UpdateSessionCharacterMutation($characterId: ID!) {
        updateSessionCharacter(characterId: $characterId) {
            id
            name
        }
    }
`;

export const updateSessionCharacter = (environment: IEnvironment, id: string): Promise<any> =>
    wrapMutation(environment, updateSessionCharacterMutation, {
        characterId: id
    });
