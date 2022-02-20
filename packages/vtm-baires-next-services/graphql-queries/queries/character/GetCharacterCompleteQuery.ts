import {graphql, GraphQLTaggedNode} from "relay-runtime";
import type {Option} from "vtm-baires-next-utils";
import {useCustomLazyLoadQuery} from "vtm-baires-next-utils/src/relay-utils";
import {GetCharacterCompleteQuery} from "./__generated__/GetCharacterCompleteQuery.graphql";

export const getCharacterCompleteQuery: GraphQLTaggedNode = graphql`
    query GetCharacterCompleteQuery($id: ID!) {
        getCharacter(id: $id) {
            ...CharacterFragments_characterInfo @relay(mask: false)
            ...CharacterFragments_characterConcealedInfo @relay(mask: false)
            ...CharacterFragments_characterSheet @relay(mask: false)
            ...CharacterFragments_characterStats @relay(mask: false)
            ...CharacterFragments_characterState @relay(mask: false)
        }
    }
`;

export type Character = {
    readonly id: string,
    readonly name: Option<string>,
    readonly isNpc: Option<boolean>,
    readonly biography: Option<string>,
    readonly disciplinePowers: Option<string>,
    readonly specialties: Option<string>,
    readonly objects: Option<string>,
    readonly clan: Option<{
        readonly id: string,
        readonly name: Option<string>,
    }>,
    readonly avatar: Option<string>,
    readonly description: Option<string>,
    readonly humanity: Option<number>,
    readonly experience: Option<number>,
    readonly totalExperience: Option<number>,
    readonly generation: Option<number>,
    readonly hunger: Option<number>,
    readonly health: Option<number>,
    readonly damage: Option<number>,
    readonly aggravatedDamage: Option<number>,
    readonly willpower: Option<number>,
    readonly willpowerDamage: Option<number>,
    readonly stains: Option<number>,
    readonly bloodPotency: Option<number>,
    readonly isAwake: Option<boolean>,
    readonly lastAwake: Option<any>,
    readonly lastHunt: Option<any>,
    readonly huntDifficulty: Option<number>,
    readonly lastResonance: Option<string>,
    readonly lastResonanceIntensity: Option<number>,
    readonly stage: Option<number>,
    readonly approved: Option<boolean>,
    readonly isComplete: Option<boolean>,
    readonly advantages: Option<string>,
    readonly notes: Option<string>,
    readonly convictions: Option<string>,
    readonly predatorType: Option<{
        readonly id: string,
        readonly name: Option<string>,
    }>,
};

export const useCharacterCompleteQuery = (characterId: string): Option<Character> => {
    return useCustomLazyLoadQuery<GetCharacterCompleteQuery>(getCharacterCompleteQuery, { id: characterId })?.getCharacter;
};
