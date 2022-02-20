import {graphql, GraphQLTaggedNode} from "relay-runtime";
import {useCustomLazyLoadQuery} from "vtm-baires-next-utils/src/relay-utils";
import {HasUserAccessToMapQuery} from "./__generated__/HasUserAccessToMapQuery.graphql";

export const hasUserAccessToMapQuery: GraphQLTaggedNode = graphql`
    query HasUserAccessToMapQuery($chatId: ID!) {
        hasUserAccessToMap(chatId: $chatId)
    }
`;

export const useHasUserAccessToMap = (chatId: string): boolean =>
    useCustomLazyLoadQuery<HasUserAccessToMapQuery>(hasUserAccessToMapQuery, {chatId}, {
        fetchPolicy: "network-only"
    })?.hasUserAccessToMap === true;
