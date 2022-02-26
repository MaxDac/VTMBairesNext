import React, {useState} from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import ImageMapper from "react-img-mapper";
import Typography from "@mui/material/Typography";
import type {ReactElement} from "react";
import type {Haven} from "vtm-baires-next-services/graphql-queries/queries/haven/GetHavensQuery";
import type {MapAreas} from "../maps/haven-map-areas-helpers";

type Props = {
    areas: Array<MapAreas>;
    onAreaSelected: (haven: Haven | string) => void;
}

export const mainMapWidth = 800;

export const mainMapHeight = 510;

const MainMapImageMapper = ({areas, onAreaSelected}: Props): ReactElement => {
    const [legend, setLegend] = useState("");

    const legendFontSize = () => {
        if (legend.length > 50) {
            return "1.1rem";
        }
        if (legend.length > 40) {
            return "1.2rem";
        }
        else if (legend.length > 30) {
            return "1.5rem";
        }
        else {
            return "2rem";
        }
    }

    const map = {
        name: "haven-map",
        areas: areas
    };

    const onMouseEnter = ({title}: {title: string}) => {
        setLegend((_: any) => title);
    };

    const onMouseLeave = (_: any) => {
        setLegend((_: any) => "");
    };

    const onAreaSelectedInternal = ({haven, name}: MapAreas) => onAreaSelected(haven ?? name);

    return (
        <Box component="div" sx={{display: "inline-flex", width: "100%"}}>
            <Paper component="div" variant="outlined" sx={{
                margin: "0 auto",
                width: `${(mainMapWidth + 2)}px`,
                height: `${(mainMapHeight + 58)}px`,
                textAlign: "center"
            }}>
                <Stack>
                    <Box sx={{cursor: "pointer"}}>
                        {/* @ts-ignore */}
                        <ImageMapper onClick={onAreaSelectedInternal} onMouseEnter={onMouseEnter}
                                     src="main-map.webp"
                                     map={map}
                                     onMouseLeave={onMouseLeave} />
                    </Box>
                    <Box sx={{
                        margin: "0 auto",
                        minHeight: "55px",
                        display: "flex"
                    }}>
                        <Typography sx={{
                            fontFamily: "ThroughTheNight",
                            fontSize: legendFontSize(),
                            alignSelf: "center",
                        }}>
                            {legend}
                        </Typography>
                    </Box>
                </Stack>
            </Paper>
        </Box>
    );
};

export default MainMapImageMapper;
