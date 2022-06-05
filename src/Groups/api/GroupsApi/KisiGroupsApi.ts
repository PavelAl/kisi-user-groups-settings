import { Group } from '~/Groups/types';
import { KisiPagination } from '~/Kisi';
import { kisiClient } from '~/Login';

import { GroupsApi } from './GroupsApi';

export interface GetResponce<DataType> {
  data: DataType;
  pagination: KisiPagination;
}

export class KisiGroupsApi extends GroupsApi {
  public getGroups = async (): Promise<Group[]> => {
    const responce: GetResponce<Group[]> = await kisiClient.get('groups');

    return responce.data;
  };
}
