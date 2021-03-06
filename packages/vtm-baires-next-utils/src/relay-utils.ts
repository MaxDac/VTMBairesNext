import subscriptionEnvironment from "./relay-socket-environment";
import {GraphQLTaggedNode, Observable, OperationType, Subscription, Variables, VariablesOf} from "relay-runtime";
import type {
    CacheConfig,
    FetchPolicy,
    RenderPolicy,
    IEnvironment
} from "relay-runtime";

import type {PayloadError} from "relay-runtime";

import {
    commitMutation,
    fetchQuery,
    requestSubscription, useLazyLoadQuery, useRelayEnvironment
} from "react-relay";

import {AlertInfo, AlertType, Option, Options} from "../index";
import {Sink} from "relay-runtime/lib/network/RelayObservable";
import {useEffect, useState} from "react";

export type GraphqlErrorLocation = {
    column: number;
    line: number;
}

export type GraphqlError = {
    locations: GraphqlErrorLocation[];
    message: string;
    path: string[];
}

export type GraphqlErrorMessage = {
    errors: GraphqlError[];
}

export const parseGraphqlMessage = (error: GraphqlErrorMessage, defaultError?: Option<string>): string => {
    if (error && error.errors && error.errors.map) {
        return error?.errors
            .map(({ message }) => message)
            .join("\r\n");
    }

    return defaultError ?? "An error happened in the back end";
}

const parseResponse = <T>(res: (item: T) => void, rej: (error: any) => void, extractor?: (result: any) => T) => {
    return (response: any, errors?: ReadonlyArray<PayloadError> | null | undefined) => {
        if (errors) {
            rej({
                errors: errors
            });
        }
        else if (response) {
            if (extractor) {
                res(extractor(response));
            }
            else {
                res(response);
            }
        }
    };
}

export const wrapQuery = <TVariables extends Variables, TData, TResult>(
    environment: IEnvironment,
    operation: GraphQLTaggedNode,
    variables: TVariables,
    extractor?: (data: TData) => TResult): Promise<TResult> => {
    return new Promise((res, rej) => {
        fetchQuery(
            environment,
            operation,
            variables
        )
            .subscribe({
                next: response => {
                    parseResponse(res, rej, extractor)(response);
                },
                error: (_: Error) => {
                    rej([ `There was an error while contacting the server.\r\nPlease check your connection.` ]);
                }
            })
    });
};

export const wrapMutation = <T>(environment: IEnvironment, operation: any, variables?: Option<any>, extractor?: (data: any) => T): Promise<T> => {
    return new Promise((res, rej) => {
        commitMutation(
            environment,
            {
                mutation: operation,
                variables: Options.getOrElse(variables, {}),
                onCompleted: parseResponse(res, rej, extractor),
                onError: e => {
                    console.error("error", e);
                    rej([`There was an error while contacting the server.\r\nPlease check your connection.`])
                }
            }
        )
    });
}

const request = <T>(sink: Sink<T>, operation: any, variables: any, extractor?: (data: any) => T) => {
    requestSubscription(
        subscriptionEnvironment(),
        {
            subscription: operation,
            variables,
            onCompleted: () => {
                sink.complete();
            },
            onError: error => {
                console.error("Error in subscription", error);
                sink.error(error, true);
            },
            onNext: object => {
                parseResponse(
                    sink.next,
                    sink.error,
                    extractor
                )(object);
            }
        }
    );
};

export const wrapSubscription = <T>(operation: any, variables: any, extractor?: (data: any) => T): Observable<T> =>
    Observable.create((sink: Sink<T>) => request(sink, operation, variables, extractor));

/**
 * Subscribes to the given observable.
 * @param observable The Observable.
 * @param onNext The next value handler.
 * @param onError The error handler.
 * @return {Subscription} The subscription info.
 */
export const subscribe = <T>(
    observable: Observable<T>,
    onNext: (obs: T) => void,
    onError?: (error: Error, isUncaughtThrownError?: boolean) => void): Subscription => {
    const handleError = onError ?? ((e, _) => console.error("Error in subscription!", e));

    const subscription = observable.subscribe({
        next: onNext,
        error: handleError,
        complete: () => {
            console.debug("base unsubscribing");
            subscription.unsubscribe();
        },
        closed: false
    });

    return subscription;
};

/**
 * Custom implementation of the Relay lazy load query.
 * @param gqlQuery The GraphQL query.
 * @param variables The query variables.
 * @param options The call options.
 * @return {*} The query response.
 */
export const useCustomLazyLoadQuery = <TQuery extends OperationType>(
    gqlQuery: GraphQLTaggedNode,
    variables?: VariablesOf<TQuery>,
    options?: {
        fetchKey?: string | number,
        fetchPolicy?: FetchPolicy,
        networkCacheConfig?: CacheConfig,
        UNSTABLE_renderPolicy?: RenderPolicy,
    },
): TQuery['response'] => {
    // Can't use this hook in Next.js
    // return useLazyLoadQuery<TQuery>(gqlQuery, variables ?? {}, options);

    const environment = useRelayEnvironment()
    const [data, setData] = useState<Option<TQuery['response']>>(null)

    // Using useEffect run things on the client side
    useEffect(() => {
        fetchQuery<TQuery>(environment, gqlQuery, variables ?? {}, {
            networkCacheConfig: {
                ...options?.networkCacheConfig,
                force: options?.fetchKey != null || options?.networkCacheConfig?.force
            },
            fetchPolicy: options?.fetchPolicy === "network-only" ? "network-only" : "store-or-network"
        })
            .toPromise()
            .then(response => {
                setData(response)
            })
    }, [setData])

    return data
}

/**
 * Tries to translate english error message to italian.
 * This function is called in the notification system to try to translate back end error messages.
 * @param error The error message.
 * @return {string} The translated error message if the translation succeeded, the error itself otherwise.
 */
export const tryTranslateError = (error: string): string => {
    if (error === "name: has already been taken") {
        return "Il nome ?? gi?? stato preso, prova a mettere anche il cognome del personaggio";
    }

    return error;
};

export const handleMutation = <T>(mutation: () => Promise<T>, showNotification: (info: AlertInfo) => void, args?: Option<{
    successMessage?: string,
    errorMessage?: string,
    onCompleted?: () => void
}>) => {
    mutation()
        .then(_result => {
            showNotification({
                type: AlertType.Success,
                message: args?.successMessage ?? "La modifica ?? stata effettuata con successo"
            });
        })
        .catch(errors => {
            console.error("An error occoured while performing the mutation: ", errors);
            showNotification({
                type: AlertType.Error,
                message: args?.errorMessage ?? "La modifica non ha avuto successo, contatta un master per ulteriori informazioni.",
                graphqlErrors: errors
            });
        })
        .finally(() => {
            if (args?.onCompleted != null) {
                args.onCompleted();
            }
        });
};
