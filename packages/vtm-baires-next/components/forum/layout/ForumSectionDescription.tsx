import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import {defaultFormatDateAndTime} from "vtm-baires-next-utils";
import type {Option} from "vtm-baires-next-utils";

type ForumSectionDescriptionProps = {
    description: Option<string>;
    newMessages: Option<boolean>;
    lastThreadId: Option<string>;
    lastThreadTitle: Option<string>;
    lastThreadUpdatedAt: Option<string>;
}

const ForumSectionDescription = ({
                                            description,
                                            newMessages,
                                            lastThreadId,
                                            lastThreadTitle,
                                            lastThreadUpdatedAt
                                        }: ForumSectionDescriptionProps): any => (
    <Stack direction="row"
           justifyContent="space-between"
           sx={{width: "calc(100% - 80px)"}}>
        <Typography variant="body2"
                    component="div"
                    sx={{
                        fontFamily: 'DefaultTypewriter',
                        padding: "5px",
                        color: "white"
                    }}>
            {description} {newMessages ? (<b><span style={{color: "#C31313"}}>(Nuovi Messaggi)</span></b>) : (<></>)}
        </Typography>
        { lastThreadId != null
            ? (
                <Typography sx={{
                    fontFamily: 'DefaultTypewriter',
                    padding: "5px",
                    color: "gray"
                }} variant="body2">
                    Ultimo thread: {defaultFormatDateAndTime(lastThreadUpdatedAt)} - {lastThreadTitle}
                </Typography>
            )
            : (<></>)
        }
    </Stack>
);

export default ForumSectionDescription;
