import { ListItemProps } from '@mui/material';

import { ListOption } from '../../List.types';

export interface NavigationListItemProps extends ListItemProps {
    option: ListOption;
}
