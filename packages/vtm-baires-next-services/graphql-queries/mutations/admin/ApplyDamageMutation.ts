import {graphql} from "relay-runtime";
import type {IEnvironment} from "relay-runtime";
import {wrapMutation} from "vtm-baires-next-utils";
import {DamageType} from "./__generated__/ApplyDamageMutation.graphql";

const mutation = graphql`
    mutation ApplyDamageMutation($characterId: ID!, $damage: Int!, $type: DamageType!) {
        applyDamage(input: {
            characterId: $characterId,
            damageEntity: $damage,
            type: $type
        }) {
            result
        }
    }
`;

const mutationPromise = (environment: IEnvironment, characterId: string, damage: number, type: DamageType): Promise<string> => {
    return wrapMutation<string>(environment, mutation, {
        characterId,
        damage,
        type
    });
};

export default mutationPromise;
