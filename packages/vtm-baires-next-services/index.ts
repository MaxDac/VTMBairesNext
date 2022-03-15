import {Option} from "vtm-baires-next-utils";
import {User} from "./graphql-queries/data-utils";

export type SessionCharacter = {
    id?: Option<string>;
    name?: Option<string>;
    approved?: Option<boolean>;
    clan?: Option<{
        id?: Option<string>;
        name?: Option<string>;
    }>;
};

export type SessionLocation = {
    id?: Option<string>;
    name?: Option<string>;
};

export type Session = User;
