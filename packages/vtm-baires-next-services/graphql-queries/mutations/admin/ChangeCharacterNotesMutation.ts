import {graphql} from "relay-runtime";
import {wrapMutation} from "vtm-baires-next-utils/index";
import type {IEnvironment} from "relay-runtime";
import type {
    ChangeCharacterNotesInput,
    ChangeCharacterNotesMutation$data
} from "./__generated__/ChangeCharacterNotesMutation.graphql";

const mutation = graphql`
    mutation ChangeCharacterNotesMutation($input: ChangeCharacterNotesInput!) {
        changeCharacterNotes(input: $input) {
            result {
                id
            }
        }
    }
`;

const mutationPromise = (environment: IEnvironment, request: ChangeCharacterNotesInput): Promise<ChangeCharacterNotesMutation$data> => {
    return wrapMutation<ChangeCharacterNotesMutation$data>(environment, mutation, {input: request});
}

export default mutationPromise;
