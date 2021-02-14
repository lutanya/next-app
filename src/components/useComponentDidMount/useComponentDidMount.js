import { useEffect } from 'react';

const useComponentDidMount = (callback) => {
  useEffect(() => {
    callback();
  }, [callback]);
};

export { useComponentDidMount as default };
