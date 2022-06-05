import GroupIcon from '@mui/icons-material/Group';

import { Group } from '../Groups.types';

import { ListOption } from '~/Lib/data-display/List/List.types';

export function groupToListOption(group: Group): ListOption {
  return {
    key: group.id.toString(),
    label: group.name,
    description: group.description ?? 'No group description',
    icon: GroupIcon
  };
}
