import {graphql} from "relay-runtime";
import {wrapMutation} from "vtm-baires-next-utils";
import type {IEnvironment} from "relay-runtime";

const mutation = graphql`
    mutation SetMessageReadMutation($id: ID!) {
        setMessageRead(messageId: $id) {
            id
        }
    }
`;

const mutationPromise = (environment: IEnvironment, id: string): Promise<string> => {
    return wrapMutation<string>(environment, mutation, {
        id
    });
}

export default mutationPromise;
