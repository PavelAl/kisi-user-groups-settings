import { ListItem, ListItemButton } from '@mui/material';
import { forwardRef } from 'react';

import { ListItemContent } from '../../ListItemContent';

import { useNavigationListItemStyles } from './NavigationListItem.styles';
import { NavigationListItemProps } from './NavigationListItem.types';

export const NavigationListItem = forwardRef<HTMLLIElement, NavigationListItemProps>((props, ref) => {
  const { option, className, ...listItemProps } = props;
  const { secondaryElement } = option;

  const { classes } = useNavigationListItemStyles();

  return (
    <ListItem disablePadding {...listItemProps} ref={ref as any} secondaryAction={secondaryElement}>
      <ListItemButton className={classes.button}>
        <ListItemContent {...option} />
      </ListItemButton>
    </ListItem>
  );
});
