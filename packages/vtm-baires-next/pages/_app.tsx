import '../styles/globals.css';
import {ReactElement, ReactNode, Suspense, useState} from "react";
import {AppInitialProps, AppProps} from 'next/app'
import {RelayEnvironmentProvider} from 'react-relay';
import {getCookiesFromRequestHeader, getRelayEnvironment} from "vtm-baires-next-utils";
import {CacheProvider} from "@emotion/react";
import {EmotionCache} from "@emotion/cache";
import createEmotionCache from '../base/createEmotionCache';
import Head from "next/head";
import {CssBaseline, ThemeProvider} from "@mui/material";
import theme from "../base/theme";
import {RecoilRoot} from "recoil";
import {SnackbarProvider} from "notistack";
import ErrorBoundary from "../base/ErrorBoundary";
import {NextPage} from "next";
import {CookiesProvider} from "react-cookie";
import type {Cookies} from "vtm-baires-next-utils";
import Index from "./Main";

const clientSideEmotionCache = createEmotionCache();

type MyAppProps = AppProps & {
    emotionCache?: EmotionCache;
}

type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode;
}

type AppWithPropsWithLayout = MyAppProps & {
    Component: NextPageWithLayout;
}

const App = ({ Component, pageProps, emotionCache = clientSideEmotionCache }: AppWithPropsWithLayout) => {
    return (
        <CacheProvider value={emotionCache}>
            <Head>
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width"
                />
                <title>Buenos Aires by Night</title>
            </Head>
            <RecoilRoot>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <SnackbarProvider maxSnack={3}>
                        <ErrorBoundary>
                            <AppInternal Component={Component} pageProps={pageProps} />
                        </ErrorBoundary>
                    </SnackbarProvider>
                </ThemeProvider>
            </RecoilRoot>
        </CacheProvider>
    )
}

const AppInternal = ({ Component, pageProps }: any) => {
    const [unauthorized, setUnauthorized] = useState(false)

    const onUnauthorized = () => {
        console.error("unauthorized")
        setUnauthorized(true)
    }

    console.debug("is unauthorized?", unauthorized)

    const env = getRelayEnvironment(onUnauthorized, pageProps.cookies)!

    const component = () => {
        const getLayout = Component.getLayout ?? ((page: ReactElement) => page);
        return getLayout(<Component {...pageProps} />);
    }

    return (
        <CookiesProvider>
            <RelayEnvironmentProvider environment={env}>
                <Suspense fallback={"Loading..."}>
                    {component()}
                </Suspense>
            </RelayEnvironmentProvider>
        </CookiesProvider>
    );
}

type ContextProps = {
    ctx: {
        req?: {
            headers?: {
                cookie?: string
            }
        }
    }
}

App.getInitialProps = ({ctx}: ContextProps): AppInitialProps => {
    return {
        pageProps: {
            cookies: getCookiesFromRequestHeader(ctx?.req?.headers?.cookie)
        }
    };
}

export default App
