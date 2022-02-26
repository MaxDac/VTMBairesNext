import React from "react";
import Typography from "@mui/material/Typography";
import {
  characterAttributeSorter,
  useCharacterStatsQuery,
} from "vtm-baires-next-services/graphql-queries/queries/character/GetCharacterStatsQuery";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import AttributeStat from "../../controls/AttributeStat";
import {useFragment} from "react-relay";
import {characterStatsFragment} from "vtm-baires-next-services/graphql-queries/queries/character/CharacterFragments";
import type {CharacterFragments_characterStats$key} from "vtm-baires-next-services/graphql-queries/queries/character/__generated__/CharacterFragments_characterStats.graphql";
import CharacterSheetStatusStatsSection from "./CharacterSheetStatusStatsSection";
import type {ReactElement} from "react";
import type {Option} from "vtm-baires-next-utils";
import {
    AttributeSections,
    AttributeTypeNames
} from "vtm-baires-next-services/graphql-queries/queries/info/AttributesQuery";

export type RefreshedQueryOption = {
    fetchKey: number;
    fetchPolicy: "network-only" | "network-or-store"
};

type Props = {
    characterId: string;
    characterQuery: CharacterFragments_characterStats$key;
    queryOptions?: Option<RefreshedQueryOption>;
    hideAttributes?: boolean;
    hideAbilities?: boolean;
    hideAdvantages?: boolean;
    hideStatus?: boolean;
};

export const sectionStyle = {
    fontFamily: 'DefaultTypewriter',
    color: "secondary.light",
    fontSize: "20px",
    textAlign: "center",
    paddingTop: "10px",
    paddingBottom: "10px"
};

const CharacterSheetStatsSection = ({characterId, characterQuery, queryOptions,
                                        hideAttributes, hideAbilities, hideAdvantages, hideStatus}: Props): ReactElement => {
    const sheet: any = useFragment(
        characterStatsFragment,
        characterQuery);

    const stats = useCharacterStatsQuery(characterId, queryOptions);

    const showAttributes = hideAttributes !== true;
    const showAbilities = hideAbilities !== true;
    const showAdvantages = hideAdvantages !== true;
    const showStatus = hideStatus !== true;

    const filterAttributes = (type: AttributeTypeNames, section: AttributeSections) => stats?.attributes
        ?.filter(({type: t, section: s}) => t === type && s === section)
        ?.sort((a, b) => characterAttributeSorter(type)(a, b))
        ?.map(s => <AttributeStat key={s?.id} stat={s} />);

    const renderAttributes = () => {
        if (showAttributes) {
            return (
                <>
                    <Grid item xs={12}>
                        <Typography sx={sectionStyle}>
                            Attributi
                        </Typography>
                    </Grid>
                    <Grid item {...responsiveProperties}>
                        <List dense>
                            {filterAttributes("Attribute", "Physical")}
                        </List>
                    </Grid>
                    <Grid item {...responsiveProperties}>
                        <List dense>
                            {filterAttributes("Attribute", "Social")}
                        </List>
                    </Grid>
                    <Grid item {...responsiveProperties}>
                        <List dense>
                            {filterAttributes("Attribute", "Mental")}
                        </List>
                    </Grid>
                </>
            );
        }

        return (<></>);
    };

    const renderAbilities = () => {
        if (showAbilities) {
            return (
                <>
                    <Grid item xs={12}>
                        <Typography sx={sectionStyle}>
                            Abilità
                        </Typography>
                    </Grid>
                    <Grid item {...responsiveProperties}>
                        <List dense>
                            {filterAttributes("Ability", "Physical")}
                        </List>
                    </Grid>
                    <Grid item {...responsiveProperties}>
                        <List dense>
                            {filterAttributes("Ability", "Social")}
                        </List>
                    </Grid>
                    <Grid item {...responsiveProperties}>
                        <List dense>
                            {filterAttributes("Ability", "Mental")}
                        </List>
                    </Grid>
                </>
            );
        }

        return (<></>);
    };

    const hasDisciplines = () => (stats?.disciplines?.length ?? 0) > 0;

    const disciplines = () => stats?.disciplines
        ?.map(d => (
            <Grid key={d?.id} item xs={12} sm={6} md={4}>
                <AttributeStat stat={d} />
            </Grid>
        ));

    const showDisciplines = () => {
        if (showAdvantages && hasDisciplines()) {
            return (
                <>
                    <Grid item xs={12}>
                        <Typography sx={sectionStyle}>
                            Discipline
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container>
                            {disciplines()}
                        </Grid>
                    </Grid>
                </>);
        }

        return (<></>);
    };

    const advantages = () =>
        stats?.advantages
            ?.map(d => (
                <Grid key={d.id} item xs={12} sm={6} md={4}>
                    <AttributeStat stat={d} />
                </Grid>
            ));

    const renderAdvantages = () => {
        if (showAdvantages) {
            return (
                <>
                    <Grid item xs={12}>
                        <Typography sx={sectionStyle}>
                            Vantaggi
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container>
                            {advantages()}
                        </Grid>
                    </Grid>
                </>
            );
        }

        return (<></>);
    };

    const renderStatus = () => {
        if (showStatus) {
            return (
                <>
                    <Grid item xs={12}>
                        <Typography sx={sectionStyle}>
                            Status
                        </Typography>
                    </Grid>
                    <CharacterSheetStatusStatsSection sheet={sheet}/>
                </>
            )
        }

        return (<></>);
    };

    const responsiveProperties = {
        xs: 12,
        sm: 6,
        md: 4,
        sx: {
            textAlign: {
                xs: "center",
                sm: "left"
            }
        }
    };

    return (
        <>
            <Grid container>
                {renderAttributes()}
                {renderAbilities()}
                {showDisciplines()}
                {renderAdvantages()}
                {renderStatus()}
            </Grid>
        </>
    );
};

export default CharacterSheetStatsSection;
