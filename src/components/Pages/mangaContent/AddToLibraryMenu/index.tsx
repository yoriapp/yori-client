import React from 'react';
import { Button, Menu } from '@mantine/core';
import { IconFolder, IconChevronDown } from '@tabler/icons-react';

const AddToLibraryMenu: React.FC = () => {
    return (
        <Menu shadow='md' width={250}>
            <Menu.Target>
                <Button
                    justify='space-between'
                    leftSection={<IconFolder />}
                    rightSection={<IconChevronDown />}
                    w='100%'
                    color='violet'
                    mt={10}
                >
                    Add To Library
                    </Button>
            </Menu.Target>
            <Menu.Dropdown>
                <Menu.Item>Read</Menu.Item>
                <Menu.Item>Reading</Menu.Item>
                <Menu.Item>Abandoned</Menu.Item>
            </Menu.Dropdown>
        </Menu>
    );
}

export default AddToLibraryMenu;
