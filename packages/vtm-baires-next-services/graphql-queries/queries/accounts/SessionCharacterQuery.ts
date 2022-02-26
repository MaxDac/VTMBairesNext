import {graphql, GraphQLTaggedNode, IEnvironment} from "relay-runtime";
import {useCustomLazyLoadQuery, wrapQuery} from "vtm-baires-next-utils/src/relay-utils";
import {SessionCharacterQuery, SessionCharacterQuery$data} from "./__generated__/SessionCharacterQuery.graphql";
import type {Option} from "vtm-baires-next-utils/index";

const sessionCharacterQuery: GraphQLTaggedNode = graphql`
    query SessionCharacterQuery {
        getSessionCharacter {
            id
            name
            approved
            clan {
                id
                name
            }
        }
    }
`;

export const useSessionCharacter = (): SessionCharacterQuery$data =>
    useCustomLazyLoadQuery<SessionCharacterQuery>(sessionCharacterQuery, {});

export const getSessionCharacter = (environment: IEnvironment): Promise<Option<SessionCharacterQuery$data>> =>
    wrapQuery(environment, sessionCharacterQuery, {});


