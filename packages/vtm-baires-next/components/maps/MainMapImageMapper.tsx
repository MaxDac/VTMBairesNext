import React, {ReactElement, useState} from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type {Haven} from "vtm-baires-next-services/graphql-queries/queries/haven/GetHavensQuery";
import type {MapAreas} from "./haven-map-areas-helpers";
import ImageMapper from "react-img-mapper";
import type {CustomArea} from "react-img-mapper";

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

    const onMouseEnter = ({title}: any) => {
        setLegend((_: any) => title);
    };

    const onMouseLeave = (_: any) => {
        setLegend((_: any) => "");
    };

    const onAreaSelectedInternal = (obj: CustomArea) => {
        const {haven, name}: MapAreas = (obj as unknown) as MapAreas;
        return onAreaSelected(haven ?? name);
    }

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
                        <ImageMapper src="main-map.webp"
                                     map={map}
                                     onClick={onAreaSelectedInternal}
                                     onMouseEnter={onMouseEnter}
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
