import type {ReactElement} from "react";
import React from "react";
import {useFormik} from "formik";
import {useRelayEnvironment} from "react-relay";
import ForumPostForm from "../ForumPostForm";
import {getForumPostQuery} from "vtm-baires-next-services/graphql-queries/queries/forum/GetForumPostQuery";
import ModifyPostMutation from "vtm-baires-next-services/graphql-queries/mutations/forum/ModifyPostMutation";
import {CreateNewPostValidationSchema} from "../ManagePost";
import type {Option} from "vtm-baires-next-utils";
import {AlertType, useCustomLazyLoadQuery} from "vtm-baires-next-utils";
import {useRouter} from "next/router";
import useSession from "../../../../session/hooks/useSession";
import {useCustomSnackbar} from "vtm-baires-next-components";
import type {
    GetForumPostQuery
} from "vtm-baires-next-services/graphql-queries/queries/forum/__generated__/GetForumPostQuery.graphql";
import {Routes} from "../../../../base/routes";

type ModifyPostProps = {
    threadId: string;
    postId: string;
    title: Option<string>;
}

const ModifyPost = ({threadId, postId, title}: ModifyPostProps): ReactElement => {
    const router = useRouter();
    const [user,] = useSession();
    const environment = useRelayEnvironment();
    const {enqueueSnackbar} = useCustomSnackbar();
    const post = useCustomLazyLoadQuery<GetForumPostQuery>(getForumPostQuery, {
        id: postId
    })?.getForumPost;

    const onSubmit = ({text}: {text: string}) => {
        ModifyPostMutation(environment, {
            postId: postId,
            text: text
        }).then((_: any) => {
            enqueueSnackbar({
                type: AlertType.Success,
                message: "Post creato!"})
        }).catch(e => {
            console.error("Error while saving the post!", e);
            enqueueSnackbar({
                type: AlertType.Error,
                graphqlErrors: e,
                message: "Il post non è stato salvato correttamente."
            });
        }).finally(() => {
            setTimeout(() => goBack(), 500);
        })
    };

    const formik = useFormik({
        initialValues: {
            text: post?.text ?? ""
        },
        validationSchema: CreateNewPostValidationSchema,
        onSubmit
    });

    if (post?.user?.id == null || user?.id == null || post.user.id !== user.id) {
        return (<></>);
    }

    const goBack = () => router.push(Routes.forumThread(threadId));

    const getTitle = () => title != null
        ? `Modifica post in ${title}`
        : "Modifica post";

    return (<ForumPostForm title={getTitle()}
                           confirmButtonText="Modifica post"
                           goBack={goBack}
                           formik={formik} />)
};

export default ModifyPost;