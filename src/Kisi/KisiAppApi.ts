import { AppApi } from '../api/AppApi.types';

import { KisiGroupLocksApi } from '~/Groups/api/GroupLocksApi';
import { KisiGroupsApi } from '~/Groups/api/GroupsApi';
import { KisiDoorLocksApi } from '~/Locks/api/DoorLocksApi';

export const kisiAppApi: AppApi = {
  groupsApi: new KisiGroupsApi(),
  groupLocksApi: new KisiGroupLocksApi(),
  doorsLocksApi: new KisiDoorLocksApi()
};
