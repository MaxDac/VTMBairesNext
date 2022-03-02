import Box from '@mui/system/Box';
import React, {ReactElement, useEffect, useState} from 'react';
import Typography from '@mui/material/Typography';
import CenteredBox from "../../../vtm-baires-next-components/src/components/CenteredBox";
import useCheckSession from "../../session/hooks/useCheckSession";
import MainLayout from "../../components/layouts/MainLayout";
import {useMessageSubscription} from "../../base/_hooks/useMessageSubscription";
import {Cookies, getCookiesFromRequestHeader, getRelayEnvironment, useCustomLazyLoadQuery} from "vtm-baires-next-utils";
import {clansQuery} from "vtm-baires-next-services/graphql-queries/queries/info/ClansQuery";
import type {ClansQuery} from "vtm-baires-next-services/graphql-queries/queries/info/__generated__/ClansQuery.graphql";
import {usePreloadedQuery} from "react-relay";

function Index(props: any): ReactElement {
    // const clans = usePreloadedQuery<ClansQuery>(clansQuery, props.preloadedQuery)?.clans ?? []
    // useCheckSession()

    // const numberOfMessages = useMessageSubscription()
    // const clans = useCustomLazyLoadQuery<ClansQuery>(clansQuery, {})?.clans ?? []

    // console.debug("clans", clans)
    //
    // const clanControl = () =>
    //     clans.map(c => (
    //         <li key={c?.id}>{c?.name}</li>
    //     ))

    console.debug("test log")

    return (
        <Box>
            <ul>
                {/*{clanControl()}*/}
            </ul>
        </Box>
    )

    // const [firstPhrase, setFirstPhrase] = useState("")
    // const [secondPhrase, setSecondPhrase] = useState("")
    // const [thirdPhrase, setThirdPhrase] = useState("")
    //
    // useEffect(() => {
    //     const firstLinePhrase = "Buenos Aires by Night";
    //     const secondLinePhrase = "Benvenuto";
    //     const thirdLinePhraseItalian = "È un mondo di Tenebra. Il peccato di Caino ha generato entità maledette che infestano" +
    //         " la notte in cerca di Sangue. I Fratelli sono stati una segreta influenza lungo tutte le ere della storia" +
    //         " umana, complottando l'uno contro l'altro in un'eterna Jihad. La loro progenie immortale è tra noi anche adesso," +
    //         " celata dagli occhi umani da una elaborata... Masquerade..."
    //
    //     const thirdLinePhraseEnglish = "It is a world of Darkness. The sin of Caine has spawned a cursed horror that stalks the night" +
    //         " in search of living blood. The kindreds have long been a secret influence through all ages of human router," +
    //         " plotting against each other in a never-ending Jihad. Their immortal progeny are among us to this day, hidden" +
    //         " from the eyes of humanity, by an elaborate... Masquerade...";
    //
    //     const typeWriteLine = (setter: (setter: (value: string) => string) => void,
    //                            phrase: string,
    //                            caret: number,
    //                            onCompleted?: () => void) => {
    //         if (caret <= phrase.length) {
    //             const newPhrase = phrase.substring(0, caret);
    //             const time = newPhrase.substring(newPhrase.length - 1, newPhrase.length) === "." ? 300 : 150;
    //
    //             setTimeout(() => {
    //                 setter((_: any) => newPhrase);
    //                 typeWriteLine(setter, phrase, caret + 1, onCompleted);
    //             }, time * Math.random());
    //         }
    //         else {
    //             if (onCompleted != null) {
    //                 setTimeout(onCompleted, 1000);
    //             }
    //         }
    //     };
    //
    //     typeWriteLine(setFirstPhrase, firstLinePhrase, 0, () => {
    //         typeWriteLine(setSecondPhrase, secondLinePhrase, 0, () => {
    //             typeWriteLine(setThirdPhrase, Math.random() > 0.5 ? thirdLinePhraseEnglish : thirdLinePhraseItalian, 0);
    //         });
    //     });
    // }, []);
    //
    // return (
    //     <Box sx={{
    //         background: `url("/SplashScreen.webp") no-repeat center`,
    //         backgroundColor: "black",
    //         boxShadow: "-2px -2px #191919",
    //         height: "calc(100% - 70px)",
    //         backgroundSize: "cover"
    //     }}>
    //         <CenteredBox isBodyChild={false} innerBoxSx={{
    //             maxWidth: "500px"
    //         }}>
    //             <Typography sx={{
    //                 fontFamily: 'ThroughTheNight',
    //                 color: "white",
    //                 fontSize: "36px",
    //                 // opacity: 0,
    //                 // animation: "opacityAppear 2s ease-in-out forwards",
    //                 // animationDelay: "1000ms"
    //             }}>
    //                 {firstPhrase}
    //             </Typography>
    //             <Typography sx={{
    //                 fontFamily: 'ThroughTheNight',
    //                 color: "#C92929",
    //                 fontSize: "36px"
    //                 // opacity: 0,
    //                 // animation: "opacityAppear 2s ease-in-out forwards",
    //                 // animationDelay: "3000ms"
    //             }}>
    //                 {secondPhrase}
    //             </Typography>
    //             <Typography sx={{
    //                 fontFamily: 'ThroughTheNight',
    //                 color: "#C9C9C9",
    //                 fontSize: "16px",
    //                 paddingTop: "20px"
    //                 // opacity: 0,
    //                 // animation: "opacityAppear 2s ease-in-out forwards",
    //                 // animationDelay: "3000ms"
    //             }}>
    //                 {thirdPhrase}
    //             </Typography>
    //         </CenteredBox>
    //     </Box>
    // )
}

// Index.getLayout = (page: ReactElement) => (
//     <MainLayout>
//         {page}
//     </MainLayout>
// )

export default Index