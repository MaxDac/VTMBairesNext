import React, {useEffect, useState} from "react";
import ForumLayout from "../../../../components/forum/layout/ForumLayout";
import Grid from "@mui/material/Grid";
import ForumThreadPage from "../../../../components/forum/ForumThreadPage";
import Pagination from '@mui/material/Pagination';
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import ForumIcon from "@mui/icons-material/Forum";
import HomeIcon from "@mui/icons-material/Home";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {menuIconStyle} from "../../../../components/menu/menu-base-utils";
import {useRelayEnvironment} from "react-relay";
import type {ReactElement} from "react";
import {useRouter} from "next/router";
import {useCustomLazyLoadQuery} from "vtm-baires-next-utils";
import {getForumThreadQuery} from "vtm-baires-next-services/graphql-queries/queries/forum/GetForumThreadQuery";
import type {
    GetForumThreadQuery
} from "vtm-baires-next-services/graphql-queries/queries/forum/__generated__/GetForumThreadQuery.graphql";
import SetForumThreadReadMutation
    from "vtm-baires-next-services/graphql-queries/mutations/forum/SetForumThreadReadMutation";
import useCharacterSession from "../../../../session/hooks/useCharacterSession";
import {Routes} from "../../../../base/routes";
import MainLayout from "../../../../components/layouts/MainLayout";

export const DefaultPageSize = 10;

const Index = (): ReactElement => {
    const environment = useRelayEnvironment();
    const router = useRouter();
    const {threadId} = router.query;

    const thread = useCustomLazyLoadQuery<GetForumThreadQuery>(getForumThreadQuery, {
        forumThreadId: threadId as string
    }, {
        fetchPolicy: "store-and-network"
    })?.getForumThread;

    useEffect(() => {
        // Throw and forget
        SetForumThreadReadMutation(environment, threadId as string)
            .then(r => console.debug("Set Thread read successful", r))
            .catch(e => console.error(e));
    }, [environment, threadId]);

    const [character,] = useCharacterSession();
    const [currentPage, setCurrentPage] = useState(1);

    const pageCount = Math.ceil((thread?.postCount ?? 0) / DefaultPageSize);

    const showThreadPosts = () => (
        <ForumThreadPage threadId={threadId as string}
                         page={currentPage} />
    );

    const onPageChanged = (newPage: number) => {
        setCurrentPage((_: any) => newPage);
    }

    const goToForum = (_: any) => router.push(Routes.forumSections);

    const goToSection = (_: any) => router.push(Routes.forumSection(thread?.forumSection?.id ?? ""));

    const createNew = (_: any) => router.push(Routes.createNewForumPost(threadId as string));

    const forumControls = () => {
        const createNewPost = () => {
            if (thread?.onGame === false || character != null) {
                return (
                    <Tooltip title="Nuovo Post">
                        <IconButton aria-label="Nuovo Post"
                                    onClick={createNew}>
                            <ForumIcon sx={menuIconStyle} />
                        </IconButton>
                    </Tooltip>
                );
            }

            return (<></>);
        };


        return (
            <>
                <Tooltip title="Torna al Forum">
                    <IconButton aria-label="Forum"
                                onClick={goToForum}>
                        <HomeIcon sx={menuIconStyle} />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Torna alla sezione">
                    <IconButton aria-label="Sezione"
                                onClick={goToSection}>
                        <ArrowBackIcon sx={menuIconStyle} />
                    </IconButton>
                </Tooltip>
                {createNewPost()}
            </>
        );
    }

    const paginationControl = () => {
        if (pageCount > 1) {
            return (
                <Grid item xs={12} sx={{
                    textAlign: "right",
                    padding: "20px"
                }}>
                    <Pagination count={pageCount}
                                defaultPage={1}
                                siblingCount={0}
                                onChange={(_, newPage) => onPageChanged(newPage)} />
                </Grid>
            )
        }

        return (<></>);
    };

    return (
        <ForumLayout title={thread?.title ?? "Thread"}
                     description={thread?.description}
                     controls={forumControls()}>
            <Grid container>
                {paginationControl()}
                {showThreadPosts()}
                {paginationControl()}
            </Grid>
        </ForumLayout>
    );
}

Index.getLayout = (page: ReactElement) => (
    <MainLayout>
        {page}
    </MainLayout>
)

export default Index;
