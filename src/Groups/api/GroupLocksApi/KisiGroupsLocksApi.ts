import { GroupLock } from '~/Groups/types';
import { KisiPagination } from '~/Kisi';
import { kisiClient } from '~/Login';

import { GroupLocksApi } from './GroupLocksApi';

export interface GetResponce<DataType> {
  data: DataType;
  pagination: KisiPagination;
}

export class KisiGroupLocksApi extends GroupLocksApi {
  getGroupLocks = async (groupId: number): Promise<GroupLock[]> => {
    const responce: GetResponce<GroupLock[]> = await kisiClient.get(`group_locks/?group_id=${groupId}`);

    return responce.data;
  };

  assignGroupLock = async (groupId: number, lockId: number) => {
    const postData = { group_lock: { group_id: groupId, lock_id: lockId } };

    const data: GroupLock = await kisiClient.post('group_locks', postData);

    return data;
  };

  unassignGroupLock = async (groupLockId?: number) => {
    await kisiClient.delete(`group_locks/${groupLockId}`);
  };
}
