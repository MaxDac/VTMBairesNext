import type {ReactElement} from "react";
import React from "react";
import Rating from '@mui/material/Rating';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import FiberManualRecordOutlinedIcon from '@mui/icons-material/FiberManualRecordOutlined';
import FiberManualRecordTwoToneIcon from '@mui/icons-material/FiberManualRecordTwoTone';
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import {attributeEmptyPointStyle, attributeFullPointStyle} from "./AttributeStat";
import {mainFontFamily} from "vtm-baires-next-components";
import type {StatWithoutId} from "vtm-baires-next-services/graphql-queries/queries/character/GetCharacterStatsQuery";
import {Options} from "vtm-baires-next-utils";

type Props = {
    stat: StatWithoutId;
    damage: number;
    secondDamage?: number;
}

const AttributeWithDamageStat = ({stat, damage, secondDamage}: Props): ReactElement => {
    const parsedSecondDamage = secondDamage ?? 0;

    const realValue = (stat.value ?? 0) - damage - parsedSecondDamage;

    const realMaxValue = (stat.maxValue ?? 0) - realValue - damage;

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
                            value={realValue}
                            readOnly
                            icon={<FiberManualRecordIcon sx={attributeFullPointStyle} />}
                            emptyIcon={<FiberManualRecordOutlinedIcon sx={attributeEmptyPointStyle} />}
                            max={realValue} />
                    <Rating name={Options.asValueOrUndefined(stat.name)}
                            value={damage}
                            readOnly
                            icon={<FiberManualRecordTwoToneIcon sx={{
                                attributeFullPointStyle,
                                color: "#C91919"
                            }} />}
                            emptyIcon={<FiberManualRecordOutlinedIcon sx={attributeEmptyPointStyle} />}
                            max={damage} />
                    <Rating name={Options.asValueOrUndefined(stat.name)}
                            value={secondDamage}
                            readOnly
                            icon={<FiberManualRecordTwoToneIcon sx={attributeFullPointStyle} />}
                            emptyIcon={<FiberManualRecordOutlinedIcon sx={attributeEmptyPointStyle} />}
                            sx={{color: "#C92929"}}
                            max={realMaxValue} />
                </Grid>
            </Grid>
        </>
    );
}

export default AttributeWithDamageStat;
