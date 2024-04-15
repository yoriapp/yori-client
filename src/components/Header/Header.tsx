import React from 'react';
import { Link } from 'react-router-dom';
import {
    Box,
    Button,
    Burger,
    Container,
    Divider,
    Drawer,
    Group,
    Menu,
    ScrollArea,
    Text,
    rem
} from '@mantine/core';
import { IconUserSquareRounded, IconBooks, IconLogout } from '@tabler/icons-react';
import { NAVBAR_STATIC } from '../../constants';

import classes from './Header.module.css';

import { IHeaderProps } from './interfaces';

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
    const items = navigationData.map((link) => {
        return (
            <Link
                key={link.label}
                to={link.link}
                className={classes.link}
            >
                {link.label}
            </Link>
        );
    });

    const NavbarUserMenu = () => {
        return (
            <Box style={{ width: '12em', display: 'flex', justifyContent: 'flex-end' }}>
                <Menu shadow="md" width={100}>
                    <Menu.Target>
                        <IconUserSquareRounded size={28} style={{ cursor: 'pointer' }} />
                    </Menu.Target>

                    <Menu.Dropdown>
                        <Menu.Item leftSection={<IconBooks style={{ width: rem(14), height: rem(14) }} />}>
                            {NAVBAR_STATIC.PROFILE}
                        </Menu.Item>

                        <Menu.Divider />

                        <Menu.Item
                            leftSection={<IconLogout style={{ width: rem(14), height: rem(14) }} />}
                            onClick={handleLogout}
                        >
                            {NAVBAR_STATIC.LOGOUT}
                        </Menu.Item>
                    </Menu.Dropdown>
                </Menu>
            </Box>
        );
    }

    const userButton = isLoggedIn ? (
        <NavbarUserMenu />
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
                        {items}
                    </Group>
                    <Group visibleFrom='sm'>
                        {userButton}
                    </Group>
                    <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom='sm' />
                </div>
            </header>
            <Drawer
                opened={drawerOpened}
                onClose={closeDrawer}
                size='100%'
                padding='md'
                title={NAVBAR_STATIC.TITLE}
                hiddenFrom='sm'
                zIndex={1000000}
            >
                <ScrollArea h={`calc(100vh - ${rem(80)})`} mx='-md'>
                    <Divider my='sm' />
                    {items}
                    {isLoggedIn && (
                        <>
                            <Divider my='sm' />
                            <Group justify='center' grow pb='xl' px='md'>
                                <Button variant='default'>{NAVBAR_STATIC.LOGOUT}</Button>
                            </Group>
                        </>
                    )}
                    {!isLoggedIn && (
                        <>
                            <Divider my='sm' />
                            <Group justify='center' grow pb='xl' px='md'>
                                <Link to='/auth' state={{ type: 'login' }}>
                                    <Button variant='default'>{NAVBAR_STATIC.LOGIN}</Button>
                                </Link>
                                <Link to='/auth' state={{ type: 'register' }}>
                                    <Button>{NAVBAR_STATIC.REGISTER}</Button>
                                </Link>
                            </Group>
                        </>
                    )}
                </ScrollArea>
            </Drawer>
        </Container>
    );
};

export default Header;
