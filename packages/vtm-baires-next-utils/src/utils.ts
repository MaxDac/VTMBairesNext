import type {Option} from "../index";
import {Options} from "../index";
import {NextRequest} from "next/server";

export type LogType = "log" | "info" | "warning" | "error";

export const log = (message: string, obj?: any, type?: LogType): void => {
    switch (type) {
        case "error": return console.error(message, obj);
        case "info": return console.info(message, obj);
        case "warning": return console.warn(message, obj);
        default: return console.debug(message, obj);
    }
}

// TODO - implement the redirection using Next.js
// export const handleAuthorizedRejection = ({ push }: History): (any => void) =>
// (rejection: any) => {
//     console.error("unauthorized by the back end", rejection);
//     push(Routes.sessionExpired);
// };

// export const emptyReadOnlyArray = <T>(): ReadonlyArray<T> => [];

export const emptyArray = <T>(): Array<T> => [];

export const toArray = <T>(readOnlyArray: Option<ReadonlyArray<Option<T>>>): Option<T>[] => {
    if (readOnlyArray != null) {
        return readOnlyArray as Option<T>[];
    }

    return emptyArray<Option<T>>();
};

/**
 * Returns an array with null filtered values from the a read-only array.
 * @param readOnlyArray The read only array.
 * @return {Array<T>} The array without nulls.
 */
export const toNullFilteredArray = <T>(readOnlyArray: Option<ReadonlyArray<Option<T>>>): T[] =>
    toArray(readOnlyArray)
        .filter(Options.isNotNull)
        .map(x => x as T);

export const uniques = <T>(arr: Array<T>): T[] => Array.from(new Set(arr));

export const toMap = <TKey, TValue>(arr: Option<Option<[Option<TKey>, Option<TValue>]>[]>): Option<Map<TKey, TValue>> =>
    arr?.reduce((map, next) => {
        if (next != null) {
            const [key, value] = next;

            if (key != null && value != null) {
                return map.set(key, value);
            }
        }

        return map;
    }, new Map<TKey, TValue>());

export const filterNulls = <T>(arr: Option<T>[]): T[] =>
    arr.reduce((acc, p) => {
        if (p !== undefined && p !== null) {
            return [...acc, p];
        }

        return acc;
    }, [] as T[]);

export const toNotNullArray = <T>(readOnlyArray: Option<ReadonlyArray<Option<T>>>): Array<T> =>
    filterNulls(toArray(readOnlyArray));

export const firstOrDefault = <T>(a: Option<Array<T>>): Option<T> => {
    if (a != null && a.length > 0) {
        return a[0];
    }

    return undefined;
};

export const castNotNull = <T>(item: Option<T>): T => item as T;

/**
 * Tries to cast the given item to one type.
 * @param item The item.
 * @return {*} The casted item.
 */
export const tryCastToOneType = <T, Q>(item: T | Q): Option<T> => item as T;

/**
 * Determines whether the string is not null nor empty.
 * @param item The string.
 * @return {boolean} True if the string is not null nor empty, False otherwise.
 */
export const isNotNullNorEmpty = (item: Option<string>): boolean => item != null && item !== "";

/**
 * Determines whether the string is null or empty.
 * @param item The string.
 * @return {boolean} True if the string is null or empty, False otherwise.
 */
export const isNullOrEmpty = (item: Option<string>): boolean => !isNotNullNorEmpty(item);

const checkRangeLimits = (from: number, to: number): [number, number] => {
    if (from > to) {
        return [to, from];
    }

    return [from, to];
}

/**
 * Returns a range between the two specified number (included).
 * @param from The lower boundary.
 * @param to The highest boundary.
 * @return {Generator<number, void, number>} The generator.
 */
export const range = function*(from: number, to: number): Generator<number, void, number> {
    [from, to] = checkRangeLimits(from, to);

    for (let i = from; i <= to; i++) {
        yield i;
    }
};

export const rangeArray = (from: number, to: number): number[] => {
    const ret = [];
    [from, to] = checkRangeLimits(from, to);

    for (let i = from; i <= to; i++) {
        ret.push(i);
    }

    return ret;
};

