import {graphql, GraphQLTaggedNode} from "relay-runtime";
import type {Option} from "vtm-baires-next-utils/index";
import {useCustomLazyLoadQuery} from "vtm-baires-next-utils";
import {GetAllNpcsQuery} from "./__generated__/GetAllNpcsQuery.graphql";

export const getAllNpcsQuery: GraphQLTaggedNode = graphql`
    query GetAllNpcsQuery {
        allNpcs {
            id
            name
            isComplete
            approved
            clan {
                id
                name
            }
        }
    }
`;

export type Npc = {
    id: string;
    name: Option<string>;
    chatAvatar?: Option<string>;
    isComplete: Option<boolean>;
    approved: Option<boolean>;
    clan: Option<{
        id: Option<string>;
        name: Option<string>;
    }>
};

export const useNpcsQuery = (reloadCount: number): Array<Npc> =>
    useCustomLazyLoadQuery<GetAllNpcsQuery>(getAllNpcsQuery, {}, {
        fetchPolicy: "store-and-network",
        fetchKey: reloadCount
    })?.allNpcs?.map(n => ({
        id: n?.id ?? "",
        name: n?.name,
        isComplete: n?.isComplete,
        approved: n?.approved,
        clan: {
            id: n?.clan?.id,
            name: n?.clan?.name
        }
    })) ?? [];
