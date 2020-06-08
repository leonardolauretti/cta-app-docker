export const busySelector = (state) => {
    return state['partner-portal-module']['inbox'].busy;
}

export const inboxSelector = (state) => {
    return state['partner-portal-module']['inbox'].chats.byId;
}