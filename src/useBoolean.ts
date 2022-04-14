import { useMemo } from 'react';
import { useBoolean as useBooleanArray } from './array/index';
import type { UseBooleanActions } from './array/index';
import type { UseStateful } from './useStateful';

export type UseBoolean = UseStateful<boolean> & UseBooleanActions;

export function useBoolean(initial: boolean): UseBoolean {
  const [value, actions] = useBooleanArray(initial);

  return useMemo(
    () => ({
      value,
      ...actions,
    }),
    [actions, value],
  );
}

export default useBoolean;
