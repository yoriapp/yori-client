import React from 'react';

import MangaItemPageContentDesktop from '../../../components/Pages/MangaItemPageContent/Desktop';

interface MangaItem {
    title: string;
    altTitles: string[];
    desc: string;
    coverImage: string;
    type: string;
    format: string;
    year: number;
    status: string;
    author: string;
    ageRating: string;
    originalLanguage: string;
    totalChapters: number;
    tags: string[];
    related: string[] | null;
    similar: string[] | null;
}

interface MangaItemPageData {
    userStatus: string | null;
    userScore: number | null;
    manga: MangaItem;
    chapters: string[];
}

const mock: MangaItemPageData = {
    userStatus: null,
    userScore: null,
    manga: {
        title: 'Martial Peak',
        altTitles: ['Wǔ Liàn Diān Fēng', '武炼巅峰'],
        desc: 'The path to the top of martial arts is a lonely and long journey. In the face of adversity, you must remain strong and unstoppable. Only then can you overcome all obstacles and become truly strong. The Heavenly Pavilion trains its students in the harshest way possible so that they can endure in the world of martial arts. But just because of one very minor transgression, our protagonist, Yang Kai, can be expelled from the Heavenly Pavilion, and understand the path of the great Tao.',
        ageRating: '16+',
        author: 'Mo mo',
        coverImage: 'https://preview.redd.it/6wlxkueclh571.jpg?width=640&crop=smart&auto=webp&s=d03939dcb773884d708544b1a7dae0b849da5aec',
        format: 'web',
        related: null,
        similar: null,
        status: 'Ongoing',
        tags: ['Action', 'Action', 'Adventure', 'Fantasy', 'Martial Arts', 'Shounen', 'Adventure', 'Fantasy', 'Martial Arts', 'Shounen', 'Cultivation', 'Action', 'Adventure', 'Fantasy', 'Martial Arts', 'Shounen', 'Cultivation'],
        totalChapters: 3699,
        type: 'Manhua',
        year: 2018,
        originalLanguage: 'JA'
    },
    chapters: ['id-1', 'id-2']
}

export default function MangaItemPage() {
    const renderDesktopMangaItemPage = () => <MangaItemPageContentDesktop manga={mock.manga} />

    return renderDesktopMangaItemPage();
}