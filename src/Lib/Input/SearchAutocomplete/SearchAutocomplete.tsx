import SearchIcon from '@mui/icons-material/Search';
import { Autocomplete, TextField } from '@mui/material';
import React from 'react';

import { SearchAutocompleteProps } from './SearchAutocomplete.types';

export const SearchAutocomplete: React.FC<SearchAutocompleteProps> = props => {
  const { label, ...autocompleteProps } = props;

  return (
    <Autocomplete
      {...autocompleteProps}
      renderInput={params => (
        <TextField
          {...params}
          label={label}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                <SearchIcon />

                {params.InputProps.endAdornment}
              </>
            )
          }}
        />
      )}
      freeSolo
    />
  );
};
