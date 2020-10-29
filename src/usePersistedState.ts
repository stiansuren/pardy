import React from "react";

export default function usePersistedState(key: string, defaultValue: boolean) {
  const [state, setState] = React.useState(() => {
    const persistedState = localStorage.getItem(key) === "true";
    return persistedState ? persistedState : defaultValue;
  });
  React.useEffect(() => {
    window.localStorage.setItem(key, state.toString());
  }, [state, key]);
  return [state, setState];
}
