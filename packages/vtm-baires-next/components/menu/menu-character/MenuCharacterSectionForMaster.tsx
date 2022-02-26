import React from "react";
import MenuCharacterItem from "./MenuCharacterItem";
import type { UserCharacter } from "vtm-baires-next-services/graphql-queries/queries/accounts/UserCharactersQuery";
import CreateNewCharacterMenuItem from "./CreateNewCharacterMenuItem";
import type {ReactElement} from "react";
import {useRouter} from "next/router";
import useCharacterSession from "../../../session/hooks/useCharacterSession";
import {Routes} from "../../../base/routes";

type Props = {
    pushHistory: (href: string) => void;
    characters: Array<UserCharacter>;
    onUpdate: () => void;
}

const MenuCharacterSectionForMaster = ({pushHistory, characters, onUpdate}: Props): ReactElement => {
    const router = useRouter();
    const [,setCurrentCharacter] = useCharacterSession();
    
    const handleSheetSelection = (info: UserCharacter) =>
        (_: any) => {
            if (!info.approved && !info.isComplete) {
                pushHistory(`Creation${info.stage + 1}`);
            }
            else {
                pushHistory(Routes.sheet(info.id));
            }
        };

    const handleCharacterSelection = (info: UserCharacter) =>
        (_: any) => {
            setCurrentCharacter({
                id: info.id,
                name: info.name,
                approved: info.approved,
                clan: {
                    name: info.clan?.name
                }
            });

            onUpdate();
        };

    const showCharacters = () => {
        if (characters != null && characters.length > 0) {
            return characters
                .filter(o => o !== null)
                .map(o => (<MenuCharacterItem character={o}
                                              key={o?.id}
                                              handleSheetSelection={handleSheetSelection}
                                              handleCharacterSelection={handleCharacterSelection} />));
        }

        // return <MenuItem key={"0"} onClick={(_: any) => router.push(Routes.creation1)}>Crea nuovo personaggio</MenuItem>;
        return <CreateNewCharacterMenuItem key={0}
                                           onClick={() => router.push(Routes.creation1)} />
    }

    return (
        <>
            {showCharacters()}
        </>
    );
}

export default MenuCharacterSectionForMaster;
