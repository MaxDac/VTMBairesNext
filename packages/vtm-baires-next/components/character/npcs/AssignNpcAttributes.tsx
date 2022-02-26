import type {ReactElement} from "react";
import React, {useState} from "react";
import Grid from "@mui/material/Grid";
import {useTheme} from "@mui/material/styles";
import AttributeFormControl from "./AttributeFormControl";
import Button from "@mui/material/Button";
import {useRelayEnvironment} from "react-relay";
import {handleMutation, Options} from "vtm-baires-next-utils";
import AssignNpcAttributesMutation
    from "vtm-baires-next-services/graphql-queries/mutations/npcs/AssignNpcAttributesMutation";
import {
    Attribute,
    characterAttributeSorter,
    useCharacterStatsQuery
} from "vtm-baires-next-services/graphql-queries/queries/character/GetCharacterStatsQuery";
import {mainFontFamily, useCustomSnackbar} from "vtm-baires-next-components";

type Props = {
    characterId: string;
}

const AssignNpcAttributes = ({characterId}: Props): ReactElement => {
    const environment = useRelayEnvironment();
    const {enqueueSnackbar} = useCustomSnackbar();
    const theme = useTheme();
    const stats = useCharacterStatsQuery(characterId, {
        fetchPolicy: "network-only"
    })?.attributes ?? [];

    const [savedStats, setSavedStats] = useState<Attribute[]>(stats);

    const subTitleStyle = ({
        ...mainFontFamily,
        textAlign: "center",
        fontSize: theme.spacing(2)
    });

    const titleStyle = ({
        ...subTitleStyle,
        color: "secondary.light",
        fontSize: theme.spacing(3),
        margin: "10px"
    });

    const onAttributeChanged = (a: Attribute) =>
        setSavedStats(p => p?.reduce<Attribute[]>((acc, current) =>
            current.id === a.id
                ? [...acc, a]
                : [...acc, current], []));

    const onSave = () => {
        const attributes = savedStats
            .map(({id, value}) => ({id: Options.getOrElse(id, ""), value: Number(value)}));

        handleMutation(() => AssignNpcAttributesMutation(environment, characterId, {
            attributes: attributes
        }), enqueueSnackbar, {});
    };

    const filterAttributes = (type: "Attribute" | "Ability", section: "Physical" | "Social" | "Mental") => stats
        ?.filter(({type: t, section: s}) => t === type && s === section)
        ?.sort((a, b) => characterAttributeSorter(type)(a, b))
        ?.map(s => (<AttributeFormControl attribute={s}
                                          onChange={onAttributeChanged}
                                          maxValue={5} />));

    return (
        <Grid container>
            <Grid item xs={12} sx={titleStyle}>
                Attributi
            </Grid>
            <Grid item xs={12} md={4}>
                {filterAttributes("Attribute", "Physical")}
            </Grid>
            <Grid item xs={12} md={4}>
                {filterAttributes("Attribute", "Social")}
            </Grid>
            <Grid item xs={12} md={4}>
                {filterAttributes("Attribute", "Mental")}
            </Grid>
            <Grid item xs={12} sx={titleStyle}>
                Abilità
            </Grid>
            <Grid item xs={12} md={4}>
                {filterAttributes("Ability", "Physical")}
            </Grid>
            <Grid item xs={12} md={4}>
                {filterAttributes("Ability", "Social")}
            </Grid>
            <Grid item xs={12} md={4}>
                {filterAttributes("Ability", "Mental")}
            </Grid>
            <Grid item xs={12} sx={{
                textAlign: "center",
                padding: theme.spacing(3)
            }}>
                <Button type="submit"
                        variant="outlined"
                        color="primary"
                        onClick={(_: any) => onSave()}>
                    Salva
                </Button>
            </Grid>
        </Grid>
    );
}

export default AssignNpcAttributes;
