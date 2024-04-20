import { useEffect } from 'react';
import { AppDispatch } from '@/stores/store';
import { MangaStateKey } from '@/types';
import { MANGA_DEFAULT_FETCH_OPTIONS } from '../constants';
import {
    GetMangaQueryVariables,
    useGetMangaQuery
} from '../client/__generated__/graphql';
import { setMangaList } from '../stores/reducers/mangaSlice';
import { MangaExtensionDto } from '../client/__generated__/graphql';

const createFetchAndDispatchMangaList = (dispatch: AppDispatch) => (
    (type: MangaStateKey, options: Record<string, string>) => {
        const variables: GetMangaQueryVariables = {
            ...MANGA_DEFAULT_FETCH_OPTIONS,
            order: options
        };
        const { data, loading } = useGetMangaQuery({ variables });

        useEffect(() => {
            if (data) {
                const mangaList = data.fetchManga.map(({ id, title, cover, latestUploadedChapter }) => ({
                    id,
                    title,
                    cover,
                    latestUploadedChapter
                }));
                dispatch(setMangaList({ type, mangaList: mangaList as MangaExtensionDto[] }));
            }
        }, [data, dispatch]);

        return loading;
    }
);

export const fetchAndDispatchMangaListFactory = (dispatch: AppDispatch) => {
    return {
        popular: createFetchAndDispatchMangaList(dispatch)('popular', { followedCount: 'DESC' }),
        latestUploadedChapter: createFetchAndDispatchMangaList(dispatch)('latestUploadedChapter', { latestUploadedChapter: 'DESC' }),
        lastCreated: createFetchAndDispatchMangaList(dispatch)('lastCreated', { createdAt: 'DESC' })
    };
};
