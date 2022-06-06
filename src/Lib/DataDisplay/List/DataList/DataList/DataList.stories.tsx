import { Meta, Story } from '@storybook/react';
import React, { useMemo } from 'react';

import { createTestOption, configOption } from '../../storybook';

import { createArrayOfValues } from '~/storybook';

import { DataList } from './DataList';

export default {
  title: 'Lib/Data Display/List/DataList'
} as Meta;

interface Args {
  withIcons: boolean;
  withSecondaryElement: boolean;
}

const testDataListOptions = createArrayOfValues(10, createTestOption);

const DataListStory: React.FC<Args> = ({ withIcons, withSecondaryElement }) => {
  const options = useMemo(() => {
    return testDataListOptions.map(option => configOption(option, withIcons, withSecondaryElement));
  }, [withIcons, withSecondaryElement]);

  return <DataList options={options} />;
};

export const Default: Story<Args> = args => {
  return <DataListStory {...args} />;
};

Default.args = {
  withIcons: false,
  withSecondaryElement: false
};
Default.storyName = 'DataList';
