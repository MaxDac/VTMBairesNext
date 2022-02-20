import {graphql} from "relay-runtime";
import {wrapMutation} from "vtm-baires-next-utils";
import type {IEnvironment} from "relay-runtime";
import type {SetHavenInfoRequest, SetHavenInfoMutation$data} from "./__generated__/SetHavenInfoMutation.graphql";

const mutation = graphql`
    mutation SetHavenInfoMutation($havenId: ID!, $request: SetHavenInfoRequest!) {
        setHavenInfo(input: {
            havenId: $havenId,
            request: $request
        }) {
            result {
                id
                name
            }
        }
    }
`;

const mutationPromise = (environment: IEnvironment, havenId: string, request: SetHavenInfoRequest): Promise<SetHavenInfoMutation$data> => {
    return wrapMutation<SetHavenInfoMutation$data>(environment, mutation, {
        havenId,
        request
    });
}

export default mutationPromise;
