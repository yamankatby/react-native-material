import { DependencyList, useMemo } from 'react';
import type { ImageStyle, TextStyle, ViewStyle } from 'react-native';
import type chroma from 'chroma-js';
import { SpacingFunc, useSpacingFunc } from 'react-native-flex-layout';
import { Theme, useTheme } from '../base/ThemeContext';
import { useWindowSizeClass, WindowSizeClass } from '../base/WindowSizeClassContext';
import { useWindowSize, WindowSize } from './use-window-size';
import { useSurfaceScale } from './use-surface-scale';
import { useSurfaceColor } from './use-surface-color';

type NamedStyles<T> = { [P in keyof T]: ViewStyle | TextStyle | ImageStyle };

export const useStyles = <T extends NamedStyles<T>>(
  factory: (
    utils: Theme & {
      surfaceScale: chroma.Scale<chroma.Color>;
      surfaceColor: chroma.Scale<chroma.Color>;
      windowSizeClass: WindowSizeClass;
      windowSize: WindowSize;
      spacing: SpacingFunc;
    }
  ) => T,
  deps?: DependencyList | undefined
): T => {
  const theme = useTheme();
  const surfaceScale = useSurfaceScale();
  const surfaceColor = useSurfaceColor();
  const windowSizeClass = useWindowSizeClass();
  const windowSize = useWindowSize();
  const spacing = useSpacingFunc();

  return useMemo(
    () => factory({ ...theme, surfaceScale, surfaceColor, windowSizeClass, windowSize, spacing }),
    [factory, theme, surfaceScale, surfaceColor, windowSizeClass, windowSize, spacing, deps]
  );
};
