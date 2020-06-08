export enum ActionTypes {
    AUTHENTICATE_REQUEST = 'DigitalContentModule/AUTHENTICATE_REQUEST',
    AUTHENTICATE_SUCCESS = 'DigitalContentModule/AUTHENTICATE_SUCCESS',
    AUTHENTICATE_FAILURE = 'DigitalContentModule/AUTHENTICATE_FAILURE',

    SET_ACCESS_CODE = 'DigitalContentModule/SET_ACCESS_CODE',
}

export interface IState {
    access_code: string;
}