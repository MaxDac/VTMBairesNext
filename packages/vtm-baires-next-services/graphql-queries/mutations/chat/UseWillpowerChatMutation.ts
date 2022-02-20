import {graphql} from "relay-runtime";
import {wrapMutation} from "vtm-baires-next-utils";
import type {IEnvironment} from "relay-runtime";
import type {
    UseWillpowerChatMutation$data,
    UseWillpowerInput
} from "./__generated__/UseWillpowerChatMutation.graphql";

const mutation = graphql`
    mutation UseWillpowerChatMutation($input: UseWillpowerInput!) {
        useWillpower(input: $input) {
            result {
                id
                text
                character {
                    id
                }
                chatMap {
                    id
                }
            }
        }
    }
`;

const mutationPromise = (environment: IEnvironment, request: UseWillpowerInput): Promise<UseWillpowerChatMutation$data> => {
    return wrapMutation<UseWillpowerChatMutation$data>(environment, mutation, {input: request});
}

export default mutationPromise;
