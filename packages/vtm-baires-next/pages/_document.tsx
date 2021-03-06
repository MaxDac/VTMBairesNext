import * as React from 'react';
import Document, {Html, Head, Main, NextScript} from 'next/document';
import type {DocumentContext} from "next/document";
import createEmotionServer from '@emotion/server/create-instance';
import theme from '../base/theme';
import createEmotionCache from '../base/createEmotionCache';

const MyDocument = (props: any) => (
    <Html lang="en">
        <Head>
            <meta charSet="utf-8"/>
            <link rel="icon" href="/favicon.ico"/>
            <meta name="theme-color" content="#000000"/>
            <meta
                name="description"
                content="Vampire the Masquerade - Buenos Aires by Night"
            />
            <link rel="apple-touch-icon" href="/logo192.png"/>
            {/*<link rel="manifest" href="%PUBLIC_URL%/manifest.json"/>*/}

            <meta property="og:title" content="VTM: Baires"/>
            <meta property="og:type" content="application/react-web"/>
            <meta property="og:url" content="https://vtmbaires.eu"/>
            <meta property="og:image" content="https://vtmbaires.eu/logo192.png"/>
            {/* Inject MUI styles first to match with the prepend: true configuration. */}
            {(props as any)?.emotionStyleTags}
        </Head>
        <body>
        <Main />
        <NextScript />
        </body>
    </Html>
);

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with static-site generation (SSG).
MyDocument.getInitialProps = async (ctx: DocumentContext) => {
    // Resolution order
    //
    // On the server:
    // 1. app.getInitialProps
    // 2. page.getInitialProps
    // 3. document.getInitialProps
    // 4. app.render
    // 5. page.render
    // 6. document.render
    //
    // On the server with error:
    // 1. document.getInitialProps
    // 2. app.render
    // 3. page.render
    // 4. document.render
    //
    // On the client
    // 1. app.getInitialProps
    // 2. page.getInitialProps
    // 3. app.render
    // 4. page.render

    const originalRenderPage = ctx.renderPage;

    // You can consider sharing the same emotion cache between all the SSR requests to speed up performance.
    // However, be aware that it can have global side effects.
    const cache = createEmotionCache();
    const { extractCriticalToChunks } = createEmotionServer(cache);

    const muiInitialProps = await Document.getInitialProps(ctx);
    // This is important. It prevents emotion to render invalid HTML.
    // See https://github.com/mui/material-ui/issues/26561#issuecomment-855286153
    const emotionStyles = extractCriticalToChunks(muiInitialProps.html);
    const emotionStyleTags: any = emotionStyles.styles.map((style) => (
        <style
            data-emotion={`${style.key} ${style.ids.join(' ')}`}
            key={style.key}
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: style.css }}
        />
    ));

    ctx.renderPage = () =>
        originalRenderPage({
            enhanceApp: (App: any) => (props: any) => {
                return <App emotionCache={cache} {...props} />;
            }
        });

    return {
        ...muiInitialProps,
        emotionStyleTags: emotionStyleTags,
    };
};

export default MyDocument