import { List } from '@mui/material';
import React from 'react';

import { DataListItem } from '../DataListItem';

import { DataListProps } from './DataList.types';

export const DataList: React.FC<DataListProps> = props => {
  const { options = [] } = props;

  return (
    <List {...props}>
      {options.map(option => (
        <DataListItem key={option.key} option={option} />
      ))}
    </List>
  );
};
