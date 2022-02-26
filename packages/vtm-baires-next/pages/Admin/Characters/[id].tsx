import type {ReactElement} from "react";
import React, {useState} from "react";
import CharacterSheet from "../../../components/character/CharacterSheet";
import Grid from "@mui/material/Grid";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import ApproveCharacterForm from "../../../components/admin/approvation/ApproveCharacterForm";
import ChangeCharacterAttributeForm from "../../../components/admin/characters/forms/ChangeCharacterAttributeForm";
import ChangeCharacterOtherStatsForm from "../../../components/admin/characters/forms/ChangeCharacterOtherStatsForm";
import Paper from "@mui/material/Paper";
import ChangeCharacterNotesForm from "../../../components/admin/characters/forms/ChangeCharacterNotesForm";
import AddCharacterExperienceForm from "../../../components/admin/characters/forms/AddCharacterExperienceForm";
import ChangeCharacterStatusForm from "../../../components/admin/characters/forms/ChangeCharacterStatusForm";
import ResetHuntForm from "../../../components/admin/characters/forms/ResetHuntForm";
import SpendCharacterExperienceForm from "../../../components/admin/characters/forms/SpendCharacterExperienceForm";
import SendMessageToUserOrCharacter from "../../../components/admin/characters/forms/SendMessageToUserOrCharacter";
import SetHuntDifficultyForm from "../../../components/admin/characters/forms/SetHuntDifficultyForm";
import {useRouter} from "next/router";
import {
    useCharacterCompleteQuery
} from "vtm-baires-next-services/graphql-queries/queries/character/GetCharacterCompleteQuery";

const Id = (): ReactElement => {
    const router = useRouter();
    const {id} = router.query;
    const character = useCharacterCompleteQuery(id as string);

    const [showSheet, setShowSheet] = useState(true);
    const [reloadCount, setReloadCount] = useState(0);

    const changeSheetVisible = ({target: {checked}}: any) => {
        setShowSheet((_: any) => checked);
    };

    const onUpdate = () => {
        setReloadCount(p => p + 1);
    }

    const sheet = () => {
        if (showSheet) {
            return (
                <Grid item xs={12} sx={{
                    margin: "5px"
                }}>
                    <Paper elevation={12}>
                        <CharacterSheet id={character?.id}
                                        reload={true}
                                        contained={true}
                                        fetchKey={reloadCount} />
                    </Paper>
                </Grid>
            );
        }

        return (<></>);
    }

    const showDashboard = () => {
        if (character != null) {
            return (
                <Grid container>
                    <Grid item xs={12}>
                        <Paper variant="outlined" sx={{margin: "10px"}}>
                            <ChangeCharacterAttributeForm character={character}
                                                          onUpdate={onUpdate} />
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper variant="outlined" sx={{margin: "10px"}}>
                            <ChangeCharacterOtherStatsForm character={character}
                                                           onUpdate={onUpdate} />
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper variant="outlined" sx={{margin: "10px"}}>
                            <ChangeCharacterStatusForm character={character}
                                                       onUpdate={onUpdate} />
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper variant="outlined" sx={{margin: "10px"}}>
                            <ChangeCharacterNotesForm character={character}
                                                      onUpdate={onUpdate} />
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper variant="outlined" sx={{margin: "10px"}}>
                            <SetHuntDifficultyForm character={character}
                                                   onUpdate={onUpdate} />
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper variant="outlined" sx={{margin: "10px"}}>
                            <AddCharacterExperienceForm character={character}
                                                        onUpdate={onUpdate} />
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper variant="outlined" sx={{margin: "10px"}}>
                            <SpendCharacterExperienceForm character={character}
                                                          onUpdate={onUpdate} />
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper variant="outlined" sx={{margin: "10px"}}>
                            <ResetHuntForm character={character}
                                           onUpdate={onUpdate} />
                        </Paper>
                    </Grid>
                    <ApproveCharacterForm character={character} />
                    <Grid item xs={12}>
                        <Paper variant="outlined" sx={{margin: "10px"}}>
                            <SendMessageToUserOrCharacter character={character} />
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <FormGroup>
                            <FormControlLabel control={<Switch defaultChecked onChange={changeSheetVisible} />}
                                            label="Mostra scheda" />
                        </FormGroup>
                    </Grid>
                    {sheet()}
                </Grid>
            );
        }

        return (<></>);
    }

    return showDashboard();
}

export default Id;
