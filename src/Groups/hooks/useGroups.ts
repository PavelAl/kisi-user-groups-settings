import { useEffect, useState } from 'react';

import { Group } from '../types';

import { useAppApi } from '~/api';

export const useGroups = () => {
  const [groups, setGroups] = useState<Group[]>([]);

  const { groupsApi } = useAppApi();

  useEffect(() => {
    (async () => {
      const newGroups = await groupsApi.getGroups();

      setGroups(newGroups);
    })();
  }, []);

  return groups;
};
