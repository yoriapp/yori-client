import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

import { MantineProvider, Box, Container, Divider } from '@mantine/core';

import { useAppSelector, useAppDispatch } from './hooks/redux';
import { setUser } from './stores/reducers/authSlice';
import { useValidateUserQuery } from './stores/services/auth';

import Header from './components/Header';

const MainPage = () => {
    return <Box pt='xl'>Main Content</Box>;
};

const ProfilePage = () => {
    return <Box pt='xl'>Profile Content</Box>;
};

function App() {
    const dispatch = useAppDispatch();
    const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
    const token = Cookies.get('token');

    useEffect(() => {
        if (!!token && !isLoggedIn) {
            const { data: userData, error: userError, isLoading, isError } = useValidateUserQuery(token);

            if (!isLoading && !isError) {
                if (userData) {
                    dispatch(setUser(userData));
                } else if (userError) {
                    console.error('Error validating user:', userError);
                }
            }
        }
    }, [dispatch, isLoggedIn, token]);

    return (
        <MantineProvider defaultColorScheme="dark">
            <Router>
                <Header isLoggedIn={isLoggedIn} />
                <Divider variant="solid" />
                <Container size='xl'>
                    <Routes>
                        <Route path='/' element={<MainPage />} />

                        {isLoggedIn ? (
                            <Route path='/profile' element={<ProfilePage />} />
                        ) : (
                            <Route path='/profile' element={<Navigate to={{ pathname: '/' }} replace />} />
                        )}
                    </Routes>
                </Container>
            </Router>
        </MantineProvider>
    );
}

export default App;
