import React from 'react';
import { Box, Button, Divider, Text, Pagination } from '@mantine/core';
import { IconArrowsSort, IconEye, IconEyeOff } from '@tabler/icons-react';
import { ChapterDto } from '@/client/__generated__/graphql';

import classes from './styles.module.css';

interface ITabChapters {
    chapters: ChapterDto[];
    chapterTotal: number;
}

const TabChapters: React.FC<ITabChapters> = ({ chapters, chapterTotal }) => {
    const [activePage, setPage] = React.useState<number>(1);
    const itemsPerPage = 30;
    const startIndex = (activePage - 1) * itemsPerPage;
    const visibleChapters = chapters.slice(startIndex, startIndex + itemsPerPage);

    const items = visibleChapters.map((item) => (
        <Box key={item.id} p={8} className={classes.chapterBox}>
            <Box className={classes.chapterBoxContent}>
                <IconEye size={18} />
                <Text size='sm' className={classes.chapterBoxText}>
                    {`Vol. ${item.volume} Ch. ${item.chapter}`}
                </Text>
            </Box>
            <Text size='sm' style={{ color: '#858585' }}>{item.createdAt}</Text>
        </Box>
    ));

    return (
        <>
            <Box>
                <Button leftSection={<IconArrowsSort size={20} />} mt={8} size='xs' variant='transparent' color='gray'>Sort chapters</Button>
                <Divider my='xs' />
            </Box>
            {items}
            <Box style={{ display: 'flex', justifyContent: 'center' }}>
                <Pagination total={chapterTotal} value={activePage} onChange={setPage} mt='sm' color='gray' />
            </Box>
        </>
    );
}

export default TabChapters;
