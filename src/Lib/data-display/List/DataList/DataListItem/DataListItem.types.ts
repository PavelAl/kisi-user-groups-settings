import { ListItemProps } from '@mui/material';

import { ListOption } from '../../List.types';

export interface DataListItemProps extends ListItemProps {
  option: ListOption;
}
