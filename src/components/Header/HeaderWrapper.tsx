import React from 'react';
import { useDisclosure } from '@mantine/hooks';

import { IHeaderWrapperProps, IHeaderNavLink } from './interfaces';

import Header from './Header';

const navigationData: IHeaderNavLink[] = [
    { link: '/', label: 'Catalog' },
    { link: '/search', label: 'Search' },
    { link: '/forum', label: 'Forum' },
    { link: '/faq', label: 'FAQ' },
];

const HeaderWrapper: React.FC<IHeaderWrapperProps> = ({ isLoggedIn, ...otherProps }) => {
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);

    return (
        <Header
            isLoggedIn={isLoggedIn}
            navigationData={navigationData}
            drawerOpened={drawerOpened}
            toggleDrawer={toggleDrawer}
            closeDrawer={closeDrawer}
            {...otherProps}
        />
    );
};

export default HeaderWrapper;
