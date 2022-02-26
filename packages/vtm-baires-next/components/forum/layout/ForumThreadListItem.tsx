import React from "react";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteIcon from "@mui/icons-material/Delete";
import Stack from "@mui/material/Stack";
import {useRelayEnvironment} from "react-relay";
import {menuIconStyle} from "../../menu/menu-base-utils";
import ForumListItemText from "./ForumListItemText";
import type {ReactElement} from "react";
import type {Option} from "vtm-baires-next-utils";
import {useRouter} from "next/router";
import useSession from "../../../session/hooks/useSession";
import {useCustomSnackbar, useDialog} from "vtm-baires-next-components";
import {handleMutation} from "vtm-baires-next-utils";
import DeleteThreadMutation from "vtm-baires-next-services/graphql-queries/mutations/forum/DeleteThreadMutation";
import {Routes} from "../../../base/routes";

export type ForumItemProps = {
    item: Option<{
        readonly id: string,
        readonly forumSection: Option<{
            readonly id: string
        }>,
        readonly creatorUser: Option<{
            readonly id: string,
            readonly name: Option<string>,
        }>,
        readonly lastThread?: Option<{
            readonly id: string,
            readonly title: Option<string>,
            readonly updatedAt: Option<any>
        }>,
        readonly hasNewPosts?: Option<boolean>,
        readonly creatorCharacter: Option<{
            readonly id: string,
            readonly name: Option<string>,
        }>,
        readonly title: Option<string>,
        readonly description: Option<string>,
        readonly highlighted: Option<boolean>,
        readonly insertedAt: Option<any>,
        readonly updatedAt: Option<any>,
    }>,
    hasNewPosts?: Option<boolean>;
    onClick: (value: Option<string>) => void;
    onUpdate?: () => void;
}

const ForumThreadListItem = ({item, hasNewPosts, onClick, onUpdate}: ForumItemProps): ReactElement => {
    const router = useRouter();
    const environment = useRelayEnvironment();
    const [user,] = useSession();
    const {enqueueSnackbar} = useCustomSnackbar()
    const {showDialog} = useDialog()

    // Hack
    // This variable controls the navigation flow.
    // When the ListItem element is of type button, it's impossible to select the secondary actions because their
    // events are triggered BEFORE the ListItem click event, this way the route gets messed up as well
    // (Current page -> secondary action -> ListItem button action)
    // By using this variable, I can control the flow: if any of the second action is selected, this variable will be
    // set to *true*, "disabling" in fact the ListItem event!
    // The state was not used because the new value didn't get refreshed between the two different events, and because
    // when the component will be re-rendered, it will have to be equal to false.
    let holdAction = false;

    const isUserMaster = () => user?.role === "MASTER";

    const isUserThreadCreator = () => user?.id != null && item?.creatorUser?.id != null && user.id === item.creatorUser.id;

    const accessThreadEventHandler = (_: any) => {
        if (!holdAction) {
            onClick(item?.id);
        }
    }

    const modifyThread = () => {
        holdAction = true;
        if (item?.id != null && item?.forumSection?.id != null) {
            router.push(Routes.modifyForumThread(item.forumSection.id, item.id));
        }
    };

    const deleteThread = () => {
        holdAction = true;
        if (item?.id != null) {
            const threadId = item.id;

            showDialog(
                "Rimuovi Thread",
                "Sei sicuro di voler rimuovere questo Thread? Tutti i messaggi dentro il Thread saranno anche essi cancellati.",
                () => {
                    handleMutation(() => DeleteThreadMutation(environment, threadId), enqueueSnackbar, {
                        successMessage: "Il Thread è stato cancellato con successo.",
                        onCompleted: onUpdate
                    })
                });
        }
    };

    const actions = () => {
        const modifyAction = () => {
            if (isUserMaster() || isUserThreadCreator()) {
                return (
                    <Box>
                        <Tooltip title="Modifica post">
                            <IconButton aria-label="Modifica"
                                        onClick={(_: any) => modifyThread()}>
                                <BorderColorIcon sx={menuIconStyle} />
                            </IconButton>
                        </Tooltip>
                    </Box>
                );
            }

            return (<></>);
        }

        const deleteAction = () => {
            if (isUserMaster()) {
                return (
                    <Box>
                        <Tooltip title="Rimuovi post">
                            <IconButton aria-label="Rimuovi"
                                        onClick={(_: any) => deleteThread()}>
                                <DeleteIcon sx={menuIconStyle} />
                            </IconButton>
                        </Tooltip>
                    </Box>
                );
            }

            return (<></>);
        };

        return (
            <Stack direction="row">
                {modifyAction()}
                {deleteAction()}
            </Stack>
        );
    };

    const hasNewPostsComplete = () =>
        hasNewPosts != null
            ? hasNewPosts
            : item?.hasNewPosts;

    const listItemSx =
        item?.highlighted === true
            ? {
                border: "1px #C91919 solid"
            }
            : {};

    return (
        <>
            <Divider />
            <ListItem key={item?.id}
                      alignItems="flex-start"
                      dense
                      button
                      sx={listItemSx}
                      onClick={accessThreadEventHandler}
                      secondaryAction={actions()}>
                <ForumListItemText title={item?.title}
                                   hasNewMessages={hasNewPostsComplete()}
                                   description={item?.description}
                                   lastThread={item?.lastThread} />
            </ListItem>
            <Divider />
        </>
    );
}

export default ForumThreadListItem;
