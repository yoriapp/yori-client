import React from 'react';
import { Box, Skeleton } from '@mantine/core';

import classes from './styles.module.css';

const ChapterSkeleton: React.FC = () => {
    return (
        <Box p={8}>
            <Box className={classes.chapterBoxContent}>
                <Skeleton height={18} width={18} circle mr='8px' />
                <Skeleton height={16} />
            </Box>
        </Box>
    );
}

export default ChapterSkeleton;
