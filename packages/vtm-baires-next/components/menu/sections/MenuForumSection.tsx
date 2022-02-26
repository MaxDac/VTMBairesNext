import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ChatIcon from "@mui/icons-material/Chat";
import {menuIconStyle, MenuSecondaryText} from "../menu-base-utils";
import ListItemText from "@mui/material/ListItemText";
import {useForumHasNewPosts} from "vtm-baires-next-services/graphql-queries/queries/forum/ForumHasNewPostQuery";
import type {ReactElement} from "react";
import {Routes} from "../../../base/routes";

type Props = {
    pushHistory: (href: string) => void;
}

const MenuForumSection = ({pushHistory}: Props): ReactElement => {
    const forumHasNewPosts = useForumHasNewPosts();

    const forumIconStyle =
        forumHasNewPosts
            ? {
                ...menuIconStyle,
                color: "#C31313"
            }
            : menuIconStyle;

    return (
        <ListItem button onClick={(_: any) => pushHistory(Routes.forumSections)}>
            <ListItemIcon>
                <ChatIcon sx={forumIconStyle} />
            </ListItemIcon>
            <ListItemText secondary={<MenuSecondaryText text="Forum" />} />
        </ListItem>
    );
}

export default MenuForumSection;
