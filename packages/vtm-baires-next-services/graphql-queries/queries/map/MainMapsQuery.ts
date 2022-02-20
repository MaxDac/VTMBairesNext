import {graphql, GraphQLTaggedNode} from "relay-runtime";
import {convertToJavascriptArray} from "vtm-baires-next-utils/src/relay-utils";
import {convertToMap} from "../../data-utils";

export const mainMapsQuery: GraphQLTaggedNode = graphql`
    query MainMapsQuery {
        mainMaps {
            id
            name
            description
            children {
                id
                name
            }
        }
    }
`;

// TODO - sort it out at the end
export const convert: (map: any) => any = result => {
    return convertToJavascriptArray(result?.mainMaps).map(convertToMap) ?? [];
};
