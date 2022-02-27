import React, {ReactElement} from "react";
import {useState} from "react";
import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Collapse from '@mui/material/Collapse';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import HomeIcon from '@mui/icons-material/Home';
import ListItemText from "@mui/material/ListItemText";
import GavelIcon from '@mui/icons-material/Gavel';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import HelpIcon from '@mui/icons-material/Help';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import AssignmentLateIcon from '@mui/icons-material/AssignmentLate';
import CasinoIcon from '@mui/icons-material/Casino';
import TranslateIcon from '@mui/icons-material/Translate';
import WebIcon from '@mui/icons-material/Web';
import {useRouter} from "next/router";
import {useRecoilValue} from "recoil";
import type {Session} from "../../session/types";
import type {Option} from "vtm-baires-next-utils";
import {sessionStateAtom} from "../../session/atoms/recoil-atoms";
import {GuideRoutes, Routes} from "../../base/routes";
import {menuIconStyle} from "vtm-baires-next-components";

type GuidesMenuProps = {
    onSelected?: () => void;
};

const GuidesMenu = ({onSelected}: GuidesMenuProps): ReactElement => {
    const router = useRouter();
    const user = useRecoilValue<Option<Session>>(sessionStateAtom)
    const [environmentOpen, setEnvironmentOpen] = useState(true);
    const [rulesOpen, setRulesOpen] = useState(false);

    const onMenuItemSelected = (route: string) =>
        () => {
            if (onSelected != null) {
                onSelected();
            }

            router.push(route);
        };

    return (
        <div>
            <Toolbar />
            <Divider />
            <List>
                <ListItem button onClick={onMenuItemSelected(Routes.main)}>
                    <ListItemIcon>
                        {
                            user?.id != null
                                ? (<WebIcon sx={menuIconStyle} />)
                                : (<LockOutlinedIcon sx={menuIconStyle} />)
                        }
                    </ListItemIcon>
                    <ListItemText primary={user?.id != null ? "Torna al sito" : "Torna al Login"} />
                </ListItem>
                <ListItem button onClick={onMenuItemSelected(GuideRoutes.home)}>
                    <ListItemIcon>
                        <HomeIcon sx={menuIconStyle} />
                    </ListItemIcon>
                    <ListItemText primary="Home" />
                </ListItem>
                <ListItem button onClick={onMenuItemSelected(GuideRoutes.generalRules)}>
                    <ListItemIcon>
                        <AssignmentLateIcon sx={menuIconStyle} />
                    </ListItemIcon>
                    <ListItemText primary="Regole generali" />
                </ListItem>
                <ListItem button onClick={onMenuItemSelected(GuideRoutes.roles)}>
                    <ListItemIcon>
                        <GavelIcon sx={menuIconStyle} />
                    </ListItemIcon>
                    <ListItemText primary="Ruoli" />
                </ListItem>
                <ListItem button onClick={(_: any) => {
                    setEnvironmentOpen(p => {
                        setRulesOpen((_: any) => p);
                        return !p;
                    });
                }}>
                    <ListItemIcon>
                        <TheaterComedyIcon sx={menuIconStyle} />
                    </ListItemIcon>
                    <ListItemText primary="Ambientazione" />
                </ListItem>
                <Collapse in={environmentOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button sx={{ pl: 4 }} onClick={onMenuItemSelected(GuideRoutes.introduction)}>
                            <ListItemText primary="Introduzione" />
                        </ListItem>
                        <ListItem button sx={{ pl: 4 }} onClick={onMenuItemSelected(GuideRoutes.glossary)}>
                            <ListItemText primary="Glossario" />
                        </ListItem>
                        <ListItem button sx={{ pl: 4 }} onClick={onMenuItemSelected(GuideRoutes.environment)}>
                            <ListItemText primary="Globale" />
                        </ListItem>
                        <ListItem button sx={{ pl: 4 }} onClick={onMenuItemSelected(GuideRoutes.environmentBaires)}>
                            <ListItemText primary="Buenos Aires" />
                        </ListItem>
                        <ListItem button sx={{ pl: 4 }} onClick={onMenuItemSelected(GuideRoutes.camarilla)}>
                            <ListItemText primary="Camarilla" />
                        </ListItem>
                        <ListItem button sx={{ pl: 4 }} onClick={onMenuItemSelected(GuideRoutes.environmentSects)}>
                            <ListItemText primary="Antagonisti e altre Sette" />
                        </ListItem>
                        <ListItem button sx={{ pl: 4 }} onClick={onMenuItemSelected(GuideRoutes.npcs)}>
                            <ListItemText primary="Cainiti di Buenos Aires" />
                        </ListItem>
                        <ListItem button sx={{ pl: 4 }} onClick={onMenuItemSelected(GuideRoutes.currentSituation)}>
                            <ListItemText primary="Situazione Attuale" />
                        </ListItem>
                    </List>
                </Collapse>
                <ListItem button onClick={(_: any) => {
                    setRulesOpen(p => {
                        setEnvironmentOpen((_: any) => p);
                        return !p
                    });
                }}>
                    <ListItemIcon>
                        <CasinoIcon sx={menuIconStyle} />
                    </ListItemIcon>
                    <ListItemText primary="Meccaniche V5" />
                </ListItem>
                <Collapse in={rulesOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button sx={{ pl: 4 }} onClick={onMenuItemSelected(GuideRoutes.creation)}>
                            <ListItemText primary="Creazione personaggio" />
                        </ListItem>
                        <ListItem button sx={{ pl: 4 }} onClick={onMenuItemSelected(GuideRoutes.clans)}>
                            <ListItemText primary="Clans" />
                        </ListItem>
                        <ListItem button sx={{ pl: 4 }} onClick={onMenuItemSelected(GuideRoutes.attributes)}>
                            <ListItemText primary="Attributi" />
                        </ListItem>
                        <ListItem button sx={{ pl: 4 }} onClick={onMenuItemSelected(GuideRoutes.mechanics)}>
                            <ListItemText primary="Meccaniche" />
                        </ListItem>
                        <ListItem button sx={{ pl: 4 }} onClick={onMenuItemSelected(GuideRoutes.homeRules)}>
                            <ListItemText primary="Stati di Esistenza & Adattamenti" />
                        </ListItem>
                        <ListItem button sx={{ pl: 4 }} onClick={onMenuItemSelected(GuideRoutes.hunt)}>
                            <ListItemText primary="Caccia" />
                        </ListItem>
                        <ListItem button sx={{ pl: 4 }} onClick={onMenuItemSelected(GuideRoutes.experience)}>
                            <ListItemText primary="Gestione dell'Esperienza" />
                        </ListItem>
                    </List>
                </Collapse>
                <Divider />
                <ListItem button onClick={onMenuItemSelected(GuideRoutes.places)}>
                    <ListItemIcon>
                        <LocationCityIcon sx={menuIconStyle} />
                    </ListItemIcon>
                    <ListItemText primary="Luoghi" />
                </ListItem>
                <ListItem button onClick={onMenuItemSelected(GuideRoutes.sayings)}>
                    <ListItemIcon>
                        <TranslateIcon sx={menuIconStyle} />
                    </ListItemIcon>
                    <ListItemText primary="Modi di dire" />
                </ListItem>
                <ListItem button onClick={onMenuItemSelected(GuideRoutes.siteHelp)}>
                    <ListItemIcon>
                        <HelpIcon sx={menuIconStyle} />
                    </ListItemIcon>
                    <ListItemText primary="Help del Sito" />
                </ListItem>
                <ListItem button onClick={onMenuItemSelected(GuideRoutes.faqs)}>
                    <ListItemIcon>
                        <QuestionAnswerIcon sx={menuIconStyle} />
                    </ListItemIcon>
                    <ListItemText primary="FAQ" />
                </ListItem>
                <ListItem button onClick={onMenuItemSelected(GuideRoutes.credits)}>
                    <ListItemIcon>
                        <BookmarkIcon sx={menuIconStyle} />
                    </ListItemIcon>
                    <ListItemText primary="Credits" />
                </ListItem>
                <Divider />
            </List>
        </div>
    );
}

export default GuidesMenu;
