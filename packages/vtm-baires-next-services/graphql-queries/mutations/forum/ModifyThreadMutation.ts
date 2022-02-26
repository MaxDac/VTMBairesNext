import {graphql} from "relay-runtime";
import {wrapMutation} from "vtm-baires-next-utils/index";
import type {IEnvironment} from "relay-runtime";
import type {ModifyForumThreadInput, ModifyThreadMutation$data} from "./__generated__/ModifyThreadMutation.graphql";

const mutation = graphql`
    mutation ModifyThreadMutation($request: ModifyForumThreadInput!) {
        modifyForumThread(input: $request) {
            result {
                id
            }
        }
    }
`;

const mutationPromise = (environment: IEnvironment, request: ModifyForumThreadInput): Promise<ModifyThreadMutation$data> => {
    return wrapMutation<ModifyThreadMutation$data>(environment, mutation, {
        request
    });
};

export default mutationPromise;
