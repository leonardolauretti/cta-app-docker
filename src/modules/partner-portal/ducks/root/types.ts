export enum ActionTypes {
    AUTHENTICATE_REQUEST = 'PartnerPortalModule/root/AUTHENTICATE_REQUEST',
    AUTHENTICATE_SUCCESS = 'PartnerPortalModule/root/AUTHENTICATE_SUCCESS',
    AUTHENTICATE_FAILURE = 'PartnerPortalModule/root/AUTHENTICATE_FAILURE',

    REGISTER_REQUEST = 'PartnerPortalModule/root/REGISTER_REQUEST',
    REGISTER_SUCCESS = 'PartnerPortalModule/root/REGISTER_SUCCESS',
    REGISTER_FAILURE = 'PartnerPortalModule/root/REGISTER_FAILURE',

    RECOVER_PASSWORD_REQUEST = 'PartnerPortalModule/root/RECOVER_PASSWORD_REQUEST',
    RECOVER_PASSWORD_SUCCESS = 'PartnerPortalModule/root/RECOVER_PASSWORD_SUCCESS',
    RECOVER_PASSWORD_FAILURE = 'PartnerPortalModule/root/RECOVER_PASSWORD_FAILURE',

    RESET_PASSWORD_REQUEST = 'PartnerPortalModule/root/RESET_PASSWORD_REQUEST',
    RESET_PASSWORD_SUCCESS = 'PartnerPortalModule/root/RESET_PASSWORD_SUCCESS',
    RESET_PASSWORD_FAILURE = 'PartnerPortalModule/root/RESET_PASSWORD_FAILURE',

    DISCONNECT_REQUEST = 'PartnerPortalModule/root/DISCONNECT_REQUEST',
    DISCONNECT_SUCCESS = 'PartnerPortalModule/root/DISCONNECT_SUCCESS',
    DISCONNECT_FALURE = 'PartnerPortalModule/root/DISCONNECT_FALURE',

    SET_AUTHENTICATED = 'PartnerPortalModule/root/SET_AUTHENTICATED',
    SET_TOKEN = 'PartnerPortalModule/root/SET_TOKEN',
    SET_USER = 'PartnerPortalModule/root/SET_USER',
    SET_AVATAR_URL = 'PartnerPortalModule/root/SET_AVATAR_URL',
}

export interface IState {
    user: {
        first_name: string;
        last_name: string;
        email: string;
        avatar_url: string;
        token: string;
        $authenticated: boolean;
    };

    $error: any;
    $loading: any;
}