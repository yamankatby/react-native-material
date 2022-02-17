import { useCallback } from 'react';
import { useWindowSizeClass, WindowSizeClass } from '../base/WindowSizeClassContext';

export type WindowSizeQuery<T> = Partial<Record<WindowSizeClass, T>> & { base: T };

const classes: WindowSizeClass[] = ['base', 'sm', 'md', 'lg', 'xl'];

export type WindowSize = <T>(query: WindowSizeQuery<T>) => T;

export const useWindowSize = (): WindowSize => {
  const windowSizeClass = useWindowSizeClass();

  return useCallback(
    (query) => {
      const keys = Object.keys(query) as WindowSizeClass[];

      let nearest = windowSizeClass;
      while (!keys.includes(nearest)) {
        nearest = classes[classes.indexOf(nearest) - 1];
      }
      return query[nearest]!;
    },
    [windowSizeClass]
  );
};
