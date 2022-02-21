import Head from 'next/head'
import '../styles/globals.css'
import { AppProps } from 'next/app'
import { RelayEnvironmentProvider } from 'react-relay';
import {getEnvironment} from "vtm-baires-next-utils";
import { Suspense } from 'react';import { initializeIcons } from '@fluentui/font-icons-mdl2';

initializeIcons();

export default function MyApp({ Component, pageProps }: AppProps) {
    const env = getEnvironment(() => console.error("UNAUTHORIZED"));
  return (
      <RelayEnvironmentProvider environment={env}>
          <Suspense fallback={"Loading...."}>
              <Head>
                  <meta
                      name="viewport"
                      content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
                  <title>Buenos Aires by Night</title>
              </Head>
              <Component {...pageProps} />
          </Suspense>
      </RelayEnvironmentProvider>
  )
}