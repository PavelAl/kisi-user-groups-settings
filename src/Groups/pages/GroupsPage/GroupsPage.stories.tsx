import { Meta, Story } from '@storybook/react';
import React from 'react';

import { GroupsPage } from './GroupsPage';

export default {
  title: 'GroupsPage',
} as Meta;

interface Args {}

export const Default: Story<Args> = args => {
  return <GroupsPage {...args} />;
};

Default.args = {};
Default.storyName = 'GroupsPage';
