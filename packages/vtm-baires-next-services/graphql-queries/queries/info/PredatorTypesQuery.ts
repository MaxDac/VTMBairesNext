import {graphql, GraphQLTaggedNode} from "relay-runtime";
import {PredatorTypesQuery, PredatorTypesQuery$data} from "./__generated__/PredatorTypesQuery.graphql";
import {useCustomLazyLoadQuery} from "vtm-baires-next-utils/src/relay-utils";
import type {Option} from "vtm-baires-next-utils";

export const predatorTypesQuery: GraphQLTaggedNode = graphql`
    query PredatorTypesQuery {
        predatorTypes {
            id
            name
            description
        }
    }
`;

export function usePredatorTypes(): Option<PredatorTypesQuery$data> {
    return useCustomLazyLoadQuery<PredatorTypesQuery>(predatorTypesQuery, {});
}
