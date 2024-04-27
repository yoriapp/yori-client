import { useEffect, useState } from 'react';
import { AppDispatch } from '../stores/store';
import { setMangaItem } from '../stores/reducers/mangaItemSlice';

import {
    MangaExtensionDto,
    GetMangaByTitleQueryVariables,
    useGetMangaByTitleQuery,
} from '../client/__generated__/graphql';

const useFetchMangaByTitle = (dispatch: AppDispatch, options: GetMangaByTitleQueryVariables) => {
    const [manga, setManga] = useState<MangaExtensionDto | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    const { data: mangaData, loading: mangaLoading } = useGetMangaByTitleQuery({ variables: options });

    useEffect(() => {
        if (mangaData) {
            setManga(mangaData.fetchMangaByTitle);
        }
    }, [mangaData]);

    useEffect(() => {
        if (manga) {
            dispatch(setMangaItem({ content: manga }))
            setIsLoading(false);
        }
    }, [manga, dispatch]);

    return isLoading || mangaLoading;
};

export default useFetchMangaByTitle;
