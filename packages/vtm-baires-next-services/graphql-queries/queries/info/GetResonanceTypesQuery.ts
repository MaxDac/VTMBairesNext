import {graphql, GraphQLTaggedNode} from "relay-runtime";
import {useCustomLazyLoadQuery} from "vtm-baires-next-utils";
import {GetResonanceTypesQuery} from "./__generated__/GetResonanceTypesQuery.graphql";
import {isNotNullNorEmpty} from "vtm-baires-next-utils";

export type ResonanceType = string

export const getResonanceTypesQuery: GraphQLTaggedNode = graphql`
    query GetResonanceTypesQuery {
        getResonanceTypes {
            result
        }
    }
`;

export const useResonanceTypes = (): ResonanceType[] =>
    useCustomLazyLoadQuery<GetResonanceTypesQuery>(getResonanceTypesQuery, {}, {
        fetchPolicy: "store-or-network"
    })?.getResonanceTypes?.result
        ?.filter(isNotNullNorEmpty)
        ?.map(x => x as ResonanceType) ?? [];
