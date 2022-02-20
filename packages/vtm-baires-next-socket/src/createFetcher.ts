import {observe, send} from "@absinthe/socket";

import type {AbsintheSocket} from "@absinthe/socket";
import {FetchFunction} from "relay-runtime";

/**
 * Creates a Fetcher (Relay FetchFunction) using the given AbsintheSocket
 * instance
 */
const createFetcher = (
  absintheSocket: AbsintheSocket,
  onError?: (error: Error) => any
): FetchFunction => ({text: operation}, variables) =>
  new Promise((resolve, reject) =>
    // $FlowFixMe: operation is always defined
    observe(absintheSocket, send(absintheSocket, {operation, variables}), {
      onError,
      onAbort: reject,
      onResult: resolve
    })
  );

export default createFetcher;
