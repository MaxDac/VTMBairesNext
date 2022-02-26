import React from "react";
import SubMap from "./SubMap";
import type {ReactElement} from "react";
import type {Option} from "vtm-baires-next-utils";
import type {Map} from "vtm-baires-next-services/graphql-queries/data-utils";

type Props = {
    maps: Option<Map[]>,
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
