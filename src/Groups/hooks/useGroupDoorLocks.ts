import { useCallback, useEffect, useState } from 'react';

import { GroupLock } from '../types';

import { useApi } from '~/api';
import { Option } from '~/Lib/types';
import { DoorLock } from '~/Locks/types';

export const useGroupDoorLocks = (groupId?: number) => {
  const [locks, setLocks] = useState<DoorLock[]>([]);
  const [groupLocks, setGroupLocks] = useState<GroupLock[]>([]);
  const { groupLocksApi, doorsLocksApi } = useApi();

  useEffect(() => {
    (async () => {
      if (!groupId) return;
      const newGroupLocks = await groupLocksApi.getGroupLocks(groupId);
      setGroupLocks(newGroupLocks);

      const locksIds = newGroupLocks.map(lock => lock.lock.id);
      const newLocks = await doorsLocksApi.getLocks(locksIds);

      setLocks(newLocks);
    })();
  }, [groupId]);

  const unassignLock = useCallback(
    async (unassignedLock?: DoorLock) => {
      if (!unassignedLock) return;

      const unassignedLockId = groupLocks.find(lock => lock.lock.id === unassignedLock.id)?.id;
      await groupLocksApi.unassignGroupLock(unassignedLockId);

      setLocks(prevLocks => prevLocks.filter(lock => lock.id !== unassignedLock.id));
    },
    [groupLocks]
  );

  const assignLock = useCallback(
    async (assignedLock?: Option) => {
      if (!groupId || !assignLock) return;

      const newLock = await groupLocksApi.assignGroupLock(groupId, Number(assignedLock?.key));
      const newGroupLocks = [...groupLocks, newLock];
      setGroupLocks(newGroupLocks);

      const locksIds = newGroupLocks.map(lock => lock.lock.id);
      const newLocks = await doorsLocksApi.getLocks(locksIds);
      setLocks(newLocks);
    },
    [groupLocks, groupId]
  );

  return { locks, assignLock, unassignLock };
};
