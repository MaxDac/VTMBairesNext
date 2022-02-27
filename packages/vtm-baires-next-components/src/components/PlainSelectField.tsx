import * as React from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select, {SelectChangeEvent} from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import {useTheme} from "@mui/material/styles";
import {getSelectItems, SelectProps} from "./component-helpers";

type Props = SelectProps & {
    onChange: (value: string) => void;
    selectedValue: string;
}

const emptyMenuItem = () => (
    <MenuItem key="element-zero" value={undefined}>None</MenuItem>
);

const PlainSelectField = (props: Props): React.ReactElement => {
    const theme = useTheme();

    const items = () => getSelectItems(props, emptyMenuItem);

    const onChange = ({target: {value}}: SelectChangeEvent) => props.onChange(value);

    return (
        <FormControl sx={{
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
                    label={props.label}
                    value={props.selectedValue}
                    onChange={onChange}>
                {items()}
            </Select>
        </FormControl>
    );
}

export default PlainSelectField;
