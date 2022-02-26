import * as React from 'react';
import TextField from "@mui/material/TextField";
import type {Option} from "vtm-baires-next-utils";
import {Options} from "vtm-baires-next-utils";

export type FormTextFieldProps = {
    formik: any;
    fieldName: string;
    type?: Option<string>;
    autoComplete?: Option<string>;
    label?: Option<string>;
    multiline?: Option<boolean>;
    rows?: Option<number>;
    minRows?: Option<number>;
    maxRows?: Option<number>;
    fullWidth?: Option<boolean>;
    className?: Option<string>;
    validate?: Option<(value: string) => string>;
}

const FormTextField = (props: FormTextFieldProps): JSX.Element => {
    const multiline = props.multiline != null
        ? props.multiline
        : props.rows && props.rows > 1
            ? true
            : props.multiline;

    return (
        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth={props.fullWidth ?? true}
            className={props.className ?? ""}
            label={props.label ?? ""}
            type={props.type ?? "text"}
            id={props.fieldName}
            name={props.fieldName}
            autoComplete={props.autoComplete ?? ""}
            multiline={Options.asValueOrUndefined(multiline)}
            rows={Options.asValueOrUndefined(props.rows)}
            minRows={Options.asValueOrUndefined(props.minRows)}
            maxRows={Options.asValueOrUndefined(props.maxRows)}
            value={props.formik.values[props.fieldName]}
            onChange={props.formik.handleChange}
            error={props.formik.touched[props.fieldName] && Boolean(props.formik.errors[props.fieldName])}
            helperText={props.formik.touched[props.fieldName] && props.formik.errors[props.fieldName]} />
            // validate={props.validate}/>
    );
};

export default FormTextField;
