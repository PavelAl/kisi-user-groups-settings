export interface DoorLock {
  id: number; // The ID of the lock

  name: string; // The name of the lock
  description?: string; // The description of the lock

  created_at: string; // When the lock was created
  updated_at: string; // When the lock was updated

  latitude?: number; // The latitude of the lock.
  longitude?: number; // The longitude of the lock.

  configured: boolean; // Whether the lock has been configured.

  online?: boolean; // Whether the lock is online.

  unlocked: boolean; // Whether the lock is unlocked.
  unlocked_until?: string; // Until when the lock is unlocked.

  locked_down: boolean; // Whether the lock is locked down. When locked down the lock is locked for everyone.
  locked_down_since?: string; // Since when the lock has been locked down.

  scheduling_conditions: 'online_and_offline' | 'online'; // Whether the lock should remain unlocked when the gateway goes offline.

  open: boolean; // Whether the lock is open

  geofence_restriction_enabled?: boolean; // Whether the lock is geofence restricted. Geofence restriction enforces that users may only unlock when they are near the lock.
  geofence_restriction_radius: number; // The radius of the geofence restriction.
  reader_restriction_enabled?: boolean; // Whether reader restriction is enabled. Reader restriction enforces that users may only unlock when standing in front of the door.

  time_restriction_enabled?: boolean; // Whether the lock is time restricted. Time restriction enforces that users may only unlock at specific hours.
  time_restriction_time_zone?: string; // What time zone the time restriction applies to.

  groups_count: number; // The number of groups this lock is associated to.

  order_id?: number; // The position of the lock, determining the sort order of the locks.

  favorite: boolean; // Whether the lock is marked as a favorite by the user. Only shown if requested.

  place_id: number; // The place ID of the lock
  place: {
    id: number; // The ID of the place

    name: string; // The name of the place

    latitude?: number; // The latitude of the place

    longitude?: number; // The longitude of the place
  };

  floor_id?: number; // The floor ID of the lock
  integration_id?: number; // The integration ID of the lock. Only used by integration-based locks. The only integration that is currently supported is Smartalock. When this field is set, all unlocks will go through the integration.
}
