import React from "react";
import ListItemText from "@mui/material/ListItemText";
import ForumSectionDescription from "./ForumSectionDescription";
import type {ReactElement} from "react";
import type {Option} from "vtm-baires-next-utils";

type Props = {
    title: Option<string>;
    hasNewMessages: Option<boolean>;
    description: Option<string>;
    lastThread: Option<{
        readonly id: string,
        readonly title: Option<string>,
        readonly updatedAt: Option<any>,
    }>
};

const ForumListItemText = ({title, hasNewMessages, description, lastThread}: Props): ReactElement => {
    return (
        <ListItemText primary={title}
                      primaryTypographyProps={{
                          fontFamily: 'DefaultTypewriter',
                          padding: "5px",
                          color: "white",
                          fontSize: "1.2rem"
                      }}
                      secondaryTypographyProps={{
                          component: "div"
                      }}
                      secondary={<ForumSectionDescription newMessages={hasNewMessages}
                                                          description={description}
                                                          lastThreadId={lastThread?.id}
                                                          lastThreadTitle={lastThread?.title}
                                                          lastThreadUpdatedAt={lastThread?.updatedAt} />}
                      sx={{
                          color: "white",
                          fontFamily: 'DefaultTypewriter',
                          fontSize: "24px",
                          padding: "5px"
                      }} />
    );
}

export default ForumListItemText;
