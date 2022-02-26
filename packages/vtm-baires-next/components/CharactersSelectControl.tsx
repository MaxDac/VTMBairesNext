import React, {ReactElement, useMemo} from "react";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import type {Option} from "vtm-baires-next-utils";
import {useCustomLazyLoadQuery} from "vtm-baires-next-utils";
import {allCharactersQuery} from "vtm-baires-next-services/graphql-queries/queries/character/AllCharactersQuery";
import type {
    AllCharactersQuery
} from "vtm-baires-next-services/graphql-queries/queries/character/__generated__/AllCharactersQuery.graphql";
import {FormSelectField, PlainSelectField} from "vtm-baires-next-components";
import {orderAlphabetically} from "vtm-baires-next-utils/src/utils";

type Props = {
    label: string;
    fieldName?: string;
    formik?: any;
    onChange?: (value: string) => void;
    value?: string;
    renderValue?: (values: Option<string>[]) => ReactElement;
    sx?: any;
    containerSx?: any;
    multiple?: boolean;
};

const CharactersSelectControl = ({label, fieldName, formik, onChange, value, sx, containerSx, multiple}: Props): ReactElement => {
    const allCharacters = useCustomLazyLoadQuery<AllCharactersQuery>(allCharactersQuery, {})?.charactersList;

    const characterValues = useMemo((): Array<[string, string]> => {
        const values: Array<[string, string]> = allCharacters
            ?.map(v => [v?.id ?? "", v?.name ?? ""] as [string, string])
            ?.sort(([_aId, aName], [_bId, bName]) => orderAlphabetically(aName, bName)) ?? [];

        return ([["", "None"]] as [string, string][]).concat(values);
    }, [allCharacters]);

    const getCharacterValue = (characterId: string) => {
        const [[,name],] = characterValues.filter(([id,]) => characterId === id);
        return name;
    };

    const renderValuesDelegate = () =>
        multiple
            ? (selected: Option<string[]>) => (
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {selected?.map((value) => (
                        <Chip key={value} label={getCharacterValue(value)} />
                    ))}
                </Box>
            )
            : undefined;

    if (formik != null) {
        return (
            <FormSelectField formik={formik}
                             fieldName={fieldName ?? "characterId"}
                             label={label}
                             values={characterValues}
                             renderValue={renderValuesDelegate()}
                             sx={sx}
                             containerSx={containerSx}
                             multiple={multiple} />
        );
    }

    return (
        <CharactersSelectControlInternal label={label}
                                         characterValues={characterValues}
                                         onChange={onChange}
                                         defaultValue={value} />
    );
};

const CharactersSelectControlInternal = ({label, characterValues, onChange, defaultValue}: any): ReactElement => {
    const [value, setValue] = React.useState<string>(defaultValue ?? "");

    const onChangeInternal = (v: string) => {
        setValue((_: any) => v);

        if (onChange != null) {
            onChange(v);
        }
    };

    return (
        <PlainSelectField selectedValue={value}
                          onChange={onChangeInternal}
                          fieldName="characterId"
                          label={label}
                          values={characterValues}/>
    );
}

export default CharactersSelectControl;
