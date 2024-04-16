import React from 'react';
import { Box } from '@mantine/core';
import { useAppSelector } from '../../../hooks/redux';

export default function MainPage() {
    const popularMangaItems = useAppSelector((state) => state.manga.popular);
    const followedCountMangaItems = useAppSelector((state) => state.manga.followedCount);
    const latestMangaItems = useAppSelector((state) => state.manga.latestUploaded);

    console.log({
        popularMangaItems,
        followedCountMangaItems,
        latestMangaItems
    });

    return <Box pt='xl'>Main Content</Box>;
}