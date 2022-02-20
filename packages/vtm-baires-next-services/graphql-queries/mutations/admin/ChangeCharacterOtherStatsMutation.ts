import {graphql} from "relay-runtime";
import {wrapMutation} from "vtm-baires-next-utils";
import type {IEnvironment} from "relay-runtime";
import type {
    ChangeCharacterOtherStatsInput,
    ChangeCharacterOtherStatsMutation$data
} from "./__generated__/ChangeCharacterOtherStatsMutation.graphql";

const mutation = graphql`
    mutation ChangeCharacterOtherStatsMutation($input: ChangeCharacterOtherStatsInput!) {
        changeCharacterOtherStats(input: $input) {
            result {
                id
            }
        }
    }
`;

const mutationPromise = (environment: IEnvironment, request: ChangeCharacterOtherStatsInput): Promise<ChangeCharacterOtherStatsMutation$data> => {
    return wrapMutation<ChangeCharacterOtherStatsMutation$data>(environment, mutation, {input: request});
}

export default mutationPromise;
