import { useEffect, useState } from 'react';

import { Group } from '../types';

import { useApi } from '~/api';

export const useGroups = () => {
  const [groups, setGroups] = useState<Group[]>([]);

  const { groupsApi } = useApi();

  useEffect(() => {
    console.log('calcGroups');
    (async () => {
      const newGroups = await groupsApi.getGroups();

      setGroups(newGroups);
    })();
  }, []);

  return groups;
};
