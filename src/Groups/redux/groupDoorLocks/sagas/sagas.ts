import { call, put } from 'redux-saga/effects';

import { Group } from '../../../types';
import { groupsActions } from '../groupsReducer';

import { defaultAppApi } from '~/api';

export function* getGroups() {
  const groups: Group[] = yield call(defaultAppApi.groupsApi.getGroups);

  yield put(groupsActions.setGroups(groups));
}
