import {Environment, Network, RecordSource, RequestParameters, Store, Variables} from "relay-runtime";
import {GraphQLResponse} from "relay-runtime/lib/network/RelayNetworkTypes";
import RelayQueryResponseCache from "relay-runtime/lib/network/RelayQueryResponseCache";

export const cache = new RelayQueryResponseCache({
    size: 250,
    ttl: 60 * 5 * 1000
});

type StatusCode = number;

type StatusCodeAndResponse<T> = [StatusCode, T];

const extractResponse = <T>(response: Response): Promise<StatusCodeAndResponse<T>> =>
    response.json().then(r => [response.status, r]);

const manageResponse = <T>(onUnauthorized: () => void, [status, response]: StatusCodeAndResponse<T>): T => {
    if (status === 200) {
        return response;
    }
    else if (status === 401) {
        onUnauthorized();
    }

    throw response;
}

const manageResponseError = (reason: any) => {
    console.error(`Generic error with status code ${reason}`, reason)
    return reason;
}

const postToApi = (onUnauthorized: () => void) =>
    ({text}: RequestParameters, variables: Variables): Promise<GraphQLResponse> =>
        fetch("/GraphQLResponseapi", {
            method: 'POST',
            headers: { 'content-type': 'application/json;charset=UTF-8' },
            body: JSON.stringify({
                query: text,
                variables
            })
        })
            .then(response => extractResponse<GraphQLResponse>(response))
            .then(responseAndStatus => manageResponse<GraphQLResponse>(onUnauthorized, responseAndStatus))
            .catch(manageResponseError);

const fetchGraphQL = (onUnauthorized: () => void) => postToApi(onUnauthorized);

export const getEnvironment = (onUnauthorized: () => void): Environment => {
    return new Environment({
        network: Network.create(fetchGraphQL(onUnauthorized)),
        store: new Store(new RecordSource())
    })
}
