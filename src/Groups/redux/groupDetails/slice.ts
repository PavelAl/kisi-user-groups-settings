import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { GroupLock } from '../../types';

import { DoorLock } from '~/Locks/types';

export interface GroupDetailsState {
  groupLocks: GroupLock[];
  locks: DoorLock[];
}

const initialState: GroupDetailsState = {
  groupLocks: [],
  locks: []
};

export const groupDetailsSlice = createSlice({
  name: 'groupDetails',
  initialState,
  reducers: {
    setGroupLocks: (state, action: PayloadAction<GroupLock[]>) => {
      state.groupLocks = action.payload;
    },
    setLocks: (state, action: PayloadAction<DoorLock[]>) => {
      state.locks = action.payload;
    }
  }
});

export const groupDetailsActions = groupDetailsSlice.actions;
export const groupDetailsReducer = groupDetailsSlice.reducer;
