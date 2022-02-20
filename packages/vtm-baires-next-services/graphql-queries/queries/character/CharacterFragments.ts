import {graphql, GraphQLTaggedNode} from "relay-runtime";

export const characterInfoFragment: GraphQLTaggedNode = graphql`
    fragment CharacterFragments_characterInfo on Character {
        id
        name
        isNpc
    }
`;

export const characterConcealedInfoFragment: GraphQLTaggedNode = graphql`
    fragment CharacterFragments_characterConcealedInfo on Character {
        id
        name
        biography
        disciplinePowers
        specialties
        objects
        clan {
            id
            name
        }
    }
`;

export const characterStatsFragment: GraphQLTaggedNode = graphql`
    fragment CharacterFragments_characterStats on Character {
        id
        clan {
            id
            name
        }
        humanity
        experience
        totalExperience
        generation
        hunger
        health
        damage
        aggravatedDamage
        willpower
        willpowerDamage
        stains
        bloodPotency
        isAwake
        lastAwake
        lastHunt
        huntDifficulty
        lastResonance
        lastResonanceIntensity
    }
`;

export const characterSheetFragment: GraphQLTaggedNode = graphql`
    fragment CharacterFragments_characterSheet on Character {
        id
        avatar
        description
        isNpc
    }
`;

export const characterStateFragment: GraphQLTaggedNode = graphql`
    fragment CharacterFragments_characterState on Character {
        id
        stage
        approved
        isComplete
        isNpc
        experience
        totalExperience
        biography
        advantages
        notes
        disciplinePowers
        specialties
        convictions
        objects
        predatorType {
            id
            name
        }
        clan {
            id
            name
        }
        huntDifficulty
    }
`;

export const characterOffFragment: GraphQLTaggedNode = graphql`
    fragment CharacterFragments_characterOff on Character {
        id
        soundtrack
        off
    }
`;
