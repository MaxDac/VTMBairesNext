import {useCustomLazyLoadQuery} from "vtm-baires-next-utils";
import {clansQuery} from "vtm-baires-next-services/graphql-queries/queries/info/ClansQuery";
import {ClansQuery} from "vtm-baires-next-services/graphql-queries/queries/info/__generated__/ClansQuery.graphql";

export default function Index(props: any) {
    const clans = useCustomLazyLoadQuery<ClansQuery>(clansQuery, {})

    return (
        <div>Test</div>
    )
}
