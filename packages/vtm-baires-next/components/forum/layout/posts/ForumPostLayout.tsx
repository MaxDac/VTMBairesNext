import type {ReactElement} from "react";
import React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import type {Post} from "vtm-baires-next-services/graphql-queries/queries/forum/GetForumThreadPostsQuery";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import DeletePostMutation from "vtm-baires-next-services/graphql-queries/mutations/forum/DeletePostMutation";
import {useRelayEnvironment} from "react-relay";
import {menuIconStyle} from "../../../menu/menu-base-utils";
import {handleMutation, Option} from "vtm-baires-next-utils";
import {useRouter} from "next/router";
import useSession from "../../../../session/hooks/useSession";
import {useCustomSnackbar, useDialog} from "vtm-baires-next-components";
import {Routes} from "../../../../base/routes";

type Props = {
    threadId: string;
    post: Option<Post>;
    children: any;
    onReload: () => void;
}

const ForumPostLayout = ({threadId, post, children, onReload}: Props): ReactElement => {
    const environment = useRelayEnvironment();
    const router = useRouter();
    const [user,] = useSession();
    const {enqueueSnackbar} = useCustomSnackbar()
    const {showDialog} = useDialog()

    const modifyPost = () =>
        router.push(Routes.modifyForumPost(threadId, post?.id ?? ""));

    const deletePost = () => {
        if (post?.id != null) {
            const postId = post.id;
            showDialog("Cancellazione post", "Sei sicuro di voler cancellare questo post?", () => {
                handleMutation(() => DeletePostMutation(environment, postId), enqueueSnackbar, {
                    successMessage: "Post eliminato con successo",
                    onCompleted: onReload
                })
            });
                
        }
    };

    const userIsMaster = user?.role === "MASTER";

    const isUserOfPost = post?.user?.id != null && user?.id != null && post.user.id === user.id;

    const bottomControls = () => {
        if (userIsMaster || isUserOfPost) {
            return (
                <Grid item xs={12} sx={{
                    textAlign: "right"
                }}>
                    <Stack direction="row"
                           spacing={2}
                           sx={{
                               width: "90px",
                               marginRight: "0.5rem",
                               marginLeft: "auto"
                           }}>
                        <Box>
                            <Tooltip title="Modifica post">
                                <IconButton edge="end"
                                            aria-label="Modifica"
                                            onClick={(_: any) => modifyPost()}>
                                    <BorderColorIcon sx={menuIconStyle} />
                                </IconButton>
                            </Tooltip>
                        </Box>
                        <Box>
                            <Tooltip title="Rimuovi post">
                                <IconButton edge="end"
                                            aria-label="Rimuovi"
                                            onClick={(_: any) => deletePost()}>
                                    <DeleteIcon sx={menuIconStyle} />
                                </IconButton>
                            </Tooltip>
                        </Box>
                    </Stack>
                </Grid>
            );
        }

        return (<></>);
    }

    return (
        <Grid item xs={12}>
            <Paper elevation={10} sx={{
                padding: "5px",
                marginTop: "10px",
                maginBottom: "10px",
                background: "#121212"
            }}>
                <Grid container>
                    <Grid item xs={12}>
                        {children}
                    </Grid>
                    {bottomControls()}
                </Grid>
            </Paper>
        </Grid>
    );
}

export default ForumPostLayout;
