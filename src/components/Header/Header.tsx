import React from 'react';
import {
    Box,
    Button,
    Burger,
    Container,
    Divider,
    Drawer,
    Group,
    ScrollArea,
    Text,
    rem
} from '@mantine/core';
import { IconUserCircle } from '@tabler/icons-react';
import { NAVBAR_STATIC } from '../../constants';

import classes from './Header.module.css';

import { IHeaderProps } from './interfaces';

const Header: React.FC<IHeaderProps> = (
    {
        isLoggedIn,
        drawerOpened,
        toggleDrawer,
        closeDrawer,
        navigationData
    }
) => {
    const items = navigationData.map((link) => {
        return (
            <a
                key={link.label}
                href={link.link}
                className={classes.link}
                onClick={(event) => event.preventDefault()}
            >
                {link.label}
            </a>
        );
    });

    const userButton = isLoggedIn ? (
        <Box style={{ width: '12em', display: 'flex', justifyContent: 'flex-end' }}>
            <Button variant='transparent' color='gray'>
                <IconUserCircle />
            </Button>
        </Box>
    ) : (
        <Box style={{ width: '12em' }}>
            <Button variant='transparent' color='gray'>{NAVBAR_STATIC.LOGIN}</Button>
            <Button variant='outline' color='gray'>{NAVBAR_STATIC.REGISTER}</Button>
        </Box>
    );


    return (
        <Container size='xl'>
            <header className={classes.header}>
                <div className={classes.headerContent}>
                    <Text className={classes.title} variant='h3' size='lg'>{NAVBAR_STATIC.TITLE}</Text>
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
                            <Button variant='default'>{NAVBAR_STATIC.LOGOUT}</Button>
                        </>
                    )}
                    <Divider my='sm' />
                    <Group justify='center' grow pb='xl' px='md'>
                        <Button variant='default'>{NAVBAR_STATIC.LOGIN}</Button>
                        <Button>{NAVBAR_STATIC.REGISTER}</Button>
                    </Group>
                </ScrollArea>
            </Drawer>
        </Container>
    );
};

export default Header;
