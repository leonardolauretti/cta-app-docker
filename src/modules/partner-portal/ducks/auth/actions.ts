import {
    ActionTypes
} from './types';

interface ICredentials {
    email: string;
    password: string;
}

interface ISignUpData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

interface IResetPasswordData {
    token: string;
    new_password: string;
    new_password_confirmation: string;
}

export const signInAction = (data: ICredentials) => ({
    type: ActionTypes.SIGNIN_REQUEST,
    payload: data,
});

export const signUpAction = (data: ISignUpData) => ({
    type: ActionTypes.SIGNUP_REQUEST,
    payload: data,
});

export const forgetPasswordAction = (data: string) => ({
    type: ActionTypes.FORGET_PASSWORD_REQUEST,
    payload: data,
});

export const resetPasswordAction = (data: IResetPasswordData) => ({
    type: ActionTypes.RESET_PASSWORD_REQUEST,
    payload: data,
});

interface IUserData {
    firstName: string;
    lastName: string;
    email: string;
}

export const setUserAction = (data: IUserData) => ({
    type: ActionTypes.SET_USER,
    payload: data,
});

export const setTokenAction = (token: string) => ({
    type: ActionTypes.SET_TOKEN,
    payload: token,
});

export const signoutAction = () => ({
    type: ActionTypes.UNMOUNT_USER,
});

interface RegisterActionData {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
}

interface AuthenticateActionData {
    email: string;
    password: string;
}

export const registerAction = (data: RegisterActionData) => ({
    type: ActionTypes.REGISTER_REQUEST,
    payload: data,
});

export const authenticateAction = (data: AuthenticateActionData) => ({
    type: ActionTypes.AUTHENTICATE_REQUEST,
    payload: data,
});

export const disconnectAction = () => ({
    type: ActionTypes.UNMOUNT_USER,
});