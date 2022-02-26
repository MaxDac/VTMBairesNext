import type {ReactElement} from "react";
import React from "react";
import {useRelayEnvironment} from "react-relay";
import CharacterInfoForm from "../../components/creation/controls/CharacterInfoForm";
import {useRouter} from "next/router";
import {useCustomSnackbar} from "vtm-baires-next-components";
import type {
    CharacterCreationRequest
} from "vtm-baires-next-services/graphql-queries/mutations/characters/__generated__/CreateCharacterMutation.graphql";
import {AlertType} from "vtm-baires-next-utils";
import {Routes} from "../../base/routes";
import CreateCharacterMutation
    from "vtm-baires-next-services/graphql-queries/mutations/characters/CreateCharacterMutation";
import useCharacterSession from "../../session/hooks/useCharacterSession";

const Creation1 = (): ReactElement => {
    const router = useRouter();
    const environment = useRelayEnvironment();
    const [,setCharacter] = useCharacterSession();
    const {enqueueSnackbar} = useCustomSnackbar();

    const onSubmit = (values: CharacterCreationRequest) => {
        CreateCharacterMutation(environment, values)
            .then(response => {
                if (response?.createCharacter != null) {
                    setCharacter({
                        id: response.createCharacter?.id,
                        name: response.createCharacter?.name ?? "No name available",
                        clan: response.createCharacter?.clan
                    }).catch((e: Error) => console.error("Error while updating session character", e));

                    router.push(Routes.creation2);

                    // Refreshing the page in order to update the left menu
                    document.location.reload();
                }
            })
            .catch((e: Error) => {
                enqueueSnackbar({
                    type: AlertType.Error,
                    graphqlErrors: e,
                    message: "An error happened while creating the user."
                })
            });
    }

    return (
        <CharacterInfoForm onSubmit={onSubmit} />
    );
}

export default Creation1;
