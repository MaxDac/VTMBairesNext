import * as React from "react";
import Document, { Html, Head, Main, NextScript } from 'next/document'
import {Stylesheet, resetIds} from "@fluentui/react";

const stylesheet = Stylesheet.getInstance();
//
// function Document(props: any) {
//     return (
//         <Html>
//             <Head>
//                 <meta charSet="utf-8" />
//                 <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
//                 <meta name="theme-color" content="#000000" />
//                 <meta name="description" content="Description" />
//                 <meta name="keywords" content="Keywords" />
//
//                 <link rel="manifest" href="/manifest.json" />
//                 <link
//                     href="/icons/favicon-16x16.png"
//                     rel="icon"
//                     type="image/png"
//                     sizes="16x16"
//                 />
//                 <link
//                     href="/icons/favicon-32x32.png"
//                     rel="icon"
//                     type="image/png"
//                     sizes="32x32"
//                 />
//                 <link rel="apple-touch-icon" href="/apple-icon.png"></link>
//                 <meta name="theme-color" content="#317EFB" />
//
//                 <meta property="og:title" content="VTM: Baires" />
//                 <meta property="og:type" content="application/react-web" />
//                 <meta property="og:url" content="https://vtmbaires.eu" />
//                 <meta property="og:image" content="https://vtmbaires.eu/logo192.png" />
//                 <style type="text/css" dangerouslySetInnerHTML={{ __html: props?.styleTags }} />
//
//                 <script type="text/javascript" dangerouslySetInnerHTML={{ __html: `
//                     window.FabricConfig = window.FabricConfig || {};
//                     window.FabricConfig.serializedStylesheet = ${props?.serializedStylesheet};
//                   ` }} />
//             </Head>
//             <body>
//                 <Main />
//                 <NextScript />
//             </body>
//         </Html>
//     )
// }
//
// Document.getInitialProps = (ctx: any) => {
//     resetIds();
//     return { styleTags: stylesheet.getRules(true), serializedStylesheet: stylesheet.serialize() }
// }
//
// export default Document

export default class CustomDocument extends Document {
    static getInitialProps({renderPage}: any) {
        resetIds();
        const page = renderPage((App: any) => (props: any) => <App {...props} />);
        return { ...page, styleTags: stylesheet.getRules(true), serializedStylesheet: stylesheet.serialize() };
    }

    render() {
        // @ts-ignore
        return (
            <Html>
                <Head>
                    <meta charSet="utf-8" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="theme-color" content="#000000" />
                    <meta name="description" content="Description" />
                    <meta name="keywords" content="Keywords" />

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
                    <style type="text/css" dangerouslySetInnerHTML={{ __html: this.props?.styleTags }} />

                    <script type="text/javascript" dangerouslySetInnerHTML={{ __html: `
                        window.FabricConfig = window.FabricConfig || {};
                        window.FabricConfig.serializedStylesheet = ${this.props?.serializedStylesheet};
                      ` }} />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}