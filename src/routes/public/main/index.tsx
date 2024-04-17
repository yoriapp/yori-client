import React from 'react';
import { Box } from '@mantine/core';
import { IconStar, IconCalendar, IconSquarePlus } from '@tabler/icons-react';
import { useAppSelector } from '../../../hooks/redux';

import Section from '../../../components/Section';

export default function MainPage() {
    const popularMangaItems = useAppSelector((state) => state.manga.popular);
    const latestUploadedChapterMangaList = 
        useAppSelector((state) => state.manga.latestUploadedChapter);
    const lastCreatedMangaItems = useAppSelector((state) => state.manga.lastCreated);

    return (
        <Box pt='xl'>
            <Section
                title='Popular Manga'
                buttonText='View All'
                icon={IconStar}
                items={popularMangaItems}
            />
            <Section
                title='Latest Updates'
                buttonText='View All'
                icon={IconCalendar}
                items={latestUploadedChapterMangaList}
            />
            <Section
                title='New Manga'
                buttonText='View All'
                icon={IconSquarePlus}
                items={lastCreatedMangaItems}
            />
        </Box>
    );
}