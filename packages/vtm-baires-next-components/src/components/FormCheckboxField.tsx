import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import FormHelperText from "@mui/material/FormHelperText";
import type {ReactElement} from "react";

type Props = {
    formik: any,
    fieldName: string,
    label: string,
    onChanged?: (value: boolean) => void
}

const FormCheckboxField = ({formik, fieldName, label, onChanged}: Props): ReactElement => {
    const [checked, setChecked] = React.useState<boolean>(formik.values[fieldName] === true);

    const onControlChanged = (e: any) => {
        setChecked(e.target.checked);

        e.target.value = e.target.value === "on";

        formik.handleChange(e);

        if (onChanged != null) {
            onChanged(e.target.checked);
        }
    }

    return (
        <FormGroup row>
            <FormControlLabel
                control={
                    <Checkbox onChange={onControlChanged}
                              checked={checked}
                              name={fieldName}
                              id={fieldName}
                              color="primary" />
                }
                label={label} />
            <FormHelperText sx={{color: "red"}}>{formik.errors[fieldName]}</FormHelperText>
        </FormGroup>
    );
}

export default FormCheckboxField;
