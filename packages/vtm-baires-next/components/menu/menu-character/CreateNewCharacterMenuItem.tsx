import React from "react";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import {menuIconStyle, MenuSecondaryText} from "../menu-base-utils";
import type {ReactElement} from "react";

type Props = {
    onClick: () => void;
}

const CreateNewCharacterMenuItem = ({onClick}: Props): ReactElement => {
    return (
        <ListItem button onClick={onClick}>
            <ListItemIcon>
                <PersonAddIcon sx={menuIconStyle} />
            </ListItemIcon>
            <ListItemText secondary={<MenuSecondaryText text="Crea Personaggio" />} />
        </ListItem>
    );
}

export default CreateNewCharacterMenuItem;
