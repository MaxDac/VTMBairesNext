import type {ReactElement} from "react";
import React from "react";
import AdminHavensModal from "../../../components/admin/havens/AdminHavensModal";
import {useRelayEnvironment} from "react-relay";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import {useCustomSnackbar, useDialog} from "vtm-baires-next-components";
import type {Option} from "vtm-baires-next-utils";
import {handleMutation} from "vtm-baires-next-utils";
import {tryCastToOneType} from "vtm-baires-next-utils/src/utils";
import type {Haven} from "vtm-baires-next-services/graphql-queries/queries/haven/GetHavensQuery";
import DeleteHavenCharacterMutation
    from "vtm-baires-next-services/graphql-queries/mutations/havens/DeleteHavenCharacterMutation";
import SetHavenCharacterMutation
    from "vtm-baires-next-services/graphql-queries/mutations/havens/SetHavenCharacterMutation";
import SetHavenInfoMutation from "vtm-baires-next-services/graphql-queries/mutations/havens/SetHavenInfoMutation";
import SetResonanceZoneMutation
    from "vtm-baires-next-services/graphql-queries/mutations/havens/SetResonanceZoneMutation";
import {
    SetResonanceZoneRequest
} from "vtm-baires-next-services/graphql-queries/mutations/havens/__generated__/SetResonanceZoneMutation.graphql";
import ResetResonancesMutation from "vtm-baires-next-services/graphql-queries/mutations/havens/ResetResonancesMutation";
import ResetDangerMutation from "vtm-baires-next-services/graphql-queries/mutations/havens/ResetDangerMutation";
import SetDangerZoneMutation from "vtm-baires-next-services/graphql-queries/mutations/havens/SetDangerZoneMutation";
import type {
    SetDangerZoneRequest
} from "vtm-baires-next-services/graphql-queries/mutations/havens/__generated__/SetDangerZoneMutation.graphql";
import HavenMap from "../../../components/haven/HavenMap";
import type {
    SetHavenInfoRequest
} from "vtm-baires-next-services/graphql-queries/mutations/havens/__generated__/SetHavenInfoMutation.graphql";
import MainLayout from "../../../components/layouts/MainLayout";

const Index = (): ReactElement => {
    const environment = useRelayEnvironment();
    const {showDialog} = useDialog();
    const {enqueueSnackbar} = useCustomSnackbar();

    const [haven, setHaven] = React.useState<Option<Haven>>(null);
    const [fetchKey, setFetchKey] = React.useState(0);
    const [open, setOpen] = React.useState<boolean>(false);

    const onHavenSelected = (h: Haven | string) => {
        const haven = tryCastToOneType<Haven, string>(h);

        if (haven != null) {
            setHaven((_: any) => haven);
            setOpen((_: any) => true);
        }
    };

    const onCharacterSubmitted = (h: Option<Haven>, cId: string, request: SetHavenInfoRequest) => {
        if (h?.id != null) {
            const hId = h.id;

            const [title, message, action] =
                cId == null
                    ? [
                        "Riassegnazione Dominio",
                        "Sei sicuro di voler togliere il Dominio dal personaggio?",
                        () => DeleteHavenCharacterMutation(environment, {
                            havenId: hId
                        })
                    ]
                    : [
                        "Assegnazione Dominio",
                        "Sei sicuro di voler assegnare questa locazione al personaggio selezionato?",
                        () => SetHavenCharacterMutation(environment, {
                            characterId: cId,
                            havenId: hId
                        })
                    ];

            showDialog(title, message,
                () => {
                    handleMutation(
                        () => action()
                            .then((_: any) => SetHavenInfoMutation(environment, hId, request))
                            .finally(() => setFetchKey(p => p + 1)),
                        enqueueSnackbar,
                        {
                            successMessage: "La modifica è stata effettuata con successo."
                        });
                });
        }
    };
    
    const onMarkResonance = (h: Option<Haven>, {resonance, power}: SetResonanceZoneRequest) => {
        if (h?.id != null && resonance != null) {
            const hId = h.id;

            showDialog("Assegnazione Risonanza", `Sei sicuro di voler marcare questa zona con una risonanza ${resonance}?`,
                () => {
                    handleMutation(
                        () => SetResonanceZoneMutation(environment, hId, {
                            resonance: resonance,
                            power: power ?? 3
                        })
                            .finally(() => setFetchKey(p => p + 1)),
                        enqueueSnackbar,
                        {
                            successMessage: "La modifica è stata effettuata con successo."
                        });
                });
        }
    };

    const onResetResonances = (_: any) => {
        showDialog("Resetta Risonanze", `Sei sicuro di voler resettare tutte le risonanze nel Dominio? Questo cancellerà completamente lo stato attuale.`,
            () => {
                handleMutation(
                    () => ResetResonancesMutation(environment)
                        .finally(() => setFetchKey(p => p + 1)),
                    enqueueSnackbar,
                    {
                        successMessage: "La modifica è stata effettuata con successo."
                    });
            });
    };

    const onResetDanger = (_: any) => {
        showDialog("Resetta Pericolosità", `Sei sicuro di voler resettare tutte le pericolosità nel Dominio? Questo cancellerà completamente lo stato attuale.`,
            () => {
                handleMutation(
                    () => ResetDangerMutation(environment)
                        .finally(() => setFetchKey(p => p + 1)),
                    enqueueSnackbar,
                    {
                        successMessage: "La modifica è stata effettuata con successo."
                    });
            });
    };

    const onSetDanger = (h: Option<Haven>, {danger, range}: SetDangerZoneRequest) => {
        if (h?.id != null) {
            const hId = h.id;

            showDialog("Assegnazione Pericolo", `Sei sicuro di voler cambiare il pericolo di questa zona?`,
                () => {
                    handleMutation(
                        () => SetDangerZoneMutation(environment, hId, {
                            danger,
                            range
                        })
                            .finally(() => setFetchKey(p => p + 1)),
                        enqueueSnackbar,
                        {
                            successMessage: "La modifica è stata effettuata con successo."
                        });
                });
        }
    };

    return (
        <Grid container>
            <Grid item xs={12}>
                <h1 style={{
                    fontFamily: 'Disturbed',
                    marginRight: "20px"
                }}>
                    Gestione rifugio
                </h1>
            </Grid>
            <Grid item xs={6}>
                <Box sx={{
                    width: "100%",
                    padding: "1rem",
                    display: "flex",
                    justifyContent: "center"
                }}>
                    <Button variant="outlined" onClick={onResetResonances}>
                        Resetta Risonanze
                    </Button>
                </Box>
            </Grid>
            <Grid item xs={6}>
                <Box sx={{
                    width: "100%",
                    padding: "1rem",
                    display: "flex",
                    justifyContent: "center"
                }}>
                    <Button variant="outlined" onClick={onResetDanger}>
                        Resetta Pericolosit&agrave;
                    </Button>
                </Box>
            </Grid>
            <Grid item xs={12}>
                <AdminHavensModal haven={haven}
                                  open={open}
                                  handleClose={() => setOpen((_: any) => false)}
                                  onSelected={onCharacterSubmitted}
                                  onMarkResonance={onMarkResonance}
                                  onSetDanger={onSetDanger}
                                  havenCharacterId={haven?.character?.id} />
                <HavenMap onSectionSelected={onHavenSelected}
                          fetchKey={fetchKey} />
            </Grid>
        </Grid>
    );
};

Index.getLayout = (page: ReactElement) => (
    <MainLayout>
        {page}
    </MainLayout>
)

export default Index;
