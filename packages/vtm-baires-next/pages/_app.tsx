import '../styles/globals.css';
import {ReactElement, ReactNode, Suspense, useEffect} from "react";
import { AppProps } from 'next/app'
import { RelayEnvironmentProvider } from 'react-relay';
import {getEnvironment} from "vtm-baires-next-utils";
import {CacheProvider} from "@emotion/react";
import {EmotionCache} from "@emotion/cache";
import createEmotionCache from '../base/createEmotionCache';
import Head from "next/head";
import {CssBaseline, ThemeProvider} from "@mui/material";
import theme from "../base/theme";
import {RecoilRoot, useRecoilValue} from "recoil";
import {SnackbarProvider} from "notistack";
import ErrorBoundary from "../base/ErrorBoundary";
import {NextPage} from "next";
import useSession from "../session/hooks/useSession";
import {useRouter} from "next/router";
import {isUserMasterSelector} from "../session/selectors/recoil-selectors";
import {Routes} from "../base/routes";

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

export default function App({ Component, pageProps, emotionCache = clientSideEmotionCache }: AppWithPropsWithLayout) {
    const router = useRouter()
    const env = getEnvironment(() => console.error("UNAUTHORIZED"));

    const [user,] = useSession()
    const isUserMaster = useRecoilValue<boolean>(isUserMasterSelector)

    useEffect(() => {
        if (pageProps.protected && user == null) {
            router.push(Routes.sessionExpired)
        }

        if (pageProps.adminProtected && !isUserMaster) {
            router.push(Routes.sessionExpired)
        }
    })

    const component = () => {
        const getLayout = Component.getLayout ?? ((page) => page);
        return getLayout(<Component {...pageProps} />);
    }

    return (
        <CacheProvider value={emotionCache}>
            <Head>
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width"
                />
                <title>Buenos Aires by Night</title>
            </Head>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <SnackbarProvider maxSnack={3}>
                    <ErrorBoundary>
                        <RelayEnvironmentProvider environment={env}>
                            <RecoilRoot>
                                <Suspense fallback={"Loading..."}>
                                    {component()}
                                </Suspense>
                            </RecoilRoot>
                        </RelayEnvironmentProvider>
                    </ErrorBoundary>
                </SnackbarProvider>
            </ThemeProvider>
        </CacheProvider>
    )
}