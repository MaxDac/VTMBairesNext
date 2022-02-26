import {useCustomLazyLoadQuery} from "vtm-baires-next-utils";
import {clansQuery} from "vtm-baires-next-services/graphql-queries/queries/info/ClansQuery";
import {ClansQuery} from "vtm-baires-next-services/graphql-queries/queries/info/__generated__/ClansQuery.graphql";
import React, {useState} from "react";
import {attributesQuery} from "vtm-baires-next-services/graphql-queries/queries/info/AttributesQuery";
import type {
    AttributesQuery
} from "vtm-baires-next-services/graphql-queries/queries/info/__generated__/AttributesQuery.graphql";
import {NextPage} from "next";
import {FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";
import type {Option} from "vtm-baires-next-utils";
import Button from "@mui/material/Button";
import {useRouter} from "next/router";
import {LoginRoutes} from "../base/routes";

const ShowAttributes = () => {
    const data = useCustomLazyLoadQuery<AttributesQuery>(attributesQuery, {})?.attributes;

    const showAttributes = () => {
        const elements: any[] = [];

        for (const attribute of Array.from(data ?? []))
        {
            elements.push(<li>{attribute?.name}</li>);
        }

        return elements;
    }

    return (
        <>
            {showAttributes()}
        </>
    )
}

const ShowClans = () => {
    const data = useCustomLazyLoadQuery<ClansQuery>(clansQuery, {})?.clans ?? [];

    const showClans = () => {
        const elements: any[] = [];

        for (const clan of data) {
            elements.push(<li key={clan?.id}>{clan?.name}</li>);
        }

        return elements;
    }

    return (
        <>
            <ul>
                {showClans()}
            </ul>
        </>
    )
}

const IndexPage: NextPage = () => {
    const [age, setAge] = React.useState<Option<string>>('');
    const router = useRouter();

    const handleChange = (event: SelectChangeEvent<Option<string>>) => {
        setAge(event?.target?.value);
    };

    return (
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </Select>
            <Button variant="outlined" onClick={() => router.push(LoginRoutes.login)}>
                Go to Login
            </Button>
        </FormControl>
    );
}

export default IndexPage