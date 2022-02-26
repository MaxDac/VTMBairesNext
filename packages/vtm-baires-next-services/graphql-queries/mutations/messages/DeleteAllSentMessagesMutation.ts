import {graphql} from "relay-runtime";
import {wrapMutation} from "vtm-baires-next-utils/index";
import type {IEnvironment} from "relay-runtime";
import type {DeleteAllSentMessagesMutation$data} from "./__generated__/DeleteAllSentMessagesMutation.graphql";

const mutation = graphql`
    mutation DeleteAllSentMessagesMutation {
        deleteAllSentMessage
    }
`;

const mutationPromise = (environment: IEnvironment): Promise<DeleteAllSentMessagesMutation$data> => {
    return wrapMutation<DeleteAllSentMessagesMutation$data>(environment, mutation);
}

export default mutationPromise;
