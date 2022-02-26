import * as React from "react";
import {createContext, useContext, useState} from "react";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from "@mui/material/Button";
import {ComponentWithChildrenProps} from "../index";
import type {Option} from "vtm-baires-next-utils";

export type ShowDialogContextProps = {
    showDialog: (
        title: string,
        text: string,
        onOk: Option<() => void>,
        onCancel?: Option<() => void>
    ) => void
}

export const ShowDialogContext: React.Context<ShowDialogContextProps> = createContext({
    showDialog: (_title, _text, _onOk, _onCancel) => {}
});

export const useDialog = (): ShowDialogContextProps =>
    useContext(ShowDialogContext);

const DialogProvider = ({children}: ComponentWithChildrenProps): JSX.Element => {
    const [dialogOpen, setDialogOpen] = useState(false);
    const [dialogTitle, setDialogTitle] = useState("");
    const [dialogText, setDialogText] = useState("");
    const [dialogOkAction, setDialogOkAction] = useState<() => void>(() => {});
    const [dialogCancelAction, setDialogCancelAction] = useState<() => void>(() => {});

    const handleDialogOpen = (
        title: string,
        text: string,
        onOk: Option<() => void>,
        onCancel: Option<() => void>
    ) => {
        setDialogTitle(title);
        setDialogText(text);
        setDialogOkAction((_: any) => onOk ?? (() => {}));
        setDialogCancelAction((_: any) => onCancel ?? (() => {}));
        setDialogOpen(true);
    }

    const handleDialogClose = () => {
        setDialogOpen(false);
    }

    const onDialogOkClick = () => {
        if (dialogOkAction) {
            dialogOkAction();
        }

        setDialogOpen(false);
    }

    const onDialogCancelClick = () => {
        if (dialogCancelAction) {
            dialogCancelAction();
        }

        setDialogOpen(false);
    }

    return (
        <>
            <Dialog open={dialogOpen}
                onClose={handleDialogClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description">
                <DialogTitle id="alert-dialog-title">{dialogTitle}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {dialogText}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={onDialogCancelClick}>
                        No
                    </Button>
                    <Button onClick={onDialogOkClick} autoFocus>
                        Ok
                    </Button>
                </DialogActions>
            </Dialog>
            <ShowDialogContext.Provider value={{
                showDialog: handleDialogOpen
            }}>
                {children}
            </ShowDialogContext.Provider>
        </>
    );
};

export default DialogProvider;
