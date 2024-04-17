import React from 'react';
import { Avatar, Box, Menu, rem } from '@mantine/core';
import { IconLogout, IconBooks } from '@tabler/icons-react';
import { useAppSelector } from '../../../../hooks/redux';

import { NAVBAR_STATIC } from '../../../../constants';

import { IHeaderUserMenuProps } from '../../interfaces';

const HeaderUserMenu: React.FC<IHeaderUserMenuProps> = ({ handleLogout }) => {
    const user = useAppSelector((state) => state.auth.user);

    const abbrUsername = (username: string): string => username.substring(0, 2).toUpperCase();

    return (
        <Box style={{ width: '12em', display: 'flex', justifyContent: 'flex-end' }}>
            <Menu shadow='md' width={100}>
                <Menu.Target>
                    <Avatar
                        color='violet'
                        radius='xl'
                        style={{ cursor: 'pointer' }}
                    >
                        {abbrUsername(user!.username)}
                    </Avatar>
                </Menu.Target>

                <Menu.Dropdown>
                    <Menu.Item leftSection={<IconBooks style={{ width: rem(14), height: rem(14) }} />}>
                        {NAVBAR_STATIC.PROFILE}
                    </Menu.Item>

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

export default HeaderUserMenu;
