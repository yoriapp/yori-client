import { ChapterDto, MangaExtensionDto } from '@/client/__generated__/graphql';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface MangaItemState {
    content: MangaExtensionDto | null;
    chapters: ChapterDto[];
    chaptersTotal: number;
}

const initialState: MangaItemState = {
    content: null,
    chapters: [],
    chaptersTotal: 0
};

const mangaItemSlice = createSlice({
    name: 'mangaItem',
    initialState,
    reducers: {
        setMangaItem(state, action: PayloadAction<{ content: MangaExtensionDto, chapters: ChapterDto[], chaptersTotal: number }>) {
            const { content } = action.payload;
            state.content = content;
        }
    },
});

export const { setMangaItem } = mangaItemSlice.actions;
export default mangaItemSlice.reducer;
