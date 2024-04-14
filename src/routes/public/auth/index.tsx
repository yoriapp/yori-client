import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Box } from '@mantine/core';

import AuthForm from '../../../components/Auth/AuthForm';

export default function AuthPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const [type, setType] = useState<'login' | 'register'>(() => {
        const pathType = location.state?.type;
        return pathType || 'login';
    });

    useEffect(() => {
        const pathType = location.state?.type;
        if (pathType && pathType !== type) {
            setType(pathType);
        }
    }, [location.state, type]);

    const handleTypeChange = (newType: 'login' | 'register') => {
        setType(newType);
        navigate(location.pathname, { replace: true });
    };

    return (
        <Box
            pt='xl'
            style={{
                paddingTop: '2.5rem',
                maxWidth: '26.25rem',
                marginLeft: 'auto',
                marginRight: 'auto',
            }}>
            <AuthForm type={type} setType={handleTypeChange} />
        </Box>
    );
}