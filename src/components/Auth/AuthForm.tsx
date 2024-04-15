import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Alert,
    Paper,
    Text,
    TextInput,
    Divider,
    Anchor,
    Button,
    Group,
    Stack,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { upperFirst } from '@mantine/hooks';
import { IconInfoCircle } from '@tabler/icons-react';

import { useAppDispatch } from '../../hooks/redux';
import { useLoginMutation, useRegisterMutation } from '../../stores/services/auth';
import { setUser } from '../../stores/reducers/authSlice';

import { AUTH_FORM } from '../../constants';

import { EmailInput, PasswordInput, SocialButtons } from './FormComponents';
import { AuthUser } from '@/types';

interface IAuthFormProps {
    type: 'login' | 'register';
    setType: (type: 'login' | 'register') => void;
}

function getErrorText(error: any): string {
    return error.data.message;
}

export default function AuthForm({ type, setType }: IAuthFormProps) {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const form = useForm({
        initialValues: { email: '', username: '', password: '' },
        validate: {
            email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
            password: (val) => (val.length <= 6 ? 'Password should include at least 6 characters' : null),
        },
    });

    const [login, loginResult] = useLoginMutation();
    const [register, registerResult] = useRegisterMutation();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const { username, email, password } = form.values;
        if (type === 'login') await login({ email, password });
        else await register({ username, email, password });
    };

    const generatedAuthFormText = type === 'login' ? AUTH_FORM.LOGIN_TEXT : AUTH_FORM.REGISTER_TEXT;

    const handleAlertClose = () => {
        loginResult.reset();
        registerResult.reset();
    };

    useEffect(() => {
        if (loginResult.data || registerResult.data) {
            const userData = loginResult.data || registerResult.data;
            dispatch(setUser(userData as AuthUser));
            navigate({ pathname: '/' });
        }
    }, [loginResult.data, registerResult.data]);

    return (
        <Paper radius='md' p='xl' withBorder>
            <Text size='lg' fw={500}>{generatedAuthFormText}</Text>
            <SocialButtons />
            <Divider label='Or continue with email' labelPosition='center' my='lg' />
            {loginResult.error && (
                <Alert
                    variant='outline'
                    color='red'
                    withCloseButton
                    onClose={handleAlertClose}
                    title={getErrorText(loginResult.error)}
                    icon={<IconInfoCircle />}
                    mt={10}
                    mb={10}
                />
            )}
            {registerResult.error && (
                <Alert
                    variant='outline'
                    color='red'
                    withCloseButton
                    onClose={handleAlertClose}
                    title={getErrorText(registerResult.error)}
                    icon={<IconInfoCircle />}
                    mt={10}
                    mb={10}
                />
            )}
            <form onSubmit={handleSubmit}>
                <Stack>
                    {type === 'register' && (
                        <TextInput
                            required
                            label='Username'
                            placeholder='Your username'
                            value={form.values.username}
                            onChange={(event) => form.setFieldValue('username', event.currentTarget.value)}
                            radius='md'
                        />
                    )}
                    <EmailInput
                        value={form.values.email}
                        onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
                        error={form.errors.password ? String(form.errors.password) : null}
                    />
                    <PasswordInput
                        value={form.values.password}
                        onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
                        error={form.errors.password ? String(form.errors.password) : null}
                    />
                </Stack>
                <Group justify='space-between' mt='xl'>
                    <Anchor component='button' type='button' c='dimmed' onClick={() => setType(type === 'register' ? 'login' : 'register')} size='xs'>
                        {type === 'register' ? 'Already have an account? Login' : "Don't have an account? Register"}
                    </Anchor>
                    <Button type='submit' radius='xl' loading={loginResult.isLoading || registerResult.isLoading}>
                        {upperFirst(type)}
                    </Button>
                </Group>
            </form>
        </Paper>
    );
}
