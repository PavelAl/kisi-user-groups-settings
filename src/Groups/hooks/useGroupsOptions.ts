import { useCallback, useMemo } from 'react';

import { Group } from '../Groups.types';
import { groupToListOption } from '../mappers/groupToListOption';

import { ListOption } from '~/Lib/data-display/List/List.types';

interface Args {
  groups: Group[];
  onGroupSelected: (group?: Group) => void;
}

export function useGroupsOptions({ groups, onGroupSelected }: Args) {
  const groupsOptions = useMemo(() => groups.map(groupToListOption), [groups]);

  const handleGroupSelect = useCallback(
    (groupOption?: ListOption) => {
      if (!groupOption) return;

      const selectedGroup = groups.find(group => group.id === Number(groupOption.key));
      onGroupSelected(selectedGroup);
    },
    [groups, onGroupSelected]
  );

  return { groupsOptions, handleGroupSelect };
}
