import { ListItem } from '@mui/material';
import { forwardRef } from 'react';

import { ListItemContent } from '../../ListItemContent';

import { DataListItemProps } from './DataListItem.types';

export const DataListItem = forwardRef<HTMLLIElement, DataListItemProps>(
    (props, ref) => {
        const { option, ...listItemProps } = props;
        const { secondaryElement } = option;

        return (
            <ListItem
                ref={ref}
                secondaryAction={secondaryElement}
                disablePadding={Boolean(secondaryElement)}
                {...listItemProps}
            >
                <ListItemContent {...option} />
            </ListItem>
        );
    }
);
