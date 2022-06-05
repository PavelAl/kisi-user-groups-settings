import { DoorLock } from '../../types/DoorLock';

import { KisiPagination } from '~/Kisi';
import { kisiClient } from '~/Login';

import { DoorLocksApi } from './DoorLocksApi';

export interface GetResponce<DataType> {
  data: DataType;
  pagination: KisiPagination;
}

export class KisiDoorLocksApi extends DoorLocksApi {
  getLocks = async (locksIds: number[]): Promise<DoorLock[]> => {
    const responce: GetResponce<DoorLock[]> = await kisiClient.get(`locks/?ids=${locksIds.join(',')}`);

    return responce.data;
  };
}
