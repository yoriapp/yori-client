import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Paper,
    Text,
    Divider,
    Anchor,
    Group,
} from '@mantine/core';

import { useAppDispatch } from '../../hooks/redux';
import { setUser } from '../../stores/reducers/authSlice';

import { LoginForm } from './LoginForm';
import { RegisterForm } from './RegisterForm';
import { AuthUser } from '@/types';
import { AUTH_FORM } from '../../constants';

interface IAuthFormProps {
    type: 'login' | 'register';
    setType: (type: 'login' | 'register') => void;
}

export default function AuthForm({ type, setType }: IAuthFormProps) {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const handleSuccess = (userData: AuthUser) => {
        dispatch(setUser(userData));
        navigate({ pathname: '/' });
    };

    const generatedAuthFormText = type === 'login' ? AUTH_FORM.LOGIN_TEXT : AUTH_FORM.REGISTER_TEXT;

    return (
        <Paper radius='md' p='xl' withBorder>
            <Text size='lg' fw={500}>{generatedAuthFormText}</Text>
            <Divider my='lg' />
            {type === 'login' ? <LoginForm onSuccess={handleSuccess} /> : <RegisterForm onSuccess={handleSuccess} />}
            <Group justify='space-between' mt='xl'>
                <Anchor component='button' type='button' c='dimmed' onClick={() => setType(type === 'register' ? 'login' : 'register')} size='xs'>
                    {type === 'register' ? 'Already have an account? Login' : "Don't have an account? Register"}
                </Anchor>
            </Group>
        </Paper>
    );
}
