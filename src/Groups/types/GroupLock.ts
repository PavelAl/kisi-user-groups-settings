import { DoorLockShortInfo, GroupShortInfo, PlaceShortInfo } from './InfoTypes';

export interface GroupLock {
  id: number; // The ID of the group lock

  created_at: string; // When the group lock was created
  updated_at: string; // When the group lock was updated

  group_id: number; // The group ID of the group lock
  group: GroupShortInfo;

  lock_id: number; // The lock ID of the group lock
  lock: DoorLockShortInfo;

  place_id: number; // The place ID of the group lock
  place: PlaceShortInfo;
}
