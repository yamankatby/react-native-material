import React from 'react';
import { StyleSheet, View } from 'react-native';
import Text from './Text';
import { useTheme } from './base/ThemeContext';

export interface DialogHeaderProps {
  title: string | React.ReactNode | ((props: { color: string }) => React.ReactNode | null) | null;
}

const DialogHeader: React.FC<DialogHeaderProps> = ({ title }) => {
  const theme = useTheme();

  const titleElement =
    typeof title === 'string' ? (
      <Text variant="h6" style={[{ color: theme.palette.surface.on }]}>
        {title}
      </Text>
    ) : typeof title === 'function' ? (
      title({ color: theme.palette.surface.on })
    ) : (
      title
    );

  return <View style={[styles.container]}>{titleElement}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 64,
    paddingHorizontal: 24,
  },
});

export default DialogHeader;
