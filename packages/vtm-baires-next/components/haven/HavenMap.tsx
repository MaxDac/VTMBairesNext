import React, {ReactElement} from "react";
import {drawLine, groupHavens} from "./haven-map-areas-helpers";
import Stack from "@mui/material/Stack";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Box from "@mui/material/Box";
import HavenMapLegend from "./HavenMapLegend";
import type {Haven} from "vtm-baires-next-services/graphql-queries/queries/haven/GetHavensQuery";
import MainMapImageMapper from "../map/MainMapImageMapper";
import {useRecoilValue} from "recoil";
import {SessionCharacter} from "../../session/types";
import {sessionCharacterStateAtom} from "../../session/atoms/recoil-atoms";
import type {Option} from "vtm-baires-next-utils";
import {useCustomLazyLoadQuery} from "vtm-baires-next-utils";
import {getHavensQuery} from "vtm-baires-next-services/graphql-queries/queries/haven/GetHavensQuery";
import {
    GetHavensQuery
} from "vtm-baires-next-services/graphql-queries/queries/haven/__generated__/GetHavensQuery.graphql";

type Props = {
    onSectionSelected: (haven: Haven | string) => void;
    fetchKey?: number;
    setPersonalHaven?: (havenId: string) => void;
};

const rowStyle = {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    padding: "1rem"
};

const HavenMap = ({onSectionSelected, fetchKey, setPersonalHaven}: Props): ReactElement => {
    const character = useRecoilValue<Option<SessionCharacter>>(sessionCharacterStateAtom);
    const havens = useCustomLazyLoadQuery<GetHavensQuery>(getHavensQuery, {}, {
        fetchPolicy: "network-only",
        fetchKey: fetchKey
    })?.getHavens?.result;

    const [showResonances, setShowResonances] = React.useState<boolean>(false);

    sendPersonalHaven(character?.id, havens, setPersonalHaven);

    const onMapSelectedInternal = (haven: Haven | string) =>
        onSectionSelected(haven);

    if (havens != null) {
        return (
            <HavenMapHavensNotNull character={character}
                                   havens={havens}
                                   onMapSelected={onMapSelectedInternal}
                                   showResonances={showResonances}
                                   toggleResonanceView={setShowResonances} />
        )
    }

    return (<></>);
}

const HavenMapInternal = ({havens, showResonances, character, toggleResonanceView, onMapSelected}: any) => {
    const radius = 20.8;
    const groupedHavens = groupHavens(havens);

    const getMapKeys = <TKey, TValue>(map: Map<TKey, TValue>): Array<TKey> => {
        const ret = [];

        for (const key of Array.from(map.keys())) {
            ret.push(key);
        }

        return ret;
    };

    const areas = getMapKeys(groupedHavens)
        .map(x => Number(x))
        .sort((a, b) => a - b)
        .flatMap(key => {
            const value = groupedHavens
                .get(key)
                ?.sort((a, b) => (a?.x ?? 0) - (b?.x ?? 0));

            if (value != null) {
                return drawLine(showResonances, character?.id, key - 1, value, radius);
            }

            return [];
        });

    const memoLegend = React.useMemo(() => (
        <Box sx={rowStyle}>
            <HavenMapLegend />
        </Box>
    ), []);

    const legend = () => {
        if (showResonances) {
            return memoLegend;
        }

        return (<></>);}

    return (
        <>
            <Stack>
                <Box sx={rowStyle}>
                    <FormControlLabel control={
                        <Switch color="secondary"
                                checked={showResonances}
                                onChange={(_: any) => toggleResonanceView((p: boolean) => !p)} />
                    } label="Mostra Risonanze" componentsProps={{
                        typography: {
                            fontFamily: "ThroughTheNight"
                        }
                    }} />
                </Box>
                <MainMapImageMapper areas={areas}
                                    onAreaSelected={onMapSelected} />
                {legend()}
            </Stack>
        </>
    );
};

// The meaning of this class is to not have to cast the type
const HavenMapHavensNotNull = ({havens, showResonances, character, toggleResonanceView, onMapSelected}: any) =>
    React.useMemo(() => (
        <HavenMapInternal character={character}
                          havens={havens}
                          onMapSelected={onMapSelected}
                          showResonances={showResonances}
                          toggleResonanceView={toggleResonanceView} />
    ), [character, havens, onMapSelected, showResonances, toggleResonanceView]);

const sendPersonalHaven = (characterId: Option<string>, havens: any, setPersonalHaven: Option<(havenId: string) => void>) => {
    if (setPersonalHaven != null) {
        const [personalHaven,] = havens?.filter((h: Haven) => h?.character?.id === characterId) ?? [];

        if (personalHaven?.id != null) {
            setPersonalHaven(personalHaven.id);
        }
    }
};

export default HavenMap;
