import styles from '../styles/Home.module.css'
import {useCustomLazyLoadQuery} from "vtm-baires-next-utils/src/relay-utils";
import {clansQuery} from "vtm-baires-next-services/graphql-queries/queries/info/ClansQuery";
import {ClansQuery} from "vtm-baires-next-services/graphql-queries/queries/info/__generated__/ClansQuery.graphql";
import React from "react";

export default function Home() {
    const data = useCustomLazyLoadQuery<ClansQuery>(clansQuery, {})?.clans ?? [];

    const showClans = () => {
        const elements: any[] = [];

        for (const clan of data) {
            elements.push(<li key={clan?.id}>{clan?.name}</li>);
        }

        return elements;
    }

    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h1 className={styles.title}>
                    Welcome to <a href="https://nextjs.org">Next.js!</a>
                </h1>

                {showClans()}
            </main>

            <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{' '}
                    <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
                </a>
            </footer>
        </div>
    )
}