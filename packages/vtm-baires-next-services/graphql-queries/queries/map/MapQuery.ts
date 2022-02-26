import {graphql, GraphQLTaggedNode} from "relay-runtime";
import {useCustomLazyLoadQuery} from "vtm-baires-next-utils";
import {convertToMap} from "../../data-utils";
import type {Map} from "../../data-utils";
import {MapQuery} from "./__generated__/MapQuery.graphql";
import type {Option} from "vtm-baires-next-utils/index";

const mapQuery: GraphQLTaggedNode = graphql`
    query MapQuery($id: ID!) {
        map(id: $id) {
            id
            name
            description
            image
            isChat
            isPrivate
        }
    }
`;

export default function useMap(id: string): Option<Map> {
    const ret = useCustomLazyLoadQuery<MapQuery>(mapQuery, { id });
    return convertToMap(ret?.map);
}
