import { useState, useEffect } from "react";

// key = "todos" or "language" etc.
function useLocalStorageState(key, defaultVal) {
  // make piece of state, based off of value in local storage (or default)
  const [state, setState] = useState(() => {
    let val;
    try {
      JSON.parse(window.localStorage.getItem(key) || String(defaultVal));
    } catch (e) {
      val = defaultVal;
    }
    return val;
  });
  // useEffect to update localstorage whenever this piece of state changes
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [state]);

  return [state, setState];
}

export default useLocalStorageState;
