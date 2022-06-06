import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import { groupsReducer } from '~/Groups/redux/groupsReducer';

import { sagasWatchers } from './sagasWatchers';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    groups: groupsReducer
  },
  middleware: [sagaMiddleware]
});

sagasWatchers.forEach(sagaMiddleware.run);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<any>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
