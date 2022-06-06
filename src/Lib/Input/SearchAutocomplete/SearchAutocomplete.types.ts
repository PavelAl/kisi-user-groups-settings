import { AutocompleteProps } from '@mui/material';

import { Option } from '~/Lib/types';

export interface AutocompleteOption extends Option {
  id: number;
}

export interface SearchAutocompleteProps
  extends Omit<AutocompleteProps<AutocompleteOption, any, any, any>, 'renderInput'> {
  label: string;
}
