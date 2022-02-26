import React, {ReactElement} from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import GuidesMenu from "../guides/GuidesMenu";
import {menuIconStyle} from "vtm-baires-next-components";

type Props = {
    children: ReactElement;
}

export const drawerWidth = 240;

const GuideLayout = ({children}: Props): JSX.Element => {
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed"
                    sx={{
                        width: { sm: `calc(100% - ${drawerWidth}px)` },
                        ml: { sm: `${drawerWidth}px` },
                    }}>
                <Toolbar>
                    <IconButton color="inherit"
                                aria-label="open drawer"
                                edge="start"
                                onClick={handleDrawerToggle}
                                sx={{
                                    mr: 2,
                                    display: {
                                        sm: 'none'
                                    }
                                }}>
                        <MenuIcon sx={menuIconStyle} />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Guida di Buenos Aires by Night
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}>
                    <GuidesMenu onSelected={handleDrawerToggle} />
                </Drawer>
                <Drawer variant="permanent"
                        sx={{
                            display: { xs: 'none', sm: 'block' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                        open>
                    <GuidesMenu />
                </Drawer>
            </Box>
            <Box component="main" style={{
                padding: "10px",
                paddingTop: "70px"
            }}>
                {children}
            </Box>
        </Box>
    );
}

export default GuideLayout;
