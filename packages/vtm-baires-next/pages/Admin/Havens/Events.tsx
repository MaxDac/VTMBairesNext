import React from "react";
import {HavenEventsListWrapper} from "../../../components/haven/HavenEventsListWrapper";
import Stack from "@mui/material/Stack";
import {
    getHavenUnresolvedEventsQuery
} from "vtm-baires-next-services/graphql-queries/queries/haven/GetHavenUnresolvedEventsQuery";
import {useCustomLazyLoadQuery} from "vtm-baires-next-utils";
import {
    GetHavenUnresolvedEventsQuery
} from "vtm-baires-next-services/graphql-queries/queries/haven/__generated__/GetHavenUnresolvedEventsQuery.graphql";

const Events = (): any => {
    return (
        <Stack direction="column">
            <h1 style={{
                fontFamily: 'Disturbed',
                marginRight: "20px"
            }}>
                Eventi nel Dominio
            </h1>

            <HavenEventsListWrapper isMaster
                                    component={AdminHavenEventsInternal} />
        </Stack>
    );
};

const AdminHavenEventsInternal = ({fetchKey, component}: any) => {
    const events = useCustomLazyLoadQuery<GetHavenUnresolvedEventsQuery>(getHavenUnresolvedEventsQuery, {}, {
        fetchPolicy: "network-only",
        fetchKey: fetchKey
    })?.getUnresolvedEvents?.result;

    return component(events);
}

export default Events;
