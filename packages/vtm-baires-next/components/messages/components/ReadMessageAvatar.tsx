import React from "react";
import Avatar from "@mui/material/Avatar";
import type {ReactElement} from "react";
import {useCustomLazyLoadQuery} from "vtm-baires-next-utils";
import {
    getCharacterChatAvatarQuery
} from "vtm-baires-next-services/graphql-queries/queries/character/GetCharacterChatAvatarQuery";
import type {
    GetCharacterChatAvatarQuery
} from "vtm-baires-next-services/graphql-queries/queries/character/__generated__/GetCharacterChatAvatarQuery.graphql";

type Props = {
    characterId: string;
    avatarStyle: any;
}

const ReadMessageAvatar = ({characterId, avatarStyle}: Props): ReactElement => {
    const chatAvatar = useCustomLazyLoadQuery<GetCharacterChatAvatarQuery>(getCharacterChatAvatarQuery, {
        characterId: characterId
    }, {
        fetchPolicy: "store-or-network"
    })?.getCharacterChatAvatar?.chatAvatar;

    return (
        <Avatar alt="character-avatar"
                src={chatAvatar ?? ""}
                sx={avatarStyle} />
    );
}

export default ReadMessageAvatar;
