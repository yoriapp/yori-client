export const APP_TITLE = 'Yori App';

const NAVBAR_STATIC = {
    TITLE: APP_TITLE,
    LOGIN: 'Login',
    REGISTER: 'Register',
    LOGOUT: 'Logout',
    PROFILE: 'Profile',
}

const AUTH_FORM = {
    LOGIN_TEXT: 'Login to your account!',
    REGISTER_TEXT: 'Create Account',
}

const MANGA_DEFAULT_FETCH_OPTIONS = {
    extension: 'MangaDex',
    limit: 6,
    offset: 0,
}

export { NAVBAR_STATIC, AUTH_FORM, MANGA_DEFAULT_FETCH_OPTIONS };
