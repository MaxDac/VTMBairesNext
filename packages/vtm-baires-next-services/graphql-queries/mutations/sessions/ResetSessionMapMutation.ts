import {graphql} from "relay-runtime";
import {wrapMutation} from "vtm-baires-next-utils";
import type {IEnvironment} from "relay-runtime";

const mutation = graphql`
    mutation ResetSessionMapMutation {
        resetSessionMap
    }
`;

const mutationPromise = (environment: IEnvironment): Promise<boolean> => {
    return wrapMutation<boolean>(environment, mutation, {});
}

export default mutationPromise;
