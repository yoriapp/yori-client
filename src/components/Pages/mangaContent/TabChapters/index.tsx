import React, { FC, useState, useEffect } from 'react';
import { Box, Button, Divider, Pagination } from '@mantine/core';
import { IconArrowsSort } from '@tabler/icons-react';
import { ChapterDto, OrderEnum } from '../../../../client/__generated__/graphql';

import { useAppDispatch } from '../../../../hooks/redux';
import useFetchChaptersList from '../../../../hooks/useFetchChaptersList';

import classes from './styles.module.css';

import { ChapterItem, ChapterSkeleton } from '../../../General/Chapter';

interface TabChaptersProps {
    mangaId: string;
    chapters: ChapterDto[];
    chapterTotal: number;
}

const TabChapters: FC<TabChaptersProps> = ({ mangaId, chapters, chapterTotal }) => {
    const dispatch = useAppDispatch();

    const [activePage, setActivePage] = useState<number>(1);
    const [sortOrder, setSortOrder] = useState<OrderEnum>(OrderEnum.Desc);

    const itemsPerPage = 30;
    const startIndex = (activePage - 1) * itemsPerPage;
    const totalPages = Math.ceil(chapterTotal / itemsPerPage);

    const loading = useFetchChaptersList(
        dispatch,
        {
            mangaId, offset: startIndex, order: sortOrder
        }
    );

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [activePage]);

    const handleSortClick = () => {
        setSortOrder(sortOrder === OrderEnum.Asc ? OrderEnum.Desc : OrderEnum.Asc);
    }

    const renderChapterItem = (chapter: ChapterDto) => (
        <ChapterItem key={chapter.id} chapter={chapter} />
    );

    const skeletonItems = Array.from({ length: itemsPerPage }).map((_, index) => (
        <ChapterSkeleton key={`skeleton-${index}`} />
    ));

    return (
        <>
            <Box>
                <Button
                    mt={8}
                    size='xs'
                    variant='subtle'
                    color='gray'
                    leftSection={<IconArrowsSort size={20} />}
                    onClick={handleSortClick}
                >
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
