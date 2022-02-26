import React, {SyntheticEvent} from "react";
import Rating from "@mui/material/Rating";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import FiberManualRecordOutlinedIcon from "@mui/icons-material/FiberManualRecordOutlined";
import Grid from "@mui/material/Grid";
import {menuIconStyle} from "../../menu/menu-base-utils";
import type {ReactElement} from "react";
import type {Attribute} from "vtm-baires-next-services/graphql-queries/queries/character/GetCharacterStatsQuery";
import type {Option} from "vtm-baires-next-utils";
import {Options} from "vtm-baires-next-utils";

type Props = {
    attribute: Attribute;
    maxValue: number;
    onChange: (attribute: Attribute) => void;
}

const AttributeFormControl = ({attribute, maxValue, onChange}: Props): ReactElement => {
    const onChangeInternal = (_: SyntheticEvent<Element, Event>, value: Option<number>) =>
        onChange({
            ...attribute,
            value: Options.getOrElse(value, 0)
        });

    return (
        <Grid container>
            <Grid item xs={6}>
                {attribute?.name}
            </Grid>
            <Grid item xs={6}>
                <Rating name={Options.asValueOrUndefined(attribute.name)}
                        defaultValue={Options.asValueOrUndefined(attribute.value)}
                        icon={<FiberManualRecordIcon sx={menuIconStyle} />}
                        emptyIcon={<FiberManualRecordOutlinedIcon sx={menuIconStyle} />}
                        onChange={onChangeInternal}
                        max={maxValue} />
            </Grid>
        </Grid>
    );
}

export default AttributeFormControl;
