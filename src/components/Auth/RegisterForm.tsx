import React from 'react';
import {
    Alert,
    Button,
    Stack,
    TextInput,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { useRegisterMutation } from '../../stores/services/auth';
import { EmailInput, PasswordInput } from './FormComponents';
import { IconInfoCircle } from '@tabler/icons-react';
import { AuthUser } from '@/types';

interface IFormProps {
    onSuccess: (userData: AuthUser) => void;
}

function getErrorText(error: any): string {
    return error.data.message;
}

export function RegisterForm({ onSuccess }: IFormProps) {
    const form = useForm({
        initialValues: { username: '', email: '', password: '' },
        validate: {
            email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
            password: (val) => (val.length <= 6 ? 'Password should include at least 6 characters' : null),
        },
    });

    const [register, registerResult] = useRegisterMutation();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const { username, email, password } = form.values;
        const result = await register({ username, email, password });

        if ('data' in result && result.data) {
            onSuccess(result.data as AuthUser);
        }
    };

    return (
        <>
            {registerResult.error && (
                <Alert
                    variant='outline'
                    color='red'
                    withCloseButton
                    onClose={() => registerResult.reset()}
                    title={getErrorText(registerResult.error)}
                    icon={<IconInfoCircle />}
                    mt={10}
                    mb={10}
                />
            )}
            <form onSubmit={handleSubmit}>
                <Stack>
                    <TextInput
                        required
                        label='Username'
                        placeholder='Your username'
                        value={form.values.username}
                        onChange={(event) => form.setFieldValue('username', event.currentTarget.value)}
                        radius='md'
                    />
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
                <Button type='submit' color='violet' radius='sm' fullWidth loading={registerResult.isLoading} mt={20}>
                    Register
                </Button>
            </form>
        </>
    );
}
