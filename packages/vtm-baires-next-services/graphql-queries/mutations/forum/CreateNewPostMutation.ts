import {graphql} from "relay-runtime";
import {wrapMutation} from "vtm-baires-next-utils/index";
import type {IEnvironment} from "relay-runtime";
import type {CreateNewPostMutation$data, CreateNewPostRequest} from "./__generated__/CreateNewPostMutation.graphql";
import type {Option} from "vtm-baires-next-utils/index";

const mutation = graphql`
    mutation CreateNewPostMutation($request: CreateNewPostRequest!) {
        newForumPost(input: {
            request: $request
        }) {
            result {
                id
            }
        }
    }
`;

const mutationPromise = (environment: IEnvironment, request: CreateNewPostRequest): Promise<Option<string>> =>
    wrapMutation<CreateNewPostMutation$data>(environment, mutation, {request})
        .then(r => r?.newForumPost?.result?.id);

export default mutationPromise;
