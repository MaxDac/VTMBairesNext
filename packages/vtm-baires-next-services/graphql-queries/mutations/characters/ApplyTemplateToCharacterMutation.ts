import {graphql} from "relay-runtime";
import {wrapMutation} from "vtm-baires-next-utils/index";
import type {IEnvironment} from "relay-runtime";
import type { ApplyTemplateToCharacterMutation$data } from "./__generated__/ApplyTemplateToCharacterMutation.graphql";

const mutation = graphql`
    mutation ApplyTemplateToCharacterMutation($characterId: ID!, $templateId: ID!) {
        applyTemplateToCharacter(input: {
            characterId: $characterId
            templateId: $templateId
        }) {
            result
        }
    }
`;

const mutationPromise = (environment: IEnvironment, characterId: string, templateId: string): Promise<ApplyTemplateToCharacterMutation$data> => {
    return wrapMutation<ApplyTemplateToCharacterMutation$data>(environment, mutation, {
        characterId,
        templateId
    });
}

export default mutationPromise;
