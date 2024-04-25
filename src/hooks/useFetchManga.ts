import { useEffect, useState } from 'react';
import { AppDispatch } from '../stores/store';
import { setMangaItem } from '../stores/reducers/mangaItemSlice';

import {
    MangaExtensionDto,
    ChapterDto,
    GetMangaByTitleQueryVariables,
    useGetMangaByTitleQuery,
    useGetChaptersListQuery,
} from '../client/__generated__/graphql';
import { MANGA_DEFAULT_FETCH_OPTIONS } from '../constants';

const useFetchMangaByTitle = (dispatch: AppDispatch, options: GetMangaByTitleQueryVariables) => {
    const [manga, setManga] = useState<MangaExtensionDto | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    const { extension, offset, chaptersLimit, translatedLanguage } = MANGA_DEFAULT_FETCH_OPTIONS;

    const chaptersQueryOptions = {
        extension,
        offset,
        limit: chaptersLimit,
        translatedLanguage,
    };

    const { data: mangaData, loading: mangaLoading } = useGetMangaByTitleQuery({ variables: options });
    const { data: chaptersData, loading: chaptersLoading } = useGetChaptersListQuery({
        variables: { ...chaptersQueryOptions, mangaId: manga?.id ?? '' },
        skip: !manga,
    });

    useEffect(() => {
        if (mangaData) {
            setManga(mangaData.fetchMangaByTitle);
        }
    }, [mangaData]);

    useEffect(() => {
        if (manga && chaptersData) {
            const chapters = chaptersData.getChaptersList.chapters as ChapterDto[];
            const total = chaptersData.getChaptersList.total;
            dispatch(setMangaItem({ content: manga, chapters, chaptersTotal: total }))
            setIsLoading(false);
        }
    }, [manga, chaptersData, dispatch]);

    return isLoading || mangaLoading || chaptersLoading;
};

export default useFetchMangaByTitle;
