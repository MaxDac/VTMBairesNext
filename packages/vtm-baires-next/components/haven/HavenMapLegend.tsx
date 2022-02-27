import React from "react";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import Avatar from "@mui/material/Avatar";
import {
    animalResonanceFillColor,
    cholericResonanceFillColor, melancholyResonanceFillColor, noResonanceFillColor,
    phlegmaticResonanceFillColor, sanguineResonanceFillColor
} from "./haven-map-areas-helpers";

const HavenMapLegend = (): any => {
    const values = [
        ["Animale", animalResonanceFillColor],
        ["Collerica", cholericResonanceFillColor],
        ["Flemmatica", phlegmaticResonanceFillColor],
        ["Malinconica", melancholyResonanceFillColor],
        ["Sanguigna", sanguineResonanceFillColor],
        ["Nessuna", noResonanceFillColor]
    ];

    const legend = () => values.map(([label, color]) => (
        <Chip key={label}
              label={label}
              variant="outlined"
              avatar={<Avatar sx={{
                                  bgcolor: color
                              }}>
            {label[0].toUpperCase()}
        </Avatar>} />
    ));

    return (
        <Stack direction="row" spacing={1}>
            {legend()}
        </Stack>
    );
}

export default HavenMapLegend;
