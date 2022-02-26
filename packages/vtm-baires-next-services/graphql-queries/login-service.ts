import {post} from "vtm-baires-next-utils/index";
import type {User} from "./data-utils";

export type LoginResponse = {
    data: User;
};

export const login = (email: string, password: string, remember: boolean): Promise<LoginResponse> =>
    post<LoginResponse>("/Access", {email, password, remember});

export const check = (): Promise<LoginResponse> => 
    post<LoginResponse>("/check", {});

export const checkMaster = (): Promise<any> =>
    post<any>("/checkmaster", {});

export const logout = (): Promise<any> =>
    post<any>("/logout", {});

export const requestNewPassword = (userEmail: string): Promise<any> =>
    post<any>("/password/new", {userEmail});
