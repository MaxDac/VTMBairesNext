import {graphql, GraphQLTaggedNode} from "relay-runtime";
import type {IEnvironment} from "relay-runtime";
import {wrapQuery} from "vtm-baires-next-utils/src/relay-utils";
import {UserEmailExistsQuery$data, UserEmailExistsQuery$variables} from "./__generated__/UserEmailExistsQuery.graphql";

export const userEmailExistsQuery: GraphQLTaggedNode = graphql`
    query UserEmailExistsQuery($email: String!) {
        userEmailExists(email: $email)
    }
`;

export const userEmailExists = (environment: IEnvironment, email: string): Promise<boolean> =>
    wrapQuery<UserEmailExistsQuery$variables, UserEmailExistsQuery$data, boolean>(
        environment,
        userEmailExistsQuery,
        {email},
        r => r?.userEmailExists === true);
