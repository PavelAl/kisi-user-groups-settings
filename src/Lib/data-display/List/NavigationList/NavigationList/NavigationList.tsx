import { List } from '@mui/material';
import React from 'react';

import { NavigationListItem } from '../NavigationListItem';

import { NavigationListProps } from './NavigationList.types';
import { useListItemSelectedHandler } from './useListItemSelectedHandler';

export const NavigationList: React.FC<NavigationListProps> = props => {
    const { options = [], onItemSelected, ...listProps } = props;

    const { handleItemClicked } = useListItemSelectedHandler({
        options,
        onItemSelected
    });

    return (
        <List {...listProps} onClick={handleItemClicked}>
            {options.map(option => (
                <NavigationListItem
                    key={option.key}
                    data-option-key={option.key}
                    option={option}
                />
            ))}
        </List>
    );
};
