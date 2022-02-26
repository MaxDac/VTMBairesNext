import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import {useTheme} from "@mui/material/styles";
import type {SelectProps} from "./component-helpers";
import {getSelectItems} from "./component-helpers";
import FormHelperText from "@mui/material/FormHelperText";
import type {Option} from "vtm-baires-next-utils";
import type {ReactElement} from "react";

export type SelectInputProps = SelectProps & {
    formik: any;
    renderValue?: (value: Option<string[]>) => JSX.Element;
    multiple?: boolean;
    containerSx?: any;
};

const emptyMenuItem = () => (
    <MenuItem key="element-zero" value={undefined}>None</MenuItem>
);

const FormSelectField = (props: SelectInputProps): ReactElement => {
    const theme = useTheme();

    const items = () => getSelectItems(props, emptyMenuItem);

    return (
        <FormControl sx={{
            ...props.containerSx,
            margin: theme.spacing(1),
            minWidth: 150,
        }}>
            <InputLabel id={`select-for-${props.fieldName}`}>{props.label}</InputLabel>
            <Select labelId={`select-for-${props.fieldName}`}
                    id={props.fieldName}
                    name={props.fieldName}
                    fullWidth
                    sx={{
                        ...props.sx,
                        minWidth: theme.spacing(10)
                    }}
                    multiple={props.multiple}
                    label={props.label}
                    value={props.formik.values[props.fieldName]}
                    onChange={props.formik.handleChange}
                    renderValue={props.renderValue}
                    error={props.formik.touched[props.fieldName] && Boolean(props.formik.errors[props.fieldName])}>
                {items()}
            </Select>
            <FormHelperText sx={{color: "red"}}>{props.formik.errors[props.fieldName]}</FormHelperText>
        </FormControl>
    );
}

export default FormSelectField;
