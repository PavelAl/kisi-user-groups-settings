import InboxIcon from '@mui/icons-material/MoveToInbox';
import { Switch } from '@mui/material';
import { useState } from 'react';

import { ListOption } from '../List.types';

const SecondaryElement = () => {
  const [checked, setChecked] = useState(false);
  const handleToggle = () => setChecked(prevState => !prevState);

  return <Switch edge="end" checked={checked} onChange={handleToggle} />;
};

export function configOption(option: ListOption, withIcon: boolean, withSecondaryElement: boolean) {
  return {
    ...option,
    icon: withIcon ? InboxIcon : undefined,
    secondaryElement: withSecondaryElement ? <SecondaryElement /> : undefined
  };
}
