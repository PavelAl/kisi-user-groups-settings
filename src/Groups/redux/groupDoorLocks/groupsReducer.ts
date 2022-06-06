import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Group } from '../../types';

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
  }
});

export const groupsActions = groupsSlice.actions;
export const groupsReducer = groupsSlice.reducer;
