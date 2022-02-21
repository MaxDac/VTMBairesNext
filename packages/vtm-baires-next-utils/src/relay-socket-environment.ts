import {
    Environment,
    Network,
    RecordSource,
    Store
} from "relay-runtime";

import * as AbsintheSocket from "@absinthe/socket";
import { Socket as PhoenixSocket } from "phoenix";
import createSocketSubscriber from "./create-socket-subscriber";
import {createFetcher} from "absinthe-socket-relay";

const getDocumentLocationHost = (): string =>
    window.document.location.host;

const buildWebSocketUrl = () => {
    // if (process.env.NODE_ENV === "development") {
        return `ws://localhost:4000/socket`;
    // }
    //
    // const host = getDocumentLocationHost();
    //
    // if (host.indexOf("localhost") !== -1) {
    //     return `ws://${window.document.location.host}/socket`;
    // }
    //
    // return `wss://${window.document.location.host}/socket`;
};

const absintheSocket = () => {
    const url = buildWebSocketUrl();
    const socket = new PhoenixSocket(url);
    console.debug("socket is", socket);
    return AbsintheSocket.create(socket);
}

// absinthe-socket-relay is outdated so wrap it with a fix
const subscribe = () => createSocketSubscriber(absintheSocket());

const socketEnvironment = (): Environment => new Environment({
    network: Network.create(
        createFetcher(absintheSocket()),
        subscribe()
    ),
    store: new Store(new RecordSource())
});

export default socketEnvironment;
