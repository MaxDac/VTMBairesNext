import type {ReactElement} from "react";
import React, {useState} from "react";
import ForumLayout from "../../../components/forum/layout/ForumLayout";
import ForumThreadListItem from "../../../components/forum/layout/ForumThreadListItem";
import Grid from "@mui/material/Grid";
import Pagination from "@mui/material/Pagination";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import ForumIcon from "@mui/icons-material/Forum";
import HomeIcon from '@mui/icons-material/Home';
import {menuIconStyle} from "../../../components/menu/menu-base-utils";
import {useRouter} from "next/router";
import useCharacterSession from "../../../session/hooks/useCharacterSession";
import useForumSections from "vtm-baires-next-services/graphql-queries/queries/forum/GetForumSectionsQuery";
import type {Option} from "vtm-baires-next-utils";
import {useCustomLazyLoadQuery} from "vtm-baires-next-utils";
import {getForumThreadsQuery} from "vtm-baires-next-services/graphql-queries/queries/forum/GetForumThreadsQuery";
import {
    GetForumThreadsQuery
} from "vtm-baires-next-services/graphql-queries/queries/forum/__generated__/GetForumThreadsQuery.graphql";
import {Routes} from "../../../base/routes";

export const DefaultPageSize = 10;

const Index = (): ReactElement => {
    const router = useRouter();
    const {sectionId} = router.query

    const [character,] = useCharacterSession();
    const [currentPage, setCurrentPage] = useState(1);
    const [threadFetchKey, setThreadFetchKey] = useState(0);

    const [section,] = useForumSections()
        ?.getForumSections
        ?.filter(s => s?.section?.id === sectionId) ?? [];

    const response = useCustomLazyLoadQuery<GetForumThreadsQuery>(getForumThreadsQuery, {
            forumSectionId: sectionId as string,
            pageSize: DefaultPageSize,
            page: currentPage,
            characterId: character?.id
        }, {
            fetchPolicy: "store-and-network",
            fetchKey: threadFetchKey
        })?.getForumThreads;

    const onUpdate = () => setThreadFetchKey(p => p + 1);

    const pageCount = Math.ceil((response?.threadCount ?? 0) / DefaultPageSize);

    const toFormThread = (id: Option<string>) => router.push(Routes.forumThread(id ?? ""));

    const showForumThreads = () => response?.threads
        ?.map(s => (
            // @ts-ignore
            <ForumThreadListItem internal={true}
                                 key={s?.thread?.id}
                                 item={s?.thread}
                                 hasNewPosts={s?.hasNewPosts}
                                 onClick={toFormThread}
                                 onUpdate={onUpdate} />
        ));

    const onPageChanged = (newPage: number) => {
        setCurrentPage((_: any) => newPage);
    };

    const goToForum = (_: any) => router.push(Routes.forumSections);

    const createNew = (_: any) => router.push(Routes.createNewForumThread(sectionId as string));

    const forumControls = () => {
        const createNewThreadControl = () => {
            if (section?.section?.onGame === false || character != null) {
                return (
                    <Tooltip title="Crea nuovo thread">
                        <IconButton aria-label="Messaggio"
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
                    <IconButton aria-label="Messaggio"
                                onClick={goToForum}>
                        <HomeIcon sx={menuIconStyle} />
                    </IconButton>
                </Tooltip>
                {createNewThreadControl()}
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
        <ForumLayout title={section?.section?.title ?? "Section"} controls={forumControls()}>
            <Grid container>
                <Grid item xs={12}>
                    {showForumThreads()}
                </Grid>
                {paginationControl()}
            </Grid>
        </ForumLayout>
    );
}

export default Index;
