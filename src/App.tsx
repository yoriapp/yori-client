import React, { useEffect, useMemo } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { MantineProvider, Box, Container, Divider } from '@mantine/core';

import { useAppSelector, useAppDispatch } from './hooks/redux';
import { setUser } from './stores/reducers/authSlice';
import { setMangaList } from './stores/reducers/mangaSlice';
import { useValidateUserQuery } from './stores/services/auth';
import { GetMangaListQueryVariables, useGetMangaListQuery, MangaExtensionDto } from './client/__generated__/graphql';

import { MangaStateKey } from './types';
import { MANGA_DEFAULT_FETCH_OPTIONS } from './constants';

import Header from './components/Header';
import { PageLoader } from './components/Loader';

import AuthPage from './routes/public/auth';
import MainPage from './routes/public/main';

const SearchPage = () => { return <Box pt='xl'>Search Content</Box>; };
const ProfilePage = () => { return <Box pt='xl'>Profile Content</Box>; };

function App() {
    const dispatch = useAppDispatch();

    const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
    const token = localStorage.getItem('token') || '';
    const { data: userData, isLoading: userLoading } = useValidateUserQuery(token, {
        skip: Boolean(isLoggedIn) || Boolean(!token)
    });

    const fetchAndDispatchMangaList = useMemo(() => (
        (type: MangaStateKey, options: Record<string, string>) => {
            const variables: GetMangaListQueryVariables = {
                ...MANGA_DEFAULT_FETCH_OPTIONS,
                options: options
            }
            const { data, loading } = useGetMangaListQuery({ variables });

            useEffect(() => {
                if (data) {
                    dispatch(setMangaList({ type, mangaList: data.fetchMangaList as MangaExtensionDto[] }));
                }
            }, [data, dispatch]);

            return loading;
        }
    ), [dispatch]);

    useEffect(() => {
        if (userData && !isLoggedIn) {
            dispatch(setUser(userData));
        }
    }, [userData, dispatch]);

    const popularMangaLoading = fetchAndDispatchMangaList('popular', { relevance: 'DESC' });
    const followedCountMangaLoading = fetchAndDispatchMangaList('followedCount', { followedCount: 'DESC' });
    const latestMangaLoading = fetchAndDispatchMangaList('latestUploaded', { latestUploadedChapter: 'DESC' });

    const isAppPreloading: boolean = userLoading || popularMangaLoading || followedCountMangaLoading || latestMangaLoading;

    return (
        <MantineProvider defaultColorScheme='dark'>
            <Router>
                {isAppPreloading ? (
                    <PageLoader />
                ) : (
                    <>
                        <Header isLoggedIn={isLoggedIn} />
                        <Divider variant='solid' />
                        <Container size='xl'>
                            <Routes>
                                <Route path='/' element={<MainPage />} />
                                <Route path='/auth' element={<AuthPage />} />
                                <Route path='/search' element={<SearchPage />} />

                                {isLoggedIn ? (
                                    <Route path='/profile' element={<ProfilePage />} />
                                ) : (
                                    <Route path='/profile' element={<Navigate to={{ pathname: '/' }} replace />} />
                                )}
                            </Routes>
                        </Container>
                    </>
                )}
            </Router>
        </MantineProvider>
    );
}

export default App;
