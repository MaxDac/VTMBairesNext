import React from "react";
import {useNpcsQuery} from "vtm-baires-next-services/graphql-queries/queries/npcs/GetAllNpcsQuery";
import {useMenuCharactersAvatar} from "../menu-character/MenuCharactersAvatarHook";
import type {UserCharacter} from "vtm-baires-next-services/graphql-queries/queries/accounts/UserCharactersQuery";
import MenuCharacterItem from "../menu-character/MenuCharacterItem";
import MenuItem from "@mui/material/MenuItem";
import type {ReactElement} from "react";
import {useRouter} from "next/router";
import {Routes} from "../../../base/routes";

type Props = {
    reloadCount: number;
    handleSheetSelection: (character: UserCharacter) => ((selection: any) => void);
    handleCharacterSelection?: (character: UserCharacter) => ((selection: any) => void);
}

const MenuNpcSectionItems = ({reloadCount, handleSheetSelection, handleCharacterSelection}: Props): ReactElement => {
    const router = useRouter();
    const npcs = useNpcsQuery(reloadCount);
    const npcsWithAvatar = useMenuCharactersAvatar(npcs);

    const showNpcs = () => {
        const rows = [];

        if (npcsWithAvatar != null && npcsWithAvatar.length > 0) {
            rows.push(
                npcsWithAvatar
                    .filter(o => o !== null)
                    .map(o => {
                        const c: UserCharacter = {
                            id: o?.id,
                            name: o?.name ?? "",
                            stage: 5,
                            approved: true,
                            isComplete: true,
                            chatAvatar: o?.chatAvatar,
                            clan: {
                                name: o?.clan?.name ?? ""
                            }
                        };

                        return c;
                    })
                    .map(o => (
                        <MenuCharacterItem character={o}
                                           key={o?.id}
                                           handleSheetSelection={handleSheetSelection}
                                           handleCharacterSelection={handleCharacterSelection} />
                    ))
            );
        }

        rows.push(<MenuItem key={"0"} onClick={(_: any) => router.push(Routes.createNewNpc)}>Crea nuovo personaggio</MenuItem>);
        return rows;
    };

    return (
        <>
            {showNpcs()}
        </>
    )
};

export default MenuNpcSectionItems;
