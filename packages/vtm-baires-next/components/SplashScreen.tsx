import React, {ReactElement} from 'react';
import { useEffect } from "react";
import { Box } from '@mui/system';
import Typography from '@mui/material/Typography';
import {useRouter} from "next/router";
import {LoginRoutes, Routes} from "../base/routes";
import useSession from "../session/hooks/useSession";
import {CenteredBox} from "vtm-baires-next-components";

const SplashScreen = (): ReactElement => {
    const [user,] = useSession()
    const router = useRouter()

    useEffect(() => {
        if (user?.id != null) {
            router.push(Routes.main);
        }
        else {
            router.push(LoginRoutes.login);
        }
    });

    const handleLogoClick = () => router.push(LoginRoutes.login);

    return (
        <Box onClick={_ => handleLogoClick()}>
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
