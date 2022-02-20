import {graphql} from "relay-runtime";
import {wrapMutation} from "vtm-baires-next-utils";
import type {IEnvironment} from "relay-runtime";
import type {
    SetDangerZoneRequest,
    SetDangerZoneMutation$data
} from "./__generated__/SetDangerZoneMutation.graphql.js";

const mutation = graphql`
    mutation SetDangerZoneMutation($havenId: ID!, $request: SetDangerZoneRequest!) {
        setDangerZone(input: {
            havenId: $havenId,
            request: $request
        }) {
            result
        }
    }
`;

const mutationPromise = (environment: IEnvironment, havenId: string, request: SetDangerZoneRequest): Promise<SetDangerZoneMutation$data> => {
    return wrapMutation<SetDangerZoneMutation$data>(environment, mutation, {
        havenId,
        request
    });
}

export default mutationPromise;
