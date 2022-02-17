import { useMemo } from 'react';
import chroma from 'chroma-js';
import { PaletteColor, useTheme } from '../base/ThemeContext';

export type Color =
  | 'primary'
  | 'secondary'
  | 'background'
  | 'surface'
  | 'error'
  | 'on-primary'
  | 'on-secondary'
  | 'on-background'
  | 'on-surface'
  | 'on-error'
  | string;

export const usePaletteColor = (main: Color, on?: Color): PaletteColor => {
  const { palette } = useTheme();

  return useMemo(() => {
    let _main = main;
    if (palette[main]) _main = palette[main].main;
    else if (main.startsWith('on-') && palette[main.replace('on-', '')]) _main = palette[main.replace('on-', '')].on;

    let _on: string;
    if (on) {
      if (palette[on]) _on = palette[on].main;
      else if (on.startsWith('on-') && palette[on.replace('on-', '')]) _on = palette[on.replace('on-', '')].on;
      else _on = on;
    } else {
      _on = chroma.contrast(_main, 'white') > 4.5 ? '#FFFFFF' : '#000000';
    }

    return { main: _main, on: _on };
  }, [palette, main, on]);
};
