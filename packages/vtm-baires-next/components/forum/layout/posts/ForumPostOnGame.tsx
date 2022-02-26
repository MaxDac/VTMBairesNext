import type {ReactElement} from "react";
import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import type {Post} from "vtm-baires-next-services/graphql-queries/queries/forum/GetForumThreadPostsQuery";
import {useMediaQuery} from "@mui/material";
import {useTheme} from "@mui/material/styles";
import ForumChatAvatar from "./ForumChatAvatar";
import ForumAvatar from "./ForumAvatar";
import ForumNoAvatar from "./ForumNoAvatar";
import type {Option} from "vtm-baires-next-utils";
import {defaultFormatDateAndTime} from "vtm-baires-next-utils";
import {ParsedText, mainFontFamily} from "vtm-baires-next-components";

type Props = {
    post: Option<Post>;
    onGame: boolean;
};

export type ForumAvatarProps = {
    containerStyle: any;
};

const ForumPostOnGame = ({post, onGame}: Props): ReactElement => {
    const theme = useTheme();
    const style = () => onGame
        ? mainFontFamily
        : {};

    const showChatAvatar = useMediaQuery(theme.breakpoints.down('md'));

    const avatarStyle = {
        width: "120px",
        verticalAlign: "top",
        paddingTop: "3rem"
    };

    const avatarControl = () =>
        post?.character?.id != null
            ? (showChatAvatar
                ? (<ForumChatAvatar characterId={post.character.id}
                                    characterName={post?.character?.name}
                                    containerStyle={avatarStyle} />)
                : (<ForumAvatar characterId={post.character.id}
                                characterName={post?.character?.name}
                                containerStyle={avatarStyle} />))
            : (<ForumNoAvatar containerStyle={avatarStyle} />);

    return (
        <Box>
            <table>
                <tbody>
                    <tr>
                        {avatarControl()}
                        <td valign="top" style={{width: "100%"}}>
                            <Grid container>
                                <Grid item xs={6}>
                                    <Typography style={{
                                        ...style(),
                                        color: "#C92929"
                                    }}>
                                        {post?.character?.name ?? "Personaggio Rimosso"}
                                    </Typography>
                                </Grid>
                                <Grid item component="div" xs={6} sx={{
                                    fontSize: "13px",
                                    display: "inline-flex"
                                }}>
                                    <div style={{
                                        textAlign: "right",
                                        marginTop: "auto",
                                        width: "100%"
                                    }}>
                                        {defaultFormatDateAndTime(post?.insertedAt)}
                                    </div>
                                </Grid>
                                <Grid item xs={12}>
                                    <Box component="div" sx={{
                                        minHeight: "90px",
                                        padding: "10px"
                                    }}>
                                        <ParsedText text={post?.text} useNaturalNewLine sx={style()} />
                                    </Box>
                                </Grid>
                            </Grid>
                        </td>
                    </tr>    
                </tbody>                
            </table>
        </Box>
    );
};

export default ForumPostOnGame;
