import React from 'react';
import { Box, Grid } from '@mantine/core';
import SectionHeader, { ISectionHeaderProps } from './SectionHeader';
import { MangaExtensionDto } from '@/client/__generated__/graphql';

import { DefaultCard } from '../General/Card';

interface ISection extends ISectionHeaderProps {
    items: MangaExtensionDto[];
}

const Section: React.FC<ISection> = (props) => {
    const { items, ...otherProps } = props;

    const renderItems = items?.map((item) => (
        <Grid.Col key={item.id} span={{ base: 6, md: 3, lg: 2 }}>
            <DefaultCard
                image={item.cover}
                title={item.title}
                latestChapter={item.latestUploadedChapter || ''}
            />
        </Grid.Col>
    ));

    return (
        <Box>
            <SectionHeader {...otherProps} />
            <Grid mb={20}>
                {renderItems}
            </Grid>
        </Box>
    );
}

export default Section;
