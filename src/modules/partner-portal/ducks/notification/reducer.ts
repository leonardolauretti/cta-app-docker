import { ActionTypes, IState } from './types';

const initialState: IState = {
    notifications: [
        {
            variant: 'success',
            message: 'This is a success message',
        },
        {
            variant: 'info',
            message: 'Conectado ao servidor',
        }
    ],
};

export default function(state = initialState, action) {
    switch (action.type) {

        case ActionTypes.DISMISS:
            return handleDismiss(state, action);

        case ActionTypes.NEW:
            return handleNew(state, action);

        default:
            return { ...state };
    }
}

function handleDismiss(state: IState, action) {
    const notificationIndex = action.payload;
    let notifications = [...state.notifications];
    notifications.splice(notificationIndex, 1);

    return {
        ...state,
        notifications,
    };
}

function handleNew(state: IState, action) {
    const { message, variant } = action.payload;
    const notifications = state.notifications;
    notifications.push({
        variant,
        message,
    });

    return {
        ...state,
        notifications,
    };
}