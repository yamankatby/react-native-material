import { ThemeColor, useTheme } from './foundation';
import { useMemo } from 'react';

export const useThemeColor = (
  color?: ThemeColor | string,
): string | undefined => {
  const { colors } = useTheme();
  return useMemo(() => {
    switch (color) {
      case 'primary':
        return colors.primary.main;
      case 'secondary':
        return colors.secondary.main;
      case 'background':
        return colors.background.main;
      case 'surface':
        return colors.surface.main;
      case 'error':
        return colors.error.main;
      case 'onPrimary':
        return colors.primary.on;
      case 'onSecondary':
        return colors.secondary.on;
      case 'onBackground':
        return colors.background.on;
      case 'onSurface':
        return colors.surface.on;
      case 'onError':
        return colors.error.on;
    }
  }, [colors, color]);
};
