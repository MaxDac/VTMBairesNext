import type {AbsintheSocket} from "@absinthe/socket";
import {createSubscriber} from "absinthe-socket-relay";
import {CacheConfig, GraphQLResponse, Observable, RequestParameters, Variables} from "relay-runtime";
import {RelayObservable} from "relay-runtime/lib/network/RelayObservable";

// absinthe-socket-relay is outdated so wrap it with a fix
const createSocketSubscriber = (socket: AbsintheSocket) =>
    (request: RequestParameters, variables: Variables, cacheConfig: CacheConfig): RelayObservable<GraphQLResponse> =>
        Observable.create(sink => {
            // This function must not return any value, that's why it's wrapped in curly braces.
            const subscriber = createSubscriber(socket);

            subscriber(request, variables, cacheConfig, {
                onNext: sink.next,
                onError: (e: any) => {
                    console.error("Error in legacy subscription", e);
                    sink.error(e);
                },
                onCompleted: sink.complete
            });
        });

export default createSocketSubscriber;
