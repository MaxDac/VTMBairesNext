import React, {ReactElement} from "react";
import Grid from "@mui/material/Grid";
import AttributeStat from "../../controls/AttributeStat";
import AttributeWithDamageStat from "../../controls/AttributeWithDamageStat";
import AttributeCumulativeStat from "../../controls/AttributeCumulativeStat";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import {getCharacterStatusQuery} from "vtm-baires-next-services/graphql-queries/queries/character/GetCharacterStatusQuery";
import type {Character} from "vtm-baires-next-services/graphql-queries/queries/character/GetCharacterCompleteQuery";
import {useCustomLazyLoadQuery} from "vtm-baires-next-utils";
import {
    GetCharacterStatusQuery
} from "vtm-baires-next-services/graphql-queries/queries/character/__generated__/GetCharacterStatusQuery.graphql";
import {characterIsVampire} from "../../character-utils";
import {defaultFormatDateAndTime} from "vtm-baires-next-utils";

type Props = {
    sheet: Character;
};

const CharacterSheetStatusStatsSection = ({sheet}: Props): ReactElement => {
    if (sheet?.id != null) {
        return (
            <CharacterSheetStatusStatsSectionInternal sheet={sheet}
                                                      characterId={sheet.id} />
        );
    }

    return (<></>);
};

type InternalProps = {
    characterId: string;
    sheet: Character;
}

const CharacterSheetStatusStatsSectionInternal = ({sheet, characterId}: InternalProps): ReactElement => {
    const characterStatus = useCustomLazyLoadQuery<GetCharacterStatusQuery>(
        getCharacterStatusQuery,
        {characterId}, {
        fetchPolicy: "network-only"
    })?.getCharacterStatus;

    const isCharacterVampire = () => characterIsVampire(sheet);

    // TODO - Fix this with the correct style
    const bottomLinesStyle = {
        // name: "Umanità",
        // value: characterStatus?.humanity,
        // maxValue: 10
    };

    const resonanceIntensityLabel = (resonancePower: number) => {
        switch (resonancePower) {
            case 2: return "fugace";
            case 3: return "intensa";
            case 4: return "acuta (discrasia)";
            default: return "trascurabile";
        }
    };

    const showHuntResult = () => {
        if (isCharacterVampire()) {
            const lastHuntDate = defaultFormatDateAndTime(characterStatus?.lastHunt ?? "");
            if (lastHuntDate != null && lastHuntDate !== "") {
                return (
                    <Grid item xs={12} sx={{
                        ...bottomLinesStyle,
                        margin: "10px"
                    }}>
                        <Paper variant="outlined" sx={{padding: "10px", margin: "10px"}}>
                            <Typography sx={{
                                fontFamily: "DefaultTypewriter"
                            }}>
                                L'ultima caccia risale al {defaultFormatDateAndTime(characterStatus?.lastHunt ?? "")},
                                ha avuto una
                                risonanza <b>{characterStatus?.lastResonance} {resonanceIntensityLabel(characterStatus?.lastResonanceIntensity ?? 1)}</b>.
                            </Typography>
                        </Paper>
                    </Grid>
                );
            }

            return (<></>);
        }

        return (<></>)
    };

    const showHunger = () => {
        if (isCharacterVampire()) {
            return (
                <Grid item xs={12} sx={bottomLinesStyle}>
                    <AttributeStat stat={{
                        name: "Fame",
                        value: characterStatus?.hunger,
                        maxValue: 5
                    }} damage={characterStatus?.stains ?? 0} />
                </Grid>
            );
        }

        return (<></>);
    };

    const showBloodPotency = () => {
        if (isCharacterVampire()) {
            return (
                <Grid item xs={12} sx={bottomLinesStyle}>
                    <AttributeStat stat={{
                        name: "Potenza del Sangue",
                        value: characterStatus?.bloodPotency,
                        maxValue: 5
                    }} damage={0} />
                </Grid>
            );
        }

        return (<></>);
    };

    return (
        <>
            {showHuntResult()}
            <Grid item xs={12} sx={bottomLinesStyle}>
                <AttributeWithDamageStat stat={{
                    name: "Forza di Volontà",
                    value: characterStatus?.willpower,
                    maxValue: 10
                }} damage={characterStatus?.willpowerDamage ?? 0} />
            </Grid>
            <Grid item xs={12} sx={bottomLinesStyle}>
                <AttributeWithDamageStat stat={{
                    name: "Salute",
                    value: characterStatus?.health,
                    maxValue: 10
                }} damage={characterStatus?.aggravatedDamage ?? 0} secondDamage={characterStatus?.damage ?? 0} />
            </Grid>
            <Grid item xs={12} sx={bottomLinesStyle}>
                <AttributeCumulativeStat stat={{
                    name: "Umanità",
                    value: characterStatus?.humanity,
                    maxValue: 10
                }} damage={characterStatus?.stains ?? 0} />
            </Grid>
            {showBloodPotency()}
            {showHunger()}
        </>
    );
}

export default CharacterSheetStatusStatsSection;
