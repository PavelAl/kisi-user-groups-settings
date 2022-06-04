import { List } from '@mui/material';
import React from 'react';

import { NavigationListItem } from '../NavigationListItem';

import { NavigationListProps } from './NavigationList.types';

export const NavigationList: React.FC<NavigationListProps> = props => {
    const { options = [] } = props;

    return (
        <List {...props}>
            {options.map(option => (
                <NavigationListItem key={option.key} option={option} />
            ))}
        </List>
    );
};
