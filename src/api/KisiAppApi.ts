import { KisiGroupsApi } from '~/Groups/api/GroupsApi/KisiGroupsApi';

import { AppApi } from './AppApi.types';

export const kisiAppApi: AppApi = {
    groupsApi: new KisiGroupsApi()
};
