import React, {Suspense} from "react";
import CharacterFragmentProvider from "./data/CharacterFragmentProvider";
import Paper from "@mui/material/Paper";
import {CharacterSheetSuspenseFallback} from "./CharacterSheet";
import Button from "@mui/material/Button";
import CharacterSheetTabs from "./sheet-sections/tabs/CharacterSheetTabs";
import type {ReactElement} from "react";
import {useRouter} from "next/router";
import {useUserCharactersQuery} from "vtm-baires-next-services/graphql-queries/queries/accounts/UserCharactersQuery";
import useSession from "../../session/hooks/useSession";
import {ResponsiveInnerContainer} from "vtm-baires-next-components";
import {Routes} from "../../base/routes";

type Props = {
    id?: string;
    reload?: boolean;
    contained?: boolean;
    fetchKey?: number;
}

const CharacterSheetComplete = (props: Props): ReactElement => {
    const router = useRouter();
    const userCharacters = useUserCharactersQuery();
    const [user,] = useSession();

    const canModify = (character: any) => user?.role === "MASTER" || userCharacters.some(c => c.id === character?.id);

    const modifySheetLink = (character: any) => {
        if (!(props.contained === true) && canModify(character) && character?.id != null) {
            return (
                <div style={{
                    margin: "20px",
                    textAlign: "center"
                }}>
                    <Button variant="outlined" onClick={(_: any) => router.push(Routes.modifySheet(character.id))}>
                        Modifica scheda
                    </Button>
                </div>
            );
        }

        return (<></>);
    };

    return (
        <CharacterFragmentProvider characterId={props.id}
                                   showWarningWhenNoCharacterSelected={true}
                                   reload={props.reload}
                                   fetchKey={props.fetchKey}>
            { character =>
                <ResponsiveInnerContainer>
                    <Paper variant="outlined" sx={{backgroundColor: "background.paper"}}>
                        <Suspense fallback={<CharacterSheetSuspenseFallback />}>
                            {modifySheetLink(character)}
                            <CharacterSheetTabs characterQuery={character} />
                        </Suspense>
                    </Paper>
                </ResponsiveInnerContainer>
            }
        </CharacterFragmentProvider>
    );
}

export default CharacterSheetComplete;
