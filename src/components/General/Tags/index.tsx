import React, { useState } from 'react';
import { Button, Box } from '@mantine/core';
import { IconDots } from '@tabler/icons-react';

import classes from './styles.module.css';
import { TagDto } from '@/client/__generated__/graphql';

interface ITagsProps {
    tags: TagDto[];
}

const Tags: React.FC<ITagsProps> = ({ tags }) => {
    const [showAll, setShowAll] = useState<boolean>(false);
    const maxTagsToShow = 13;

    const displayedTags: TagDto[] = showAll ? tags : tags.slice(0, maxTagsToShow);
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
                    {tag.name}
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
