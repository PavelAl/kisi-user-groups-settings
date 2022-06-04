import { ListItem, ListItemButton } from '@mui/material';
import { forwardRef } from 'react';

import { ListItemContent } from '../../ListItemContent';

import { NavigationListItemProps } from './NavigationListItem.types';

export const NavigationListItem = forwardRef<
    HTMLLIElement,
    NavigationListItemProps
>((props, ref) => {
    const { option, ...listItemProps } = props;
    const { secondaryElement } = option;

    return (
        <ListItem
            ref={ref}
            secondaryAction={secondaryElement}
            disablePadding={Boolean(secondaryElement)}
        >
            <ListItemButton role={undefined} {...listItemProps}>
                <ListItemContent {...option} />
            </ListItemButton>
        </ListItem>
    );
});
