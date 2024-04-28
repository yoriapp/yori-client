import React from 'react';
import { Box, Tabs } from '@mantine/core';

interface Tab {
    value: string;
    children: React.ReactNode;
}

interface ICustomTabsProps {
    tabs: Tab[];
}

const capitalizeFirstLetter = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

const CustomTabs: React.FC<ICustomTabsProps> = ({ tabs }) => {
    return (
        <Box mt={10} p={16} bg='#202020'>
            <Tabs color='violet' defaultValue={tabs[0].value}>
                <Tabs.List>
                    {tabs.map(tab => (
                        <Tabs.Tab key={tab.value} value={tab.value}>
                            {capitalizeFirstLetter(tab.value)}
                        </Tabs.Tab>
                    ))}
                </Tabs.List>
                {tabs.map(tab => (
                    <Tabs.Panel key={tab.value} value={tab.value}>
                        {tab.children}
                    </Tabs.Panel>
                ))}
            </Tabs>
        </Box>
    );
}

export default CustomTabs;
