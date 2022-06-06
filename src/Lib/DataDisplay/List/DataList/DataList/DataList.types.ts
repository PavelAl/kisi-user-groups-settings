import { ListProps } from '@mui/material';

import { ListOption } from '../../List.types';

export interface DataListProps extends ListProps {
  options?: ListOption[];
}
