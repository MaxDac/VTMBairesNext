import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import CreationBase from "./CreationBase";
import type {ReactElement} from "react";
import useCharacterSession from "../../../session/hooks/useCharacterSession";
import {
    CharacterAttributeRequest
} from "vtm-baires-next-services/graphql-queries/mutations/characters/__generated__/AppendAttributesMutation.graphql";
import {propNotNullRendering} from "vtm-baires-next-components";

const JackOfAllTradesSkillForm = (): ReactElement => {
    const [currentCharacter,] = useCharacterSession();

    const emptyAttributes = {
        skill3: "",
        skill21: "",
        skill22: "",
        skill23: "",
        skill24: "",
        skill25: "",
        skill26: "",
        skill27: "",
        skill28: "",
        skill11: "",
        skill12: "",
        skill13: "",
        skill14: "",
        skill15: "",
        skill16: "",
        skill17: "",
        skill18: "",
        skill19: "",
        skill110: ""
    };

    const getAttributesToSave = (values: any, generateRequest: (id: string, label: number) => CharacterAttributeRequest): Array<CharacterAttributeRequest> => [
        generateRequest(values.skill3, 3),
        generateRequest(values.skill21, 2),
        generateRequest(values.skill22, 2),
        generateRequest(values.skill23, 2),
        generateRequest(values.skill24, 2),
        generateRequest(values.skill25, 2),
        generateRequest(values.skill26, 2),
        generateRequest(values.skill27, 2),
        generateRequest(values.skill28, 2),
        generateRequest(values.skill11, 1),
        generateRequest(values.skill12, 1),
        generateRequest(values.skill13, 1),
        generateRequest(values.skill14, 1),
        generateRequest(values.skill15, 1),
        generateRequest(values.skill16, 1),
        generateRequest(values.skill17, 1),
        generateRequest(values.skill18, 1),
        generateRequest(values.skill19, 1),
        generateRequest(values.skill110, 1)
    ];

    const form = (getAttributeSelector: (id: string, value: string) => ReactElement) =>
        <>
            <Grid item xs={12}>
                <Typography>
                    Scegli una abilit&agrave; di livello 3:
                </Typography>
            </Grid>
            <Grid item xs={12}>
                {getAttributeSelector("skill3", "Abilità a 3")}
            </Grid>
            <Grid item xs={12}>
                <Typography>
                    ... otto di livello 2:
                </Typography>
            </Grid>
            <Grid item xs={12} md={3}>
                {getAttributeSelector("skill21", "Abilità a 2")}
            </Grid>
            <Grid item xs={12} md={3}>
                {getAttributeSelector("skill22", "Abilità a 2")}
            </Grid>
            <Grid item xs={12} md={3}>
                {getAttributeSelector("skill23", "Abilità a 2")}
            </Grid>
            <Grid item xs={12} md={3}>
                {getAttributeSelector("skill24", "Abilità a 2")}
            </Grid>
            <Grid item xs={12} md={3}>
                {getAttributeSelector("skill25", "Abilità a 2")}
            </Grid>
            <Grid item xs={12} md={3}>
                {getAttributeSelector("skill26", "Abilità a 2")}
            </Grid>
            <Grid item xs={12} md={3}>
                {getAttributeSelector("skill27", "Abilità a 2")}
            </Grid>
            <Grid item xs={12} md={3}>
                {getAttributeSelector("skill28", "Abilità a 2")}
            </Grid>
            <Grid item xs={12}>
                <Typography>
                    ... e 10 di livello 1:
                </Typography>
            </Grid>
            <Grid item xs={12} md={2}>
                {getAttributeSelector("skill11", "Abilità a 1")}
            </Grid>
            <Grid item xs={12} md={2}>
                {getAttributeSelector("skill12", "Abilità a 1")}
            </Grid>
            <Grid item xs={12} md={2}>
                {getAttributeSelector("skill13", "Abilità a 1")}
            </Grid>
            <Grid item xs={12} md={2}>
                {getAttributeSelector("skill14", "Abilità a 1")}
            </Grid>
            <Grid item xs={12} md={2}>
                {getAttributeSelector("skill15", "Abilità a 1")}
            </Grid>
            <Grid item xs={12} md={2}>
                {getAttributeSelector("skill16", "Abilità a 1")}
            </Grid>
            <Grid item xs={12} md={3}>
                {getAttributeSelector("skill17", "Abilità a 1")}
            </Grid>
            <Grid item xs={12} md={3}>
                {getAttributeSelector("skill18", "Abilità a 1")}
            </Grid>
            <Grid item xs={12} md={3}>
                {getAttributeSelector("skill19", "Abilità a 1")}
            </Grid>
            <Grid item xs={12} md={3}>
                {getAttributeSelector("skill110", "Abilità a 1")}
            </Grid>
        </>;

    return propNotNullRendering(() => currentCharacter?.id, characterId => (
        <CreationBase characterId={characterId}
                      currentStage={3}
                      attributeTypeName="Ability"
                      emptyAttributes={emptyAttributes}
                      getAttributesToSave={getAttributesToSave}>
            {form}
        </CreationBase>
    ));
}

export default JackOfAllTradesSkillForm;