export const getInitials = (name: string): string => {
    if (!name) {
        return "NF";
    }

    const split = name.split(" ");

    if (split.length === 1) return split[0][0].toUpperCase();
    else {
        return [split[0], split.pop()]
            .filter(Options.isNotNull)
            .map(x => x as string)
            // @ts-ignore
            .map(([f,]) => f.toUpperCase())
            .join("");
    }
};

/**
 * Wrapper for the Javascript built-in function replaceAll that's not included in flow currently.
 * @param text The text.
 * @param what What to search.
 * @param withWhat What to substitute it with.
 * @return {string} The result text, with the substituted part.
 */
export const replaceAll = (text: string, what: string, withWhat: string): string => {
    const escapeRegExp = (s: string) =>
        s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string

    return text.replace(new RegExp(escapeRegExp(what), 'g'), () => withWhat);
}

/**
 * Strips the accent from the string.
 * @param text The string with accents.
 * @return {string} The string without accents.
 */
export const stripAccents = (text: string): string =>
    text.normalize("NFD").replace(/\p{Diacritic}/gu, "");

/**
 * Gets the RegEx validation string for an url.
 * @return {string} The URL RegEx validation string.
 */
export const getUrlValidationMatchString = (): RegExp =>
    /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\\.-]+)+[\w\-\\._~:/?#[\]@!\\$&'\\(\\)\\*\\+,;=.]+$/gi;

/**
 * Returns a random number for a random fetch key.
 * @return {number} The random number.
 */
export const randomFetchKey = (): number => Math.round(Math.random() * 100);

export type ComparisonOptions =
    | "CaseSensitive"
    | "CaseInsensitive";

const parseComparisonStrings = (first: Option<string>, second: Option<string>, options: Option<ComparisonOptions>): [string, string] => {
    const [f, s] = options === "CaseSensitive"
        ? [first ?? "", second ?? ""]
        : [first ?? "", second ?? ""].map(s => s.toLowerCase());

    return [f, s];
}

/**
 * Delegate that orders two strings alphabetically.
 * @param first The first string
 * @param second The second string
 * @param options The comparison options
 * @return {number} 1 if the first string is "greater" than the second, 0 if it's equal, -1 if it's less than the second.
 */
export const orderAlphabetically = (first: Option<string>, second: Option<string>, options?: Option<ComparisonOptions>): number => {
    const [f, s] = parseComparisonStrings(first, second, options);

    return f > s
        ? 1
        : f === s ? 0 : -1;
};

/**
 * Checkes whether the search and the match string are equal.
 * @param name The search string
 * @param match The match string
 * @param options The comparison options
 * @return {boolean} True if the two strings are equal, False otherwise.
 */
export const matchNames = (name: Option<string>, match: Option<string>, options?: Option<ComparisonOptions>): boolean => {
    const [n, m] = parseComparisonStrings(name, match, options);
    return n.indexOf(m) !== -1;
};

export const sortStrings = (a: string, b: string): number =>
    a > b
        ? 1
        : (a === b ? 0 : -1);

export type RequestHeader = Option<string>;

export type Cookies = {
    [key: string]: string;
}

/**
 * Extracts the key value pairs containing the cookies from the corresponding request header.
 * @param requestCookieHeader
 */
export const getCookiesFromRequestHeader = (requestCookieHeader: RequestHeader): Cookies => {
    const cookies = requestCookieHeader
        ?.split(" ")
        ?.map(x => x.replace(";", "").split("=") as [string, string]) ?? [];

    const returnValue: Cookies = {};

    for (const [key, value] of cookies) {
        returnValue[key] = value;
    }

    return returnValue;
}

/**
 * Reform the Cookies header for the fetch HTTP call.
 * @param cookies The cookies.
 */
export const addCookiesToHeaders = (cookies: Option<{ [key: string]: string }>): any => {
    if (cookies == null) {
        return {}
    }

    let stringCookies = ""

    for (const key in cookies) {
        stringCookies = `${stringCookies}${key}=${cookies[key]}; `
    }

    return {
        Cookie: stringCookies.slice(0, -2)
    }
}