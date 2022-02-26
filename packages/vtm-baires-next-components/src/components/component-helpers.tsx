import MenuItem from "@mui/material/MenuItem";
import * as React from "react";
import {rangeArray} from "vtm-baires-next-utils";
import type {ReactElement} from "react";

export type SelectProps = {
    fieldName: string;
    label: string;
    values: [string | number | undefined, string][];
    addNullValue?: boolean,
    sx?: any;
};

export const getSelectItems = (props: SelectProps, emptyMenuItem: () => ReactElement): ReactElement[] => {
    const values = props.values;
    if (values && values.map) {
        const items = values
            .map(([value, label]) =>
                (<MenuItem key={value ?? "is-null"} value={value ?? ""}>{label}</MenuItem>));

        if (props.addNullValue === true) {
            return [emptyMenuItem()].concat(items);
        }

        return items;
    }

    return [];
};

export const baseMenuItems = (min: number, max: number): ReactElement[] => {
    const values = [];

    for (const v of rangeArray(min, max)) {
        values.push(<MenuItem key={v} value={v}>{v}</MenuItem>);
    }

    return values;
};
