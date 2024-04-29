import React from 'react';
import { Box, BoxProps, Text } from '@mantine/core';

import classes from './styles.module.css';

interface InfoBoxItem {
    title: string;
    content: string | number | string[];
}

interface IInfoBoxProps extends BoxProps {
    items: InfoBoxItem[];
}

const InfoBox: React.FC<IInfoBoxProps> = ({ items, ...otherProps }) => {
    const capitalizeFirstLetter = (str: string | number): string | number => {
        if (typeof str !== 'string') return str;
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    const renderItems = items.map((item, index) => {
        let content;

        if (Array.isArray(item.content)) {
            content = item.content.map((line, lineIndex) => (
                <Box key={lineIndex}>
                    <Text variant='h4' size='sm'>
                        {capitalizeFirstLetter(line)}
                    </Text>
                </Box>
            ));
        } else {
            content = (
                <Text variant='h4' size='sm'>
                    {capitalizeFirstLetter(item.content)}
                </Text>
            );
        }

        return (
            <Box key={item.title} p={4} mt={index !== 0 ? 5 : 0} className={classes.infoBoxItem}>
                <Text size='xs' style={{ color: '#858585' }}>{item.title}</Text>
                {content}
            </Box>
        );
    });

    return (
        <Box className={classes.infoBoxWrapper} {...otherProps}>
            {renderItems}
        </Box>
    );
}


export default InfoBox;
