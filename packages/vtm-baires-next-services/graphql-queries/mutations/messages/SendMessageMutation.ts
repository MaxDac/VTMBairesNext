import {graphql} from "relay-runtime";
import {wrapMutation} from "vtm-baires-next-utils";
import type {SendMessageRequest} from "./__generated__/SendMessageMutation.graphql";
import type {IEnvironment} from "relay-runtime";

const mutation = graphql`
    mutation SendMessageMutation($request: SendMessageRequest!) {
        sendMessage(message: $request) {
            id
        }
    }
`;

const mutationPromise = (environment: IEnvironment, request: SendMessageRequest): Promise<string> => {
    return wrapMutation<string>(environment, mutation, {request});
}

export default mutationPromise;
