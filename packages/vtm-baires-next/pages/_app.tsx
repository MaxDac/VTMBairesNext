import Head from 'next/head'
import '../styles/globals.css'
import { AppProps } from 'next/app'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
      <>
        <Head>
            <meta charSet="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta
                name="viewport"
                content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
            <meta name="theme-color" content="#000000" />
            <meta name="description" content="Description" />
            <meta name="keywords" content="Keywords" />
            <title>Buenos Aires by Night</title>

            <link rel="manifest" href="/manifest.json" />
            <link
                href="/icons/favicon-16x16.png"
                rel="icon"
                type="image/png"
                sizes="16x16"
            />
            <link
                href="/icons/favicon-32x32.png"
                rel="icon"
                type="image/png"
                sizes="32x32"
            />
            <link rel="apple-touch-icon" href="/apple-icon.png"></link>
            <meta name="theme-color" content="#317EFB" />

            <meta property="og:title" content="VTM: Baires" />
            <meta property="og:type" content="application/react-web" />
            <meta property="og:url" content="https://vtmbaires.eu" />
            <meta property="og:image" content="https://vtmbaires.eu/logo192.png" />
        </Head>
        <Component {...pageProps} />
      </>
  )
}