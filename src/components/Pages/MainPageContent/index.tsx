import React from 'react';
import { Box } from '@mantine/core';
import { IconTypeface } from '@tabler/icons-react';
import { Manga } from '../../../types';

import Section from '../../Section';

interface PageSectionsContent {
    title: string;
    buttonText: string;
    icon: typeof IconTypeface;
    mangaItems: Manga[];
}

interface IMainPageContentPage {
    sections: PageSectionsContent[];
}

const MainPageContent: React.FC<IMainPageContentPage> = ({ sections }) => {
    const renderSections = sections.map((section) => (
        <Section 
            key={section.title}
            items={section.mangaItems}
            {...section}
        />
    ));

    return (
        <Box pt='xl'>
            {renderSections}
        </Box>
    );
}

export default MainPageContent;
