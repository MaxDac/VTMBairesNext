
// @ts-ignore
import notifierFind from "@absinthe/socket/dist/notifier/find";
import subscriptions from "./subscriptions";
import {AbsintheSocket, unobserveOrCancel, observe, send} from "@absinthe/socket";
import {SubscribeFunction} from "relay-runtime";
// @ts-ignore
import {createDeferred} from "@jumpn/utils-promise";
// @ts-ignore
import {getOperationType} from "@jumpn/utils-graphql";

const unobserveOrCancelIfNeeded = (absintheSocket: any, notifier: any, observer: any) => {
  if (notifier) {
    unobserveOrCancel(absintheSocket, notifier, observer);
  }
};

const createDisposable = (absintheSocket: any, {request}: any, observer: any) => ({
  dispose: () =>
    unobserveOrCancelIfNeeded(
      absintheSocket,
      notifierFind(absintheSocket.notifiers, "request", request),
      observer
    )
});

const onStart = (deferred: any) => (notifier: any) => deferred.resolve(notifier);

const onAbort = (deferred: any, callback: any) => (error: any) => {
  // callback is always defined but this is not correctly reflected in
  // SubscribeFunction
  callback && callback(error);

  deferred.reject(error);
};

/**
 * Creates a Subscriber (Relay SubscribeFunction) using the given AbsintheSocket
 * instance
 */
const createSubscriber = (
  absintheSocket: AbsintheSocket,
  onRecoverableError?: (error: Error) => any
): SubscribeFunction => (
  {text: operation},
  variables,
  cacheConfig,
  // @ts-ignore
  {onError: OnUnrecoverableError, onNext}
) => {
  // we need to place this logic here and not in ensureIsSubscription as if we
  // do so, then flow is not able to infer we are validating operation
  if (!operation || getOperationType(operation) !== "subscription") {
    throw new Error(
      `Expected subscription, but instead got:\n${(operation as any)}`
    );
  }

  const notifier = send(absintheSocket, {operation, variables});

  const deferred = createDeferred();

  const observer = {
    onAbort: onAbort(deferred, OnUnrecoverableError),
    onError: onRecoverableError,
    onResult: (onNext as any),
    onStart: onStart(deferred)
  };

  observe(absintheSocket, notifier, observer);

  const disposable = createDisposable(absintheSocket, notifier, observer);

  subscriptions.set(disposable, deferred.promise);

  return disposable;
};

export default createSubscriber;
