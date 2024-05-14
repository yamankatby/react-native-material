import { useTheme } from '../base/ThemeContext';
import { useMemo } from 'react';
import chroma from 'chroma-js';
export const useSurfaceScale = () => {
  const {
    palette
  } = useTheme();
  return useMemo(() => chroma.scale([palette.surface.main, palette.surface.on]), [palette.surface]);
};
//# sourceMappingURL=use-surface-scale.js.map