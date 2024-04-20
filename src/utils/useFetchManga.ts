import { useEffect } from 'react';
import { AppDispatch } from '../stores/store';
import { setMangaItem } from '../stores/reducers/mangaItemSlice';

import { MangaExtensionDto, GetMangaByTitleQueryVariables, useGetMangaByTitleQuery } from '../client/__generated__/graphql';

const useFetchMangaByTitle = (dispatch: AppDispatch, options: GetMangaByTitleQueryVariables) => {
    const { data, loading } = useGetMangaByTitleQuery({ variables: options });

    useEffect(() => {
        if (data) {
            const mangaItem: MangaExtensionDto = data.fetchMangaByTitle;
            dispatch(setMangaItem({ content: mangaItem, chapters: [], chaptersTotal: 0 }));
        }
    }, [data, dispatch]);

    return loading;
};

export default useFetchMangaByTitle;
