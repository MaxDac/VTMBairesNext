import React from "react";
import {useFormik} from "formik";
import ThreadForm, {CreateNewThreadValidationSchema} from "../../../../../components/forum/forms/ThreadForm";
import type {ReactElement} from "react";
import {useRouter} from "next/router";
import {useRelayEnvironment} from "react-relay";
import {useCustomSnackbar} from "vtm-baires-next-components";
import {handleMutation, useCustomLazyLoadQuery} from "vtm-baires-next-utils";
import {getForumThreadQuery} from "vtm-baires-next-services/graphql-queries/queries/forum/GetForumThreadQuery";
import {
    GetForumThreadQuery
} from "vtm-baires-next-services/graphql-queries/queries/forum/__generated__/GetForumThreadQuery.graphql";
import {Routes} from "../../../../../base/routes";
import ModifyThreadMutation from "vtm-baires-next-services/graphql-queries/mutations/forum/ModifyThreadMutation";
import {useRecoilValue} from "recoil";
import {isUserMasterSelector} from "../../../../../session/selectors/recoil-selectors";

const Modify = (): ReactElement => {
    const environment = useRelayEnvironment();
    const router = useRouter();
    const {sectionId, threadId} = router.query;
    const {enqueueSnackbar} = useCustomSnackbar();

    const isUserMaster = useRecoilValue(isUserMasterSelector);
    const thread = useCustomLazyLoadQuery<GetForumThreadQuery>(getForumThreadQuery, {
        forumThreadId: threadId as string
    })?.getForumThread;

    const goBack = () => router.push(Routes.forumSection(sectionId as string));

    const onSubmit = ({title, description, highlighted, characterIds}: any) => {
        handleMutation(() => 
            ModifyThreadMutation(environment, {
                threadId: threadId as string,
                title,
                description,
                highlighted,
                allowedCharacters: characterIds
            }), enqueueSnackbar, {
                successMessage: "Thread modificato.",
                onCompleted: () => {
                    setTimeout(() => {
                        if (threadId != null && threadId !== "") {
                            router.push(Routes.forumThread(threadId as string));
                        }
                        else {
                            goBack();
                        }
                    }, 500);
                }
            });
    };

    const formik = useFormik({
        initialValues: {
            title: thread?.title,
            description: thread?.description,
            characterIds: thread?.allowedCharacters?.map(x => x?.id) ?? [],
            highlighted: thread?.highlighted
        },
        validationSchema: CreateNewThreadValidationSchema(isUserMaster),
        onSubmit
    });

    const getTitle = () => thread?.title != null
        ? `Modifica thread ${thread.title}`
        : "Modifica thread";

    const getDescription = () => "";

    return (
        <ThreadForm title={getTitle()}
                    description={getDescription()}
                    onGame={thread?.onGame}
                    goBack={goBack}
                    formik={formik}
                    buttonText="Modifica Thread" />
    );
};

export default Modify;
