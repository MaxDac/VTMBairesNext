import type {ReactElement} from "react";
import React from 'react';
import SubMap from "../../components/map/SubMap";
import {useUpdateSessionMap} from "../../base/_hooks/useUpdateSessionMap";
import {replaceAll, stripAccents} from "vtm-baires-next-utils/src/utils";
import MainLayout from "../../components/layouts/MainLayout";
import {useRouter} from "next/router";
import {useCustomLazyLoadQuery} from "vtm-baires-next-utils";
import {mapQuery} from "vtm-baires-next-services/graphql-queries/queries/map/MapQuery";
import {MapQuery} from "vtm-baires-next-services/graphql-queries/queries/map/__generated__/MapQuery.graphql";
import {
    SectionMapsQuery
} from "vtm-baires-next-services/graphql-queries/queries/map/__generated__/SectionMapsQuery.graphql";
import {sectionMapsQuery} from "vtm-baires-next-services/graphql-queries/queries/map/SectionMapsQuery";

const Id = (): ReactElement => {
    const router = useRouter()
    const {id} = router.query

    console.debug("map id selected", id)

    useUpdateSessionMap(id as string);
    const map = useCustomLazyLoadQuery<MapQuery>(mapQuery, { id: id as string })?.map;
    const maps = useCustomLazyLoadQuery<SectionMapsQuery>(sectionMapsQuery, { parentId: id as string })?.sectionMaps

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

Id.getLayout = (page: ReactElement) => (
    <MainLayout>
        {page}
    </MainLayout>
)

export default Id;
