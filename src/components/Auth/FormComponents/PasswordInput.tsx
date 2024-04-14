import React from 'react';
import { PasswordInput as PasswordInputComponent } from '@mantine/core';

interface PasswordInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error: string | null;
}

export const PasswordInput: React.FC<PasswordInputProps> = ({ value, onChange, error }) => {
  return (
    <PasswordInputComponent
      required
      label='Password'
      placeholder='Your password'
      value={value}
      onChange={onChange}
      error={error && 'Password should include at least 6 characters'}
      radius='md'
    />
  );
}