export enum ActionTypes {
    SIGNIN_REQUEST = 'partner/auth/SIGNIN_REQUEST',
    SIGNIN_SUCCESS = 'partner/auth/SIGNIN_SUCCESS',
    SIGNIN_FAILURE = 'partner/auth/SIGNIN_FAILURE',

    SIGNUP_REQUEST = 'partner/auth/SIGNUP_REQUEST',
    SIGNUP_SUCCESS = 'partner/auth/SIGNUP_SUCCESS',
    SIGNUP_FAILURE = 'partner/auth/SIGNUP_FAILURE',

    REGISTER_REQUEST = 'partner/auth/REGISTER_REQUEST',
    REGISTER_SUCCESS = 'partner/auth/REGISTER_SUCCESS',
    REGISTER_FAILURE = 'partner/auth/REGISTER_FAILURE',

    AUTHENTICATE_REQUEST = 'partner/auth/AUTHENTICATE_REQUEST',
    AUTHENTICATE_SUCCESS = 'partner/auth/AUTHENTICATE_SUCCESS',
    AUTHENTICATE_FAILURE = 'partner/auth/AUTHENTICATE_FAILURE',

    MOUNT_USER = 'partner/auth/MOUNT_USER',
    UNMOUNT_USER = 'partner/auth/UNMOUNT_USER',

    FORGET_PASSWORD_REQUEST = 'partner/auth/FORGET_PASSWORD_REQUEST',
    FORGET_PASSWORD_SUCCESS = 'partner/auth/FORGET_PASSWORD_SUCCESS',
    FORGET_PASSWORD_FAILURE = 'partner/auth/FORGET_PASSWORD_FAILURE',

    RESET_PASSWORD_REQUEST = 'partner/auth/RESET_PASSWORD_REQUEST',
    RESET_PASSWORD_SUCCESS = 'partner/auth/RESET_PASSWORD_SUCCESS',
    RESET_PASSWORD_FAILURE = 'partner/auth/RESET_PASSWORD_FAILURE',

    SET_BUSY = 'partner/auth/SET_BUSY',
    SET_USER = 'partner/auth/SET_USER',

    UNSET_USER = 'partner/auth/UNSET_USER',
    UNSET_TOKEN = 'partner/auth/UNSET_TOKEN',

    SET_TOKEN = 'partner/auth/SET_TOKEN',
    SET_ALLOW = 'partner/auth/SET_ALLOW',

    SET_UI = 'partner/auth/SET_UI',
}

export interface IState {
    busy: boolean;
    token: string;
    user: {
        first_name: string;
        last_name: string;
        email: string;
        avatar_url: string;
        token: string;
        $allow: boolean;
        $mounted: boolean;
    };
    ui: {
        [key: string]: any,
    };
}

export class SignInData {
    email: string;
    password: string;
}

export class SignUpData {
    email: string;
    password: string;
}

export class ForgetPasswordData {
    email: string;
}

export class ResetPasswordData {
    token: string;
    new_password: string;
    new_password_confirmation: string;
}