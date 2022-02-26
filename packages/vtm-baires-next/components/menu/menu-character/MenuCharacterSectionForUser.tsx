import React from "react";
import MenuCharacterItem from "./MenuCharacterItem";
import CreateNewCharacterMenuItem from "./CreateNewCharacterMenuItem";
import {useUserCharactersQuery} from "vtm-baires-next-services/graphql-queries/queries/accounts/UserCharactersQuery";
import {useMenuCharactersAvatar} from "./MenuCharactersAvatarHook";
import type {ReactElement} from "react";
import {useRouter} from "next/router";
import useCharacterSession from "../../../session/hooks/useCharacterSession";
import {Routes} from "../../../base/routes";

type Props = {
    pushHistory: (href: string) => void;
    reloadCount: number;
    onUpdate: () => void;
}

const MenuCharacterSectionForUser = ({pushHistory, reloadCount, onUpdate}: Props): ReactElement => {
    const router = useRouter();
    const characters = useUserCharactersQuery(reloadCount);
    const charactersWithAvatars = useMenuCharactersAvatar(characters);

    const [,setCurrentCharacter] = useCharacterSession();
    
    const handleSheetSelection = (info: any) =>
        (_: any) => {
            setCurrentCharacter(info);

            if (!info.approved && !info.isComplete) {
                pushHistory(`Creation${info.stage + 1}`);
            }
            else {
                pushHistory(Routes.sheet(info.id));
            }

            onUpdate();
        }

    const showCharacters = () => {
        if (charactersWithAvatars != null && charactersWithAvatars.length > 0) {
            return charactersWithAvatars
                .filter(o => o !== null)
                .map(o => {
                    return (
                        <MenuCharacterItem character={o} 
                                           key={o?.id}
                                           handleSheetSelection={handleSheetSelection} />
                    )
                });
        }

        // return <MenuItem key={"0"} onClick={(_: any) => router.push(Routes.creation1)}>Crea nuovo</MenuItem>;
        return <CreateNewCharacterMenuItem key={0}
                                           onClick={() => router.push(Routes.creation1)} />
    }

    return (
        <>
            {showCharacters()}
        </>
    );
};

export default MenuCharacterSectionForUser;
