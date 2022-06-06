import { useEffect } from 'react';

import { getGroups } from '../redux';

import { RootState, useAppDispatch, useAppSelector } from '~/redux/store';

export const useGroups = () => {
  const groups = useAppSelector((state: RootState) => state.groups.groups);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getGroups());
  }, []);

  return groups;
};
