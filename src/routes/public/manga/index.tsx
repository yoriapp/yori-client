import React from 'react';
import { Box, Loader } from '@mantine/core';
import { useParams } from 'react-router-dom';

import { MANGA_DEFAULT_FETCH_OPTIONS } from '../../../constants';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import MangaItemPageContentDesktop from '../../../components/Pages/MangaItemPageContent/Desktop';
import useFetchMangaByTitle from '../../../hooks/useFetchManga';

export default function MangaItemPage() {
    const { name } = useParams();
    const dispatch = useAppDispatch();

    const { content, chapters, chaptersTotal } = useAppSelector((state) => state.mangaItem);

    const mangaItemLoading = useFetchMangaByTitle(dispatch, {
        extension: MANGA_DEFAULT_FETCH_OPTIONS.extension,
        limit: 1,
        offset: 0,
        title: name
    });

    const loading = mangaItemLoading;

    if (loading) {
        return (
            <Box style={{ height: 'calc(100vh - 100px)', overflowY: 'auto' }}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100%' }}>
                    <Loader size={30} color='violet' />
                </div>
            </Box>
        );
    }

    return (
        <MangaItemPageContentDesktop 
            manga={content} 
            chapters={chapters}
            chaptersTotal={chaptersTotal}
        />
    );
}
