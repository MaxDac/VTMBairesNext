import {graphql, GraphQLTaggedNode} from "relay-runtime";
import type {Option} from "vtm-baires-next-utils/index";
import {useCustomLazyLoadQuery} from "vtm-baires-next-utils";
import {AttributesQuery} from "./__generated__/AttributesQuery.graphql";

export const attributesQuery: GraphQLTaggedNode = graphql`
    query AttributesQuery {
        attributes {
            id
            name
            order
            attributeType {
                id
                name
                section
            }
        }
    }
`;

export type AttributeTypeNames = "Attribute" | "Ability" | "Advantage" | "Discipline";

export type AttributeSections = "Physical" | "Social" | "Mental" | "";

export type AttributeType = {
    readonly id?: string;
    readonly name?: Option<AttributeTypeNames>;
    readonly section?: Option<AttributeSections>;
};

export type Attribute = {
    readonly id: string;
    readonly name: string;
    readonly order: number;
    readonly description?: Option<string>;
    readonly attributeType?: AttributeType;
};

const getAttributeTypeNameOrder = (attributeName: string) => {
    switch(attributeName) {
        case "Attribute": return 1;
        case "Ability": return 2;
        case "Advantage": return 3;
        default: return 4;
    }
};

const getAttributeTypeSectionOrder = (attributeName: string) => {
    switch(attributeName) {
        case "Physical": return 1;
        case "Social": return 2;
        default: return 3;
    }
};

const compareTypeNames = (first: string, second: string): number =>
    getAttributeTypeNameOrder(first) - getAttributeTypeNameOrder(second);

const compareTypeSection = (first: string, second: string): number =>
    getAttributeTypeSectionOrder(first) - getAttributeTypeSectionOrder(second);

export const attributesDefaultSortFunction = (first: Attribute, second: Attribute): number => {
    let result = compareTypeNames(first?.attributeType?.name ?? "", second?.attributeType?.name ?? "");

    if (result === 0) {
        result = compareTypeSection(first?.attributeType?.section ?? "", second?.attributeType?.section ?? "");
    }

    if (result === 0) {
        return first?.name > second?.name
            ? 1
            : (first?.name === second?.name ? 0 : -1);
    }

    return result;
};

const useAttributesQuery = (): Attribute[] =>
    useCustomLazyLoadQuery<AttributesQuery>(attributesQuery, {})?.attributes
        ?.map(a => {
            return {
                id: a?.id ?? "",
                name: a?.name ?? "",
                order: a?.order ?? 0,
                attributeType: {
                    id: a?.attributeType?.id ?? "",
                    name: (a?.attributeType?.name ?? "Attribute" as AttributeTypeNames),
                    section: (a?.attributeType?.section ?? "Physical" as AttributeSections)
                }
            } as Attribute;
        })
        ?.sort((a, b) => attributesDefaultSortFunction(a, b)) ?? [];

export default useAttributesQuery;
