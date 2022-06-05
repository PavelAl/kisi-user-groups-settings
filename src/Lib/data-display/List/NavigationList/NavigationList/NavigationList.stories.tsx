import { Meta, Story } from '@storybook/react';
import React, { useMemo } from 'react';

import { createTestListOption, configOption } from '../../storybook';

import { createArrayOfValues } from '~/storybook';

import { NavigationList } from './NavigationList';

export default {
  title: 'Lib/Data Display/List/NavigationList'
} as Meta;

interface Args {
  withIcons: boolean;
  withSecondaryElement: boolean;
}

const testNavigationListOptions = createArrayOfValues(10, createTestListOption);

const NavigationListStory: React.FC<Args> = ({ withIcons, withSecondaryElement }) => {
  const options = useMemo(() => {
    return testNavigationListOptions.map(option => configOption(option, withIcons, withSecondaryElement));
  }, [withIcons, withSecondaryElement]);

  return <NavigationList options={options} onItemSelected={console.log} />;
};

export const Default: Story<Args> = args => {
  return <NavigationListStory {...args} />;
};

Default.args = {
  withIcons: false,
  withSecondaryElement: false
};
Default.storyName = 'NavigationList';
