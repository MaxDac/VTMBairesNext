import React from "react";
import {useRelayEnvironment} from "react-relay";
import type {ReactElement} from "react";
import HavenEventsList from "./HavenEventsList";
import type {Option} from "vtm-baires-next-utils";
import type {HavenEvent} from "vtm-baires-next-services/graphql-queries/queries/haven/HavenEventFragment";
import {useCustomSnackbar, useDialog} from "vtm-baires-next-components";
import useCharacterSession from "../../session/hooks/useCharacterSession";
import {handleMutation} from "vtm-baires-next-utils";
import resolveEventMutation from "vtm-baires-next-services/graphql-queries/mutations/havens/ResolveEventMutation";

export type HavenEventsInternalComponent = (events: Option<ReadonlyArray<Option<HavenEvent>>>) => ReactElement;

export type HavenEventsInternalProps = {
    characterId: string;
    fetchKey: number;
    component: HavenEventsInternalComponent;
};

export type HavenEventsListWrapperProps = {
    isMaster?: boolean;
    component: (props: HavenEventsInternalProps) => ReactElement;
};

/**
 * This component wraps the rendering around and inside the haven page, abstracting away only the query, that has
 * to be in a React component in order to be used.
 * Basically, it works like this: Wrapper{Injected component{List}}, and the wrapper will be used by the page component.
 * @param isMaster
 * @param component
 * @return {JSX.Element|*}
 * @constructor
 */
export const HavenEventsListWrapper = ({isMaster, component}: HavenEventsListWrapperProps): ReactElement => {
    const {enqueueSnackbar} = useCustomSnackbar()
    const {showDialog} = useDialog()
    const environment = useRelayEnvironment();
    const [character,] = useCharacterSession();
    const [fetchKey, setFetchKey] = React.useState<number>(0);

    const resolveEvent = (id: string) => {
        showDialog(
            "Risolvi evento",
            "Sei sicuro di voler risolvere o ignorare questo evento? Se confermi, l'evento non sarà più visibile.",
            () => {
                handleMutation(() => resolveEventMutation(environment, {
                    eventId: id
                }).finally(() => setFetchKey(p => p + 1)), enqueueSnackbar, {
                    successMessage: "L'evento è stato correttamente risolto"
                });
            });
    };

    if (character?.id != null) {
        return component({
            characterId: character.id,
            fetchKey: fetchKey,
            component: events => (
                <HavenEventsList events={events}
                                 resolveEvent={resolveEvent}
                                 isMaster={isMaster === true} />
            )
        });
    }

    return (<></>);
};

export default HavenEventsListWrapper;
