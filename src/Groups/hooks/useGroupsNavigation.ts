import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { Group } from '../types';

import { appUrls } from '~/services/urls';

export const useGroupsNavigation = () => {
  const navigate = useNavigate();

  const navigateToGroup = useCallback((group?: Group) => {
    navigate(`../${appUrls.groups}/${group?.id}`);
  }, []);

  return navigateToGroup;
};
