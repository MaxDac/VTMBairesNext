import {graphql} from "relay-runtime";
import {wrapMutation} from "vtm-baires-next-utils";
import type {IEnvironment} from "relay-runtime";
import type {DeletePostMutation$data} from "./__generated__/DeletePostMutation.graphql";

const mutation = graphql`
    mutation DeletePostMutation($postId: ID!) {
        deleteForumPost(input: {
            postId: $postId 
        }) {
            result {
                id
            }
        }
    }
`;

const mutationPromise = (environment: IEnvironment, postId: string): Promise<DeletePostMutation$data> => {
    return wrapMutation<DeletePostMutation$data>(environment, mutation, {
        postId
    });
};

export default mutationPromise;
