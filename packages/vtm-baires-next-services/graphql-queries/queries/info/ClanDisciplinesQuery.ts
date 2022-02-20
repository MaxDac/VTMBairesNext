import {graphql, GraphQLTaggedNode} from "relay-runtime";
import {useCustomLazyLoadQuery} from "vtm-baires-next-utils/src/relay-utils";
import {ClanDisciplinesQuery, ClanDisciplinesQuery$data} from "./__generated__/ClanDisciplinesQuery.graphql";
import type {Option} from "vtm-baires-next-utils";

export const clanDisciplinesQuery: GraphQLTaggedNode = graphql`
    query ClanDisciplinesQuery($clanId: ID!) {
        clanDisciplines(clanId: $clanId) {
            id
            name
            description
        }
    }
`;

export const useClanDisciplines = (clanId: string): Option<ClanDisciplinesQuery$data> =>
    useCustomLazyLoadQuery<ClanDisciplinesQuery>(clanDisciplinesQuery, {clanId});
