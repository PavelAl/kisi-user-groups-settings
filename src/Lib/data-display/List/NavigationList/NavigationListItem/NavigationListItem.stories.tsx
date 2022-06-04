import { Meta, Story } from '@storybook/react';
import { useMemo } from 'react';

import { ListOption } from '../../List.types';
import { createTestListOption, configOption } from '../../storybook';

import { NavigationListItem } from './NavigationListItem';
export default {
    title: 'Lib/Data Display/List/NavigationList/NavigationListItem'
} as Meta;

interface Args {
    withIcon: boolean;
    withSecondaryElement: boolean;
}

const testOption: ListOption = createTestListOption(0);

const NavigationListItemStory = ({ withIcon, withSecondaryElement }: Args) => {
    const option = useMemo(
        () => configOption(testOption, withIcon, withSecondaryElement),
        [withIcon, withSecondaryElement]
    );

    return <NavigationListItem option={option} />;
};

export const Default: Story<Args> = args => {
    return <NavigationListItemStory {...args} />;
};

Default.args = { withIcon: false, withSecondaryElement: false };
Default.storyName = 'NavigationListItem';
