import type {ReactElement} from "react";
import React from "react";
import {useFormik} from "formik";
import {useRelayEnvironment} from "react-relay";
import ThreadForm, {CreateNewThreadValidationSchema} from "../../../../components/forum/forms/ThreadForm";
import {useRouter} from "next/router";
import {useCustomSnackbar} from "vtm-baires-next-components"
import useSession from "../../../../session/hooks/useSession";
import useCharacterSession from "../../../../session/hooks/useCharacterSession";
import useForumSections from "vtm-baires-next-services/graphql-queries/queries/forum/GetForumSectionsQuery";
import {Routes} from "../../../../base/routes";
import CreateNewThreadMutation from "vtm-baires-next-services/graphql-queries/mutations/forum/CreateNewThreadMutation";
import {AlertType} from "vtm-baires-next-utils";
import {useRecoilValue} from "recoil";
import {isUserMasterSelector} from "../../../../session/selectors/recoil-selectors";
import MainLayout from "../../../../components/layouts/MainLayout";
import Index from "../../../Main";

const New = (): ReactElement => {
    const router = useRouter();
    const {sectionId} = router.query
    const environment = useRelayEnvironment();
    const {enqueueSnackbar} = useCustomSnackbar();
    const [user,] = useSession();
    const isUserMaster = useRecoilValue(isUserMasterSelector);
    const [character,] = useCharacterSession();
    const [section,] = useForumSections()
        ?.getForumSections
        ?.filter(s => s?.section?.id === sectionId) ?? [];

    const goBack = () => router.push(Routes.forumSection(sectionId as string));

    const onSubmit = ({title, description, highlighted, characterIds}: any) => {
        CreateNewThreadMutation(environment, {
            sectionId: sectionId as string,
            creatorUserId: user?.id ?? "",
            creatorCharacterId: section?.section?.onGame === true ? character?.id : null,
            title,
            description,
            highlighted,
            allowedCharacters: characterIds
        }).then(id => {
            enqueueSnackbar({
                type: AlertType.Success,
                message: "Nuovo thread creato."
            });

            setTimeout(() => {
                if (id != null && id !== "") {
                    router.push(Routes.forumThread(id));
                }
                else {
                    goBack();
                }
            }, 500);
        }).catch(e => {
            console.error("Remote error", e);
            enqueueSnackbar({
                type: AlertType.Error,
                graphqlErrors: e,
                message: "Impossibile creare il nuovo thread."
            });
        });
    };

    const formik = useFormik({
        initialValues: {
            title: "",
            description: "",
            characterIds: [],
            highlighted: false
        },
        validationSchema: CreateNewThreadValidationSchema(isUserMaster),
        onSubmit
    });

    const getTitle = () => section?.section?.title != null
        ? `Nuovo thread in ${section.section.title}`
        : "Nuovo thread";

    const getDescription = () =>
        "Prima di inserire un nuovo thread, accertati che non ce ne siano altri già attivi con lo stesso scopo."

    return (
        <ThreadForm title={getTitle()}
                    description={getDescription()}
                    onGame={section?.section?.onGame}
                    goBack={goBack}
                    formik={formik}
                    buttonText="Crea Thread" />
    );
};

New.getLayout = (page: ReactElement) => (
    <MainLayout>
        {page}
    </MainLayout>
)

export default New;
