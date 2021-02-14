import { useCallback, useState } from 'react';

const useToggle = (initialState = false) => {
  const [flag, setFlag] = useState(initialState);
  const toggle = useCallback(() => setFlag(!flag), [flag]);
  return [flag, toggle];
};

export { useToggle as default };
