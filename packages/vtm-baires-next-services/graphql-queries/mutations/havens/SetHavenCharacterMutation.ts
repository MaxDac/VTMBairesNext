import {graphql} from "relay-runtime";
import {wrapMutation} from "vtm-baires-next-utils/index";
import type {IEnvironment} from "relay-runtime";
import type {
    SetHavenCharacterInput,
    SetHavenCharacterMutation$data
} from "./__generated__/SetHavenCharacterMutation.graphql";

const mutation = graphql`
    mutation SetHavenCharacterMutation($input: SetHavenCharacterInput!) {
        setHavenCharacter(input: $input) {
            result {
                id
                x
                y
                name
            }
        }
    }
`;

const mutationPromise = (environment: IEnvironment, input: SetHavenCharacterInput): Promise<SetHavenCharacterMutation$data> => {
    return wrapMutation<SetHavenCharacterMutation$data>(environment, mutation, {input});
}

export default mutationPromise;
