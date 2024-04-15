export interface IHeaderNavLink {
    link: string;
    label: string;
    links?: IHeaderNavLink[];
}

export interface IHeaderWrapperProps {
    isLoggedIn: boolean;
}

export interface IHeaderProps extends IHeaderWrapperProps {
    drawerOpened: boolean;
    toggleDrawer: () => void;
    closeDrawer: () => void;
    handleLogout: () => void;
    navigationData: IHeaderNavLink[];
}
