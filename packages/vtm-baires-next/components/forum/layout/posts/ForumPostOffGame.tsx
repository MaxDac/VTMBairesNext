import type {ReactElement} from "react";
import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import type {Post} from "vtm-baires-next-services/graphql-queries/queries/forum/GetForumThreadPostsQuery";
import Box from "@mui/material/Box";
import type {Option} from "vtm-baires-next-utils";
import {defaultFormatDateAndTime} from "vtm-baires-next-utils";
import {mainFontFamily, ParsedText} from "vtm-baires-next-components";

type Props = {
    onGame: boolean;
    post: Option<Post>;
}

const ForumPostOffGame = ({post, onGame}: Props): ReactElement => {
    const style = () => onGame
        ? mainFontFamily
        : {};

    return (
        <Grid container>
            <Grid item xs={12}>
                <Grid container sx={{padding: "3px"}}>
                    <Grid item xs={6}>
                        <Typography component="h1" sx={{
                            ...style(),
                            fontSize: "1.5rem",
                            fontVariant: "small-caps"
                        }}>
                            {post?.user?.name ?? "Utente cancellato"}
                        </Typography>
                    </Grid>
                    <Grid item xs={6} sx={{
                        textAlign: "right",
                        display: "inline-flex"
                    }}>
                        <div style={{
                            marginTop: "auto",
                            textAlign: "right",
                            width: "100%",
                            fontSize: "13px"
                        }}>
                            {defaultFormatDateAndTime(post?.insertedAt)}
                        </div>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Box component="div">
                    <ParsedText text={post?.text} useNaturalNewLine sx={{
                        ...style(),
                        padding: "10px"
                    }} />
                </Box>
            </Grid>
        </Grid>
    );
}

export default ForumPostOffGame;
