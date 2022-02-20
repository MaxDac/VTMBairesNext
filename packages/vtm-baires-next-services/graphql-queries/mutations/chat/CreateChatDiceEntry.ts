import {graphql} from "relay-runtime";
import {wrapMutation} from "vtm-baires-next-utils";
import type {IEnvironment} from "relay-runtime";
import type {
    ChatDiceEntryRequest,
    CreateChatDiceEntryMutation$data
} from "./__generated__/CreateChatDiceEntryMutation.graphql";

const mutation = graphql`
    mutation CreateChatDiceEntryMutation($entry: ChatDiceEntryRequest) {
        createChatDiceEntry(entry: $entry) {
            id
            character {
                id
                name
            }
            chatMap {
                id
            }
            result
            text
        }
    }
`;

const chatDiceEntryMutationPromise = (environment: IEnvironment, request: ChatDiceEntryRequest): Promise<CreateChatDiceEntryMutation$data> => {
    return wrapMutation<CreateChatDiceEntryMutation$data>(environment, mutation, {entry: request});
}

export default chatDiceEntryMutationPromise;
