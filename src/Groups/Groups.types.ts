export interface Place {
    id: number;
    name: string;
}
export interface Group {
    id: number; //The ID of the group
    name: string; //The name of the group
    description?: string; //The description of the group

    created_at: string; // <date-time> When the group was created
    updated_at: string; // <date-time> When the group was updated

    geofence_restriction_enabled: boolean; // Whether geofence restriction is enabled
    geofence_restriction_radius: number;
    primary_device_restriction_enabled: boolean; // Whether primary device restriction is enabled
    reader_restriction_enabled: boolean; // Whether reader restriction is enabled
    time_restriction_enabled: boolean; // Whether time restriction is enabled

    login_enabled: boolean; // Whether app access is enabled

    members_count: number; // The number of members in the group
    locks_count: number; // The number of locks in the group
    elevator_stops_count: number; // The number of elevator stops in the group

    place_id?: number; // The place ID of the group
    place: Place;
}
