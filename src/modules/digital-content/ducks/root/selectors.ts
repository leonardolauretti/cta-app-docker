export const isAuthenticatedSelector = (state) => {
    let access_code = state['DigitalContentModule'].root.access_code;
    return access_code ? true : false;
};