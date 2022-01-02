import React, { useState, SetStateAction } from 'react';

export type UseBooleanActions = {
  setValue: React.Dispatch<SetStateAction<boolean>>;
  toggle: () => void;
  setTrue: () => void;
};

export type UseBoolean = [boolean, UseBooleanActions];

type UseBooleanFunction = (initial: boolean) => UseBoolean;

export const useBoolean: UseBooleanFunction = (initial) => {
  const [value, setValue] = useState(initial);

  const toggle = () => setValue((v) => !v);
  const setTrue = () => setValue(true);
  const setFalse = () => setValue(false);
  const actions = { setValue, toggle, setTrue, setFalse };

  return [value, actions];
};

export default useBoolean;
