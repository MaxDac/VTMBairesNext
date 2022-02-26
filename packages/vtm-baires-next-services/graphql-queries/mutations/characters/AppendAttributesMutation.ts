import {graphql} from "relay-runtime";
import {wrapMutation} from "vtm-baires-next-utils/index";
import type {
    CharacterAttributeRequest,
    AppendAttributesMutation$data
} from "./__generated__/AppendAttributesMutation.graphql";
import type {IEnvironment} from "relay-runtime";

const mutation = graphql`
    mutation AppendAttributesMutation($request: [CharacterAttributeRequest]!, $newStage: Int!) {
        appendCharacterAttributes(request: $request, newStage: $newStage) {
            id
            name
        }
    }
`;

const mutationPromise = (environment: IEnvironment, request: Array<CharacterAttributeRequest>, newStage: number): Promise<AppendAttributesMutation$data> =>
    wrapMutation<AppendAttributesMutation$data>(environment, mutation, { request, newStage });

export default mutationPromise;
