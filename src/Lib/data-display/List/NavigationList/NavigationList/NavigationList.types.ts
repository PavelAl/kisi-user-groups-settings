import { ListProps } from '@mui/material';

import { ListOption } from '../../List.types';

export interface NavigationListProps extends ListProps {
    options?: ListOption[];
    onItemSelected?: ItemSelectHandler;
}

export type ItemSelectHandler = (option?: ListOption) => void;
