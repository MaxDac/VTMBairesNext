import {graphql, IEnvironment} from "relay-runtime";
import {wrapMutation} from "vtm-baires-next-utils/index";

const mutation = graphql`
    mutation ClearSessionMutation {
        resetSession
    }
`;

const mutationPromise = (environment: IEnvironment): Promise<boolean> => {
    return wrapMutation<boolean>(environment, mutation, {});
}

export default mutationPromise;
