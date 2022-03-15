import {AppCookies, Option} from "../index";
import {RequestParameters, Variables} from "relay-runtime";
import {GraphQLResponse} from "relay-runtime/lib/network/RelayNetworkTypes";
import {addCookiesToHeaders} from "./utils";

type StatusCode = number;

type StatusCodeAndResponse<T> = [StatusCode, T];

/**
 * Fetches the data for GraphQL.
 * @param onUnauthorized Delegate that handles the unauthorized.
 * @param cookies The cookies.
 */
export const fetchGraphQL = (onUnauthorized: () => void, cookies?: Option<AppCookies>) => {
    return async (params: RequestParameters, variables: Variables) => {
        const response: any = await postToApi(onUnauthorized, cookies)(params, variables);
        console.debug("response graph ql", response);

        return response;
    }
}

const postToApi = (onUnauthorized: () => void, cookies?: Option<AppCookies>) =>
    ({text}: RequestParameters, variables: Variables): Promise<GraphQLResponse> => {
        const requestHeaders = {
            ...addCookiesToHeaders(cookies),
            'content-type': 'application/json;charset=UTF-8'
        }

        return fetch("http://localhost:4000/api", {
            method: 'POST',
            headers: requestHeaders,
            body: JSON.stringify({
                query: text,
                variables
            }),
            credentials: "include"
        })
            .then(response => extractResponse<GraphQLResponse>(response))
            .then(responseAndStatus => manageResponse<GraphQLResponse>(onUnauthorized, responseAndStatus))
            .catch(manageResponseError);
    }

const extractResponse = <T>(response: Response): Promise<StatusCodeAndResponse<T>> => {
    return response.json().then(r => {
        console.debug("response obtained: ", r);
        console.debug("response status: " + response.status)
        return [response.status, r];
    });
}

const manageResponse = <T>(onUnauthorized: () => void, [status, response]: StatusCodeAndResponse<T>): T => {
    if (status === 200) {
        console.debug("returning response", response);
        return response;
    }
    else if (status === 401) {
        onUnauthorized();
    }

    throw response;
};

const manageResponseError = (reason: any) => {
    console.error(`Generic error with status code ${reason}`, reason)

    if (reason?.message === "Unauthorized") {
        throw reason;
    }

    return reason;
};
