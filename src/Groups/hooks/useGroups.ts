import { useEffect } from 'react';

import { fetchGroups } from '../redux';

import { RootState, useAppDispatch, useAppSelector } from '~/redux/store';

export const useGroups = () => {
  const groups = useAppSelector((state: RootState) => state.groups.groups);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchGroups());
  }, []);

  return groups;
};
