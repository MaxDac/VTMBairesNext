import {Environment, Network, RecordSource, Store} from "relay-runtime";
import RelayQueryResponseCache from "relay-runtime/lib/network/RelayQueryResponseCache";
import {AppCookies, Option} from "../index";
import {fetchGraphQL} from "./relay-fetch-delegate";

export const cache = new RelayQueryResponseCache({
    size: 250,
    ttl: 60 * 5 * 1000
})

/**
 * Gets the relay environment. Allows choosing between server and client environment.
 * @param onUnauthorized Delegate that will be called when the call returns an unauthorized status.
 * @param cookies The authentication cookies.
 */
export const getRelayEnvironment = (onUnauthorized: () => void, cookies?: Option<AppCookies>): Environment => {
    return new Environment({
        network: Network.create(fetchGraphQL(onUnauthorized, cookies)),
        store: new Store(new RecordSource())
    })
}
