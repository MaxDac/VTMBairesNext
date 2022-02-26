import {graphql} from "relay-runtime";
import {wrapMutation} from "vtm-baires-next-utils/index";
import type {IEnvironment} from "relay-runtime";
import type {
    CreateNewNpcMutation$data,
    CharacterCreationRequest
} from "./__generated__/CreateNewNpcMutation.graphql";

const mutation = graphql`
    mutation CreateNewNpcMutation($request: CharacterCreationRequest!) {
        createNpc(input: {
            request: $request
        }) {
            character {
                id
                clan {
                    name
                }
            }
        }
    }
`;

const mutationPromise = (environment: IEnvironment, request: CharacterCreationRequest): Promise<CreateNewNpcMutation$data> => {
    return wrapMutation<CreateNewNpcMutation$data>(environment, mutation, {
        request: {
            ...request,
            clanId: request.clanId
        }
    });
};

export default mutationPromise;
