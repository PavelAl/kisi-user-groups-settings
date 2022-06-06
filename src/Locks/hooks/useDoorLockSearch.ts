import { useEffect, useState } from 'react';

import { DoorLock } from '../types';

import { useApi } from '~/api';

export const useDoorLockSearch = (query?: string) => {
  const [locksSearchResult, setLocksSearchResult] = useState<DoorLock[]>([]);
  const { doorsLocksApi } = useApi();

  useEffect(() => {
    (async () => {
      if (typeof query === 'undefined') return;

      const searchResult = await doorsLocksApi.searchLocks(query);

      setLocksSearchResult(searchResult);
    })();
  }, [query]);

  return { locksSearchResult };
};
