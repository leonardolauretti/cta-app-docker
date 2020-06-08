export const allowSelector = (state) => {
    let user = state['partner-portal-module'].auth.user;
    return user ? user.$allow : false;
};

export const tokenSelector = (state) => {
    return state['partner-portal-module'].auth.user.token;
};

export const userSelector = (state) => {
    let user = state['partner-portal-module'].auth.user;
    return user ? user : null;
};

export const busySelector = (state) => {
    return state['partner-portal-module'].auth.busy;
};

export const firstNameSelector = (state) => {
    return state['partner-portal-module'].auth.user.first_name;
}

export const lastNameSelector = (state) => {
    return state['partner-portal-module'].auth.user.last_name;
}

export const emailSelector = (state) => {
    return state['partner-portal-module'].auth.user.email;
}

export const avatarSelector = (state) => {
    return state['partner-portal-module'].auth.user.avatar;
}

export const uiSelector = (state) => {
    return state['partner-portal-module'].auth.ui;
}