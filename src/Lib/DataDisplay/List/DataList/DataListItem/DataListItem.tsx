import { ListItem } from '@mui/material';
import classNames from 'classnames';
import { forwardRef } from 'react';

import { ListItemContent } from '../../ListItemContent';

import { useDataListItemStyles } from './DataListItem.styles';
import { DataListItemProps } from './DataListItem.types';

export const DataListItem = forwardRef<HTMLLIElement, DataListItemProps>((props, ref) => {
  const { option, className, ...listItemProps } = props;
  const { secondaryElement } = option;

  const { classes } = useDataListItemStyles();

  return (
    <ListItem disablePadding {...listItemProps} ref={ref} className={classNames(classes.root, className)}>
      <ListItemContent {...option} />

      {secondaryElement}
    </ListItem>
  );
});
