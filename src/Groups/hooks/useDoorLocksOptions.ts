import { useCallback, useMemo } from 'react';

import { doorLockToListOption } from '../mappers';

import { ListOption } from '~/Lib/data-display/List/List.types';
import { DoorLock } from '~/Locks/types';

interface Args {
  doorLocks?: DoorLock[];
  onLockSelected?: (lock?: DoorLock) => void;
}

export function useDoorLocksOptions({ doorLocks = [], onLockSelected }: Args) {
  const lockOptions = useMemo(() => doorLocks.map(doorLockToListOption), [doorLocks]);

  const handleGroupSelect = useCallback(
    (lockOption?: ListOption) => {
      if (!lockOption) return;

      const selectedGroup = doorLocks.find(lock => lock.id === Number(lockOption.key));

      if (onLockSelected) onLockSelected(selectedGroup);
    },
    [doorLocks, onLockSelected]
  );

  return { lockOptions, handleGroupSelect };
}
