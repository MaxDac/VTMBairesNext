import {graphql} from "relay-runtime";
import type {IEnvironment} from "relay-runtime";
import type {
    ChangeCharacterExperienceInput,
    ChangeCharacterExperienceMutation$data
} from "./__generated__/ChangeCharacterExperienceMutation.graphql";
import {wrapMutation} from "vtm-baires-next-utils";

const mutation = graphql`
    mutation ChangeCharacterExperienceMutation($input: ChangeCharacterExperienceInput!) {
        changeCharacterExperience(input: $input) {
            result {
                id
            }
        }
    }
`;

const mutationPromise = (environment: IEnvironment, request: ChangeCharacterExperienceInput): Promise<ChangeCharacterExperienceMutation$data> => {
    return wrapMutation<ChangeCharacterExperienceMutation$data>(environment, mutation, {input: request});
}

export default mutationPromise;
