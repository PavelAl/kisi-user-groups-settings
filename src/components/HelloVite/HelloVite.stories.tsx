import { Meta, Story } from '@storybook/react';
import React from 'react';

import { HelloVite } from './HelloVite';

export default {
  title: 'Inputs/Select',
} as Meta;

export const Default: Story = () => {
  return <HelloVite />;
};

Default.storyName = 'Select';
