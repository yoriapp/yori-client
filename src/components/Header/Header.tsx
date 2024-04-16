import React from 'react';
import { Link } from 'react-router-dom';
import {
    Box,
    Button,
    Burger,
    Container,
    Group,
    Text,
} from '@mantine/core';
import { NAVBAR_STATIC } from '../../constants';

import classes from './Header.module.css';

import { IHeaderProps } from './interfaces';

import HeaderLinks from './HeaderComponents/HeaderLinks';
import HeaderUserMenu from './HeaderComponents/HeaderUserMenu';
import HeaderDrawer from './HeaderComponents/HeaderDrawer';

const Header: React.FC<IHeaderProps> = (
    {
        isLoggedIn,
        drawerOpened,
        toggleDrawer,
        closeDrawer,
        handleLogout,
        navigationData
    }
) => {
    const userButton = isLoggedIn ? (
        <HeaderUserMenu handleLogout={handleLogout} />
    ) : (
        <Box style={{ width: '12em', display: 'flex', justifyContent: 'flex-end' }}>
            <Link to='/auth' state={{ type: 'login' }}>
                <Button variant='transparent' color='gray'>{NAVBAR_STATIC.LOGIN}</Button>
            </Link>
            <Link to='/auth' state={{ type: 'register' }}>
                <Button variant='outline' color='gray'>{NAVBAR_STATIC.REGISTER}</Button>
            </Link>
        </Box>
    );


    return (
        <Container size='xl'>
            <header className={classes.header}>
                <div className={classes.headerContent}>
                    <Text variant='h3' size='lg' style={{ fontWeight: 'bold' }}>{NAVBAR_STATIC.TITLE}</Text>
                    <Group h='100%' gap={0} visibleFrom='sm'>
                        <HeaderLinks navigationData={navigationData} />
                    </Group>
                    <Group visibleFrom='sm'>
                        {userButton}
                    </Group>
                    <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom='sm' />
                </div>
            </header>
            <HeaderDrawer
                opened={drawerOpened}
                onClose={closeDrawer}
                isLoggedIn={isLoggedIn}
            >
                <HeaderLinks navigationData={navigationData} />
            </HeaderDrawer>
        </Container>
    );
};

export default Header;
