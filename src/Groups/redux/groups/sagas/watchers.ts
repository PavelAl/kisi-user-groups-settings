import { takeLatest } from 'redux-saga/effects';

import { GroupsSagaActions } from './actions';
import { getGroups } from './sagas';

function* getGroupsWatcher() {
  yield takeLatest(GroupsSagaActions.GET_GROUPS, getGroups);
}

export const groupsWatchers = [getGroupsWatcher];
