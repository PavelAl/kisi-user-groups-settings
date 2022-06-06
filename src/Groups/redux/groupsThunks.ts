import { createAsyncThunk } from '@reduxjs/toolkit';

import { Group } from '../types';

import { defaultAppApi } from '~/api';

export const fetchGroups = createAsyncThunk<Group[]>('groups/fetchGroups', async () => {
  const groups = await defaultAppApi.groupsApi.getGroups();

  return groups;
});
