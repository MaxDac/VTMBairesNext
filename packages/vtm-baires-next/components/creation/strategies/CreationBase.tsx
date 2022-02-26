import React, {ReactElement, useState} from "react";
import Grid from "@mui/material/Grid";
import AttributeSelectionField from "../controls/AttributeSelectionField";
import Button from "@mui/material/Button";
import {useRelayEnvironment} from "react-relay";
import type {AttributeTypeNames} from "vtm-baires-next-services/graphql-queries/queries/info/AttributesQuery";
import useAttributesQuery from "vtm-baires-next-services/graphql-queries/queries/info/AttributesQuery";
import type {
    CharacterAttributeRequest
} from "vtm-baires-next-services/graphql-queries/mutations/characters/__generated__/AppendAttributesMutation.graphql";
import {useRouter} from "next/router";
import {useCustomSnackbar} from "vtm-baires-next-components";
import {AlertType, useCustomLazyLoadQuery} from "vtm-baires-next-utils";
import {
    getCharacterStageQuery
} from "vtm-baires-next-services/graphql-queries/queries/character/GetCharacterStageQuery";
import {
    GetCharacterStageQuery
} from "vtm-baires-next-services/graphql-queries/queries/character/__generated__/GetCharacterStageQuery.graphql";
import {Routes} from "../../../base/routes";
import appendAttributesMutation
    from "vtm-baires-next-services/graphql-queries/mutations/characters/AppendAttributesMutation";
import {sortAttributes} from "vtm-baires-next-services/graphql-queries/data-utils";
import {translateAttributeSection} from "vtm-baires-next-services/graphql-queries/mappings";

export type CreationBaseProps<TFormAttributes> = {
    characterId: string;
    currentStage: number;
    attributeTypeName: AttributeTypeNames;
    emptyAttributes: TFormAttributes;
    getAttributesToSave: (form: TFormAttributes, attributeSelector: (id: string, label: number) => CharacterAttributeRequest) => Array<CharacterAttributeRequest>;
    children: (getAttributeSelector: (id: string, label: string) => any) => any;
}

function CreationBase<TFormAttributes extends { [key: string]: any }>(props: CreationBaseProps<TFormAttributes>): ReactElement {
    const router = useRouter();
    const environment = useRelayEnvironment();
    const {enqueueSnackbar} = useCustomSnackbar();

    const character = useCustomLazyLoadQuery<GetCharacterStageQuery>(getCharacterStageQuery, {
        id: props.characterId
    }, {fetchPolicy: "network-only"})?.getCharacter;
    const data = useAttributesQuery();

    if (character?.stage != null) {
        if (character.stage > props.currentStage) {
            const key = `creation${props.currentStage + 1}` as keyof typeof Routes;
            const route = Routes[key];
            router.push(route as string);
        }
    }

    const [values, setValues] = useState<any>(props.emptyAttributes);
    const [errors, setErrors] = useState<any>({});

    const selectFields = (): [string, string, string][] => {
        const attrs = data
            ?.filter(({ attributeType: { name } = {} }) => name === props.attributeTypeName)
            ?.sort((a, b) => sortAttributes(props.attributeTypeName)(a, b))
            ?.map(({ id, name, attributeType: { section: group } = {} }) => [translateAttributeSection(group ?? ""), String(id), name] as [string, string, string])
            ?? [];

        return ([["", "", "None"]] as [string, string, string][]).concat(attrs);
    };

    const checkAttributes = (propertyName: string,
                             propertyValue: string,
                             setControlValue: (value: string) => void,
                             setControlError: (error: string) => void) => {
        if (Object.values(values).some(x => x === propertyValue)) {
            setControlValue("");
            setControlError("Attribute already taken");

            setErrors((e: { [key: string]: string }) => {
                e[propertyName] = "Attribute already taken";
                return e;
            });

            setValues((vs: { [key: string]: any }) => {
                vs[propertyName] = "";
                return vs;
            });
        }
        else {
            setControlError("");

            setErrors((e: { [key: string]: string }) => {
                delete e[propertyName];
                return e;
            });

            setValues((vs: { [key: string]: string }) => {
                vs[propertyName] = propertyValue;
                return vs;
            });
        }
    }

    const getAttributeSelector = (fieldName: string, label: string): any =>
        <AttributeSelectionField fieldName={fieldName}
                                 label={label}
                                 value={values[fieldName]}
                                 values={selectFields}
                                 onChange={checkAttributes} />;

    const onSubmit = (_: any) => {
        if (errors && Object.keys(errors).length > 0) {
            return;
        }

        if (Object.values(values).some(v => v === "")) {
            return;
        }

        const generateRequest = (attributeId: string, value: number): CharacterAttributeRequest => ({
            attributeId,
            characterId: String(props.characterId),
            value
        });

        const request: Array<CharacterAttributeRequest> = props.getAttributesToSave(values, generateRequest);

        appendAttributesMutation(environment, request, props.currentStage)
            .then((_: any) => router.push(`Creation${props.currentStage + 1}`))
            .catch(e => enqueueSnackbar({
                type: AlertType.Error,
                graphqlErrors: e,
                message: "There was an error while updating the character."
            }));
    }

    return (
        <div>
            <Grid container>
                {props.children(getAttributeSelector)}
            </Grid>
            <Button type="submit"
                    fullWidth
                    variant="outlined"
                    color="primary"
                    onClick={onSubmit}>
                Continua!
            </Button>
        </div>
    )
}

export default CreationBase;
