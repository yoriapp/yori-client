import React from 'react';
import { Box } from '@mantine/core';
import { IconStar } from '@tabler/icons-react';
import { useAppSelector } from '../../../hooks/redux';

import Section from '../../../components/Section';

export default function MainPage() {
    const popularMangaItems = useAppSelector((state) => state.manga.popular);

    return (
        <Box pt='xl'>
            <Section
                title='Popular Manga'
                buttonText='View All'
                icon={IconStar}
                items={popularMangaItems}
            />
        </Box>
    );
}