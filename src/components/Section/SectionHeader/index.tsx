import React from 'react';
import { Box, Button, Text } from '@mantine/core';
import { IconTypeface } from '@tabler/icons-react';

import classes from './styles.module.css';

export interface ISectionHeaderProps {
    title: string;
    buttonText: string;
    icon: typeof IconTypeface;
}

const SectionHeader: React.FC<ISectionHeaderProps> = ({ icon: Icon, title, buttonText }) => {
    return (
        <Box className={classes.sectionHeader} mb={20}>
            <Box className={classes.sectionHeaderContent}>
                <Box className={classes.sectionHeaderIconWrapper}>
                    <Icon />
                </Box>
                <Text ml={10} fw={700}>{title}</Text>
            </Box>
            <Button className={classes.sectionHeaderButton} size='xs' variant='filled' color='rgba(45, 45, 45, 1)'>{buttonText}</Button>
        </Box>
    );
}

export default SectionHeader;
