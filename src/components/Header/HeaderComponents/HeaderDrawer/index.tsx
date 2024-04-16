import React from 'react';
import { Link } from 'react-router-dom';
import { Drawer, ScrollArea, Divider, Group, Button } from '@mantine/core';
import { NAVBAR_STATIC } from '../../../../constants';

import { IHeaderDrawerProps } from '../../interfaces';

const HeaderDrawer: React.FC<IHeaderDrawerProps> = ({ opened, onClose, isLoggedIn, children }) => {
    return (
        <Drawer
            opened={opened}
            onClose={onClose}
            size='100%'
            padding='md'
            title={NAVBAR_STATIC.TITLE}
            hiddenFrom='sm'
            zIndex={1000000}
        >
            <ScrollArea h={`calc(100vh - 80px)`} mx='-md'>
                <Divider my='sm' />
                {children}
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
    );
}

export default HeaderDrawer;
