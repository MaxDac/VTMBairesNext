import React from "react";
import type {ReactElement} from "react";
import Avatar from "@mui/material/Avatar";
import type {ForumAvatarProps} from "./ForumPostOnGame";

const ForumNoAvatar = ({containerStyle}: ForumAvatarProps): ReactElement => {
    return (
        <td style={containerStyle}>
            <Avatar style={{width: "100px", height: "100px"}} />
        </td>
    );
};

export default ForumNoAvatar;
