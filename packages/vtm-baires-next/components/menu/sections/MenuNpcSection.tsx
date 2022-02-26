import React, {useState, Suspense} from "react";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import GroupsIcon from '@mui/icons-material/Groups';
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import {Collapse} from "@mui/material";
import List from "@mui/material/List";
import {menuIconStyle, MenuSecondaryText} from "../menu-base-utils";
import type {UserCharacter} from "vtm-baires-next-services/graphql-queries/queries/accounts/UserCharactersQuery";
import MenuNpcSectionItems from "./MenuNpcSectionItems";
import MenuItemSuspenseFallback from "../MenuItemSuspenseFallback";
import type {ReactElement} from "react";
import useCharacterSession from "../../../session/hooks/useCharacterSession";
import {Routes} from "../../../base/routes";

type Props = {
    pushHistory: (href: string) => void;
    reloadCount: number;
    onUpdate: () => void;
};

const MenuNpcSection = ({pushHistory, reloadCount, onUpdate}: Props): ReactElement => {
    const [expand, setExpand] = useState(false);
    const [hasBeenExpanded, setHasBeenExpanded] = useState(false);
    const [,setCurrentCharacter] = useCharacterSession();

    const toggleNpcsSelectionMenuExpansion = (_: any) => {
        setHasBeenExpanded((_: any) => true);
        setExpand(p => !p);
    }
    
    const handleSheetSelection = (info: UserCharacter) =>
        (_: any) => pushHistory(Routes.sheet(info.id));

    const handleCharacterSelection = (info: UserCharacter) =>
        (_: any) => {
            setCurrentCharacter({
                id: info.id,
                name: info.name,
                approved: info.approved,
                clan: {
                    name: info.clan?.name
                }
            });

            onUpdate();
        };

    const sectionItems = () => (
        <Suspense fallback={<MenuItemSuspenseFallback items={3} />}>
            <List component="div" disablePadding>
                {expand
                    ? (<MenuNpcSectionItems reloadCount={reloadCount}
                                            handleSheetSelection={handleSheetSelection}
                                            handleCharacterSelection={handleCharacterSelection} />)
                    : (<></>)
                }
            </List>
        </Suspense>
    )

    const expandedMenu = () =>
        hasBeenExpanded
            ? sectionItems()
            : (<></>);

    return (
        <>
            <ListItem button onClick={toggleNpcsSelectionMenuExpansion}>
                <ListItemIcon>
                    <GroupsIcon sx={menuIconStyle} />
                </ListItemIcon>
                <ListItemText secondary={<MenuSecondaryText text="NPGs" />} />
                {expand ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={expand} timeout="auto">
                {expandedMenu()}
            </Collapse>
        </>
    );
}

export default MenuNpcSection;
