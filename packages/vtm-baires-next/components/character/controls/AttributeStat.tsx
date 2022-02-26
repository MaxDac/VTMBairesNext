import type {ReactElement} from "react";
import React from "react";
import Rating from '@mui/material/Rating';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import FiberManualRecordOutlinedIcon from '@mui/icons-material/FiberManualRecordOutlined';
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import {mainFontFamily} from "vtm-baires-next-components";
import {Options} from "vtm-baires-next-utils";
import type {StatWithoutId} from "vtm-baires-next-services/graphql-queries/queries/character/GetCharacterStatsQuery";

type Props = {
    stat: StatWithoutId,
    damage?: number,
}

export const attributeFullPointStyle = {
    color: "secondary.light"
};

export const attributeEmptyPointStyle = {
    color: "primary.dark"
}

const AttributeStat = ({stat, damage}: Props): ReactElement => {
    return (
        <>
            <Grid container>
                <Grid item xs={12} sm={6}>
                    <Typography sx={mainFontFamily}>
                        {stat.name}
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Rating name={Options.asValueOrUndefined(stat.name)}
                            value={stat.value}
                            readOnly
                            icon={<FiberManualRecordIcon sx={attributeFullPointStyle} />}
                            emptyIcon={<FiberManualRecordOutlinedIcon sx={attributeEmptyPointStyle} />}
                            max={stat.maxValue} />
                </Grid>
            </Grid>
        </>
    );
}

export default AttributeStat;
