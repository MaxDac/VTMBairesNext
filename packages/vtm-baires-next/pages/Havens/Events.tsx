import React from "react";
import HavenEventsListWrapper from "../../components/haven/HavenEventsListWrapper";
import type {HavenEventsInternalProps} from "../../components/haven/HavenEventsListWrapper";
import Stack from "@mui/material/Stack";
import {
    getCharacterHavenEventsQuery
} from "vtm-baires-next-services/graphql-queries/queries/haven/GetCharacterHavenEventsQuery";
import {useCustomLazyLoadQuery} from "vtm-baires-next-utils";
import {
    GetCharacterHavenEventsQuery
} from "vtm-baires-next-services/graphql-queries/queries/haven/__generated__/GetCharacterHavenEventsQuery.graphql";

const HavenEventsInternal = ({characterId, fetchKey, component}: HavenEventsInternalProps) => {
    const events = useCustomLazyLoadQuery<GetCharacterHavenEventsQuery>(getCharacterHavenEventsQuery, {
        characterId: characterId
    }, {
        fetchPolicy: "network-only",
        fetchKey: fetchKey
    })?.getCharacterDomainEvents?.result;

    return component(events);
};

const Events = (): any => {
    return (
        <Stack direction="column">
            <h1 style={{
                fontFamily: 'Disturbed',
                marginRight: "20px"
            }}>
                Eventi nel Dominio del personaggio
            </h1>

            <HavenEventsListWrapper component={HavenEventsInternal} />
        </Stack>
    );
};

export default Events;
