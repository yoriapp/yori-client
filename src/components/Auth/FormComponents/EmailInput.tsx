import React from 'react';
import { TextInput } from '@mantine/core';

interface EmailInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error: string | null;
}

export const EmailInput: React.FC<EmailInputProps> = ({ value, onChange, error }) => {
  return (
    <TextInput
      required
      label='Email'
      placeholder='hello@yori.dev'
      value={value}
      onChange={onChange}
      error={error && 'Invalid email'}
      radius='md'
    />
  );
}