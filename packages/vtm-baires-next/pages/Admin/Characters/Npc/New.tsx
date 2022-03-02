import type {ReactElement} from "react";
import React from "react";
import {useRelayEnvironment} from "react-relay";
import CharacterInfoForm from "../../../../components/creation/controls/CharacterInfoForm";
import {useRouter} from "next/router";
import {useCustomSnackbar} from "vtm-baires-next-components";
import CreateNewNpcMutation from "vtm-baires-next-services/graphql-queries/mutations/npcs/CreateNewNpcMutation";
import {Routes} from "../../../../base/routes";
import useCharacterSession from "../../../../session/hooks/useCharacterSession";
import {AlertType} from "vtm-baires-next-utils";
import MainLayout from "../../../../components/layouts/MainLayout";
import Index from "../../../Main";

const New = (): ReactElement => {
    const router = useRouter();
    const environment = useRelayEnvironment();
    const [,setCharacter] = useCharacterSession();
    const {enqueueSnackbar} = useCustomSnackbar();

    const onSubmit = (values: any) => {
        CreateNewNpcMutation(environment, values)
            .then(response => {
                if (response?.createNpc?.character?.id != null) {
                    setCharacter({
                        id: response.createNpc?.character?.id,
                        name: response?.createNpc?.character?.id ?? "No name available",
                        clan: {
                            ...response?.createNpc?.character?.clan
                        }
                    }).catch(e => console.error("Error while updating session character", e));

                    // Forcing the cast after having checked the id for nulls
                    const characterId: string = response?.createNpc?.character?.id;
                    router.push(Routes.defineNpc(characterId));
                }
                else {
                    router.push(Routes.main);
                }
            })
            .catch(e => enqueueSnackbar({
                type: AlertType.Error,
                graphqlErrors: e,
                message: "An error happened while creating the user."
            }));
    }

    return (
        <CharacterInfoForm onSubmit={onSubmit} />
    );
}

New.getLayout = (page: ReactElement) => (
    <MainLayout>
        {page}
    </MainLayout>
)

export default New;
