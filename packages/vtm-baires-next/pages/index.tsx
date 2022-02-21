import styles from '../styles/Home.module.css'
import {useCustomLazyLoadQuery} from "vtm-baires-next-utils/src/relay-utils";
import {clansQuery} from "vtm-baires-next-services/graphql-queries/queries/info/ClansQuery";
import {ClansQuery} from "vtm-baires-next-services/graphql-queries/queries/info/__generated__/ClansQuery.graphql";
import React from "react";
import {attributesQuery} from "vtm-baires-next-services/graphql-queries/queries/info/AttributesQuery";
import type {
    AttributesQuery
} from "vtm-baires-next-services/graphql-queries/queries/info/__generated__/AttributesQuery.graphql";
import { Dropdown, IDropdownStyles, IDropdownOption } from '@fluentui/react';
import { initializeIcons } from '@fluentui/font-icons-mdl2';

initializeIcons();

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

const Home = () => {

    const values: IDropdownOption[] = [
        { id: "1", key: 1, text: "Clans" },
        { id: "2", key: 2, text: "Attributes" }
    ]

    const dropdownStyles: Partial<IDropdownStyles> = {
        dropdown: { width: 300 },
    };

    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h1 className={styles.title}>
                    Welcome to <a href="https://nextjs.org">Next.js!</a>
                </h1>

                    <Dropdown
                        placeholder="Select an option"
                        label="Basic uncontrolled example"
                        options={values}/>
            </main>

        </div>
    )
}

export default Home