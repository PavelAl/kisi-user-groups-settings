import SensorDoorIcon from '@mui/icons-material/SensorDoor';

import { ListOption } from '~/Lib/data-display/List/List.types';
import { DoorLock } from '~/Locks/types';

export function doorLockToListOption(lock: DoorLock): ListOption {
  return {
    key: lock.id.toString(),
    label: lock.name,
    description: lock.description ?? 'No group description',
    icon: SensorDoorIcon
  };
}
