import React, {useState, useEffect} from "react";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import ListSubheader from "@mui/material/ListSubheader";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import type {ReactElement} from "react";
import type {
    Attribute,
    AttributeSections,
    AttributeTypeNames
} from "vtm-baires-next-services/graphql-queries/queries/info/AttributesQuery";
import useAttributesSlimQuery from "vtm-baires-next-services/graphql-queries/queries/info/AttributesSlimQuery";
import {sortAttributes} from "vtm-baires-next-services/graphql-queries/data-utils";
import {rangeArray} from "vtm-baires-next-utils";
import {SelectChangeEvent} from "@mui/material";
import {useRecoilValue} from "recoil";
import {isUserMasterSelector} from "../../../session/selectors/recoil-selectors";

export type ChatDiceRequest = {
    attributeId: string;
    abilityId: string;
    augmentAttribute?: boolean,
    forDiscipline?: boolean,
    freeThrow: number;
    difficulty: number;
    master: boolean;
};

type ChatThrowDiceInputProps = {
    isOpen: boolean;
    onDialogClosing: () => void;
    onDialogFormSubmit: (request: ChatDiceRequest) => void;
};

const ChatThrowDiceInput = (props: ChatThrowDiceInputProps): ReactElement => {
    const attributes = useAttributesSlimQuery() ?? [];
    const isUserMaster = useRecoilValue<boolean>(isUserMasterSelector);

    const [open, setOpen] = useState(props.isOpen);
    const [masterThrow, setMasterThrow] = useState(false);
    const [forDiscipline, setForDiscipline] = useState(false);
    const [augmentAttribute, setAugmentAttribute] = useState(false);
    const [attribute, setAttribute] = useState("");
    const [skill, setSkill] = useState("");
    const [freeThrow, setFreeThrow] = useState(0);
    const [difficulty, setDifficulty] = useState(2);

    const attributeOrSkillSelected = (): boolean => 
        attribute !== "" || skill !== "";

    const freeThrowLabel = (): string => 
        attributeOrSkillSelected()
            ? "Modificatore"
            : "Tiro libero";

    const freeThrowMinimumAmount = (): number =>
        attributeOrSkillSelected()
            ? -10
            : 0

    const filterAttribute = (name: AttributeTypeNames, section: AttributeSections) =>
        attributes.filter(a =>
            a?.attributeType?.name === name &&
            a?.attributeType?.section === section)
            .sort((a, b) => sortAttributes(name)(a, b));

    const mapAttributeToMenuItem = (a: Attribute) => (<MenuItem key={a?.id} value={a?.id}>{a?.name}</MenuItem>);

    const buildSelectItems = (name: AttributeTypeNames) => {
        const physicals = filterAttribute(name, "Physical")?.map(mapAttributeToMenuItem)
        const socials = filterAttribute(name, "Social")?.map(mapAttributeToMenuItem);
        const mentals = filterAttribute(name, "Mental")?.map(mapAttributeToMenuItem);

        return [<ListSubheader key={1}>Fisici</ListSubheader>]
            .concat(physicals)
            .concat([<ListSubheader key={2}>Sociali</ListSubheader>])
            .concat(socials)
            .concat([<ListSubheader key={3}>Mentali</ListSubheader>])
            .concat(mentals);
    };

    const buildSelectItemsForDiscipline = () =>
        filterAttribute("Discipline", "")?.map(mapAttributeToMenuItem);

    const getSelectItemsForDropdown = (items: JSX.Element[]) =>
        [(<MenuItem key={0} value="">None</MenuItem>)].concat(items);

    const getFirstDropdownItems = () => getSelectItemsForDropdown(buildSelectItems("Attribute"));

    const getSecondDropdownItems = () => {
        const items =
            [<ListSubheader key={2000}>Abilit&agrave;</ListSubheader>]
                .concat(buildSelectItems("Ability"))
                .concat([<ListSubheader key={1000}>Attributi</ListSubheader>])
                .concat(buildSelectItems("Attribute"))
                .concat([<ListSubheader key={2000}>Discipline</ListSubheader>])
                .concat(buildSelectItemsForDiscipline());

        return getSelectItemsForDropdown(items);
    }

    const freeThrowItems = () =>
        rangeArray(freeThrowMinimumAmount(), 10)
            .map(i => <MenuItem key={i} value={i}>{i === 0 ? "None" : String(i)}</MenuItem>);

    const difficultyItems = () =>
        rangeArray(0, 10)
            .map(i => <MenuItem key={i} value={i}>{i === 0 ? "Contrastato" : String(i)}</MenuItem>);

    useEffect(() => {
        setOpen((_: any) => props.isOpen);
    }, [props.isOpen]);

    const onAttributeChanged = ({target: {value}}: SelectChangeEvent<string>) => setAttribute(value);

    const onSkillChanged = ({target: {value}}: SelectChangeEvent<string>) => setSkill(value);

    const onFreeThrowChanged = ({target: {value}}: SelectChangeEvent<string>) => setFreeThrow(Number(value));

    const onDifficultyChanged = ({target: {value}}: SelectChangeEvent<string>) => setDifficulty(Number(value));

    const handleClose = () => {
        setOpen(false);
        props.onDialogClosing();
    };

    const resetForm = () => {
        setAttribute("");
        setSkill("");
        setFreeThrow(0);
        setDifficulty(2);
    };

    const handleThrow = () => {
        const request: ChatDiceRequest = {
            attributeId: attribute,
            abilityId: skill,
            forDiscipline: forDiscipline,
            augmentAttribute: augmentAttribute,
            freeThrow: Number(freeThrow),
            difficulty: Number(difficulty),
            master: masterThrow
        };

        props.onDialogFormSubmit(request);

        resetForm();
        handleClose();
    };

    const masterChecker = () => {
        if (isUserMaster) {
            return (
                <Grid item xs={12}>
                    <FormGroup>
                        <FormControlLabel control={
                            <Checkbox defaultChecked
                                      checked={masterThrow}
                                      onChange={(_: any) => setMasterThrow(p => !p)} />
                        } label="Tiro Master"/>
                    </FormGroup>
                </Grid>
            );
        }

        return <></>;
    };

    const attributeAndSkill = () =>
        !masterThrow
            ? (
                <>
                    <Grid item xs={12} sm={6} sx={{
                        padding: "10px"
                    }}>
                        <FormControl fullWidth>
                            <InputLabel id="attribute-label">Attributo</InputLabel>
                            <Select labelId="attribute-label"
                                    id="attribute"
                                    value={attribute}
                                    label="Attributo"
                                    onChange={onAttributeChanged}>
                                {getFirstDropdownItems()}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6} sx={{
                        padding: "10px"
                    }}>
                        <FormControl fullWidth>
                            <InputLabel id="skill-label">Abilità</InputLabel>
                            <Select labelId="skill-label"
                                    id="skill"
                                    value={skill}
                                    label="Abilità"
                                    onChange={onSkillChanged}>
                                {getSecondDropdownItems()}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6} sx={{
                        padding: "10px"
                    }}>
                        <FormGroup>
                            <FormControlLabel control={
                                <Checkbox defaultChecked
                                          checked={forDiscipline}
                                          onChange={(_: any) => setForDiscipline(p => !p)} />
                            } label="Tiro per Disciplina"/>
                        </FormGroup>
                    </Grid>
                    <Grid item xs={12} sm={6} sx={{
                        padding: "10px"
                    }}>
                        <FormGroup>
                            <FormControlLabel control={
                                <Checkbox defaultChecked
                                          checked={augmentAttribute}
                                          onChange={(_: any) => setAugmentAttribute(p => !p)} />
                            } label="Aumenta Attributo col Sangue"/>
                        </FormGroup>
                    </Grid>
                </>
            )
            : <></>;
    
    const difficultyControl = () =>
        !masterThrow
            ? (
                <Grid item xs={12} sx={{
                    padding: "10px"
                }}>
                    <FormControl fullWidth>
                        <InputLabel id="difficulty-label">Difficoltà</InputLabel>
                        <Select labelId="difficulty-label"
                                id="difficulty"
                                value={String(difficulty)}
                                label="Difficoltà"
                                onChange={onDifficultyChanged}>
                                {difficultyItems()}
                        </Select>
                    </FormControl>
                </Grid>
            )
            : <></>

    return (
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Tira Dadi</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Seleziona un Attributo e un'Abilit&agrave; e il modificatore di ammontare, oppure tira un dado libero.
                </DialogContentText>
                <Grid container>
                    {masterChecker()}
                    {attributeAndSkill()}
                    <Grid item xs={12} sx={{
                        padding: "10px"
                    }}>
                        <FormControl fullWidth>
                            <InputLabel id="free-throw-label">{freeThrowLabel()}</InputLabel>
                            <Select labelId="free-throw-label"
                                id="freeThrow"
                                value={String(freeThrow)}
                                label={freeThrowLabel()}
                                onChange={onFreeThrowChanged}>
                                {freeThrowItems()}
                            </Select>
                        </FormControl>
                    </Grid>
                    {difficultyControl()}
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Chiudi
                </Button>
                <Button onClick={handleThrow} color="primary">
                    Tira Dadi
                </Button>
            </DialogActions>
        </Dialog>);
};

export default ChatThrowDiceInput;