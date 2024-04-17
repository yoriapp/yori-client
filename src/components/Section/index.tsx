import React from 'react';
import { Grid } from '@mantine/core';
import SectionHeader, { ISectionHeaderProps } from '../SectionHeader';
import { MangaExtensionDto } from '@/client/__generated__/graphql';

import CardItem from '../CardItem';

interface ISection extends ISectionHeaderProps {
    items: MangaExtensionDto[];
}

const Section: React.FC<ISection> = (props) => {
    const { items, ...otherProps } = props;

    const renderItems = items?.map((item) => (
        <Grid.Col key={item.id} span={{ base: 6, md: 3, lg: 2 }}>
            <CardItem image={item.cover} title={item.title} />
        </Grid.Col>
    ));

    return (
        <>
            <SectionHeader {...otherProps} />
            <Grid mb={20}>
                {renderItems}
            </Grid>
        </>
    );
}

export default Section;
