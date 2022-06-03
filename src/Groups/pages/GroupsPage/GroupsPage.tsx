import React, { useEffect } from 'react';

import { kisiClient } from '~/Login';

// import { useGroupsPageStyles } from './GroupsPage.styles';
import { GroupsPageProps } from './GroupsPage.types';

export const GroupsPage: React.FC<GroupsPageProps> = props => {
  const {} = props;
  // const classes = useGroupsPageStyles();

  useEffect(() => {
    kisiClient.get('groups').then(console.log);
  });

  return <div></div>;
};
