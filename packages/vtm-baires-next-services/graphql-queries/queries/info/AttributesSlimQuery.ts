import {graphql, GraphQLTaggedNode} from "relay-runtime";
import { attributesDefaultSortFunction } from "./AttributesQuery";
import type {
  Attribute,
  AttributeSections,
  AttributeTypeNames,
} from "./AttributesQuery";
import {useCustomLazyLoadQuery} from "vtm-baires-next-utils";
import {AttributesSlimQuery} from "./__generated__/AttributesSlimQuery.graphql";
import {toNotNullArray} from "vtm-baires-next-utils/src/utils";

export const attributesSlimQuery: GraphQLTaggedNode = graphql`
    query AttributesSlimQuery {
        attributes {
            id @required(action: LOG)
            name @required(action: NONE)
            order @required(action: LOG)
            attributeType {
                name
                section
            }
        }
    }
`;

const useAttributesSlimQuery = (): Attribute[] => {
    const attributes = useCustomLazyLoadQuery<AttributesSlimQuery>(attributesSlimQuery, {})?.attributes;

    const mappedAttributes: Array<Attribute> = toNotNullArray(attributes)
        .map(x => ({
            id: x.id,
            name: x.name,
            order: x.order,
            attributeType: {
                name: x.attributeType?.name as AttributeTypeNames,
                section: x.attributeType?.section as AttributeSections
            }
        }));

    return mappedAttributes
        .sort((a, b) => attributesDefaultSortFunction(a, b));
};

export default useAttributesSlimQuery;
