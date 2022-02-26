import React, {useState} from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import ListSubheader from "@mui/material/ListSubheader";
import type {ReactElement} from "react";

export type SetControlValue = (value: string) => void;

export type SetControlError = (value: string) => void;

type AttributeSelectionFieldProps = {
    label: string;
    fieldName: string;
    value: string;
    values: () => Array<[string, string, string]>;
    onChange: (fieldName: string,
               value: string,
               setControlValue: SetControlValue,
               setControlError: SetControlError) => void;
}

const AttributeSelectionField = (props: AttributeSelectionFieldProps): ReactElement => {
    const [innerValue, setInnerValue] = useState(props.value);
    const [error, setError] = useState("");
    const [_value, setValue] = useState("");

    const items = () => {
        const values = props.values();

        if (values && values.reduce) {
            return values.reduce<[string, JSX.Element[]]>(
                ([prevGroup, acc], [group, value, label]) => {
                    const selectItem = <MenuItem key={value} value={value}>{label}</MenuItem>;

                    if (group !== prevGroup) {
                        return [group, [
                            ...acc,
                            <ListSubheader>{group}</ListSubheader>,
                            selectItem
                        ]];
                    }

                    return [group, [
                        ...acc,
                        selectItem
                    ]]
                },
                ["", []] as [string, JSX.Element[]]);
        }

        return [];
    }

    const setControlValue = (value: string) =>
        setValue((_: any) => value);

    const setControlError = (error: string) =>
        setError((_: any) => error);

    const onChange = ({ target: { value } }: any) => {
        setInnerValue((_: any) => value);
        props.onChange(props.fieldName, value, setControlValue, setControlError);
    }

    const hasError = (): boolean => {
        return error !== undefined && error !== "";
    }

    return (
        <div style={{padding: "10px", textAlign: "center"}}>
            <FormControl>
                <InputLabel id="attribute-selection-field">{props.label}</InputLabel>
                <Select labelId="attribute-selection-field"
                        id={props.fieldName}
                        name={props.fieldName}
                        fullWidth
                        value={innerValue}
                        label={props.label}
                        onChange={onChange}
                        error={hasError()}
                        sx={{
                            minWidth: "150px"
                        }}
                        aria-errormessage={error}>
                    {items()}
                </Select>
            </FormControl>
        </div>
    );
}

export default AttributeSelectionField;
