import { Meta, Story } from '@storybook/react';
import React from 'react';

import { createTestOption } from '~/Lib/DataDisplay/List/storybook';
import { createArrayOfValues } from '~/storybook';

import { SearchAutocomplete } from './SearchAutocomplete';
import { AutocompleteOption } from './SearchAutocomplete.types';

export default {
  title: 'Inputs/SearchAutocomplete'
} as Meta;

const testDataListOptions: AutocompleteOption[] = createArrayOfValues(10, createTestOption).map((option, index) => ({
  ...option,
  id: index
}));

export const Default: Story = () => {
  return <SearchAutocomplete label={'Search movies'} options={testDataListOptions} />;
};

Default.storyName = 'SearchAutocomplete';
