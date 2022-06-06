import { Paper, Typography } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';

import { useDoorLocksOptions, useGroup } from '~/Groups/hooks';
import { useGroupDoorLocks } from '~/Groups/hooks/useGroupDoorLocks';
import { DataList } from '~/Lib/DataDisplay/List/DataList/DataList';
import { Page, PageContent, PageHeader } from '~/Lib/Layouts';

import { useGroupDetailsPageStyles } from './GroupDetailsPage.styles';
import { GroupDetailsPageProps } from './GroupDetailsPage.types';

export const GroupDetailsPage: React.FC<GroupDetailsPageProps> = () => {
  const params = useParams();
  const groupId = params ? Number(params.id) : undefined;

  const group = useGroup(groupId);
  const title = group ? `${group.name} doors` : '';

  const { locks: doorLocks, handleLockUnassign } = useGroupDoorLocks(groupId);
  const { lockOptions } = useDoorLocksOptions({ doorLocks, onLockUnassign: handleLockUnassign });

  const { classes } = useGroupDetailsPageStyles();

  return (
    <Page className={classes.page}>
      <PageHeader className={classes.header}>
        <Typography variant="h5">{title}</Typography>
      </PageHeader>

      <PageContent>
        <Paper className={classes.content} elevation={8}>
          <DataList options={lockOptions} />
        </Paper>
      </PageContent>
    </Page>
  );
};
