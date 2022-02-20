import {graphql} from "relay-runtime";
import {wrapMutation} from "vtm-baires-next-utils";
import type {IEnvironment} from "relay-runtime";
import type {SpendCharacterExperienceInput} from "./__generated__/SpendCharacterExperienceMutation.graphql";
import type {Character} from "../../queries/character/GetCharacterCompleteQuery";
import type {Option} from "vtm-baires-next-utils";

const mutation = graphql`
    mutation SpendCharacterExperienceMutation($input: SpendCharacterExperienceInput!) {
        spendCharacterExperience(input: $input) {
            result {
                id
                name
                experience
                totalExperience
            }
        }
    }
`;

const mutationPromise = (environment: IEnvironment, request: SpendCharacterExperienceInput): Promise<Option<Character>> => {
    return wrapMutation<Option<Character>>(environment, mutation, {
        input: request
    });
}

export default mutationPromise;
