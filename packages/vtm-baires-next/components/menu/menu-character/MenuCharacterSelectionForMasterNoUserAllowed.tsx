import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import {menuTextStyle, menuTextStyleHover} from "../menu-base-utils";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import {useTheme} from "@mui/material/styles";
import {MenuCharacter, useMenuCharactersAvatar} from "./MenuCharactersAvatarHook";
import type {ReactElement} from "react";
import type {Option} from "vtm-baires-next-utils";
import {Routes} from "../../../base/routes";
import useCharacterSession from "../../../session/hooks/useCharacterSession";

type Props = {
    pushHistory: (href: string) => void;
};

type InternalProps = Props & {
    character: {
        id: string;
        name: Option<string>;
    }
};

const Internal = ({pushHistory, character: {id: characterId, name: characterName}}: InternalProps) => {
    const theme = useTheme();
    const [characterWithAvatar,] = useMenuCharactersAvatar<MenuCharacter>([{id: characterId}]);

    const onSheetSelected = () => pushHistory(Routes.sheet(characterId));

    const MenuCharacterItemMenuSecondaryText = ({hover}: any): any => (
        <Typography component="span" sx={{
            ...(!!hover ? menuTextStyleHover : menuTextStyle),
            cursor: "pointer"
        }} onClick={onSheetSelected}>
            {characterName}
        </Typography>
    );

    return (
        <ListItem key={characterId}
                  button
                  onClick={onSheetSelected}>
            <ListItemIcon>
                <Avatar src={characterWithAvatar?.chatAvatar ?? ""} sx={{
                    width: theme.spacing(5),
                    height: theme.spacing(5)
                }} />
            </ListItemIcon>
            <ListItemText secondary={<MenuCharacterItemMenuSecondaryText />} />
        </ListItem>
    );
}

const MenuCharacterSelectionForMasterNoUserAllowed = ({pushHistory}: Props): ReactElement => {
    const [character,] = useCharacterSession();

    if (character?.id != null) {
        return (<Internal pushHistory={pushHistory} character={{
            id: character.id,
            name: character.name
        }} />);
    }

    return (<></>);
};

export default MenuCharacterSelectionForMasterNoUserAllowed;
