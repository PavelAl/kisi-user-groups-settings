import { DoorLock } from '../../types/DoorLock';

export abstract class DoorLocksApi {
  abstract getLocks: (locksIds: number[]) => Promise<DoorLock[]>;

  abstract searchLocks: (query: string) => Promise<DoorLock[]>;
}
