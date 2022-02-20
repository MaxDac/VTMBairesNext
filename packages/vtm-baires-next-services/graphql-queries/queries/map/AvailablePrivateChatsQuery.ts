import {graphql, GraphQLTaggedNode} from "relay-runtime";
import type {Option} from "vtm-baires-next-utils";
import {useCustomLazyLoadQuery} from "vtm-baires-next-utils/src/relay-utils";
import {castNotNull} from "vtm-baires-next-utils/src/utils";
import {AvailablePrivateChatsQuery} from "./__generated__/AvailablePrivateChatsQuery.graphql";

export const availablePrivateChatsQuery: GraphQLTaggedNode = graphql`
    query AvailablePrivateChatsQuery {
        availablePrivateChats {
            id
            name
        }
    }
`;

export type AvailablePrivateChat = {
    id: string,
    name: Option<string>
};

export const useAvailablePrivateChats = (): Array<AvailablePrivateChat> =>
    useCustomLazyLoadQuery<AvailablePrivateChatsQuery>(availablePrivateChatsQuery, {}, {
        fetchPolicy: "network-only"
    })
        ?.availablePrivateChats
        ?.filter(m => m?.id != null)
        ?.map(m => ({id: castNotNull(m?.id), name: m?.name})) ?? [];
