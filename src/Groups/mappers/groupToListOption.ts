import GroupIcon from '@mui/icons-material/Group';

import { Group } from '../types';

import { ListOption } from '~/Lib/DataDisplay/List/List.types';

export function groupToListOption(group: Group): ListOption {
  return {
    key: group.id.toString(),
    label: group.name,
    description: group.description ?? 'No group description',
    icon: GroupIcon
  };
}
