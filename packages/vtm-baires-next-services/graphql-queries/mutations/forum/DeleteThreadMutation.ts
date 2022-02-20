import {graphql} from "relay-runtime";
import {wrapMutation} from "vtm-baires-next-utils";
import type {IEnvironment} from "relay-runtime";
import type {DeleteThreadMutation$data} from "./__generated__/DeleteThreadMutation.graphql";

const mutation = graphql`
    mutation DeleteThreadMutation($threadId: ID!) {
        deleteForumThread(input: {
            threadId: $threadId
        }) {
            result {
                id
            }
        }
    }
`;

const mutationPromise = (environment: IEnvironment, threadId: string): Promise<DeleteThreadMutation$data> => {
    return wrapMutation<DeleteThreadMutation$data>(environment, mutation, {
        threadId
    });
};

export default mutationPromise;
