export interface PlaceShortInfo {
  id: number;
  name: string;
}

export interface GroupShortInfo {
  id: number; // The ID of the group
  name: string; // The name of the group
}

export interface DoorLockShortInfo {
  id: number; // The ID of the lock
  name: string; // The name of the lock
  description?: string; // The description of the lock
}
