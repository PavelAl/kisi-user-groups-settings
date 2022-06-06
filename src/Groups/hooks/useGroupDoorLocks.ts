import { useEffect, useState } from 'react';

import { useApi } from '~/api';
import { DoorLock } from '~/Locks/types';

export const useGroupDoorLocks = (groupId?: number) => {
  const [locks, setLocks] = useState<DoorLock[]>([]);

  const { groupLocksApi, doorsLocksApi } = useApi();

  useEffect(() => {
    (async () => {
      if (!groupId) return;
      const groupLocks = await groupLocksApi.getGroupLocks(groupId);
      const locksIds = groupLocks.map(lock => lock.lock.id);
      const newLocks = await doorsLocksApi.getLocks(locksIds);

      setLocks(newLocks);
    })();
  }, [groupId]);

  return locks;
};
