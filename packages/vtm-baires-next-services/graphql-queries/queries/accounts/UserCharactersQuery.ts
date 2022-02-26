import {graphql, GraphQLTaggedNode} from "relay-runtime";
import {Option, Options} from "vtm-baires-next-utils/index";
import {useCustomLazyLoadQuery} from "vtm-baires-next-utils";
import {UserCharactersQuery} from "./__generated__/UserCharactersQuery.graphql";

export const userCharactersQuery: GraphQLTaggedNode = graphql`
    query UserCharactersQuery {
        me {
            userCharacters {
                id @required(action: NONE)
                name
                stage @required(action: NONE)
                approved
                isComplete
                clan {
                    name
                }
            }
        }
    }
`;

export type UserCharacter = {
    readonly id: string,
    readonly name: Option<string>,
    chatAvatar?: Option<string>,
    readonly stage: number,
    readonly approved: Option<boolean>,
    readonly isComplete: Option<boolean>,
    readonly clan: Option<{
      readonly name: Option<string>,
    }>,
}

export const useUserCharactersQuery = (reloadCount?: number): UserCharacter[] => {
    const result = useCustomLazyLoadQuery<UserCharactersQuery>(
        userCharactersQuery, {}, {
            fetchPolicy: "store-and-network",
            fetchKey: reloadCount ?? 0
        })
        ?.me
        ?.userCharacters ?? [];

    return result
        .filter(Options.isNotNull)
        .map(x => x as UserCharacter);
};
