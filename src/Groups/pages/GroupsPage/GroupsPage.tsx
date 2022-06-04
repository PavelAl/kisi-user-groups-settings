import React, { useEffect, useState } from 'react';

import { useAppApi } from '~/api';
import { Group } from '~/Groups/Groups.types';

import { useGroupsPageStyles } from './GroupsPage.styles';
import { GroupsPageProps } from './GroupsPage.types';

export const useGroups = () => {
    const [groups, setGroups] = useState<Group[]>([]);
    const { groupsApi } = useAppApi();

    useEffect(() => {
        (async () => {
            const newGroups = await groupsApi.getGroups();

            setGroups(newGroups);
        })();
    }, []);

    return groups;
};

export const GroupsPage: React.FC<GroupsPageProps> = props => {
    const {} = props;

    const { classes } = useGroupsPageStyles();
    const groups = useGroups();

    return (
        <div className={classes.root}>
            {groups.map(group => {
                const keys = Object.keys(group);

                return (
                    <div key={group.id}>
                        {keys.map(key => {
                            const value = group[key];

                            return (
                                <div key={`${group.id}-${key}`}>{`${key}: ${
                                    value?.toString() ?? ''
                                }`}</div>
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
};
