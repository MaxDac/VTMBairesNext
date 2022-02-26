import React, {ChangeEvent, useState} from "react";
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';
import type {ReactElement} from "react";
import useAttributesSlimQuery from "vtm-baires-next-services/graphql-queries/queries/info/AttributesSlimQuery";

const AdvantagesControl = (): ReactElement => {
    const attributes = useAttributesSlimQuery();

    const [error,] = useState(false);

    const getAdvantages = (): [string, string, string][] =>
        attributes
            .filter(a => a.attributeType?.name === "Advantage")
            .flatMap(a => [1, 2, 3, 4, 5].map(i => [String(a.id), a.name, String(i)] as [string, string, string]));

    const handleChange = (e: ChangeEvent<HTMLInputElement>, _checked: boolean) => {
        console.info("event", e);
    }

    const values = () => getAdvantages()
        .map(([id, label, value]) => (
            <FormControlLabel key={`${id}-${value}`}
                              control={<Checkbox checked={true}
                                                 onChange={handleChange}
                                                 name={`${id}-${value}`} />}
                              label={`${label}-${value}`} />
        ));

    return (
        <FormControl required error={error} component="fieldset" style={{margin: "10px"}}>
            <FormLabel component="legend">Pick two</FormLabel>
            <FormGroup>
                {values()}
            </FormGroup>
            <FormHelperText>You can display an error</FormHelperText>
        </FormControl>
    );
}

export default AdvantagesControl;
