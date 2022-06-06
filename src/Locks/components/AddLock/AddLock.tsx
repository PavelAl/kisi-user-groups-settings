import { Button } from '@mui/material';
import React, { useCallback, useState } from 'react';

import { useBooleanState } from '~/Lib/hooks';
import { Option } from '~/Lib/types';
import { DoorsLocksSearchInput } from '~/Locks/components/DoorsLocksSearchInput';
import { DoorLock } from '~/Locks/types';

import { useAddLockStyles } from './AddLock.styles';

interface Props {
  excludedLocks?: DoorLock[];
  onAddLock?: (lockOption: Option) => void;
}

export const AddLock: React.FC<Props> = ({ excludedLocks, onAddLock }) => {
  const [showAddLock, openAddLock, hideAddLock] = useBooleanState();
  const [selectedOption, setSelectedOption] = useState<Option>();

  const { classes } = useAddLockStyles();

  const handleHideAddLock = useCallback(() => {
    setSelectedOption(undefined);
    hideAddLock();
  }, []);

  const handleAddLock = useCallback(() => {
    if (onAddLock && selectedOption) {
      setSelectedOption(undefined);
      onAddLock(selectedOption);
    }

    handleHideAddLock();
  }, [selectedOption, onAddLock]);

  return (
    <div className={classes.root}>
      {!showAddLock && (
        <Button variant="outlined" color="primary" onClick={openAddLock}>
          Add lock
        </Button>
      )}

      {showAddLock && (
        <>
          <DoorsLocksSearchInput excludedLocks={excludedLocks} onOptionSelected={setSelectedOption} />

          <Button variant="text" color="primary" disabled={!selectedOption} onClick={handleAddLock}>
            Add
          </Button>

          <Button variant="outlined" color="primary" onClick={handleHideAddLock}>
            Cancel
          </Button>
        </>
      )}
    </div>
  );
};
