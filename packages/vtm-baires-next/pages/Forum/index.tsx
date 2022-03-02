import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ForumLayout from "../../components/forum/layout/ForumLayout";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ForumListItemText from "../../components/forum/layout/ForumListItemText";
import type {ReactElement} from "react";
import {useRouter} from "next/router";
import useForumSections from "vtm-baires-next-services/graphql-queries/queries/forum/GetForumSectionsQuery";
import {Routes} from "../../base/routes";
import type {Option} from "vtm-baires-next-utils";
import MainLayout from "../../components/layouts/MainLayout";

const Index = (): ReactElement => {
    const router = useRouter();

    const forumSections = useForumSections()
        ?.getForumSections;

    const toSection = (sectionId: Option<string>) => {
        if (sectionId != null) {
            router.push(Routes.forumSection(sectionId));
        }
    };

    const showForumSections = () => forumSections
        ?.map(s => (
            <Box component="div" key={s?.section?.id}>
                <Divider />
                <ListItem alignItems="flex-start"
                          button
                          onClick={() => toSection(s?.section?.id)}>
                    <ForumListItemText title={s?.section?.title}
                                       hasNewMessages={s?.hasNewPosts}
                                       description={s?.section?.description}
                                       lastThread={s?.lastThread} />
                </ListItem>
                <Divider />
            </Box>
        ));

    return (
        <ForumLayout title="Forum (beta)">
            <Typography sx={{
                color: "#C9C9C9",
                fontSize: "13px"
            }}>
                Questo Forum non ha per ora il gran numero di funzionalit&agrave; che 
                un forum dovrebbe offrire. &Egrave; disponibile una Community su Discord chiamata&nbsp;
                <b>VTM Baires</b> che offre supporto e aiuto ai nuovi arrivati nella land.<br />
                &Egrave; fortemente consigliato richiedere l'iscrizione alla Community Discord
                se necessitate di qualsiasi aiuto, o se avete un problema o un dubbio riguardo
                il sito.
            </Typography>
            <List sx={{width: "100%", color: "background.paper"}}>
                {showForumSections()}
            </List>
        </ForumLayout>
    );
}

Index.getLayout = (page: ReactElement) => (
    <MainLayout>
        {page}
    </MainLayout>
)

export default Index;
