import React from "react";
import type {ReactElement} from "react";
import {getCharacterChatAvatarQuery} from "vtm-baires-next-services/graphql-queries/queries/character/GetCharacterChatAvatarQuery";
import Avatar from "@mui/material/Avatar";
import type {ForumAvatarProps} from "./ForumPostOnGame";
import type {Option} from "vtm-baires-next-utils";
import {useCustomLazyLoadQuery} from "vtm-baires-next-utils";
import {
    GetCharacterChatAvatarQuery
} from "vtm-baires-next-services/graphql-queries/queries/character/__generated__/GetCharacterChatAvatarQuery.graphql";

type Props = ForumAvatarProps & {
    characterId: string;
    characterName?: Option<string>;
}

const ForumChatAvatar = ({characterId, characterName, containerStyle}: Props): ReactElement => {
    const avatar = useCustomLazyLoadQuery<GetCharacterChatAvatarQuery>(getCharacterChatAvatarQuery, {
        characterId: characterId
    }, {
        fetchPolicy: "store-or-network"
    })?.getCharacterChatAvatar?.chatAvatar;

    if (avatar != null) {
        return (
            <td style={containerStyle}>
                <Avatar src={avatar}
                        sx={{width: "50px", height: "50px"}}
                        alt={`${characterName ?? ""} Avatar`}/>
            </td>
        );
    }

    return (<></>);
};

export default ForumChatAvatar;
