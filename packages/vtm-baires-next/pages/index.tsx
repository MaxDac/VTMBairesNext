import {clansQuery} from "vtm-baires-next-services/graphql-queries/queries/info/ClansQuery";
import type {
    ClansQuery,
    ClansQuery$data
} from "vtm-baires-next-services/graphql-queries/queries/info/__generated__/ClansQuery.graphql";
import {fetchQuery} from "relay-runtime";
import {useEffect, useState} from "react";
import {useRelayEnvironment} from "react-relay";

const Index = (props: any) => {
    const environment = useRelayEnvironment()
    const [clans, setClans] = useState<ClansQuery$data['clans']>([])

    useEffect(() => {
        fetchQuery<ClansQuery>(environment, clansQuery, {}, {
            fetchPolicy: "network-only"
        })
            .toPromise()
            .then(clans => setClans(_ => clans?.clans ?? []))
    }, [setClans])

    const showClans = () =>
        clans?.map(c => (<li key={c?.id}>{c?.name}</li>))

    return (
        <>
            <h1>Test</h1>
            <ul>
                {showClans()}
            </ul>
        </>
    )
}

export default Index