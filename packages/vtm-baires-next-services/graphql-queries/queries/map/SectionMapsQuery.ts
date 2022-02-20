import {graphql, GraphQLTaggedNode} from "relay-runtime";
import {convertToJavascriptArray, useCustomLazyLoadQuery} from "vtm-baires-next-utils/src/relay-utils";
import {convertToMap} from "../../data-utils";
import type {Map} from "../../data-utils";
import {SectionMapsQuery} from "./__generated__/SectionMapsQuery.graphql";

export const sectionMapsQuery: GraphQLTaggedNode = graphql`
    query SectionMapsQuery($parentId: ID!) {
        sectionMaps(parentId: $parentId) {
            id
            name
            description
            isChat
        }
    }
`;

// TODO - sort it out like the one before this
const convert = (result: any) =>
    convertToJavascriptArray(result?.sectionMaps).map(convertToMap) ?? [];

export default function useSectionMaps(id: string): Array<Map> {
    const ret = useCustomLazyLoadQuery<SectionMapsQuery>(sectionMapsQuery, { parentId: id });
    return convert(ret);
}
