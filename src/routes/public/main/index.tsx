import React from 'react';
import { IconStar, IconCalendar, IconSquarePlus, IconTypeface } from '@tabler/icons-react';
import { useAppSelector } from '../../../hooks/redux';
import { DEFAULT_SECTIONS_BUTTON_TEXT, PAGE_SECTIONS } from '../../../constants';
import MainPageContent from '../../../components/Pages/MainPageContent';
import { Manga } from '../../../types';

export default function MainPage() {
    const popularMangaItems = useAppSelector((state) => state.manga.popular);
    const latestUploadedChapterMangaList = useAppSelector((state) => state.manga.latestUploadedChapter);
    const lastCreatedMangaItems = useAppSelector((state) => state.manga.lastCreated);

    const sections: Array<{
        title: string,
        buttonText: string,
        icon: typeof IconTypeface,
        mangaItems: Manga[]
    }> = [
            {
                title: PAGE_SECTIONS.POPULAR,
                buttonText: DEFAULT_SECTIONS_BUTTON_TEXT,
                icon: IconStar,
                mangaItems: popularMangaItems
            },
            {
                title: PAGE_SECTIONS.LATEST_UPDATED,
                buttonText: DEFAULT_SECTIONS_BUTTON_TEXT,
                icon: IconCalendar,
                mangaItems: latestUploadedChapterMangaList
            },
            {
                title: PAGE_SECTIONS.NEW,
                buttonText: DEFAULT_SECTIONS_BUTTON_TEXT,
                icon: IconSquarePlus,
                mangaItems: lastCreatedMangaItems
            },
        ];

    const renderPageContent = () => <MainPageContent sections={sections} />;

    return renderPageContent();
}
