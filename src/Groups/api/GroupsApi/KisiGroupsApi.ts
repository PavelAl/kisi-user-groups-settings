import { Group } from '~/Groups/types';
import { KisiPagination } from '~/Kisi';
import { kisiClient } from '~/Login';

import { GroupsApi } from './GroupsApi';

export interface GetResponce<DataType> {
  data: DataType;
  pagination: KisiPagination;
}

export class KisiGroupsApi extends GroupsApi {
  getGroups = async (): Promise<Group[]> => {
    const responce: GetResponce<Group[]> = await kisiClient.get('groups');

    return responce.data;
  };

  getGroup = async (groupId: number): Promise<Group | undefined> => {
    const responce: GetResponce<Group[]> = await kisiClient.get(`groups?ids=${groupId}`);

    return responce.data[0];
  };
}
