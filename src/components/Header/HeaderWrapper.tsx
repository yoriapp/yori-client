import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDisclosure } from '@mantine/hooks';
import { useAppDispatch } from '../../hooks/redux';

import { logout } from '../../stores/reducers/authSlice';

import { IHeaderWrapperProps, IHeaderNavLink } from './interfaces';

import Header from './Header';

const navigationData: IHeaderNavLink[] = [
    { link: '/', label: 'Catalog' },
    { link: '/search', label: 'Search' },
    { link: '/forum', label: 'Forum' },
    { link: '/faq', label: 'FAQ' },
];

const HeaderWrapper: React.FC<IHeaderWrapperProps> = ({ isLoggedIn, ...otherProps }) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);

    const handleLogout = () => {
        dispatch(logout());
        navigate({ pathname: '/' });
    }

    return (
        <Header
            isLoggedIn={isLoggedIn}
            navigationData={navigationData}
            drawerOpened={drawerOpened}
            toggleDrawer={toggleDrawer}
            closeDrawer={closeDrawer}
            handleLogout={handleLogout}
            {...otherProps}
        />
    );
};

export default HeaderWrapper;
