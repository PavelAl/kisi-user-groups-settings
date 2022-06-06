import { ArrowBack as ArrowBackIcon } from '@mui/icons-material';
import { IconButton, Paper, Typography } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';

import { useDoorLocksOptions, useGroup, useGroupsNavigation } from '~/Groups/hooks';
import { useGroupDoorLocks } from '~/Groups/hooks/useGroupDoorLocks';
import { DataList } from '~/Lib/DataDisplay/List/DataList/DataList';
import { Page, PageContent, PageHeader } from '~/Lib/Layouts';
import { AddLock } from '~/Locks/components/AddLock';

import { useGroupDetailsPageStyles } from './GroupDetailsPage.styles';
import { GroupDetailsPageProps } from './GroupDetailsPage.types';

export const GroupDetailsPage: React.FC<GroupDetailsPageProps> = () => {
  const params = useParams();
  const groupId = params ? Number(params.id) : undefined;

  const group = useGroup(groupId);
  const title = group ? `${group.name} doors` : '';

  const { locks: doorLocks, assignLock, unassignLock } = useGroupDoorLocks(groupId);
  const { lockOptions } = useDoorLocksOptions({ doorLocks, onLockUnassign: unassignLock });
  const { navigateToGroupsList } = useGroupsNavigation();

  const { classes } = useGroupDetailsPageStyles();

  return (
    <Page className={classes.page}>
      <PageHeader className={classes.header}>
        <IconButton onClick={navigateToGroupsList}>
          <ArrowBackIcon />
        </IconButton>

        <Typography variant="h5">{title}</Typography>
      </PageHeader>

      <PageContent className={classes.content}>
        <Paper className={classes.paper} elevation={8}>
          <AddLock excludedLocks={doorLocks} onAddLock={assignLock} />

          <DataList options={lockOptions} />
        </Paper>
      </PageContent>
    </Page>
  );
};
