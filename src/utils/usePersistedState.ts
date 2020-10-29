import React from "react";

export default function usePersistedState<StateType>(
  key: string,
  defaultValue: StateType
) {
  const [state, setState] = React.useState(() => {
    return (
      (JSON.parse(localStorage.getItem(key) as string) as StateType) ||
      defaultValue
    );
  });
  React.useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);
  return [state, setState] as [
    StateType,
    React.Dispatch<React.SetStateAction<StateType>>
  ];
}
