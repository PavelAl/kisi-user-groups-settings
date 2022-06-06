import { call, put, select } from 'redux-saga/effects';

import { GroupLock } from '../../../types';
import { groupDetailsActions } from '../slice';

import { defaultAppApi } from '~/api';
import { DoorLock } from '~/Locks/types';
import { RootState } from '~/redux';

import { assignLock, getGroupLocks, unassignLock } from './actions';

export function* getAndSetDoorLocks(groupLocks: GroupLock[]) {
  const locksIds = groupLocks.map(lock => lock.lock.id);
  const locks: DoorLock[] = yield call(defaultAppApi.doorsLocksApi.getLocks, locksIds);

  yield put(groupDetailsActions.setLocks(locks));
}

export function* getGroupLocksSaga(action: ReturnType<typeof getGroupLocks>) {
  const { groupId } = action;

  const groupLocks: GroupLock[] = yield call(defaultAppApi.groupLocksApi.getGroupLocks, groupId);

  yield getAndSetDoorLocks(groupLocks);
  yield put(groupDetailsActions.setGroupLocks(groupLocks));
}

export function* assignLockSaga(action: ReturnType<typeof assignLock>) {
  const { groupId, doorLockId: lockId } = action;

  const newLock: GroupLock = yield call(defaultAppApi.groupLocksApi.assignGroupLock, groupId, lockId);
  const groupLocks: GroupLock[] = yield select((state: RootState) => [...state.groupDetails.groupLocks, newLock]);

  yield getAndSetDoorLocks(groupLocks);
  yield put(groupDetailsActions.setGroupLocks(groupLocks));
}

export function* unassignLockSaga(action: ReturnType<typeof unassignLock>) {
  const { doorLockId } = action;

  const groupLocks: GroupLock[] = yield select((state: RootState) => state.groupDetails.groupLocks);
  const unassignedGroupLockId = groupLocks.find(lock => lock.lock.id === doorLockId)?.id;

  yield call(defaultAppApi.groupLocksApi.unassignGroupLock, unassignedGroupLockId);

  yield put(groupDetailsActions.setGroupLocks(groupLocks.filter(lock => lock.id !== unassignedGroupLockId)));

  const locks: DoorLock[] = yield select((state: RootState) =>
    state.groupDetails.locks.filter(lock => lock.id !== doorLockId)
  );

  yield put(groupDetailsActions.setLocks(locks));
}
