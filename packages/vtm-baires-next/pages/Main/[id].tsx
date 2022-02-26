import type {ReactElement} from "react";
import React from 'react';
import SubMap from "../../components/map/SubMap";
import {useUpdateSessionMap} from "../../base/_hooks/useUpdateSessionMap";
import useMap from "vtm-baires-next-services/graphql-queries/queries/map/MapQuery";
import useSectionMaps from "vtm-baires-next-services/graphql-queries/queries/map/SectionMapsQuery";
import {replaceAll, stripAccents} from "vtm-baires-next-utils/src/utils";

type MapProps = {
    id: string;
}

const Id = ({ id }: MapProps): ReactElement => {
    useUpdateSessionMap(id);

    const map = useMap(id);

    const maps = useSectionMaps(id);

    const getImageUrlName = (name: string) => {
        const fileName = stripAccents(replaceAll(name.toLowerCase(), " ", "-"));
        return `/${fileName}.webp`;
    };

    const imageUrlName = () =>
        map?.name != null
            ? getImageUrlName(map.name)
            : "";

    return (<SubMap maps={maps} imageUrl={imageUrlName()} />);
};

export default Id;
