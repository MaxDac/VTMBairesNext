import type {ReactElement} from "react";
import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import useCharacterSession from "../../../session/hooks/useCharacterSession";
import CreationBase from "./CreationBase";
import {propNotNullRendering} from "vtm-baires-next-components";
import {
    CharacterAttributeRequest
} from "vtm-baires-next-services/graphql-queries/mutations/characters/__generated__/AppendAttributesMutation.graphql";

type BalancedSkillValues = {
    skill31: string;
    skill32: string;
    skill33: string;
    skill21: string;
    skill22: string;
    skill23: string;
    skill24: string;
    skill25: string;
    skill11: string;
    skill12: string;
    skill13: string;
    skill14: string;
    skill15: string;
    skill16: string;
    skill17: string;
}

const BalancedSkillForm = (): ReactElement => {
    const [currentCharacter,] = useCharacterSession();

    const emptyAttributes: BalancedSkillValues = {
        skill31: "",
        skill32: "",
        skill33: "",
        skill21: "",
        skill22: "",
        skill23: "",
        skill24: "",
        skill25: "",
        skill11: "",
        skill12: "",
        skill13: "",
        skill14: "",
        skill15: "",
        skill16: "",
        skill17: ""
    };

    const getAttributesToSave = (values: any, generateRequest: (id: string, label: number) => CharacterAttributeRequest): Array<CharacterAttributeRequest> => [
        generateRequest(values.skill31, 3),
        generateRequest(values.skill32, 3),
        generateRequest(values.skill33, 3),
        generateRequest(values.skill21, 2),
        generateRequest(values.skill22, 2),
        generateRequest(values.skill23, 2),
        generateRequest(values.skill24, 2),
        generateRequest(values.skill25, 2),
        generateRequest(values.skill11, 1),
        generateRequest(values.skill12, 1),
        generateRequest(values.skill13, 1),
        generateRequest(values.skill14, 1),
        generateRequest(values.skill15, 1),
        generateRequest(values.skill16, 1),
        generateRequest(values.skill17, 1)
    ];

    const form = (getAttributeSelector: (id: string, label: string) => ReactElement) =>
        <>
            <Grid item xs={12}>
                <Typography>
                    Puoi scegliere tre abilit&agrave; di livello 3:
                </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
                {getAttributeSelector("skill31", "Abilit?? a 3")}
            </Grid>
            <Grid item xs={12} sm={4}>
                {getAttributeSelector("skill32", "Abilit?? a 3")}
            </Grid>
            <Grid item xs={12} sm={4}>
                {getAttributeSelector("skill33", "Abilit?? a 3")}
            </Grid>
            <Grid item xs={12}>
                <Typography>
                    ... cinque di livello 2:
                </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
                {getAttributeSelector("skill21", "Abilit?? a 2")}
            </Grid>
            <Grid item xs={12} md={4}>
                {getAttributeSelector("skill22", "Abilit?? a 2")}
            </Grid>
            <Grid item xs={12} md={4}>
                {getAttributeSelector("skill23", "Abilit?? a 2")}
            </Grid>
            <Grid item xs={12} md={6}>
                {getAttributeSelector("skill24", "Abilit?? a 2")}
            </Grid>
            <Grid item xs={12} md={6}>
                {getAttributeSelector("skill25", "Abilit?? a 2")}
            </Grid>
            <Grid item xs={12}>
                <Typography>
                    ... e sette di livello 1:
                </Typography>
            </Grid>
            <Grid item xs={12} md={3}>
                {getAttributeSelector("skill11", "Abilit?? a 1")}
            </Grid>
            <Grid item xs={12} md={3}>
                {getAttributeSelector("skill12", "Abilit?? a 1")}
            </Grid>
            <Grid item xs={12} md={3}>
                {getAttributeSelector("skill13", "Abilit?? a 1")}
            </Grid>
            <Grid item xs={12} md={3}>
                {getAttributeSelector("skill14", "Abilit?? a 1")}
            </Grid>
            <Grid item xs={12} md={4}>
                {getAttributeSelector("skill15", "Abilit?? a 1")}
            </Grid>
            <Grid item xs={12} md={4}>
                {getAttributeSelector("skill16", "Abilit?? a 1")}
            </Grid>
            <Grid item xs={12} md={4}>
                {getAttributeSelector("skill17", "Abilit?? a 1")}
            </Grid>
        </>;

    return propNotNullRendering(() => currentCharacter?.id as string, characterId => (
        <CreationBase characterId={characterId}
                      currentStage={3}
                      attributeTypeName="Ability"
                      emptyAttributes={emptyAttributes}
                      getAttributesToSave={getAttributesToSave}>
            { form }
        </CreationBase>
    ));
}

export default BalancedSkillForm;
