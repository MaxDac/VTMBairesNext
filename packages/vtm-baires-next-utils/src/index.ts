export type Option<T> = T | undefined | null;

export namespace Options {
    /**
     * Determines whether the object is null or not.
     * @param opt The object.
     * @returns True if the object is null, False otherwise.
     */
    export const isNotNull = <T>(opt: Option<T>): boolean => opt !== undefined && opt !== null;

    /**
     * Gets the value related to option, or the given default value.
     * @param opt The option.
     * @param orElse The default value.
     * @returns The value if not null, or the default value provided.
     */
    export const getOrElse = <T>(opt: Option<T>, orElse: T): T =>
        isNotNull(opt)
            ? opt as T
            : orElse;
}

export {post as post} from "./rest-utils";
export {cache} from "./relay-environment";
export {wrapMutation} from "./relay-utils";
export {toMap, sortStrings} from "./utils";
export {wrapSubscription} from "./relay-utils";