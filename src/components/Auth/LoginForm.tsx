import React from 'react';
import {
    Alert,
    Button,
    Stack,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { useLoginMutation } from '../../stores/services/auth';
import { EmailInput, PasswordInput } from './FormComponents';
import { IconInfoCircle } from '@tabler/icons-react';
import { AuthUser } from '@/types';

interface IFormProps {
    onSuccess: (userData: AuthUser) => void;
}

function getErrorText(error: any): string {
    return error.data.message;
}

export function LoginForm({ onSuccess }: IFormProps) {
    const form = useForm({
        initialValues: { email: '', password: '' },
        validate: {
            email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
            password: (val) => (val.length <= 6 ? 'Password should include at least 6 characters' : null),
        },
    });

    const [login, loginResult] = useLoginMutation();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const { email, password } = form.values;
        const result = await login({ email, password });

        if ('data' in result && result.data) {
            onSuccess(result.data as AuthUser);
        }
    };

    return (
        <>
            {loginResult.error && (
                <Alert
                    variant='outline'
                    color='red'
                    withCloseButton
                    onClose={() => loginResult.reset()}
                    title={getErrorText(loginResult.error)}
                    icon={<IconInfoCircle />}
                    mt={10}
                    mb={10}
                />
            )}
            <form onSubmit={handleSubmit}>
                <Stack>
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
                <Button type='submit' color='violet' radius='sm' fullWidth loading={loginResult.isLoading} mt={20}>
                    Login
                </Button>
            </form>
        </>
    );
}
