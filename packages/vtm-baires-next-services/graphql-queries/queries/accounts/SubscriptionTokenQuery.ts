import {graphql, GraphQLTaggedNode} from "relay-runtime";
import {useRelayEnvironment} from "react-relay";
import {useEffect, useRef, useState} from "react";
import type {Option} from "vtm-baires-next-utils/index";
import {wrapQuery} from "vtm-baires-next-utils/src/relay-utils";
import {
    SubscriptionTokenQuery$data,
    SubscriptionTokenQuery$variables
} from "./__generated__/SubscriptionTokenQuery.graphql";

const subscriptionTokenQuery = graphql`
    query SubscriptionTokenQuery {
        subscriptionToken
    }
`;

const useSubscriptionTokenQuery = (): Option<string> => {
    const environment = useRelayEnvironment();
    const [token, setToken] = useState<Option<string>>(null);

    // Too important a call to let Relay mess things up with its cache
    // const token = useCustomLazyLoadQuery(subscriptionTokenQuery, {}, {
    //     fetchPolicy: "network-only"
    // })?.subscriptionToken;

    const refSetToken = useRef(setToken);

    useEffect(() => {
        wrapQuery<
            SubscriptionTokenQuery$variables,
            SubscriptionTokenQuery$data,
            Option<string>>(environment, subscriptionTokenQuery, {}, r => r?.subscriptionToken)
            .then(tkn => refSetToken.current(tkn));
    }, [environment])

    return token;
}

export default useSubscriptionTokenQuery;
