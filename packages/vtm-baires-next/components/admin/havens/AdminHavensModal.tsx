import React, {useRef} from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import type {ReactElement} from "react";
import AdminHavensFormSelector from "./forms/AdminHavensFormSelector";
import type {Haven} from "vtm-baires-next-services/graphql-queries/queries/haven/GetHavensQuery";
import type {Option} from "vtm-baires-next-utils";
import type {
    SetHavenInfoRequest
} from "vtm-baires-next-services/graphql-queries/mutations/havens/__generated__/SetHavenInfoMutation.graphql";
import type {
    SetResonanceZoneRequest
} from "vtm-baires-next-services/graphql-queries/mutations/havens/__generated__/SetResonanceZoneMutation.graphql";
import type {
    SetDangerZoneRequest
} from "vtm-baires-next-services/graphql-queries/mutations/havens/__generated__/SetDangerZoneMutation.graphql";
import {FormSubmitProps} from "./forms/AdminHavensForm";
import {ResonancesFormSubmitProps} from "./forms/AdminHavensResonanceForm";
import {DangerFormSubmitProps} from "./forms/AdminHavensDangerForm";

type Props = {
    haven: Option<Haven>;
    open: boolean;
    handleClose: () => void;
    onSelected: (haven: Option<Haven>, havenCharacterId: string, request: SetHavenInfoRequest) => void;
    onMarkResonance: (haven: Option<Haven>, request: SetResonanceZoneRequest) => void;
    onSetDanger: (haven: Option<Haven>, request: SetDangerZoneRequest) => void;
    havenCharacterId?: string;
};

const AdminHavensModal = ({haven, open, handleClose, onSelected, onMarkResonance, onSetDanger, havenCharacterId}: Props): ReactElement => {
    const triggerButton = useRef<any>();

    const triggerSubmit = (_: any) => triggerButton.current?.click();

    const onSetHavenSubmitted = (formInfo: FormSubmitProps) => {
        onSelected(haven, formInfo.havenCharacterId, {
            resonance: String(formInfo.resonance),
            danger: Number(formInfo.danger),
            difficulty: Number(formInfo.difficulty),
            groundControl: Number(formInfo.groundControl),
            ownerDifficulty: Number(formInfo.ownerDifficulty),
            resourcesLevel: Number(formInfo.resourcesLevel),
        });

        handleClose();
    };

    const onMarkResonanceSubmitted = (formInfo: ResonancesFormSubmitProps) => {
        onMarkResonance(haven, {
            resonance: String(formInfo.resonance),
            power: Number(formInfo.power)
        });

        handleClose();
    };

    const onDangerUpdateSubmitted = (formInfo: DangerFormSubmitProps) => {
        onSetDanger(haven, {
            danger: Number(formInfo.danger),
            range: Number(formInfo.range)
        });

        handleClose();
    };

    if (haven != null) {
        return (
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Modifica rifugio</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Modifica il rifugio selezionato
                    </DialogContentText>
                    <AdminHavensFormSelector haven={haven}
                                             havenCharacterId={havenCharacterId}
                                             onSetHavenSubmitted={onSetHavenSubmitted}
                                             onMarkResonanceSubmitted={onMarkResonanceSubmitted}
                                             onDangerUpdateSubmitted={onDangerUpdateSubmitted}
                                             ref={triggerButton} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Annulla</Button>
                    <Button onClick={triggerSubmit}>Modifica</Button>
                </DialogActions>
            </Dialog>
        );
    }

    return (<></>);
}

export default AdminHavensModal;
