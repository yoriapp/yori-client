import React from 'react';
import { Box, Grid } from '@mantine/core';

import CustomTabs from '../../General/CustomTabs';
import InfoBox from './InfoBox';
import MangaCover from './MangaCover';
import TabInformation from './TabInformation';
import Titles from './Titles';

import { ChapterDto, MangaExtensionDto } from '@/client/__generated__/graphql';
import TabChapters from './TabChapters';


interface IMangaItemPageContentProps {
    manga: MangaExtensionDto | null;
    chapters: ChapterDto[];
    chaptersTotal: number;
}

type InfoItem = {
    title: string;
    content: string | number | string[];
};

const propertyMapping: { [key: string]: keyof MangaExtensionDto } = {
    'Type': 'type',
    'Year': 'year',
    'State': 'state',
    'Status': 'status',
    'Content Rating': 'contentRating',
    'Original Language': 'originalLanguage',
    'Author': 'author',
    'Artist': 'artist'
};

const MangaItemPageContent: React.FC<IMangaItemPageContentProps> = (
    { manga, chapters, chaptersTotal }
) => {
    if (!manga) {
        return <Box>No manga data available</Box>;
    }

    const { title, altTitles, description, tags, cover, related } = manga;

    const generateInfoItems = (manga: MangaExtensionDto, propertyMapping: { [key: string]: keyof MangaExtensionDto }): InfoItem[] => {
        return Object.entries(propertyMapping).map(([title, propName]) => {
            const content = manga[propName] as string | number | string[];

            return {
                title,
                content
            };
        });
    };


    const infoItems = generateInfoItems(manga, propertyMapping);

    const contentTabs = [
        {
            value: 'information',
            children: (
                <TabInformation
                    description={description ?? ''}
                    tags={tags ?? []}
                    related={related ?? []}
                />
            )
        },
        {
            value: 'chapters',
            children: <TabChapters mangaId={manga.id} chapters={chapters} chapterTotal={chaptersTotal} />
        }
    ];

    return (
        <Box pt='xl'>
            <Grid gutter={{ base: 5, xs: 'md', md: 'xl', xl: 40 }}>
                <Grid.Col span={3}>
                    <MangaCover coverImage={cover} />
                    <InfoBox mt={20} p={12} items={infoItems} />
                </Grid.Col>
                <Grid.Col span={9}>
                    <Titles title={title} altTitle={altTitles?.[0]} />
                    <CustomTabs tabs={contentTabs} />
                </Grid.Col>
            </Grid>
        </Box>
    );
}

export default MangaItemPageContent;
