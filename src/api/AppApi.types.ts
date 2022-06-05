import { GroupLocksApi } from '~/Groups/api/GroupLocksApi';
import { GroupsApi } from '~/Groups/api/GroupsApi/GroupsApi';
import { DoorLocksApi } from '~/Locks/api/DoorLocksApi/DoorLocksApi';

export interface AppApi {
  groupsApi: GroupsApi;
  groupLocksApi: GroupLocksApi;
  doorsLocksApi: DoorLocksApi;
}
