import { useMemo } from 'react';
import { useWindowSize, WindowSize } from './use-window-size';

export const useWindowSizeValue: WindowSize = (query) => {
  const windowSize = useWindowSize();

  return useMemo(() => windowSize(query), [windowSize, query]);
};
