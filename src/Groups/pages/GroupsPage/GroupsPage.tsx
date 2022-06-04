import React, { useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import { groupToListOption } from '~/Groups/mappers/groupToListOption';
import { ListOption } from '~/Lib/data-display/List/List.types';
import { NavigationList } from '~/Lib/data-display/List/NavigationList/NavigationList';
import { appUrls } from '~/services/urls';

import { useGroupsPageStyles } from './GroupsPage.styles';
import { GroupsPageProps } from './GroupsPage.types';

export const GroupsPage: React.FC<GroupsPageProps> = props => {
    const { useGroups } = props;

    const groups = useGroups();

    const groupsOptions = useMemo(
        () => groups.map(groupToListOption),
        [groups]
    );

    const navigate = useNavigate();

    const handleGroupSelect = useCallback((groupOption?: ListOption) => {
        navigate(`${appUrls.groups}/${groupOption?.key}`);
    }, []);

    const { classes } = useGroupsPageStyles();

    return (
        <div className={classes.root}>
            <NavigationList
                options={groupsOptions}
                onItemSelected={handleGroupSelect}
            />
        </div>
    );
};
