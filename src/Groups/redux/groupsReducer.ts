import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Group } from '../types';

import { fetchGroups } from './groupsThunks';

export interface GroupsState {
  groups: Group[];
}

const initialState: GroupsState = {
  groups: []
};

export const groupsSlice = createSlice({
  name: 'groups',
  initialState,
  reducers: {
    setGroups: (state, action: PayloadAction<Group[]>) => {
      state.groups = action.payload;
    }
  },
  extraReducers: builder => {
    builder.addCase(fetchGroups.fulfilled, (state, action) => {
      state.groups = action.payload;
    });
  }
});

export const groupsActions = groupsSlice.actions;
export const groupsReducer = groupsSlice.reducer;
