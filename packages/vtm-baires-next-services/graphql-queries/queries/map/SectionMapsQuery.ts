import {graphql, GraphQLTaggedNode} from "relay-runtime";
import {useCustomLazyLoadQuery} from "vtm-baires-next-utils/src/relay-utils";
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
