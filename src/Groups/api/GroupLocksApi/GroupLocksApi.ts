import { GroupLock } from '~/Groups/types';

export abstract class GroupLocksApi {
  abstract getGroupLocks: (groupId: number) => Promise<GroupLock[]>;

  abstract unassignGroupLock: (lockId?: number) => Promise<void>;
}
