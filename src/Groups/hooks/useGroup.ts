import { useEffect, useState } from 'react';

import { Group } from '../types';

import { useApi } from '~/api';

export const useGroup = (groupId?: number) => {
  const [group, setGroup] = useState<Group>();

  const { groupsApi } = useApi();

  useEffect(() => {
    (async () => {
      if (!groupId) return;

      const newGroup = await groupsApi.getGroup(groupId);

      setGroup(newGroup);
    })();
  }, [groupId]);

  return group;
};
