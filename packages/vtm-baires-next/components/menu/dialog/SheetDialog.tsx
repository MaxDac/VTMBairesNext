import React from "react";
import MovableDialog from "./MovableDialog";
import type {ReactElement} from "react";

const CharacterSheet = React.lazy(() => import('../../character/CharacterSheet'));

type Props = {
    open: boolean;
    handleClose: () => void;
}

const SheetDialog = ({open, handleClose}: Props): ReactElement => {
    return (
        <MovableDialog open={open} handleClose={handleClose}>
            <CharacterSheet contained />
        </MovableDialog>
    );
}

export default SheetDialog;
