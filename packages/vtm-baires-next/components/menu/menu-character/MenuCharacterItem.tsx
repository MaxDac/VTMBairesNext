import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Avatar from "@mui/material/Avatar";
import ListItemText from "@mui/material/ListItemText";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import type {UserCharacter} from "vtm-baires-next-services/graphql-queries/queries/accounts/UserCharactersQuery";
import {useTheme} from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import {menuIconStyle, menuTextStyle, menuTextStyleHover} from "../menu-base-utils";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import type {ReactElement} from "react";
import useCharacterSession from "../../../session/hooks/useCharacterSession";

type Props = {
    character: UserCharacter;
    handleSheetSelection: (character: UserCharacter) => ((selection: any) => void);
    handleCharacterSelection?: (character: UserCharacter) => ((selection: any) => void);
}

const MenuCharacterItem = ({character, handleSheetSelection, handleCharacterSelection}: Props): ReactElement => {
    const theme = useTheme();
    const [currentCharacter,] = useCharacterSession();

    const MenuCharacterItemMenuSecondaryText = ({hover}: any): any => (
        <Typography component="span" sx={{
            ...(!!hover ? menuTextStyleHover : menuTextStyle),
            cursor: "pointer"
        }} onClick={handleSheetSelection(character)}>
            {character?.name}
        </Typography>
    );

    const actions = () => {
        return handleCharacterSelection != null
            ? (
                <Tooltip title="Seleziona personaggio">
                    <IconButton edge="end"
                                onClick={handleCharacterSelection(character)}
                                aria-label="select">
                        {character?.id != null && currentCharacter?.id != null && character.id === currentCharacter.id
                            ? <RadioButtonCheckedIcon sx={menuIconStyle} />
                            : <RadioButtonUncheckedIcon sx={menuIconStyle} />
                        }
                    </IconButton>
                </Tooltip>
            )
            : (<></>);
    };

    const isButton = handleCharacterSelection == null;

    const onClick = isButton
        ? handleSheetSelection(character)
        : () => {};

    const avatar = () => {
        if (character?.chatAvatar != null) {
            return (
                <Avatar src={character?.chatAvatar} sx={{
                    width: theme.spacing(5),
                    height: theme.spacing(5)
                }} />
            );
        }

        return (<></>);
    }

    return (
        // @ts-ignore
        <ListItem button={isButton ? true : undefined}
                  key={character?.id}
                  onClick={onClick}
                  secondaryAction={actions()}>
            <ListItemIcon>
                {avatar()}
            </ListItemIcon>
            <ListItemText secondary={<MenuCharacterItemMenuSecondaryText />} />
        </ListItem>
    );
}

export default MenuCharacterItem;
