import React from 'react';
import { Box, Text } from '@mantine/core';

interface ITitlesProps {
    title: string;
    altTitle?: string;
}

const Titles: React.FC<ITitlesProps> = ({ title, altTitle }) => {
    return (
        <Box>
            <Text variant='h2' size='xl' style={{ color: '#dddddd' }}>{title}</Text>
            <Text variant='h2' size='md' style={{ color: '#858585' }}>{altTitle}</Text>
        </Box>
    );
}

export default Titles;
