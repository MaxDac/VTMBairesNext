import React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

type Props = {
    contextMenu: any;
    handleClose: () => void;
    onCopyRequested: () => void;
    phraseHasDescription?: boolean;
    onDescriptionRequested?: () => void;
    canDelete?: boolean;
    onDelete?: () => void;
}

const ChatEntryContextMenu = ({
                                  contextMenu,
                                  handleClose,
                                  onCopyRequested,
                                  phraseHasDescription,
                                  onDescriptionRequested,
                                  canDelete,
                                  onDelete
}: Props): any => {
    const onCopyRequestedInternal = () => {
        onCopyRequested();
        handleClose();
    };

    const onDescriptionRequestedInternal = () => {
        if (phraseHasDescription === true && onDescriptionRequested != null) {
            onDescriptionRequested();
        }

        handleClose();
    };

    const onDeleteInternal = () => {
        if (canDelete === true && onDelete != null) {
            onDelete();
        }

        handleClose();
    };

    const showOptions = () => {
        const options = [
            <MenuItem key="copy" onClick={onCopyRequestedInternal}>Copia frase</MenuItem>
        ];

        if (phraseHasDescription === true) {
            options.push(<MenuItem key="desc" onClick={onDescriptionRequestedInternal}>Descrizione Personaggio</MenuItem>);
        }

        if (canDelete === true) {
            options.push(<MenuItem key="delete" onClick={onDeleteInternal}>Cancella Frase</MenuItem>);
        }

        return options;
    };

    return (
        <Menu
            open={contextMenu !== null}
            onClose={handleClose}
            anchorReference="anchorPosition"
            anchorPosition={
                contextMenu !== null
                    ? { top: contextMenu.mouseY, left: contextMenu.mouseX }
                    : undefined
            }
        >
            {showOptions()}
        </Menu>
    );
}

export default ChatEntryContextMenu;
