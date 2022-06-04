export interface UserCredentials {
    email: string;
    password: string;
}

export interface LoginInfo extends UserCredentials {
    domain: string;
}

export type LoginStatus = boolean;
