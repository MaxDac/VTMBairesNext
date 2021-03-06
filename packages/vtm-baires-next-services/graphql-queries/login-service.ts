import {post} from "vtm-baires-next-utils";
import type {Option} from "vtm-baires-next-utils";
import type {User} from "./data-utils";
import type {SessionCharacter, SessionLocation} from "../index";

export type LoginResponse = {
    data: {
        user: User
        character?: Option<SessionCharacter>,
        location?: Option<SessionLocation>
    };
};

export const login = (email: string, password: string, remember: boolean): Promise<LoginResponse> =>
    post<LoginResponse>("/api/login", {email, password, remember});

export const check = (): Promise<LoginResponse> => 
    post<LoginResponse>("/api/check", {});

export const checkMaster = (): Promise<any> =>
    post<any>("/api/checkmaster", {});

export const logout = (): Promise<any> =>
    post<any>("/api/logout", {});

export const requestNewPassword = (userEmail: string): Promise<any> =>
    post<any>("/api/password/new", {userEmail});
