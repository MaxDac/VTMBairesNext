import React, {Suspense, useCallback, useState} from "react";
import CharacterProvider from "../../components/character/data/CharacterProvider";
import type {RefreshedQueryOption} from "../../components/character/sheet-sections/sections/CharacterSheetStatsSection";
import CharacterSheetStatsSection from "../../components/character/sheet-sections/sections/CharacterSheetStatsSection";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import AttributeSwitchControl from "../../components/character/controls/AttributeSwitchControl";
import {useRelayEnvironment} from "react-relay";
import {useTheme} from "@mui/material/styles";
import Button from "@mui/material/Button";
import CharacterFragmentProvider from "../../components/character/data/CharacterFragmentProvider";
import type {Character} from "vtm-baires-next-services/graphql-queries/queries/character/GetCharacterCompleteQuery";
import type {Option} from "vtm-baires-next-utils";
import {AlertType} from "vtm-baires-next-utils";
import {useCustomSnackbar, useDialog, useWait} from "vtm-baires-next-components";
import useAttributesSlimQuery from "vtm-baires-next-services/graphql-queries/queries/info/AttributesSlimQuery";
import {useRouter} from "next/router";
import type {AttributeTypeNames} from "vtm-baires-next-services/graphql-queries/queries/info/AttributesQuery";
import {sortAttributes} from "vtm-baires-next-services/graphql-queries/data-utils";
import switchCharacterAttributeMutation
    from "vtm-baires-next-services/graphql-queries/mutations/characters/SwitchCharacterAttributeMutation";
import FinalizeCharacterMutation
    from "vtm-baires-next-services/graphql-queries/mutations/characters/FinalizeCharacterMutation";
import {Routes} from "../../base/routes";
import DeleteCharacterMutation
    from "vtm-baires-next-services/graphql-queries/mutations/characters/DeleteCharacterMutation";

const Creation5 = (): any => (
    <>
        <Typography>
            Complimenti! Hai inserito tutti i dati del tuo personaggio, adesso la tua scheda &egrave; pronta per poter essere approvata.
        </Typography>
        <Typography>
            Adesso puoi apportare modifiche alla tua scheda, ora che è completa. Puoi scambiare i valori tra attributi e abilit&agrave;.
            Per apportare altre modifiche, contatta un master.
        </Typography>
        <CharacterProvider showWarningWhenNoCharacterSelected={true}>
            { character =>
                <Internal character={character} />
            }
        </CharacterProvider>
    </>
);

