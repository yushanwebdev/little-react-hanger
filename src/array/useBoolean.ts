import React, { useState, SetStateAction, useCallback, useMemo } from 'react';

export type UseBooleanActions = {
  setValue: React.Dispatch<SetStateAction<boolean>>;
  toggle: () => void;
  setTrue: () => void;
};

export type UseBoolean = [boolean, UseBooleanActions];

type UseBooleanFunction = (initial: boolean) => UseBoolean;

export const useBoolean: UseBooleanFunction = (initial) => {
  const [value, setValue] = useState(initial);

  const toggle = useCallback(() => setValue((v) => !v), []);
  const setTrue = useCallback(() => setValue(true), []);
  const setFalse = useCallback(() => setValue(false), []);
  const actions = useMemo(() => ({ setValue, toggle, setTrue, setFalse }), [
    setValue,
    toggle,
    setTrue,
    setFalse,
  ]);

  return [value, actions];
};

export default useBoolean;
