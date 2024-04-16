import React from 'react';
import { Box, Button, Grid, Text } from '@mantine/core';
import { IconStar } from '@tabler/icons-react';
import { useAppSelector } from '../../../hooks/redux';

import CardItem from '../../../components/CardItem';

export default function MainPage() {
    const popularMangaItems = useAppSelector((state) => state.manga.popular);

    const renderPopularMangaItems = popularMangaItems?.map((item) => (
        <Grid.Col key={item.id} span={{ base: 6, md: 3, lg: 2 }}>
            <CardItem image={item.cover} title={item.title} />
        </Grid.Col>
    ));

    return (
        <Box pt='xl'>
            <Box style={{ backgroundColor: '#202020', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px', borderRadius: '8px' }} mb={20}>
                <Box style={{ display: 'flex', alignItems: 'center' }}>
                    <Box style={{ backgroundColor: 'rgba(45, 45, 45, 1)', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <IconStar />
                    </Box>
                    <Text style={{ marginLeft: '16px' }} fw={700}>Popular Manga</Text>
                </Box>
                <Button size='xs' variant='filled' color='rgba(45, 45, 45, 1)' style={{ padding: '8px 16px' }}>View All</Button>
            </Box>

            <Grid mb={20}>
                {renderPopularMangaItems}
            </Grid>
        </Box>
    );
}