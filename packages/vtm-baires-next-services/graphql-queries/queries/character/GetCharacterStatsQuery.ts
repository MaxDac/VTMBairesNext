import {graphql, GraphQLTaggedNode} from "relay-runtime";
import type {Option} from "vtm-baires-next-utils";
import {AttributeTypeNames} from "../info/AttributesQuery";
import {sortStrings} from "vtm-baires-next-utils";
import {useCustomLazyLoadQuery} from "vtm-baires-next-utils/src/relay-utils";
import {GetCharacterStatsQuery} from "./__generated__/GetCharacterStatsQuery.graphql";

export const getCharacterStatsQuery: GraphQLTaggedNode = graphql`
    query GetCharacterStatsQuery($id: ID!) {
        getCharacterStats(characterId: $id) {
            id
            attributes {
                id
                value
                attribute {
                    name
                    attributeType {
                        name
                        section
                    }
                }
            }
            disciplines {
                id
                value
                attribute {
                    name
                }
            }
            advantages {
                id
                value
                attribute {
                    name
                }
            }
            predatorType {
                id
                name
                description
            }
        }
    }
`;

export type StatWithoutId = {
    name: Option<string>;
    value: Option<number>;
    maxValue?: number;
    color?: string;
};

export type Stat = StatWithoutId & {
    id: Option<string>;
};

export type Attribute = Stat & {
    type: Option<string>;
    section: Option<string>;
};

type CharacterAttributeSorterFunction = (attribute1: Option<Attribute>, attribute2: Option<Attribute>) => number;

export const characterAttributeSorter = (type: AttributeTypeNames): CharacterAttributeSorterFunction =>
    (a: Option<Attribute>, b: Option<Attribute>): number => {
        if (a?.section != null && b?.section != null && a.section !== b.section) {
            return sortStrings(a.section, b.section);
        }

        if (type === "Attribute" && a?.id != null && b?.id != null) {
            return sortStrings(a.id, b.id);
        }
        else if (a?.name != null && b?.name != null) {
            return sortStrings(a.name, b.name);
        }

        return 0;
    }

export type Discipline = Stat;

export type Advantage = Stat;

export type PredatorType = {
    readonly id?: Option<string>;
    readonly name: Option<string>;
    readonly description: Option<string>;
};

export type CharacterStats = {
    readonly characterId: string;
    readonly attributes: Array<Attribute>;
    readonly disciplines: Array<Discipline>;
    readonly advantages: Array<Advantage>;
    readonly predatorType: PredatorType
};

export const useCharacterStatsQuery = (characterId: string, queryOptions?: any): Option<CharacterStats> => {
    const s =
        useCustomLazyLoadQuery<GetCharacterStatsQuery>(getCharacterStatsQuery, {id: characterId}, queryOptions ?? {
            fetchPolicy: "store-and-network"
        })
            ?.getCharacterStats;

    if (s?.id != null) {
        return ({
            characterId: s.id,
            attributes: s?.attributes
                ?.map(a => ({
                    id: a?.id,
                    name: a?.attribute?.name,
                    type: a?.attribute?.attributeType?.name,
                    section: a?.attribute?.attributeType?.section,
                    value: a?.value
                })) ?? [],
            disciplines: s?.disciplines?.map(a => ({
                id: a?.id,
                name: a?.attribute?.name,
                value: a?.value
            })) ?? [],
            advantages: (s?.advantages ?? [])?.map(a => ({
                id: a?.id,
                name: a?.attribute?.name,
                value: a?.value
            })),
            predatorType: {
                id: s?.predatorType?.id,
                name: s?.predatorType?.name,
                description: s?.predatorType?.description
            }
        });
    }

    return null;
}
