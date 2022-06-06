import { Paper, Typography } from '@mui/material';
import React from 'react';

import { useGroupsOptions } from '~/Groups/hooks';
import { NavigationList } from '~/Lib/DataDisplay/List/NavigationList/NavigationList';
import { Page, PageContent, PageHeader } from '~/Lib/Layouts';

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

  return (
    <Page className={classes.page}>
      <PageHeader className={classes.header}>
        <Typography variant="h5">User groups</Typography>
      </PageHeader>

      <PageContent>
        <Paper className={classes.content} elevation={8}>
          <NavigationList options={groupsOptions} onItemSelected={handleGroupSelect} />
        </Paper>
      </PageContent>
    </Page>
  );
};
