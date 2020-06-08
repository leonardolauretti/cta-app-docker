import { ActionTypes } from './types';

export interface AuthenticateData {
    email: string;
    password: string;
}

export interface RegisterData {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
}

export interface RecoverPasswordData {
    email: string;
    reset_url?: string;
}

export interface ResetPasswordData {
    token: string;
    new_password: string;
}

export const setTokenAction = (token: string) => ({
    type: ActionTypes.SET_TOKEN,
    payload: token,
});

export const registerAction = (data: RegisterData) => ({
    type: ActionTypes.REGISTER_REQUEST,
    payload: data,
});

export const authenticateAction = (data: AuthenticateData) => ({
    type: ActionTypes.AUTHENTICATE_REQUEST,
    payload: data,
});

export const recoverPasswordAction = (data: RecoverPasswordData) => ({
    type: ActionTypes.RECOVER_PASSWORD_REQUEST,
    payload: data,
});

export const resetPasswordAction = (data: ResetPasswordData) => ({
    type: ActionTypes.RESET_PASSWORD_REQUEST,
    payload: data,
});

export const disconnectAction = () => ({
    type: ActionTypes.DISCONNECT_REQUEST,
});