import {graphql, GraphQLTaggedNode} from "relay-runtime";
import type {Option} from "vtm-baires-next-utils/index";

export type Haven = {
    readonly id: string;
    readonly name: Option<string>;
    readonly x: Option<number>;
    readonly y: Option<number>;
    readonly resonance: Option<string>;
    readonly danger: Option<number>;
    readonly difficulty: Option<number>;
    readonly groundControl: Option<number>;
    readonly ownerDifficulty: Option<number>;
    readonly resourcesLevel: Option<number>;
    readonly character: Option<{
        readonly id: string;
        readonly name: Option<string>;
    }>;
};

export const getHavensQuery: GraphQLTaggedNode = graphql`
    query GetHavensQuery {
        getHavens {
            result {
                id
                name
                x
                y
                resonance
                danger
                difficulty
                groundControl
                ownerDifficulty
                resourcesLevel
                character {
                    id
                    name
                }
            }
        }
    }
`;