const Internal = ({character}: {character: Option<Character>}) => {
    const theme = useTheme();
    const router = useRouter();
    const {enqueueSnackbar} = useCustomSnackbar();
    const {showDialog} = useDialog();
    const {startWait, stopWait} = useWait();
    const environment = useRelayEnvironment();
    const attributes = useAttributesSlimQuery();

    const [refreshedQueryOptions, setRefreshedQueryOptions] = useState<Option<RefreshedQueryOption>>(null);
    
    const refresh = useCallback(() => {
        setRefreshedQueryOptions(previous => ({
            fetchKey: (previous?.fetchKey ?? 0) + 1,
            fetchPolicy: "network-only"
        }));
    }, []);

    const filterAttrs = (type: AttributeTypeNames): Array<[string, string]> => attributes
        ?.filter(a => a?.attributeType?.name === type)
        ?.sort((a, b) => sortAttributes(type)(a, b))
        ?.map(a => [String(a?.id), String(a?.name)]) ?? [];

    const getAttributes = () => filterAttrs("Attribute");

    const getSkills = () => filterAttrs("Ability");

    const switchCharacterAttributes = ({
        characterId: id,
        firstAttribute: first,
        secondAttribute: second
                                       }: any) => {
        startWait();

        switchCharacterAttributeMutation(environment, {
            characterId: id,
            firstAttribute: first,
            secondAttribute: second
        })
            .then((_: any) => {})
            .catch(e => {
                enqueueSnackbar({
                    type: AlertType.Error,
                    graphqlErrors: e,
                    message: "C'e' stato un errore nella gestione della richiesta."
                });
            })
            .finally(() => {
                stopWait();
                refresh();
            });
    }

    const completeCharacter = (characterId: string) => {
        showDialog("Conferma personaggio", "Sei sicuro di voler confermare il personaggio?", () => {
            FinalizeCharacterMutation(environment, characterId)
                .then(_ => {
                    enqueueSnackbar({
                        type: AlertType.Success,
                        message: "Il tuo personaggio è stato creato con successo!"
                    })
                    setTimeout(() => {
                        router.push(Routes.main);
                        setTimeout(() => document.location.reload(), 200);
                    }, 1000);
                })
                .catch(e => {
                    enqueueSnackbar({
                        type: AlertType.Error,
                        graphqlErrors: e,
                        message: "C'è stato un errore durante la finalizzazione del personaggio."
                    })
                });
        });
    }

    const deleteCharacter = (characterId: string) => {
        showDialog("Conferma cancellazione", "Sei sicuro di voler cancellare il personaggio?", () => {
            DeleteCharacterMutation(environment, characterId)
                .then(_ => {
                    enqueueSnackbar({
                        type: AlertType.Success,
                        message: "Il tuo personaggio è stato cancellato!"
                    });
                    router.push(Routes.main);
                    document.location.reload();
                })
                .catch(e => {
                    enqueueSnackbar({
                        type: AlertType.Error,
                        graphqlErrors: e,
                        message: "C'è stato un errore durante la finalizzazione del personaggio."
                    })
                })
        });
    }

    if (character?.id != null) {
        return (
            <>
                <Grid container>
                    <Grid item xs={12} md={6}>
                        <AttributeSwitchControl firstAttributeLabel="Primo Attributo"
                                                secondAttributeLabel="Secondo Attributo"
                                                values={getAttributes()}
                                                characterId={character.id}
                                                onChangeSelected={switchCharacterAttributes} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <AttributeSwitchControl firstAttributeLabel="Prima Abilità"
                                                secondAttributeLabel="Seconda Abilità"
                                                values={getSkills()}
                                                characterId={character.id}
                                                onChangeSelected={switchCharacterAttributes} />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography sx={{padding: theme.spacing(2)}}>
                            Una volta finito, puoi schiacciare il bottone sottostante per confermare il personaggio.
                            Una volta confermato, sar&agrave; sottoposto all'attenzione dei master, che potranno accettare,
                            o proporre correzioni, al tuo personaggio.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sx={{textAlign: "center", margin: "1rem"}}>
                        <Button
                            type="submit"
                            variant="outlined"
                            color="primary"
                            onClick={() => completeCharacter(character.id)}>
                            Conferma il personaggio!
                        </Button>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography sx={{padding: theme.spacing(2)}}>
                            Se non sei soddisfatto, e vuoi cominciare da capo, sentiti libero di cancellare il personaggio.
                            Avrai la possibilit&agrave; di farne un altro cliccando sull'icona personaggio in alto a destra.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sx={{textAlign: "center", margin: "1rem"}}>
                        <Button
                            type="submit"
                            variant="outlined"
                            color="primary"
                            onClick={() => deleteCharacter(character.id)}>
                            Cancella il personaggio
                        </Button>
                    </Grid>
                </Grid>
                <Suspense fallback={"loading..."}>
                    <CharacterFragmentProvider characterId={character.id}
                                               showWarningWhenNoCharacterSelected={true}>
                        { ch =>
                            <CharacterSheetStatsSection characterId={character.id}
                                                        characterQuery={ch}
                                                        queryOptions={refreshedQueryOptions}
                                                        hideAdvantages
                                                        hideStatus />
                        }
                    </CharacterFragmentProvider>
                </Suspense>
            </>
        );
    }
    
    return (<></>);
}

export default Creation5;
