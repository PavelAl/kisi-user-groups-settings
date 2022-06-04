import React, { useMemo } from 'react';

import { useGroups } from '~/Groups/hooks';
import { groupToListOption } from '~/Groups/mappers/groupToListOption';
import { NavigationList } from '~/Lib/data-display/List/NavigationList/NavigationList';

import { useGroupsPageStyles } from './GroupsPage.styles';
import { GroupsPageProps } from './GroupsPage.types';

export const GroupsPage: React.FC<GroupsPageProps> = () => {
    const groups = useGroups();

    const groupsOptions = useMemo(() => {
        return groups.map(groupToListOption);
    }, [groups]);

    const { classes } = useGroupsPageStyles();

    return (
        <div className={classes.root}>
            <NavigationList options={groupsOptions} />
        </div>
    );
};
