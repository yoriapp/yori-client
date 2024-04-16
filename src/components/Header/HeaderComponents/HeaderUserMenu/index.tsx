import React from 'react';
import { Box, Menu, rem } from '@mantine/core';
import { IconUserSquareRounded, IconLogout, IconBooks } from '@tabler/icons-react';
import { NAVBAR_STATIC } from '../../../../constants';

import { IHeaderUserMenuProps } from '../../interfaces';

const HeaderUserMenu: React.FC<IHeaderUserMenuProps> = ({ handleLogout }) => {
    return (
        <Box style={{ width: '12em', display: 'flex', justifyContent: 'flex-end' }}>
            <Menu shadow='md' width={100}>
                <Menu.Target>
                    <IconUserSquareRounded size={28} style={{ cursor: 'pointer' }} />
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
