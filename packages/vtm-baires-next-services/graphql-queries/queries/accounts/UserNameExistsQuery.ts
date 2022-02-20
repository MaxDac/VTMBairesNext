import {graphql, GraphQLTaggedNode} from "relay-runtime";
import type {IEnvironment} from "relay-runtime";
import {wrapQuery} from "vtm-baires-next-utils/src/relay-utils";
import {UserNameExistsQuery$data, UserNameExistsQuery$variables} from "./__generated__/UserNameExistsQuery.graphql";

export const userNameExistsQuery: GraphQLTaggedNode = graphql`
    query UserNameExistsQuery($name: String!) {
        userNameExists(name: $name)
    }
`;

export const userNameExists = (environment: IEnvironment, name: string): Promise<boolean> =>
    wrapQuery<UserNameExistsQuery$variables, UserNameExistsQuery$data, boolean>(
        environment,
        userNameExistsQuery,
        {name},
        r => r?.userNameExists === true);
