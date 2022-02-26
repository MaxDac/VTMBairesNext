import {graphql, GraphQLTaggedNode} from "relay-runtime";
import {useCustomLazyLoadQuery} from "vtm-baires-next-utils";
import {HasUserAlreadyBookedQuery} from "./__generated__/HasUserAlreadyBookedQuery.graphql";

export const hasUserAlreadyBookedQuery: GraphQLTaggedNode = graphql`
    query HasUserAlreadyBookedQuery {
        hasUserAlreadyBooked
    }
`;

export const useHasUserAlreadyBooked = (): boolean =>
    useCustomLazyLoadQuery<HasUserAlreadyBookedQuery>(hasUserAlreadyBookedQuery, {}, {
        fetchPolicy: "network-only"
    })?.hasUserAlreadyBooked === true;
