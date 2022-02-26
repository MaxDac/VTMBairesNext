import React from "react";
import type {ReactElement} from "react";
import Avatar from "@mui/material/Avatar";
import {getCharacterAvatarQuery} from "vtm-baires-next-services/graphql-queries/queries/character/GetCharacterAvatarQuery";
import type {ForumAvatarProps} from "./ForumPostOnGame";
import type {Option} from "vtm-baires-next-utils";
import {useCustomLazyLoadQuery} from "vtm-baires-next-utils";
import {
    GetCharacterAvatarQuery
} from "vtm-baires-next-services/graphql-queries/queries/character/__generated__/GetCharacterAvatarQuery.graphql";

type Props = ForumAvatarProps & {
    characterId: string;
    characterName?: Option<string>;
};

const ForumAvatar = ({characterId, characterName, containerStyle}: Props): ReactElement => {
    const avatar = useCustomLazyLoadQuery<GetCharacterAvatarQuery>(getCharacterAvatarQuery, { id: characterId }, {
        fetchPolicy: "store-or-network"
    })?.getCharacterAvatar?.avatar;

    if (avatar != null) {
        return (
            <td style={containerStyle}>
                <Avatar style={{width: "100px", height: "100px"}}
                        src={avatar}
                        alt={`${characterName ?? ""} Avatar`}/>
            </td>
        );
    }

    return (<></>);
};

export default ForumAvatar;
