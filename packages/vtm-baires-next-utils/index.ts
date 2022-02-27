import {GraphqlErrorMessage} from "./src/relay-utils";
import {SnackbarKey} from "notistack";

export type Option<T> = T | undefined | null;

export namespace Options {
    /**
     * Determines whether the object is null or not.
     * @param opt The object.
     * @return True if the object is null, False otherwise.
     */
    export const isNotNull = <T>(opt: Option<T>): boolean => opt !== undefined && opt !== null;

    /**
     * Gets the value related to option, or the given default value.
     * @param opt The option.
     * @param orElse The default value.
     * @return The value if not null, or the default value provided.
     */
    export const getOrElse = <T>(opt: Option<T>, orElse: T): T =>
        isNotNull(opt)
            ? opt as T
            : orElse;

    /**
     * Converts the option to T | undefined.
     * @param opt The option.
     * @return The option value or undefined.
     */
    export const asValueOrUndefined = <T>(opt: Option<T>): T | undefined =>
        opt == null
            ? undefined
            : opt;
}

export enum AlertType {
    Success,
    Warning,
    Error,
    Info
}

export type AlertInfo = {
    type: AlertType;
    duration?: number;
    graphqlErrors?: Option<GraphqlErrorMessage> | any;
    message?: Option<string>;
    key?: SnackbarKey;
};

export {post as post} from "./src/rest-utils";
export {cache} from "./src/relay-environment";
export {wrapMutation, handleMutation} from "./src/relay-utils";
export {
    toMap,
    sortStrings,
    rangeArray,
    replaceAll,
    isNotNullNorEmpty,
    orderAlphabetically
} from "./src/utils";
export {wrapSubscription, subscribe, useCustomLazyLoadQuery, tryTranslateError} from "./src/relay-utils";
export {getEnvironment} from "./src/relay-environment";
export {downloadFile, compressImage} from "./src/file-utils";
export {
    yesterday,
    defaultFormatDateAndTime,
    defaultFormatTime,
    defaultFormatDate,
    sortByDate,
    defaultFormatDateAndTimeForControl,
    parseISO
} from "./src/date-utils";
