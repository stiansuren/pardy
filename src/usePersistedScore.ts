import React from "react";

export default function usePersistedScore(key: string, defaultValue: number) {
  const [state, setState] = React.useState(() => {
    const persistedState = localStorage.getItem(key);
    return persistedState ? parseInt(persistedState, 10) : defaultValue;
  });
  React.useEffect(() => {
    window.localStorage.setItem(key, state.toString());
  }, [state, key]);
  return [state, setState];
}
