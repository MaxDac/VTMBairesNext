import React from 'react';
import { useEffect } from "react";
import { Box } from '@mui/system';
import Typography from '@mui/material/Typography';
import {useRouter} from "next/router";
import {useRecoilState} from "recoil";
import {sessionStateAtom} from "../../session/atoms/recoil-atoms";
import type {Option} from "vtm-baires-next-utils";
import {Session} from "../../session/types";
import {LoginRoutes, Routes} from "../../base/routes";
import CenteredBox from "../../../vtm-baires-next-components/src/components/CenteredBox";

const SplashScreen = (): JSX.Element => {
    const router = useRouter();
    const [userSession,] = useRecoilState<Option<Session>>(sessionStateAtom);

    useEffect(() => {
        if (userSession?.id != null) {
            router.push(Routes.main);
        }
        else {
            router.push(LoginRoutes.login);
        }
    });

    const handleLogoClick = () => router.push(LoginRoutes.login);

    return (
        <Box onClick={(_: any) => handleLogoClick()}>
            <CenteredBox innerBoxSx={{
                maxWidth: "237px",
                height: "70vh",
                background: `url("/Camarilla.webp") no-repeat`}} isBodyChild={true}>
                <CenteredBox isBodyChild={false}>
                    <Typography sx={{
                        fontFamily: 'DefaultTypewriter',
                        color: "#C92929",
                        fontSize: "24px",
                        textAlign: "center",
                        fontWeight: "bold",
                        textShadow: "2px 2px black, -2px 2px black"
                    }}>
                        Buenos Aires by Night<br />
                        <br />
                        Clicca per accedere
                    </Typography>
                </CenteredBox>
            </CenteredBox>
        </Box>
    )
};

export default SplashScreen;
