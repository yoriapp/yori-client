import React, { ChangeEvent } from 'react';
import { Checkbox } from '@mantine/core';

interface TermsCheckboxProps {
  checked: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const TermsCheckbox: React.FC<TermsCheckboxProps> = ({ checked, onChange }) => {
  return (
    <Checkbox
      label='I accept terms and conditions'
      checked={checked}
      onChange={onChange}
    />
  );
};
