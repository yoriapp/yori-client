import React from 'react';
import { useParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import useFetchMangaByTitle from '../../../hooks/useFetchManga';

import { MANGA_DEFAULT_FETCH_OPTIONS } from '../../../constants';

import { ContentLoader } from '../../../components/General/Loader';
import MangaItemPageContent from '../../../components/Pages/mangaContent';

export default function MangaItemPage() {
    const { name } = useParams();
    const dispatch = useAppDispatch();

    const { content, chapters, chaptersTotal } = useAppSelector((state) => state.mangaItem);

    const loading = useFetchMangaByTitle(dispatch, {
        extension: MANGA_DEFAULT_FETCH_OPTIONS.extension,
        title: name
    });

    console.log(content);

    if (loading) {
        return <ContentLoader />;
    }

    return (
        <MangaItemPageContent 
            manga={content} 
            chapters={chapters}
            chaptersTotal={chaptersTotal}
        />
    );
}
