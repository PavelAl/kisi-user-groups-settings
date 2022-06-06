import { takeLatest } from 'redux-saga/effects';

import { GroupLocksSagaAction } from './actions';
import { assignLockSaga, getGroupLocksSaga, unassignLockSaga } from './sagas';

function* getGroupLocksWatcher() {
  yield takeLatest(GroupLocksSagaAction.GET_GROUP_LOCKS, getGroupLocksSaga);
}

function* assignLockWatcher() {
  yield takeLatest(GroupLocksSagaAction.ASSIGN_LOCK, assignLockSaga);
}

function* unassignLockWatcher() {
  yield takeLatest(GroupLocksSagaAction.UNASSIGN_LOCK, unassignLockSaga);
}

export const groupLocksWatchers = [getGroupLocksWatcher, assignLockWatcher, unassignLockWatcher];
