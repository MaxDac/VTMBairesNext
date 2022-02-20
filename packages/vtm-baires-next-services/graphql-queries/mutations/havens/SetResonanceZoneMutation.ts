import {graphql} from "relay-runtime";
import {wrapMutation} from "vtm-baires-next-utils";
import type {IEnvironment} from "relay-runtime";
import type {
    SetResonanceZoneMutation$data,
    SetResonanceZoneRequest
} from "./__generated__/SetResonanceZoneMutation.graphql";

const mutation = graphql`
    mutation SetResonanceZoneMutation($havenId: ID!, $request: SetResonanceZoneRequest!) {
        setResonanceZone(input: {
            havenId: $havenId,
            request: $request
        }) {
            result
        }
    }
`;

const mutationPromise = (environment: IEnvironment, havenId: string, request: SetResonanceZoneRequest): Promise<SetResonanceZoneMutation$data> => {
    return wrapMutation<SetResonanceZoneMutation$data>(environment, mutation, {
        havenId,
        request
    });
}

export default mutationPromise;
