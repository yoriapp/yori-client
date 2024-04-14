import React from 'react';
import { Group } from '@mantine/core';
import { TwitterButton } from './TwitterButton';

export function SocialButtons() {
  return (
    <Group grow mb='md' mt='md'>
      <TwitterButton radius='xl'>Twitter</TwitterButton>
    </Group>
  );
}