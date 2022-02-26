import React, {Suspense} from "react";
import CharacterSheetInfoTab from "./sheet-sections/tabs/CharacterSheetInfoTab";
import CharacterFragmentPublicProviderQuery from "./data/CharacterPublicFragmentProvider";
import Paper from "@mui/material/Paper";
import {CharacterSheetSuspenseFallback} from "./CharacterSheet";
import type {ReactElement} from "react";
import {ResponsiveInnerContainer} from "vtm-baires-next-components";

type Props = {
    id: string;
    reload?: boolean;
    fetchKey?: number;
}

const CharacterSheetPublic = (props: Props): ReactElement => {
    return (
        <CharacterFragmentPublicProviderQuery {...props}>
            { character =>
                <ResponsiveInnerContainer>
                    <Paper variant="outlined" sx={{
                        backgroundColor: "background.paper",
                        padding: "2rem"
                    }}>
                        <Suspense fallback={<CharacterSheetSuspenseFallback />}>
                            <CharacterSheetInfoTab characterQuery={character} />
                        </Suspense>
                    </Paper>
                </ResponsiveInnerContainer>
            }
        </CharacterFragmentPublicProviderQuery>
    );
}

export default CharacterSheetPublic;
