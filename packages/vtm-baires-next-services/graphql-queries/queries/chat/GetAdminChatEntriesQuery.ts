import {graphql, GraphQLTaggedNode} from "relay-runtime";

export const getAdminChatEntriesQuery: GraphQLTaggedNode = graphql`
    query GetAdminChatEntriesQuery($mapId: ID!, $fromDate: DateTime!, $toDate: DateTime!) {
        mapAdminChatEntries(mapId: $mapId, from: $fromDate, to: $toDate) {
            id
            character {
                id
                name
            }
            chatMap {
                id
            }
            master
            result
            text
            insertedAt
        }
    }
`;
