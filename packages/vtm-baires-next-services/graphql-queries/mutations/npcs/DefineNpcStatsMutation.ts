import {graphql} from "relay-runtime";
import {wrapMutation} from "vtm-baires-next-utils";
import type {IEnvironment} from "relay-runtime";
import type {
    DefineNpcStatsMutation$data,
    NpcStatsRequest
} from "./__generated__/DefineNpcStatsMutation.graphql";

const mutation = graphql`
    mutation DefineNpcStatsMutation($characterId: ID!, $request: NpcStatsRequest!) {
        defineNpcStats(input: {
            characterId: $characterId,
            request: $request
        }) {
            response {
                id
            }
        }
    }
`;

const mutationPromise = (environment: IEnvironment, characterId: string, request: NpcStatsRequest): Promise<DefineNpcStatsMutation$data> => {
    return wrapMutation<DefineNpcStatsMutation$data>(environment, mutation, {
        characterId,
        request
    });
}

export default mutationPromise;
