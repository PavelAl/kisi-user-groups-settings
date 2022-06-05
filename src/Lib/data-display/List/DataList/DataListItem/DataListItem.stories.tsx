import { Meta, Story } from '@storybook/react';
import { useMemo } from 'react';

import { ListOption } from '../../List.types';
import { createTestListOption, configOption } from '../../storybook';

import { DataListItem } from './DataListItem';
export default {
  title: 'Lib/Data Display/List/DataList/DataListItem'
} as Meta;

interface Args {
  withIcon: boolean;
  withSecondaryElement: boolean;
}

const testOption: ListOption = createTestListOption(0);

const DataListItemStory = ({ withIcon, withSecondaryElement }: Args) => {
  const option = useMemo(
    () => configOption(testOption, withIcon, withSecondaryElement),
    [withIcon, withSecondaryElement]
  );

  return <DataListItem option={option} />;
};

export const Default: Story<Args> = args => {
  return <DataListItemStory {...args} />;
};

Default.args = { withIcon: false, withSecondaryElement: false };
Default.storyName = 'DataListItem';
