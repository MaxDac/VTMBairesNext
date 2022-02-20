import {graphql} from "relay-runtime";
import {wrapMutation} from "vtm-baires-next-utils";
import type {IEnvironment} from "relay-runtime";
import type {
    DeleteHavenCharacterInput,
    DeleteHavenCharacterMutation$data
} from "./__generated__/DeleteHavenCharacterMutation.graphql";

const mutation = graphql`
    mutation DeleteHavenCharacterMutation($input: DeleteHavenCharacterInput!) {
        deleteHavenCharacter(input: $input) {
            result {
                id
                name
            }
        }
    }
`;

const mutationPromise = (environment: IEnvironment, input: DeleteHavenCharacterInput): Promise<DeleteHavenCharacterMutation$data> => {
    return wrapMutation<DeleteHavenCharacterMutation$data>(environment, mutation, {input});
}

export default mutationPromise;
