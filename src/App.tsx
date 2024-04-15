import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import { MantineProvider, Box, Container, Divider } from '@mantine/core';

import { useAppSelector, useAppDispatch } from './hooks/redux';
import { setUser } from './stores/reducers/authSlice';
import { useValidateUserQuery } from './stores/services/auth';

import Header from './components/Header';
import { PageLoader } from './components/Loader';

import AuthPage from './routes/public/auth';

const MainPage = () => {
    return <Box pt='xl'>Main Content</Box>;
};

const SearchPage = () => {
    return <Box pt='xl'>Search Content</Box>;
};

const ProfilePage = () => {
    return <Box pt='xl'>Profile Content</Box>;
};

function App() {
    const dispatch = useAppDispatch();
    const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
    const user = useAppSelector((state) => state.auth.user);
    const token = localStorage.getItem('token') || '';
    const { data: userData, isLoading: userLoading } = useValidateUserQuery(token, { 
        skip: Boolean(isLoggedIn) || Boolean(!token)
    });

    console.log('Redux Store:', { isLoggedIn, user });

    useEffect(() => {
        if (userData && !isLoggedIn) {
            dispatch(setUser(userData));
        }
    }, [userData, dispatch]);

    return (
        <MantineProvider defaultColorScheme='dark'>
            <Router>
                {userLoading ? (
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
