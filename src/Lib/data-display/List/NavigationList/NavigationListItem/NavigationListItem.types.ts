import { ListItemButtonProps } from '@mui/material';

import { ListOption } from '../../List.types';

export interface NavigationListItemProps extends ListItemButtonProps {
    option: ListOption;
}
