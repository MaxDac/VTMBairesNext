import type {ReactElement} from "react";
import React, {useEffect} from 'react';
import MainMapWide from '../../components/map/MainMapWide';
import {useMediaQuery, useTheme} from '@mui/material';
import MainMapResponsive from '../../components/map/MainMapResponsive';
import {useRelayEnvironment} from "react-relay";
import {useRouter} from "next/router";
import {useCustomLazyLoadQuery} from "vtm-baires-next-utils";
import {convert, mainMapsQuery} from "vtm-baires-next-services/graphql-queries/queries/map/MainMapsQuery";
import {Routes} from "../../base/routes";
import ResetSessionMapMutation
    from "vtm-baires-next-services/graphql-queries/mutations/sessions/ResetSessionMapMutation";
import MainLayout from "../../components/layouts/MainLayout";

const Index = (): ReactElement => {
    const environment = useRelayEnvironment();
    const theme = useTheme();
    const router = useRouter();
    const ret = useCustomLazyLoadQuery(mainMapsQuery, {});
    const maps = convert(ret);
    const showResponsive = useMediaQuery(theme.breakpoints.down('sm'));

    const onMapSelected = (id: string) => router.push(Routes.subMap(id));

    useEffect(() => {
        ResetSessionMapMutation(environment)
            .catch((e: Error) => console.error("Error while updating session map", e));
    }, [environment])

    if (showResponsive) {
        return (
            <MainMapResponsive maps={maps} onMapSelected={onMapSelected} />
        )
    }
    return (
        <MainMapWide maps={maps} onMapSelected={onMapSelected} />
    );
};

Index.getLayout = (page: ReactElement) => (
    <MainLayout>
        {page}
    </MainLayout>
)

export default Index;
