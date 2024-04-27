import React, { FC, useState, useEffect } from 'react';
import { Box, Button, Divider, Text, Pagination, Skeleton } from '@mantine/core';
import { IconArrowsSort, IconEye } from '@tabler/icons-react';
import { ChapterDto } from '@/client/__generated__/graphql';

import { useAppDispatch } from '../../../../../hooks/redux';
import useFetchChaptersList from '../../../../../hooks/useFetchChaptersList';

import classes from './styles.module.css';

interface TabChaptersProps {
    mangaId: string;
    chapters: ChapterDto[];
    chapterTotal: number;
}

const TabChapters: FC<TabChaptersProps> = ({ mangaId, chapters, chapterTotal }) => {
    const dispatch = useAppDispatch();
    const [activePage, setActivePage] = useState<number>(1);
    const itemsPerPage = 30;
    const startIndex = (activePage - 1) * itemsPerPage;
    const totalPages = Math.ceil(chapterTotal / itemsPerPage);

    const loading = useFetchChaptersList(dispatch, { mangaId, offset: startIndex });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [activePage]);

    const renderChapterItem = (chapter: ChapterDto) => (
        <Box key={chapter.id} p={8} className={classes.chapterBox}>
            <Box className={classes.chapterBoxContent}>
                <IconEye size={18} style={{ marginRight: '8px' }} />
                <Text size='sm' className={classes.chapterBoxText}>
                    {chapter.volume ? `Vol. ${chapter.volume} Ch. ${chapter.chapter}` : `Ch. ${chapter.chapter}`}
                </Text>
            </Box>
            <Text size='sm' style={{ color: '#858585' }}>{chapter.createdAt}</Text>
        </Box>
    );

    const skeletonItems = Array.from({ length: itemsPerPage }).map((_, index) => (
        <Box key={`skeleton-${index}`} p={8}>
            <Box className={classes.chapterBoxContent}>
                <Skeleton height={18} width={18} circle mr='8px' />
                <Skeleton height={16} />
            </Box>
        </Box>
    ));

    return (
        <>
            <Box>
                <Button leftSection={<IconArrowsSort size={20} />} mt={8} size='xs' variant='transparent' color='gray'>
                    Sort chapters
                </Button>
                <Divider my='xs' />
            </Box>
            {loading ? skeletonItems : chapters.map(renderChapterItem)}
            <Box mb={8} className={classes.pagination}>
                <Pagination total={totalPages} value={activePage} onChange={setActivePage} mt='sm' color='gray' />
            </Box>
        </>
    );
}

export default TabChapters;
