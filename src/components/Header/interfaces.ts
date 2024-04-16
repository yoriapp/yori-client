import { ReactNode } from 'react';

export interface IHeaderNavLink {
    link: string;
    label: string;
    links?: IHeaderNavLink[];
}

export interface IHeaderWrapperProps {
    isLoggedIn: boolean;
}

export interface IHeaderLinksProps {
    navigationData: IHeaderNavLink[];
}

export interface IHeaderUserMenuProps {
    handleLogout: () => void;
}

export interface IHeaderDrawerProps {
    opened: boolean;
    onClose: () => void;
    isLoggedIn: boolean;
    children: ReactNode;
}

export interface IHeaderProps extends IHeaderWrapperProps {
    drawerOpened: boolean;
    toggleDrawer: () => void;
    closeDrawer: () => void;
    handleLogout: () => void;
    navigationData: IHeaderNavLink[];
}
