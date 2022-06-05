import { Group } from '~/Groups/Groups.types';
import { kisiClient } from '~/Login';
import { KisiPagination } from '~/Login/Kisi/Kisi.types';

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
