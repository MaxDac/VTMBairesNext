import React from 'react';
import areas from "./map-settings.json";
import type {Map} from "vtm-baires-next-services/graphql-queries/data-utils";
import MainMapImageMapper from "./MainMapImageMapper";
import type {ReactElement} from "react";
import {Option} from "vtm-baires-next-utils";

type Props = {
    maps: Option<Map[]>,
    onMapSelected: (mapId: string) => void;
}

const MainMapWide = ({maps, onMapSelected}: Props): ReactElement => {
    const onMapSelectedInternal = (name: string) => {
        const [selectedMap,] = maps?.filter(m => m.name === name) ?? [];

        if (selectedMap?.id != null) {
            onMapSelected(selectedMap.id);
        }
    };

    return (
        // @ts-ignore
        <MainMapImageMapper areas={areas} onAreaSelected={onMapSelectedInternal} />
    );
};

export default MainMapWide;
