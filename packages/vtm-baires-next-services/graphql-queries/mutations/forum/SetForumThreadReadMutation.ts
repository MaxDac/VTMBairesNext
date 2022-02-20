import {graphql} from "relay-runtime";
import {wrapMutation} from "vtm-baires-next-utils";
import type {IEnvironment} from "relay-runtime";

const mutation = graphql`
    mutation SetForumThreadReadMutation($threadId: ID!) {
        setForumThreadRead(input: {threadId: $threadId}) {
            result
        }
    }
`;

const mutationPromise = (environment: IEnvironment, threadId: string): Promise<boolean> => {
    return wrapMutation<boolean>(environment, mutation, { threadId });
}

export default mutationPromise;
