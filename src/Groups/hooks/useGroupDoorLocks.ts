import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { GroupDetailsAsyncAction } from '../redux';

import { Option } from '~/Lib/types';
import { DoorLock } from '~/Locks/types';
import { RootState } from '~/redux';

export const useGroupDoorLocks = (groupId?: number) => {
  const locks = useSelector((state: RootState) => state.groupDetails.locks);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!groupId) return;
    dispatch(GroupDetailsAsyncAction.getGroupLocks(groupId));
  }, [groupId]);

  const assignLock = useCallback(
    (assignedLock?: Option) => {
      if (!groupId || !assignLock) return;
      const lockId = Number(assignedLock?.key);
      if (!lockId || isNaN(lockId)) return;

      dispatch(GroupDetailsAsyncAction.assignLock(groupId, lockId));
    },
    [groupId]
  );

  const unassignLock = useCallback((unassignedLock?: DoorLock) => {
    if (!unassignedLock) return;
    dispatch(GroupDetailsAsyncAction.unassignLock(unassignedLock.id));
  }, []);

  return { locks, assignLock, unassignLock };
};
