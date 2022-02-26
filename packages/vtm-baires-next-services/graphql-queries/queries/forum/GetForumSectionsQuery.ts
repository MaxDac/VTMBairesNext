import {graphql, GraphQLTaggedNode} from "relay-runtime";
import {GetForumSectionsQuery, GetForumSectionsQuery$data} from "./__generated__/GetForumSectionsQuery.graphql";
import {useCustomLazyLoadQuery} from "vtm-baires-next-utils";

export const getForumSectionsQuery: GraphQLTaggedNode = graphql`
    query GetForumSectionsQuery {
        getForumSections {
            section {
                id
                title
                description
                onGame
                canView
                canEdit
                orderType
                insertedAt
                updatedAt
            }
            lastThread {
                id
                title
                updatedAt
            }
            hasNewPosts
        }
    }
`;

const useForumSections = (): GetForumSectionsQuery$data =>
    useCustomLazyLoadQuery<GetForumSectionsQuery>(getForumSectionsQuery, {}, {
        // store and network for checking new messages notifications
        fetchPolicy: "store-and-network"
    });

export default useForumSections;
