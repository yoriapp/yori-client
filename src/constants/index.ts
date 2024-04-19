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

const DEFAULT_SECTIONS_BUTTON_TEXT = 'View All';
const PAGE_SECTIONS = {
    POPULAR: 'Popular Manga',
    LATEST_UPDATED: 'Latest Updates',
    NEW: 'New Manga' 
};

export { 
    NAVBAR_STATIC, 
    AUTH_FORM, 
    MANGA_DEFAULT_FETCH_OPTIONS, 
    DEFAULT_SECTIONS_BUTTON_TEXT,
    PAGE_SECTIONS 
};
