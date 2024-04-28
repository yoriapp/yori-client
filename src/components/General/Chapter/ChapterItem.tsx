import React from 'react';
import { Box, Text } from '@mantine/core';
import { IconEye } from '@tabler/icons-react';
import { ChapterDto } from '@/client/__generated__/graphql';

import classes from './styles.module.css';

interface IChapterItemProps {
    chapter: ChapterDto;
}

const ChapterItem: React.FC<IChapterItemProps> = ({ chapter }) => {
    const content = 
        chapter.volume ? `Vol. ${chapter.volume} Ch. ${chapter.chapter}` : `Ch. ${chapter.chapter}`;
    
    return (
        <Box p={8} className={classes.chapterBox}>
            <Box className={classes.chapterBoxContent}>
                <IconEye size={18} style={{ marginRight: '8px' }} />
                <Text size='sm' className={classes.chapterBoxText}>
                    {content}
                </Text>
            </Box>
            <Text size='sm' style={{ color: '#858585' }}>{chapter.createdAt}</Text>
        </Box>
    );
}

export default ChapterItem;
