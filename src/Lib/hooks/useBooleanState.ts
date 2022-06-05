import { useCallback, useState } from 'react';

type UseBooleanStateReturnType = [boolean, () => void, () => void];

export function useBooleanState(initialState: boolean | (() => boolean) = false): UseBooleanStateReturnType {
  const [booleanState, setBooleanState] = useState(initialState);

  const setTrue = useCallback(() => setBooleanState(true), []);
  const setFalse = useCallback(() => setBooleanState(false), []);

  return [booleanState, setTrue, setFalse];
}
