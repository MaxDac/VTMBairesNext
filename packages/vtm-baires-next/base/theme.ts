import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const paletteType = "dark";

// Create a theme instance.
const theme = createTheme({
    palette: {
        mode: paletteType,
        background: {
            paper: "#191919"
        },
        primary: {
            main: "#A0A0A0",
            dark: "#505050",
            light: "#C0C0C0"
        },
        secondary: {
            main: "#580B0B",
            dark: "#380707",
            light: "#9a2828"
        },
        // @ts-ignore
        third: {
            main: "#C9C9C9"
        }
    },
    components: {
        MuiSpeedDial: {
            styleOverrides: {
                fab: {
                    backgroundColor: "#580B0B",
                    color: "white"
                },
                // @ts-ignore
                "fab:hover": {
                    backgroundColor: "#580B0B",
                    color: "white"
                }
            }
        }
    }
});

export default theme;
