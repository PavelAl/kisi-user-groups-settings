import { ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';

import { ListOption } from '../List.types';

export const ListItemContent: React.FC<ListOption> = props => {
    const { label, description, icon: Icon } = props;

    return (
        <>
            {Icon ? (
                <ListItemIcon>
                    <Icon />
                </ListItemIcon>
            ) : null}

            <ListItemText primary={label} secondary={description} />
        </>
    );
};
