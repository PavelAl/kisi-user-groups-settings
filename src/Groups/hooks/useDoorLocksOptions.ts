import { useCallback, useMemo } from 'react';

import { doorLockToListOption } from '../mappers';

import { ListOption } from '~/Lib/DataDisplay/List/List.types';
import { DoorLock } from '~/Locks/types';

interface Args {
  doorLocks?: DoorLock[];
  onLockUnassign?: (lock?: DoorLock) => void;
}

export function useDoorLocksOptions({ doorLocks = [], onLockUnassign }: Args) {
  const lockOptions = useMemo(
    () =>
      doorLocks.map(lock => {
        const onUnassign = onLockUnassign ? () => onLockUnassign(lock) : undefined;
        return doorLockToListOption(lock, onUnassign);
      }),
    [doorLocks]
  );

  const handleLockUnassign = useCallback(
    (lockOption?: ListOption) => {
      if (!lockOption) return;

      const selectedGroup = doorLocks.find(lock => lock.id === Number(lockOption.key));

      if (onLockUnassign) onLockUnassign(selectedGroup);
    },
    [doorLocks, onLockUnassign]
  );

  return { lockOptions, handleLockUnassign };
}
