import {graphql, GraphQLTaggedNode} from "relay-runtime";
import {useCustomLazyLoadQuery} from "vtm-baires-next-utils/src/relay-utils";
import {IsCharacterAwakeQuery} from "./__generated__/IsCharacterAwakeQuery.graphql";

export const isCharacterAwakeQuery: GraphQLTaggedNode = graphql`
    query IsCharacterAwakeQuery($characterId: ID!) {
        isCharacterAwake(characterId: $characterId)
    }
`;

export const useIsCharacterAwake = (characterId: string, fetchKey: number): boolean =>
    useCustomLazyLoadQuery<IsCharacterAwakeQuery>(isCharacterAwakeQuery, {characterId}, {
        fetchPolicy: "network-only",
        fetchKey: fetchKey
    })?.isCharacterAwake === true;
