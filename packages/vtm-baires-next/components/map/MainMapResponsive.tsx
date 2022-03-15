import React from "react";
import SubMap from "./SubMap";
import type {ReactElement} from "react";
import type {
    MainMapsQuery$data
} from "vtm-baires-next-services/graphql-queries/queries/map/__generated__/MainMapsQuery.graphql";

type Props = {
    maps: MainMapsQuery$data["mainMaps"],
    onMapSelected: (mapId: string) => void;
}

const MainMapResponsive = ({maps}: Props): ReactElement => {
    if (maps != null) {
        return (
            <SubMap maps={maps} imageUrl="/main-map-responsive.webp" />
        );
    }
    
    return (
        <img src="/main-map-responsive.webp" alt="Id Temp" />
    )
}

export default MainMapResponsive;
