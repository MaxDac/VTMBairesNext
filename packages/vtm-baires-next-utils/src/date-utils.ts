import * as DateFns from "date-fns";
import type {Option} from "../index";

const format = (
    date: Date | number,
    format: string,
    options?: {
        locale?: DateFns.Locale;
        weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
        firstWeekContainsDate?: number;
        useAdditionalWeekYearTokens?: boolean;
        useAdditionalDayOfYearTokens?: boolean;
    }
): Option<string> => {
    try {
        return DateFns.format(date, format, options);
    }
    catch (e) {
        console.debug("Error while formatting expression", {
            error: e,
            argument: date,
            format
        });
        return null;
    }
};

/**
 * Parses an ISO date.
 * @param argument The argument.
 * @param options The options
 * @return {null|Date} The date, if formatted correctly, otherwise null.
 */
export const parseISO = (
    argument: string,
    options?: {
        additionalDigits?: 0 | 1 | 2
    }
): Option<Date> => {
    try {
        return DateFns.parseISO(argument, options);
    }
    catch (e) {
        console.debug("Error while formatting expression", {
            argument,
            error: e
        });
        return null;
    }
}

/**
 * Parses a date in UTC.
 * @param date The UTC date.
 * @return {?Date} The resulting date.
 */
export const parseUTC = (date: string): Option<Date> => {
    if (date.slice(-1) !== "Z") {
        return parseISO(`${date}Z`);
    }

    return parseISO(date);
};

/**
 * Tries to convert the date as a UTC date, then formats the date with the given string.
 * @param date The UTC date, or a string representing the UTC date.
 * @param formatString The format string.
 * @return {Option<string>} The resulting string, or null if the conversion didn't succeeded.
 */
export const defaultFormatWithStringFormat = (date: Option<any>, formatString: string): Option<string> => {
    if (date != null) {
        if (typeof date === "string") {
            const utcDate = parseUTC(date);

            if (utcDate != null) {
                return format(utcDate, formatString);
            }
        }

        return format(date, formatString);
    }

    return null;
};

/**
 * Formats the given Date or string in the default date and time representation
 * @param date The UTC date.
 * @return {Option<string>} The date-time string representation, or null if the conversion fails.
 */
export const defaultFormatDateAndTime = (date: Option<any>): Option<string> =>
    defaultFormatWithStringFormat(date, "dd-LL-yyyy HH:mm");

/**
 * Formats the given Date or string in the default date representation
 * @param date The UTC date.
 * @return {Option<string>} The date string representation, or null if the conversion fails.
 */
export const defaultFormatDate = (date: Option<any>): Option<string> =>
    defaultFormatWithStringFormat(date, "dd-LL-yyyy");

/**
 * Formats the given Date or string in the default time representation
 * @param date The UTC date.
 * @return {Option<string>} The time string representation, or null if the conversion fails.
 */
export const defaultFormatTime = (date: Option<any>): Option<string> =>
    defaultFormatWithStringFormat(date, "HH:mm");

/**
 * Formats the date to be interpreted by the default date control.
 * @param date The date.
 * @return {Option<string>} The formatted date.
 */
export const defaultFormatDateAndTimeForControl = (date: Option<any>): Option<string> =>
    defaultFormatWithStringFormat(date, "yyyy-LL-dd HH:mm")
        ?.replace(" ", "T");

/**
 * Returns the date at one day before the given date.
 * @param date The original date.
 * @return {Date} The date of the day before the given date.
 */
export const yesterday = (date: Date): Date => DateFns.addDays(date, -1);

/**
 * Sorts two dates in ascending or descending order.
 * @param date1 The first date as string.
 * @param date2 The second date as string.
 * @param desc Whether to sort in descending order. Will be sorted in ascending order if not specified.
 * @return {number} The comparison result.
 */
export const sortByDate = (date1: string, date2: string, desc?: boolean): number => {
    const [parsed1, parsed2] = [date1, date2].map(s => parseISO(s));

    if (parsed1 != null && parsed2 != null) {
        return desc != null && desc
            ? DateFns.compareDesc(parsed1, parsed2)
            : DateFns.compareAsc(parsed1, parsed2);
    }

    return 0;
};
