import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {useTheme} from "@mui/material/styles";
import {useMediaQuery} from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import NoCookieBar from "../NoCookieBar";
import LoginFrameLayout from "./LoginFrameLayout";

const gridContainerStyle = {
    height: '100vh',
    backgroundImage: 'url(/login-wallpaper-inverted.webp)',
    backgroundRepeat: 'no-repeat',
    backgroundColor: "black",
    backgroundSize: {
        xs: "cover",
        sm: "auto 100vh"
    },
    backgroundPosition: {
        xs: 'top center',
        sm: 'left top',
    },
    // backgroundBlendMode: "hard-light"
};

export type HomeLayoutProps = {
    title: string;
    icon: any;
}

type LoginLayoutProps = HomeLayoutProps & {
    children: Node;
}

const LoginLayout = (props: LoginLayoutProps): JSX.Element => {
    const theme = useTheme();
    // const classes = useStyles();

    const isPhone = useMediaQuery(theme.breakpoints.down("sm"));

    const loginFrameBackgroundColor = isPhone
        ? "#191919EE"
        // : "linear-gradient(to right, #191919EE, #191919)"
        : "transparent"
    ;

    return (
        <Grid container component="main" sx={gridContainerStyle}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7}>
                <Box sx={{
                    position: "absolute",
                    zIndex: "3",
                    bottom: "2rem",
                    width: "100%"
                }}>
                    <Grid item xs={false} md={12} lg={7}>
                        <Typography sx={{
                            fontFamily: "Disturbed",
                            fontSize: "2rem",
                            color: "#191919",
                            textShadow: "1px 1px black",
                            textAlign: "center",
                            marginLeft: {
                                sm: "5rem",
                                md: "7rem",
                                lg: "9rem"
                            }
                        }}>
                            Buenos Aires by Night
                        </Typography>
                    </Grid>
                </Box>
                <Box sx={{
                    position: "absolute",
                    zIndex: "2",
                    bottom: "1.5rem",
                    width: "100%"
                }}>
                    <Grid item xs={false} md={12} lg={7}>
                        <Typography sx={{
                            fontFamily: "Disturbed",
                            fontSize: "3.5rem",
                            color: "secondary.main",
                            textShadow: "1px 1px #590000",
                            textAlign: "center",
                            marginLeft: {
                                sm: "5rem",
                                md: "7rem",
                                lg: "9rem"
                            }
                        }}>
                            Buenos Aires by Night
                        </Typography>
                    </Grid>
                </Box>
            </Grid>
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square sx={{
                background: loginFrameBackgroundColor,
                overflow: "auto",
                height: "100vh",
                zIndex: "4"
            }}>
                <div style={{
                    margin: theme.spacing(8, 4),
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}>
                    <LoginFrameLayout {...props} />
                </div>
            </Grid>
            <NoCookieBar />
        </Grid>
    );
}

export default LoginLayout;
