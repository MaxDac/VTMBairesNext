import React, {useState} from "react";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import SendMessageToCharacter from "../button-links/SendMessageToCharacter";
import Stack from "@mui/material/Stack";
import ShowCharacterSheet from "../button-links/ShowCharacterSheet";
import ShowCharacterDashboard from "../button-links/ShowCharacterDashboard";
import List from "@mui/material/List";
import {useTheme} from "@mui/material/styles";
import {useMediaQuery} from "@mui/material";
import type {ReactElement} from "react";
import MenuLayout from "../../base/MenuLayout";
import type {Option} from "vtm-baires-next-utils";
import {matchNames} from "vtm-baires-next-utils/src/utils";

type Props = {
    characters: {
        readonly id: string,
        readonly name: Option<string>
    }[];
};

const ShowCharactersComponent = ({characters}: Props): ReactElement => {
    const [filteredCharacter, setFilteredCharacter] = useState(characters);

    const characterLine = ({id, name}: { readonly id: string, readonly name: Option<string> }) => {
        return (
            <Box component="div" key={id}>
                <Divider />
                <ListItem key={id}
                          secondaryAction={<CharacterActions characterId={id} />}>
                    <ListItemText primary={name} />
                </ListItem>
            </Box>
        );
    }

    const showCharacters = () =>
        filteredCharacter.map(characterLine);

    const filter = ({target: {value}}: any) => {
        const filtered = characters.filter(c => matchNames(c.name, value));
        setFilteredCharacter((_: any) => filtered);
    };

    return (
        <Box sx={{
            margin: "0 auto",
            maxWidth: "550px",
            bgcolor: 'background.paper'
        }}>
            <Grid container>
                <Grid item xs={12} sx={{
                    textAlign: "center",
                    padding: "20px"
                }}>
                    <TextField onKeyUp={filter}
                               variant="outlined"
                               label="Filtra" />
                </Grid>
                <Grid item xs={12}>
                    <List sx={{width: "100%"}}>
                        {showCharacters()}
                    </List>
                </Grid>
            </Grid>
        </Box>
    );
}

const CharacterActions = ({characterId}: {characterId: string}) => {
    const theme = useTheme();

    const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

    if (isSmallScreen) {
        return (
            <MenuLayout>
                { onItemSelected =>
                    <>
                        <ShowCharacterSheet characterId={characterId}
                                            onSelected={onItemSelected}
                                            asMenuItem />
                        <SendMessageToCharacter characterId={characterId}
                                                onSelected={onItemSelected}
                                                asMenuItem />
                        <ShowCharacterDashboard characterId={characterId}
                                                onSelected={onItemSelected}
                                                asMenuItem />
                    </>
                }
            </MenuLayout>
        );
    }

    return (
        <Stack direction="row" spacing={0}>
            <SendMessageToCharacter characterId={characterId} />
            <ShowCharacterSheet characterId={characterId} />
            <ShowCharacterDashboard characterId={characterId} />
        </Stack>
    );
}

export default ShowCharactersComponent;
