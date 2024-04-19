import React, { useState } from 'react';
import { Button, Box } from '@mantine/core';
import { IconDots } from '@tabler/icons-react';

import classes from './styles.module.css';

interface ITagsProps {
    tags: string[];
}

const Tags: React.FC<ITagsProps> = ({ tags }) => {
    const [showAll, setShowAll] = useState<boolean>(false);
    const maxTagsToShow = 13;

    const displayedTags: string[] = showAll ? tags : tags.slice(0, maxTagsToShow);
    const hiddenTagsCount: number = tags.length - displayedTags.length;

    const toggleShowAll = () => setShowAll(!showAll);

    return (
        <Box className={classes.tagsWrapper}>
            {displayedTags.map((tag, index) => (
                <Button
                    key={index}
                    variant='light'
                    color='gray'
                    radius='sm'
                    size='xs'
                    mt={10}
                    mr={5}
                >
                    {tag}
                </Button>
            ))}
            {hiddenTagsCount > 0 && (
                <Button
                    variant='light'
                    color='gray'
                    radius='sm'
                    size='xs'
                    mt={10}
                    mr={5}
                    onClick={toggleShowAll}
                >
                    <IconDots />
                </Button>
            )}
        </Box>
    );
}

export default Tags;
