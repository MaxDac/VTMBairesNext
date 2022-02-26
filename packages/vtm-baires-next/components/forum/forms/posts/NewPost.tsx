import type {ReactElement} from "react";
import React from "react";
import {useFormik} from "formik";
import {useRelayEnvironment} from "react-relay";
import ForumPostForm from "../ForumPostForm";
import {CreateNewPostValidationSchema} from "../ManagePost";
import CreateNewPostMutation from "vtm-baires-next-services/graphql-queries/mutations/forum/CreateNewPostMutation";
import type {Option} from "vtm-baires-next-utils";
import {AlertType} from "vtm-baires-next-utils";
import {useRouter} from "next/router";
import useSession from "../../../../session/hooks/useSession";
import {useCustomSnackbar} from "vtm-baires-next-components";
import useCharacterSession from "../../../../session/hooks/useCharacterSession";
import {Routes} from "../../../../base/routes";

type NewPostProps = {
    threadId: string;
    title: Option<string>;
}

const NewPost = ({threadId, title}: NewPostProps): ReactElement => {
    const router = useRouter();
    const [user,] = useSession();
    const [character,] = useCharacterSession();
    const environment = useRelayEnvironment();
    const {enqueueSnackbar} = useCustomSnackbar();

    const onSubmit = ({text}: {text: string}) => {
        CreateNewPostMutation(environment, {
            forumThreadId: threadId,
            creatorUserId: user?.id ?? "",
            creatorCharacterId: character?.id,
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
            text: ""
        },
        validationSchema: CreateNewPostValidationSchema,
        onSubmit
    })

    const goBack = () => router.push(Routes.forumThread(threadId));

    const getTitle = () => title != null
        ? `Nuovo post in ${title}`
        : "Nuovo post";

    return (<ForumPostForm title={getTitle()}
                           confirmButtonText="Crea post"
                           goBack={goBack}
                           formik={formik} />)
};

export default NewPost;
