import { useMemo } from 'react';
import chroma from 'chroma-js';
import { Elevation, useTheme } from '../base/ThemeContext';
import { useSurfaceScale } from './use-surface-scale';

const domain = [0, 1, 2, 3, 4, 6, 8, 12, 16, 24].map((n) => (n / 24) * 100);

export const useSurfaceColor = () => {
  const { colorScheme } = useTheme();
  const surfaceScale = useSurfaceScale();

  return useMemo(() => {
    if (colorScheme === 'light') return chroma.scale([surfaceScale(0)]);
    return chroma
      .scale([0, 0.05, 0.07, 0.08, 0.09, 0.11, 0.12, 0.14, 0.15, 0.1].map((c) => surfaceScale(c)))
      .domain(domain);
  }, [colorScheme, surfaceScale]);
};

export const useSurfaceColorValue = (elevation: Elevation) => {
  const surfaceScale = useSurfaceColor();

  return useMemo(() => surfaceScale(elevation).hex(), [surfaceScale, elevation]);
};
