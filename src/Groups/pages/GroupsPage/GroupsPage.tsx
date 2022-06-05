import React from 'react';

import { useGroupsOptions } from '~/Groups/hooks';
import { NavigationList } from '~/Lib/data-display/List/NavigationList/NavigationList';

import { useGroupsPageStyles } from './GroupsPage.styles';
import { GroupsPageProps } from './GroupsPage.types';

export const GroupsPage: React.FC<GroupsPageProps> = props => {
  const { useGroups, useGroupSelected } = props;

  const groups = useGroups();
  const onGroupSelected = useGroupSelected();

  const { groupsOptions, handleGroupSelect } = useGroupsOptions({
    groups,
    onGroupSelected
  });

  const { classes } = useGroupsPageStyles();

  return <NavigationList options={groupsOptions} className={classes.root} onItemSelected={handleGroupSelect} />;
};
