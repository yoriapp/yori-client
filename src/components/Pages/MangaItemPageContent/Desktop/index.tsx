import React from 'react';
import { Box, Grid } from '@mantine/core';

import CustomTabs from '../../../CustomTabs';
import InfoBox from '../../../InfoBox';
import MangaCover from './MangaCover';
import TabInformation from './TabInformation';
import Titles from './Titles';

interface MangaItem {
    title: string;
    altTitles: string[];
    desc: string;
    coverImage: string;
    type: string;
    format: string;
    year: number;
    status: string;
    author: string;
    ageRating: string;
    originalLanguage: string;
    totalChapters: number;
    tags: string[];
    related: string[] | null;
    similar: string[] | null;
}

interface IMangaItemPageContentProps {
    userStatus?: string | null;
    userScore?: number | null;
    manga: MangaItem;
    chapters?: string[];
}

type InfoItem = {
    title: string;
    content: string | number;
};

const propertyMapping: { [key: string]: keyof MangaItem } = {
    'Type': 'type',
    'Format': 'format',
    'Year': 'year',
    'Status': 'status',
    'Author': 'author',
    'Age Rating': 'ageRating',
    'Total Chapters': 'totalChapters'
};

const MangaItemPageContent: React.FC<IMangaItemPageContentProps> = ({ manga }) => {
    const { title, altTitles, desc, tags, coverImage } = manga;
    const generateInfoItems = (manga: MangaItem, propertyMapping: { [key: string]: keyof MangaItem }): InfoItem[] => {
        return Object.entries(propertyMapping).map(([title, propName]) => ({
            title,
            content: manga[propName] as string | number
        }));
    };

    const infoItems = generateInfoItems(manga, propertyMapping);

    const contentTabs = [
        { 
            value: 'information', 
            children: <TabInformation description={desc} tags={tags} /> 
        }
    ];

    return (
        <Box pt='xl'>
            <Grid gutter={{ base: 5, xs: 'md', md: 'xl', xl: 40 }}>
                <Grid.Col span={3}>
                    <MangaCover coverImage={coverImage} />
                    <InfoBox mt={20} p={12} items={infoItems} />
                </Grid.Col>
                <Grid.Col span={9}>
                    <Titles title={title} altTitle={altTitles[0]} />
                    <CustomTabs tabs={contentTabs} />
                </Grid.Col>
            </Grid>
        </Box>
    );
}

export default MangaItemPageContent;
