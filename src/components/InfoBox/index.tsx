import React from 'react';
import { Box, BoxProps, Text } from '@mantine/core';

import classes from './styles.module.css';

interface InfoBoxItem {
    title: string;
    content: string | number;
}

interface IInfoBoxProps extends BoxProps {
    items: InfoBoxItem[];
}

const InfoBox: React.FC<IInfoBoxProps> = ({ items, ...otherProps }) => {
    const renderItems = items.map((item, index) => (
        <Box key={item.title} p={4} mt={index !== 0 ? 5 : 0} className={classes.infoBoxItem}>
            <Text size='xs' style={{ color: '#858585' }}>{item.title}</Text>
            <Text variant='h4' size='sm'>{item.content}</Text>
        </Box>
    ));

    return (
        <Box className={classes.infoBoxWrapper} {...otherProps}>
            {renderItems}
        </Box>
    );
}

export default InfoBox;
