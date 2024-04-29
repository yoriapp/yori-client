import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { MantineProvider, Box, Container, Divider } from '@mantine/core';

import { useAppSelector, useAppDispatch } from './hooks/redux';
import { setUser } from './stores/reducers/authSlice';
import { useValidateUserQuery } from './stores/services/auth';

import { fetchAndDispatchMangaListFactory } from './utils/useFetchMangaList';

import Header from './components/Header';
import { PageLoader } from './components/General/Loader';

import AuthPage from './routes/public/auth';
import MainPage from './routes/public/main';
import MangaItemPage from './routes/public/manga';

const SearchPage = () => { return <Box pt='xl'>Search Content</Box>; };
const ProfilePage = () => { return <Box pt='xl'>Profile Content</Box>; };

function App() {
    const dispatch = useAppDispatch();

    const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
    const token = localStorage.getItem('token') || '';
    const { data: userData, isLoading: userLoading } = useValidateUserQuery(token, {
        skip: Boolean(isLoggedIn) || Boolean(!token)
    });

    const mangaListFetchers = fetchAndDispatchMangaListFactory(dispatch);

    useEffect(() => {
        if (userData && !isLoggedIn) {
            dispatch(setUser(userData));
        }
    }, [userData, dispatch]);

    const popularMangaLoading = mangaListFetchers.popular;
    const latestUploadedChapterMangaLoading = mangaListFetchers.latestUploadedChapter;
    const lastCreatedMangaLoading = mangaListFetchers.lastCreated;

    const isAppPreloading: boolean =
        userLoading ||
        popularMangaLoading ||
        latestUploadedChapterMangaLoading ||
        lastCreatedMangaLoading;

    return (
        <MantineProvider defaultColorScheme='dark'>
            <Router>
                {isAppPreloading ? (
                    <PageLoader />
                ) : (
                    <>
                        <Header isLoggedIn={isLoggedIn} />
                        <Divider variant='solid' />
                        <Container size='lg'>
                            <Routes>
                                <Route path='/' element={<MainPage />} />
                                <Route path='/:name' element={<MangaItemPage />} />
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
