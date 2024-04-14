import React, { useState } from 'react';
import { Paper, Text, TextInput, Divider, Anchor, Button, Group, Stack } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useToggle, upperFirst } from '@mantine/hooks';

import { useAppDispatch } from '../../hooks/redux';
import { useLoginMutation, useRegisterMutation } from '../../stores/services/auth';

import { AUTH_FORM } from '../../constants';

import { EmailInput, PasswordInput, SocialButtons, TermsCheckbox } from './FormComponents';

interface IAuthFormProps {
    type: 'login' | 'register';
    setType: (type: 'login' | 'register') => void;
}

export default function AuthForm({ type, setType }: IAuthFormProps) {
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
        if (type === 'login') await login(form.values);
        else await register(form.values);
    };

    const generatedAuthFormText = type === 'login' ? AUTH_FORM.LOGIN_TEXT : AUTH_FORM.REGISTER_TEXT;

    return (
        <Paper radius='md' p='xl' withBorder>
            <Text size='lg' fw={500}>{generatedAuthFormText}</Text>
            <SocialButtons />
            <Divider label='Or continue with email' labelPosition='center' my='lg' />
            <form onSubmit={handleSubmit}>
                <Stack>
                    {type === 'register' && <TextInput label="Username" placeholder="Your username" value={form.values.username} onChange={(event) => form.setFieldValue('name', event.currentTarget.value)} radius="md" />}
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
                <Group justify="space-between" mt="xl">
                    <Anchor component="button" type="button" c="dimmed" onClick={() => setType(type === 'register' ? 'login' : 'register')} size="xs">
                        {type === 'register' ? 'Already have an account? Login' : "Don't have an account? Register"}
                    </Anchor>
                    <Button type="submit" radius="xl" loading={loginResult.isLoading || registerResult.isLoading}>
                        {upperFirst(type)}
                    </Button>
                </Group>
            </form>
        </Paper>
    );
}
