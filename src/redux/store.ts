import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import { groupsReducer } from '~/Groups/redux/groupsReducer';

export const store = configureStore({
  reducer: {
    groups: groupsReducer
  },
  middleware: [thunkMiddleware]
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<any>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
