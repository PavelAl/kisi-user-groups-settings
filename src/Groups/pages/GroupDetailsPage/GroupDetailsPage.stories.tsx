import { Meta, Story } from '@storybook/react';
import React from 'react';

import { GroupDetailsPage } from './GroupDetailsPage';

export default {
  title: 'GroupDetailsPage'
} as Meta;

interface Args {}

export const Default: Story<Args> = args => {
  return <GroupDetailsPage {...args} />;
};

Default.args = {};
Default.storyName = 'GroupDetailsPage';
