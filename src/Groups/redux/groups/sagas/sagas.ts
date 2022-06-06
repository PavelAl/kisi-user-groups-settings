import { call, put } from 'redux-saga/effects';

import { groupsActions } from '../groupsReducer';

import { defaultAppApi } from '~/api';
import { Group } from '~/Groups/types';

export function* getGroups() {
  const groups: Group[] = yield call(defaultAppApi.groupsApi.getGroups);

  yield put(groupsActions.setGroups(groups));
}
