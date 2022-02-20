import {graphql} from "relay-runtime";
import {wrapMutation} from "vtm-baires-next-utils";
import type {CreateUserMutation$data, CreateUserMutation$variables} from "./__generated__/CreateUserMutation.graphql";
import type {IEnvironment} from "relay-runtime";

const mutation = graphql`
    mutation CreateUserMutation($email: String!, $name: String!) {
        createUser(email: $email, name: $name) {
            id
        }
    }
`;

const mutationPromise = (environment: IEnvironment, request: CreateUserMutation$variables): Promise<CreateUserMutation$data> =>
    wrapMutation<CreateUserMutation$data>(environment, mutation, request);

export default mutationPromise;
