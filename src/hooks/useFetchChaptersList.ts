import { useEffect, useState } from 'react';
import { AppDispatch } from '../stores/store';
import { setMangaChapters } from '../stores/reducers/mangaItemSlice';
import { ChapterDto, GetChaptersListQueryVariables, OrderEnum, useGetChaptersListQuery } from '../client/__generated__/graphql';
import { MANGA_DEFAULT_FETCH_OPTIONS } from '../constants';

type FetchChaptersListOptions = {
    mangaId: string;
    offset: number;
    order: OrderEnum;
}

const useFetchChaptersList = (dispatch: AppDispatch, options: FetchChaptersListOptions) => {
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const {
        extension,
        chaptersLimit,
        translatedLanguage
    } = MANGA_DEFAULT_FETCH_OPTIONS;

    const currentMangaId = options.mangaId;
    const currentSortOrder = options.order;
    const currentOffset = options.offset;

    const variables: GetChaptersListQueryVariables = {
        extension: extension,
        limit: chaptersLimit,
        mangaId: currentMangaId,
        offset: currentOffset,
        order: currentSortOrder,
        translatedLanguage: translatedLanguage
    };

    const { data, loading } = useGetChaptersListQuery({
        variables: variables,
    });

    useEffect(() => {
        if (data) {
            const chapters = data.getChaptersList.chapters as ChapterDto[];
            const total = data.getChaptersList.total;
            dispatch(setMangaChapters({ chapters, chaptersTotal: total }));
            setIsLoading(false);
        }
    }, [data, dispatch]);

    return isLoading || loading;
}

export default useFetchChaptersList;
