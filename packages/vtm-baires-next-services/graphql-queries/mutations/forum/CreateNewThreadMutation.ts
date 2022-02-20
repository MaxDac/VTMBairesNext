import {graphql} from "relay-runtime";
import {wrapMutation} from "vtm-baires-next-utils";
import type {
    CreateNewThreadMutation$data,
    CreateNewThreadRequest
} from "./__generated__/CreateNewThreadMutation.graphql";
import type {IEnvironment} from "relay-runtime";
import type {Option} from "vtm-baires-next-utils";

const mutation = graphql`
    mutation CreateNewThreadMutation($request: CreateNewThreadRequest!) {
        newForumThread(input: {
            request: $request
        }) {
            result {
                id
            }
        }
    }
`;

const mutationPromise = (environment: IEnvironment, request: CreateNewThreadRequest): Promise<Option<string>> =>
    wrapMutation<CreateNewThreadMutation$data>(environment, mutation, {request})
        .then(x => x?.newForumThread?.result?.id);

export default mutationPromise;
