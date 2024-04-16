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
  id: Scalars['String']['output'];
  publishAt: Scalars['DateTime']['output'];
  volume?: Maybe<Scalars['String']['output']>;
};

export type ChapterImagesDto = {
  __typename?: 'ChapterImagesDTO';
  images: Array<Scalars['String']['output']>;
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

export type GetMangaListInputType = {
  extension: Scalars['String']['input'];
  limit?: InputMaybe<Scalars['Float']['input']>;
  offset?: InputMaybe<Scalars['Float']['input']>;
  options?: InputMaybe<MangaOrderOptionsInput>;
};

export enum ImagesTypeEnum {
  Compressed = 'COMPRESSED',
  Default = 'DEFAULT'
}

export type MangaExtensionDto = {
  __typename?: 'MangaExtensionDTO';
  cover: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  tags: Array<TagDto>;
  title: Scalars['String']['output'];
  type: Scalars['String']['output'];
  year: Scalars['Float']['output'];
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
  fetchMangaList: Array<MangaExtensionDto>;
  getChapterImages: ChapterImagesDto;
  getLibrary: Array<UserLibraryDto>;
  getMangaById: ExtendedMangaDto;
  getReadingHistory: Array<ReadingHistoryDto>;
  searchManga: Array<MangaExtensionDto>;
};


export type QueryFetchMangaListArgs = {
  GetMangaListInputType: GetMangaListInputType;
};


export type QueryGetChapterImagesArgs = {
  GetChapterImagesInputType: GetChapterImagesInputType;
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
  options?: InputMaybe<MangaOrderOptionsInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  year?: InputMaybe<Scalars['Float']['input']>;
};

export type TagDto = {
  __typename?: 'TagDTO';
  group: Scalars['String']['output'];
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

export type GetMangaListQueryVariables = Exact<{
  extension: Scalars['String']['input'];
  limit?: InputMaybe<Scalars['Float']['input']>;
  offset?: InputMaybe<Scalars['Float']['input']>;
  options?: InputMaybe<MangaOrderOptionsInput>;
}>;


export type GetMangaListQuery = { __typename?: 'Query', fetchMangaList: Array<{ __typename?: 'MangaExtensionDTO', id: string, title: string, type: string, description?: string | null, year: number, cover: string, tags: Array<{ __typename?: 'TagDTO', id: string, name: string }> }> };


export const GetMangaListDocument = gql`
    query GetMangaList($extension: String!, $limit: Float, $offset: Float, $options: MangaOrderOptionsInput) {
  fetchMangaList(
    GetMangaListInputType: {extension: $extension, limit: $limit, offset: $offset, options: $options}
  ) {
    id
    title
    type
    description
    year
    cover
    tags {
      id
      name
    }
  }
}
    `;

/**
 * __useGetMangaListQuery__
 *
 * To run a query within a React component, call `useGetMangaListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMangaListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMangaListQuery({
 *   variables: {
 *      extension: // value for 'extension'
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      options: // value for 'options'
 *   },
 * });
 */
export function useGetMangaListQuery(baseOptions: Apollo.QueryHookOptions<GetMangaListQuery, GetMangaListQueryVariables> & ({ variables: GetMangaListQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMangaListQuery, GetMangaListQueryVariables>(GetMangaListDocument, options);
      }
export function useGetMangaListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMangaListQuery, GetMangaListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMangaListQuery, GetMangaListQueryVariables>(GetMangaListDocument, options);
        }
export function useGetMangaListSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetMangaListQuery, GetMangaListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetMangaListQuery, GetMangaListQueryVariables>(GetMangaListDocument, options);
        }
export type GetMangaListQueryHookResult = ReturnType<typeof useGetMangaListQuery>;
export type GetMangaListLazyQueryHookResult = ReturnType<typeof useGetMangaListLazyQuery>;
export type GetMangaListSuspenseQueryHookResult = ReturnType<typeof useGetMangaListSuspenseQuery>;
export type GetMangaListQueryResult = Apollo.QueryResult<GetMangaListQuery, GetMangaListQueryVariables>;