import { useMemo } from 'react';
import { useSpacingFunc } from 'react-native-flex-layout';
import { useWindowSize } from 'react-native-window-size';
import { useTheme } from '../base/ThemeContext';
import { useSurfaceScale } from './use-surface-scale';
import { useSurfaceColor } from './use-surface-color';
export const useStyles = (factory, deps) => {
  const theme = useTheme();
  const surfaceScale = useSurfaceScale();
  const surfaceColor = useSurfaceColor();
  const windowSize = useWindowSize();
  const spacing = useSpacingFunc();
  return useMemo(() => factory({
    ...theme,
    surfaceScale,
    surfaceColor,
    windowSize,
    spacing
  }), [factory, theme, surfaceScale, surfaceColor, windowSize, spacing, deps]);
};
//# sourceMappingURL=use-styles.js.map