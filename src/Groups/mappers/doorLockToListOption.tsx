import DeleteIcon from '@mui/icons-material/Delete';
import SensorDoorIcon from '@mui/icons-material/SensorDoor';
import { IconButton } from '@mui/material';

import { ListOption } from '~/Lib/data-display/List/List.types';
import { DoorLock } from '~/Locks/types';

export function doorLockToListOption(lock: DoorLock, onUnassign?: () => void): ListOption {
  return {
    key: lock.id.toString(),
    label: lock.name,
    description: lock.description ?? 'No group description',
    icon: SensorDoorIcon,
    secondaryElement: (
      <IconButton onClick={onUnassign}>
        <DeleteIcon />
      </IconButton>
    )
  };
}
