import {graphql} from "relay-runtime";
import {wrapMutation} from "vtm-baires-next-utils/index";
import type {IEnvironment} from "relay-runtime";
import type {
    ChangeCharacterSheetInfoMutation$data,
    ChangeCharacterSheetInfoMutation$variables
} from "./__generated__/ChangeCharacterSheetInfoMutation.graphql";
import type {Option} from "vtm-baires-next-utils/index";

const mutation = graphql`
    mutation ChangeCharacterSheetInfoMutation($characterId: ID!, $request: ChangeSheetInfoRequest!) {
        changeSheetInfo(input: {
            characterId: $characterId,
            request: $request
        }) {
            result {
                id
            }
        }
    }
`;

const mutationPromise = (
    environment: IEnvironment,
    characterId: string,
    request: ChangeCharacterSheetInfoMutation$variables): Promise<Option<string>> => {
    return wrapMutation<ChangeCharacterSheetInfoMutation$data>(environment, mutation, {
        characterId,
        request
    })?.then(m => m?.changeSheetInfo?.result?.id);
}

export default mutationPromise;
