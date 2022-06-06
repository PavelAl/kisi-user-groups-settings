import React, { useCallback, useMemo, useState } from 'react';

import { SearchAutocomplete } from '~/Lib/Input/SearchAutocomplete';
import { AutocompleteOption } from '~/Lib/Input/SearchAutocomplete/SearchAutocomplete.types';
import { Option } from '~/Lib/types';
import { useDoorLockSearch } from '~/Locks/hooks';
import { DoorLock } from '~/Locks/types';

interface Props {
  excludedLocks?: DoorLock[];
  onOptionSelected?: (selectedOption: Option) => void;
}

export const DoorsLocksSearchInput = ({ excludedLocks = [], onOptionSelected }: Props) => {
  const [query, setQuery] = useState('');
  const [selectedOption, setSelectedOption] = useState<AutocompleteOption | null>(null);

  const { locksSearchResult } = useDoorLockSearch(query);

  const lockOptions: AutocompleteOption[] = useMemo(() => {
    const excludedLocksIds = excludedLocks.map(lock => lock.id);

    return locksSearchResult
      .filter(lock => excludedLocksIds.indexOf(lock.id) === -1)
      .map(lock => {
        return {
          id: lock.id,
          key: lock.id.toString(),
          label: lock.name
        };
      });
  }, [locksSearchResult, excludedLocks]);

  const handleQueryChange = useCallback((event: React.SyntheticEvent, newQuery: string) => {
    setQuery(newQuery);
  }, []);

  const handleSelect = useCallback(
    (
      event: React.SyntheticEvent,
      newSelectedOption?: string | AutocompleteOption | (string | AutocompleteOption)[] | null
    ) => {
      setSelectedOption(newSelectedOption as AutocompleteOption);

      if (onOptionSelected) onOptionSelected(newSelectedOption as AutocompleteOption);
    },
    []
  );

  return (
    <SearchAutocomplete
      label="Search locks"
      value={selectedOption}
      options={lockOptions}
      fullWidth
      onChange={handleSelect}
      onInputChange={handleQueryChange}
    />
  );
};
