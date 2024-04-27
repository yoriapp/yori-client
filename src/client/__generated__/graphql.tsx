import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
};

export type AddToLibraryInput = {
  mangaId: Scalars['String']['input'];
  status: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type ChapterDto = {
  __typename?: 'ChapterDTO';
  chapter: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  id: Scalars['String']['output'];
  publishAt: Scalars['DateTime']['output'];
  volume?: Maybe<Scalars['String']['output']>;
};

export type ChapterImagesDto = {
  __typename?: 'ChapterImagesDTO';
  images: Array<Scalars['String']['output']>;
};

export type ChaptersListResponse = {
  __typename?: 'ChaptersListResponse';
  chapters: Array<ChapterDto>;
  total: Scalars['Float']['output'];
};

export type ExtendedMangaDto = {
  __typename?: 'ExtendedMangaDTO';
  chapters: Array<ChapterDto>;
  manga: MangaExtensionDto;
};

export type GetChapterImagesInputType = {
  chapterId: Scalars['String']['input'];
  extension: Scalars['String']['input'];
  imagesType?: ImagesTypeEnum;
};

export type GetMangaByIdInputType = {
  extension: Scalars['String']['input'];
  mangaId: Scalars['String']['input'];
};

export type GetMangaChaptersInputType = {
  extension: Scalars['String']['input'];
  limit: Scalars['Float']['input'];
  mangaId: Scalars['String']['input'];
  offset: Scalars['Float']['input'];
  translatedLanguage: Array<Scalars['String']['input']>;
};

export type GetMangaListInputType = {
  extension: Scalars['String']['input'];
  limit?: InputMaybe<Scalars['Float']['input']>;
  offset?: InputMaybe<Scalars['Float']['input']>;
  order?: InputMaybe<MangaOrderOptionsInput>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export enum ImagesTypeEnum {
  Compressed = 'COMPRESSED',
  Default = 'DEFAULT'
}

export type MangaExtensionDto = {
  __typename?: 'MangaExtensionDTO';
  altTitles?: Maybe<Array<Scalars['String']['output']>>;
  artist?: Maybe<Array<Scalars['String']['output']>>;
  author?: Maybe<Array<Scalars['String']['output']>>;
  contentRating?: Maybe<Scalars['String']['output']>;
  cover: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  latestUploadedChapter?: Maybe<Scalars['String']['output']>;
  originalLanguage?: Maybe<Scalars['String']['output']>;
  related?: Maybe<Array<MangaExtensionDto>>;
  state?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Array<TagDto>>;
  title: Scalars['String']['output'];
  type?: Maybe<Scalars['String']['output']>;
  year?: Maybe<Scalars['Float']['output']>;
};

export enum MangaOrderEnum {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type MangaOrderOptionsInput = {
  createdAt?: InputMaybe<MangaOrderEnum>;
  followedCount?: InputMaybe<MangaOrderEnum>;
  latestUploadedChapter?: InputMaybe<MangaOrderEnum>;
  relevance?: InputMaybe<MangaOrderEnum>;
  title?: InputMaybe<MangaOrderEnum>;
  updatedAt?: InputMaybe<MangaOrderEnum>;
  year?: InputMaybe<MangaOrderEnum>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addToLibrary: UserLibraryDto;
  removeFromLibrary: Scalars['Boolean']['output'];
  saveReadingHistory: ReadingHistoryDto;
  updateStatus: UserLibraryDto;
};


export type MutationAddToLibraryArgs = {
  input: AddToLibraryInput;
};


export type MutationRemoveFromLibraryArgs = {
  mangaId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};


export type MutationSaveReadingHistoryArgs = {
  chapterId: Scalars['String']['input'];
  mangaId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};


export type MutationUpdateStatusArgs = {
  input: UpdateStatusInput;
};

export type Query = {
  __typename?: 'Query';
  fetchManga: Array<MangaExtensionDto>;
  fetchMangaByTitle: MangaExtensionDto;
  getChapterImages: ChapterImagesDto;
  getChaptersList: ChaptersListResponse;
  getLibrary: Array<UserLibraryDto>;
  getMangaById: ExtendedMangaDto;
  getReadingHistory: Array<ReadingHistoryDto>;
  searchManga: Array<MangaExtensionDto>;
};


export type QueryFetchMangaArgs = {
  GetMangaListInputType: GetMangaListInputType;
};


export type QueryFetchMangaByTitleArgs = {
  GetMangaListInputType: GetMangaListInputType;
};


export type QueryGetChapterImagesArgs = {
  GetChapterImagesInputType: GetChapterImagesInputType;
};


export type QueryGetChaptersListArgs = {
  GetMangaChaptersInputType: GetMangaChaptersInputType;
};


export type QueryGetLibraryArgs = {
  userId: Scalars['String']['input'];
};


export type QueryGetMangaByIdArgs = {
  GetMangaByIdInputType: GetMangaByIdInputType;
};


export type QueryGetReadingHistoryArgs = {
  userId: Scalars['String']['input'];
};


export type QuerySearchMangaArgs = {
  SearchMangaInputType: SearchMangaInputType;
};

export type ReadingHistoryDto = {
  __typename?: 'ReadingHistoryDTO';
  chapterId: Scalars['String']['output'];
  chapterValue: Scalars['String']['output'];
  mangaId: Scalars['String']['output'];
  timestamp: Scalars['DateTime']['output'];
  userId: Scalars['String']['output'];
};

export type SearchMangaInputType = {
  excludedTags?: InputMaybe<Array<Scalars['String']['input']>>;
  extension: Scalars['String']['input'];
  includedTags?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['Float']['input']>;
  offset?: InputMaybe<Scalars['Float']['input']>;
  order?: InputMaybe<MangaOrderOptionsInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  year?: InputMaybe<Scalars['Float']['input']>;
};

export type TagDto = {
  __typename?: 'TagDTO';
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type UpdateStatusInput = {
  mangaId: Scalars['String']['input'];
  status: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type UserLibraryDto = {
  __typename?: 'UserLibraryDTO';
  mangaId: Scalars['String']['output'];
  status: Scalars['String']['output'];
  userId: Scalars['String']['output'];
};

export type GetChaptersListQueryVariables = Exact<{
  extension: Scalars['String']['input'];
  limit: Scalars['Float']['input'];
  offset: Scalars['Float']['input'];
  mangaId: Scalars['String']['input'];
  translatedLanguage: Array<Scalars['String']['input']> | Scalars['String']['input'];
}>;


export type GetChaptersListQuery = { __typename?: 'Query', getChaptersList: { __typename?: 'ChaptersListResponse', total: number, chapters: Array<{ __typename?: 'ChapterDTO', id: string, volume?: string | null, chapter: string, createdAt: string }> } };

export type GetMangaQueryVariables = Exact<{
  extension: Scalars['String']['input'];
  limit?: InputMaybe<Scalars['Float']['input']>;
  offset?: InputMaybe<Scalars['Float']['input']>;
  order?: InputMaybe<MangaOrderOptionsInput>;
}>;


export type GetMangaQuery = { __typename?: 'Query', fetchManga: Array<{ __typename?: 'MangaExtensionDTO', id: string, title: string, cover: string, latestUploadedChapter?: string | null }> };

export type GetMangaByTitleQueryVariables = Exact<{
  extension: Scalars['String']['input'];
  limit?: InputMaybe<Scalars['Float']['input']>;
  offset?: InputMaybe<Scalars['Float']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetMangaByTitleQuery = { __typename?: 'Query', fetchMangaByTitle: { __typename?: 'MangaExtensionDTO', id: string, title: string, cover: string, altTitles?: Array<string> | null, type?: string | null, description?: string | null, year?: number | null, status?: string | null, state?: string | null, author?: Array<string> | null, artist?: Array<string> | null, contentRating?: string | null, originalLanguage?: string | null, tags?: Array<{ __typename?: 'TagDTO', id: string, type: string, name: string }> | null, related?: Array<{ __typename?: 'MangaExtensionDTO', id: string, title: string, cover: string }> | null } };


export const GetChaptersListDocument = gql`
    query GetChaptersList($extension: String!, $limit: Float!, $offset: Float!, $mangaId: String!, $translatedLanguage: [String!]!) {
  getChaptersList(
    GetMangaChaptersInputType: {extension: $extension, limit: $limit, offset: $offset, mangaId: $mangaId, translatedLanguage: $translatedLanguage}
  ) {
    chapters {
      id
      volume
      chapter
      createdAt
    }
    total
  }
}
    `;

/**
 * __useGetChaptersListQuery__
 *
 * To run a query within a React component, call `useGetChaptersListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetChaptersListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetChaptersListQuery({
 *   variables: {
 *      extension: // value for 'extension'
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      mangaId: // value for 'mangaId'
 *      translatedLanguage: // value for 'translatedLanguage'
 *   },
 * });
 */
export function useGetChaptersListQuery(baseOptions: Apollo.QueryHookOptions<GetChaptersListQuery, GetChaptersListQueryVariables> & ({ variables: GetChaptersListQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetChaptersListQuery, GetChaptersListQueryVariables>(GetChaptersListDocument, options);
      }
export function useGetChaptersListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetChaptersListQuery, GetChaptersListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetChaptersListQuery, GetChaptersListQueryVariables>(GetChaptersListDocument, options);
        }
export function useGetChaptersListSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetChaptersListQuery, GetChaptersListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetChaptersListQuery, GetChaptersListQueryVariables>(GetChaptersListDocument, options);
        }
export type GetChaptersListQueryHookResult = ReturnType<typeof useGetChaptersListQuery>;
export type GetChaptersListLazyQueryHookResult = ReturnType<typeof useGetChaptersListLazyQuery>;
export type GetChaptersListSuspenseQueryHookResult = ReturnType<typeof useGetChaptersListSuspenseQuery>;
export type GetChaptersListQueryResult = Apollo.QueryResult<GetChaptersListQuery, GetChaptersListQueryVariables>;
export const GetMangaDocument = gql`
    query GetManga($extension: String!, $limit: Float, $offset: Float, $order: MangaOrderOptionsInput) {
  fetchManga(
    GetMangaListInputType: {extension: $extension, limit: $limit, offset: $offset, order: $order}
  ) {
    id
    title
    cover
    latestUploadedChapter
  }
}
    `;

/**
 * __useGetMangaQuery__
 *
 * To run a query within a React component, call `useGetMangaQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMangaQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMangaQuery({
 *   variables: {
 *      extension: // value for 'extension'
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      order: // value for 'order'
 *   },
 * });
 */
export function useGetMangaQuery(baseOptions: Apollo.QueryHookOptions<GetMangaQuery, GetMangaQueryVariables> & ({ variables: GetMangaQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMangaQuery, GetMangaQueryVariables>(GetMangaDocument, options);
      }
export function useGetMangaLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMangaQuery, GetMangaQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMangaQuery, GetMangaQueryVariables>(GetMangaDocument, options);
        }
export function useGetMangaSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetMangaQuery, GetMangaQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetMangaQuery, GetMangaQueryVariables>(GetMangaDocument, options);
        }
export type GetMangaQueryHookResult = ReturnType<typeof useGetMangaQuery>;
export type GetMangaLazyQueryHookResult = ReturnType<typeof useGetMangaLazyQuery>;
export type GetMangaSuspenseQueryHookResult = ReturnType<typeof useGetMangaSuspenseQuery>;
export type GetMangaQueryResult = Apollo.QueryResult<GetMangaQuery, GetMangaQueryVariables>;
export const GetMangaByTitleDocument = gql`
    query GetMangaByTitle($extension: String!, $limit: Float, $offset: Float, $title: String) {
  fetchMangaByTitle(
    GetMangaListInputType: {extension: $extension, limit: $limit, offset: $offset, title: $title}
  ) {
    id
    title
    cover
    altTitles
    type
    description
    year
    status
    state
    author
    artist
    contentRating
    originalLanguage
    tags {
      id
      type
      name
    }
    related {
      id
      title
      cover
    }
  }
}
    `;

/**
 * __useGetMangaByTitleQuery__
 *
 * To run a query within a React component, call `useGetMangaByTitleQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMangaByTitleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMangaByTitleQuery({
 *   variables: {
 *      extension: // value for 'extension'
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      title: // value for 'title'
 *   },
 * });
 */
export function useGetMangaByTitleQuery(baseOptions: Apollo.QueryHookOptions<GetMangaByTitleQuery, GetMangaByTitleQueryVariables> & ({ variables: GetMangaByTitleQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMangaByTitleQuery, GetMangaByTitleQueryVariables>(GetMangaByTitleDocument, options);
      }
export function useGetMangaByTitleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMangaByTitleQuery, GetMangaByTitleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMangaByTitleQuery, GetMangaByTitleQueryVariables>(GetMangaByTitleDocument, options);
        }
export function useGetMangaByTitleSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetMangaByTitleQuery, GetMangaByTitleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetMangaByTitleQuery, GetMangaByTitleQueryVariables>(GetMangaByTitleDocument, options);
        }
export type GetMangaByTitleQueryHookResult = ReturnType<typeof useGetMangaByTitleQuery>;
export type GetMangaByTitleLazyQueryHookResult = ReturnType<typeof useGetMangaByTitleLazyQuery>;
export type GetMangaByTitleSuspenseQueryHookResult = ReturnType<typeof useGetMangaByTitleSuspenseQuery>;
export type GetMangaByTitleQueryResult = Apollo.QueryResult<GetMangaByTitleQuery, GetMangaByTitleQueryVariables>;