import { useCallback } from 'react';

import { ListOption } from '../../List.types';

import { searchElementByTag } from '~/Lib/dom';

interface Args {
    options: ListOption[];
    onItemSelected?: (option?: ListOption | undefined) => void;
}

function getSelectedOption(targetItem: HTMLElement, options: ListOption[]) {
    const selectedOptionKey = targetItem.dataset.optionKey;
    const selectedOption = options.find(
        option => option.key === selectedOptionKey
    );

    return selectedOption;
}

export const useListItemSelectedHandler = ({
    options = [],
    onItemSelected
}: Args) => {
    const handleItemClicked: React.MouseEventHandler = useCallback(
        e => {
            if (!onItemSelected) return;

            const targetItem = searchElementByTag(
                e.target as HTMLElement,
                'li'
            );

            if (!targetItem) return;

            console.log(targetItem.dataset);
            const selectedOption = getSelectedOption(targetItem, options);

            onItemSelected(selectedOption);
        },
        [options, onItemSelected]
    );

    return { handleItemClicked };
};
