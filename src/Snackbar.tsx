import React from 'react';
import Surface, { SurfaceProps } from './Surface';
import Text from './Text';
import { View } from 'react-native';
import { useTheme } from './base/ThemeContext';
import { useSurfaceScale } from './hooks/use-surface-scale';

export interface SnackbarProps extends SurfaceProps {
  message: string;

  action?: React.ReactElement;
}

const Snackbar: React.FC<SnackbarProps> = ({ message, action, style, ...rest }) => {
  const { palette } = useTheme();
  const surfaceScale = useSurfaceScale();
  return (
    <Surface
      elevation={6}
      category="medium"
      style={[
        {
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          paddingVertical: 8,
          paddingHorizontal: 16,
          backgroundColor: surfaceScale(0.87).hex(),
        },
        style,
      ]}
      {...rest}
    >
      <Text variant="body2" style={{ marginVertical: 8, color: palette.surface.main }}>
        {message}
      </Text>
      <View style={{ marginStart: 'auto', marginEnd: -8 }}>{action}</View>
    </Surface>
  );
};

export default Snackbar;
