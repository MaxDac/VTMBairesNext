import {graphql} from "relay-runtime";
import {wrapMutation} from "vtm-baires-next-utils";
import type {IEnvironment} from "relay-runtime";

const updateSessionMapMutation = graphql`
    mutation UpdateSessionMapMutation($mapId: ID!) {
        updateSessionMap(mapId: $mapId)
    }
`;

export const updateSessionMap = (environment: IEnvironment, mapId: string): Promise<any> => 
    wrapMutation(environment, updateSessionMapMutation, {
        mapId: mapId
    });
