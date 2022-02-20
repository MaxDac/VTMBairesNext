import {graphql, GraphQLTaggedNode} from "relay-runtime";

export const getCharacterStatusQuery: GraphQLTaggedNode = graphql`
    query GetCharacterStatusQuery($characterId: ID!) {
        getCharacterStatus(characterId: $characterId) {
            humanity
            lastHunt
            lastResonance
            lastResonanceIntensity
            hunger
            stains
            bloodPotency
            willpower
            willpowerDamage
            health
            damage
            aggravatedDamage
        }
    }
`;
