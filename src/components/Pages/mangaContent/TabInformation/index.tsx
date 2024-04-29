import React from 'react';
import { Box } from '@mantine/core';

import { TagDto, RelatedMangaDto } from '@/client/__generated__/graphql';

import LongText from '../../../Text/LongText';
import Tags from '../../../General/Tags';
import { ShortCard } from '../../../General/Card';
import Carousel from '../../../General/Carousel';

interface ITabInformationProps {
    description: string;
    tags: TagDto[];
    related?: RelatedMangaDto[] | null;
}

const TabInformation: React.FC<ITabInformationProps> = ({ description, tags, related }) => {
    const relatedItems = related?.map((item) => (
        <ShortCard key={item.id} title={item.title} image={item.cover} />
    ));

    return (
        <Box>
            <LongText mt={10} text={description} maxLength={440} />
            <Tags tags={tags} />
            {relatedItems && relatedItems.length > 0 && <Carousel title='Related' items={relatedItems} />}
        </Box>
    );
}

export default TabInformation;
