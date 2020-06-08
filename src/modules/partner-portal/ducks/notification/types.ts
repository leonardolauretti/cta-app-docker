export interface Notification {
    variant: string;
    message: string;
}

export interface IState {
    notifications: Notification[];
}

export enum ActionTypes {
    NEW = 'notification/NEW',
    DISMISS = 'notification/DISMISS',
}