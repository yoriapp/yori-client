import { MangaExtensionDto } from '@/client/__generated__/graphql';

export interface User {
    userId: string;
    username: string;
    email: string;
}

export interface AuthUser extends User {
    access_token: string;
}

export interface AuthCredentials {
    email: string;
    password: string;
}

export interface RegisterData extends AuthCredentials {
    username: string;
}

export type MangaStateKey = 'popular' | 'latestUploadedChapter' | 'lastCreated';
export type MangaStates = {
    [key in MangaStateKey]: MangaExtensionDto[];
};
export type Manga = MangaExtensionDto;
