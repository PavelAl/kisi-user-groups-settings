import React from 'react';
import { useParams } from 'react-router-dom';

import { useDoorLocksOptions } from '~/Groups/hooks';
import { useGroupDoorLocks } from '~/Groups/hooks/useGroupDoorLocks';
import { DataList } from '~/Lib/data-display/List/DataList/DataList';

import { GroupDetailsPageProps } from './GroupDetailsPage.types';

export const GroupDetailsPage: React.FC<GroupDetailsPageProps> = () => {
  const params = useParams();
  const groupId = params ? Number(params.id) : undefined;

  const { locks: doorLocks, handleLockUnassign } = useGroupDoorLocks(groupId);
  const { lockOptions } = useDoorLocksOptions({ doorLocks, onLockUnassign: handleLockUnassign });

  return <DataList options={lockOptions} />;
};
