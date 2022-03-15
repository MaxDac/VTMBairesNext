import type {ReactElement} from "react";
import React from 'react';
import areas from "./map-settings.json";
import MainMapImageMapper from "./MainMapImageMapper";
import type {
    MainMapsQuery$data
} from "vtm-baires-next-services/graphql-queries/queries/map/__generated__/MainMapsQuery.graphql";

type Props = {
    maps: MainMapsQuery$data["mainMaps"],
    onMapSelected: (mapId: string) => void;
}

const MainMapWide = ({maps, onMapSelected}: Props): ReactElement => {
    const onMapSelectedInternal = (name: string) => {
        const [selectedMap,] = maps?.filter(m => m?.name === name) ?? [];

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
