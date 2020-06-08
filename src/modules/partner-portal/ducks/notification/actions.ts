import { ActionTypes } from "./types";

interface INotificationProps {
    variant: string;
    message: string;
}

export const newNotificationAction = (props: INotificationProps) => ({
    type: ActionTypes.NEW,
    payload: props,
});

export const dismissNotificationAction = (index: number) => ({
    type: ActionTypes.DISMISS,
    payload: index,
});